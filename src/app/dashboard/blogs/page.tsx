'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, query, orderBy, limit, startAfter } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { db, storage } from '@/firebase/firebase';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

interface Blog {
  id: string;
  author: string;
  created: number;
  date: string;
  description: string;
  faqs: Array<{ question: string; answer: string }>;
  image: string;
  metaDescription: string;
  metaTitle: string;
  slug: string;
  subtitle: string;
  title: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [sortField, setSortField] = useState<string>('created');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(10);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        // Redirect to login if not authenticated
        router.push('/login');
      } else {
        fetchBlogs();
      }
    }
  }, [user, authLoading, router, sortField, sortDirection]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const blogsCollection = collection(db, 'blogs');
      const blogsQuery = query(
        blogsCollection,
        orderBy(sortField, sortDirection)
      );
      const blogsSnapshot = await getDocs(blogsQuery);
      const blogsList = blogsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];
      
      setTotalBlogs(blogsList.length);
      setBlogs(blogsList);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const openEditModal = (blog: Blog) => {
    // Store blog data in localStorage for the addBlog page to access
    localStorage.setItem('editBlogData', JSON.stringify(blog));
    // Navigate to addBlog page
    router.push('/dashboard/blogs/addBlog');
  };

  const confirmDeleteBlog = (id: string) => {
    setConfirmDelete(id);
  };

  const cancelDelete = () => {
    setConfirmDelete(null);
  };

  const handleDelete = async (id: string) => {
    try {
      // Get the blog data first to access the image URL
      const blogToDelete = blogs.find(blog => blog.id === id);
      
      // Delete the blog document
      await deleteDoc(doc(db, 'blogs', id));

      // Delete image from storage if it exists and is a Firebase Storage URL
      if (blogToDelete?.image && blogToDelete.image.includes('firebasestorage.googleapis.com')) {
        try {
          const imageRef = ref(storage, blogToDelete.image);
          await deleteObject(imageRef);
        } catch (storageError) {
          console.warn('Failed to delete image from storage:', storageError);
          // Continue with blog deletion even if image deletion fails
        }
      }

      setBlogs(blogs.filter(blog => blog.id !== id));
      setConfirmDelete(null);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Format date for display
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Format date string to dd/mm/yyyy
  const formatDateString = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Return original if invalid date
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Get first few words of text
  const getPreview = (text: string, wordCount = 5): string => {
    if (!text) return '';
    
    // Remove HTML tags
    const plainText = text.replace(/<[^>]*>?/gm, '');
    const words = plainText.split(' ').slice(0, wordCount).join(' ');
    return words.length < plainText.length ? `${words}...` : words;
  };

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(blog => 
    blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculation should now use filteredBlogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#165D3F]"></div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!user) {
    return null;
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
        <Link
          href="/dashboard/blogs/addBlog"
          className="bg-[#165D3F] text-white px-4 py-2 rounded-md hover:bg-[#124E33] transition-colors"
        >
          Add New Blog
        </Link>
      </div>

      {/* Add search box before the table */}
      <div className="mb-4">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <div className="pl-3 pr-2 py-2 text-gray-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search blogs by title, author, or content..."
            className="px-2 py-2 w-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')} 
              className="px-3 py-2 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#165D3F]"></div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <h3 className="text-xl font-medium text-gray-600 mb-4">No blogs found</h3>
          <p className="text-gray-500 mb-6">Start creating great content for your website.</p>
          <Link
            href="/dashboard/blogs/addBlog"
            className="bg-[#165D3F] text-white px-4 py-2 rounded-md hover:bg-[#124E33] transition-colors"
          >
            Create Your First Blog
          </Link>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-gray-100">
                <tr>
                <th onClick={() => handleSort('date')} className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-200">
                    Date {sortField === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('title')} className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-200">
                    Image {sortField === 'title' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('title')} className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-200">
                    Title {sortField === 'title' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('author')} className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-200">
                    Author {sortField === 'author' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog.date ? formatDateString(blog.date) : formatDate(blog.created)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                        {blog.image ? (
                          <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/image.png'; // Use existing placeholder image
                              target.alt = 'Image not available';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                        <div className="text-sm text-gray-500">{blog.slug}</div>
                        </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {blog.author}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                      {getPreview(blog.description)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => openEditModal(blog)}
                        className="text-[#165D3F] hover:text-[#124E33] mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => confirmDeleteBlog(blog.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <nav className="inline-flex rounded-md shadow">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-2 border border-gray-300 text-sm font-medium ${
                      currentPage === index + 1
                        ? 'bg-[#165D3F] text-white'
                        : 'bg-white text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </>
      )}

      {/* Edit Modal */}
      {/* This block is removed as editing is now handled by navigation */}
      {/* {isModalOpen && editBlog && ( */}
      {/*   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> */}
      {/*     <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"> */}
      {/*       <div className="flex justify-between items-center mb-6"> */}
      {/*         <h2 className="text-2xl font-bold text-gray-900">Edit Blog</h2> */}
      {/*         <button  */}
      {/*           onClick={closeModal} */}
      {/*           className="text-gray-500 hover:text-gray-700" */}
      {/*         > */}
      {/*           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> */}
      {/*             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> */}
      {/*           </svg> */}
      {/*         </button> */}
      {/*       </div> */}
      {/*       <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
      {/*         <div> */}
      {/*           <label className="block text-sm font-medium text-gray-700 mb-1">Title</label> */}
      {/*           <input */}
      {/*             type="text" */}
      {/*             value={editBlog.title} */}
      {/*             onChange={(e) => setEditBlog({...editBlog, title: e.target.value})} */}
      {/*             className="w-full p-2 border border-gray-300 rounded-md text-black" */}
      {/*           /> */}
      {/*         </div> */}
      {/*         <div> */}
      {/*           <label className="block text-sm font-medium text-gray-700 mb-1">Author</label> */}
      {/*           <input */}
      {/*             type="text" */}
      {/*             value={editBlog.author} */}
      {/*             onChange={(e) => setEditBlog({...editBlog, author: e.target.value})} */}
      {/*             className="w-full p-2 border border-gray-300 rounded-md text-black" */}
      {/*           /> */}
      {/*         </div> */}
      {/*         <div> */}
      {/*           <label className="block text-sm font-medium text-gray-700 mb-1">Date</label> */}
      {/*           <input */}
      {/*             type="date" */}
      {/*             value={editBlog.date} */}
      {/*             onChange={(e) => setEditBlog({...editBlog, date: e.target.value})} */}
      {/*             className="w-full p-2 border border-gray-300 rounded-md text-black" */}
      {/*           /> */}
      {/*         </div> */}
      {/*         <div> */}
      {/*           <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label> */}
      {/*           <input */}
      {/*             type="text" */}
      {/*             value={editBlog.slug} */}
      {/*             onChange={(e) => setEditBlog({...editBlog, slug: e.target.value})} */}
      {/*             className="w-full p-2 border border-gray-300 rounded-md text-black" */}
      {/*           /> */}
      {/*         </div> */}
      {/*         <div className="col-span-1 md:col-span-2"> */}
      {/*           <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label> */}
      {/*           <input */}
      {/*             type="text" */}
      {/*             value={editBlog.metaTitle} */}
      {/*             onChange={(e) => setEditBlog({...editBlog, metaTitle: e.target.value})} */}
      {/*             className="w-full p-2 border border-gray-300 rounded-md text-black" */}
      {/*           /> */}
      {/*         </div> */}
      {/*         <div className="col-span-1 md:col-span-2"> */}
      {/*           <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label> */}
      {/*           <textarea */}
      {/*             value={editBlog.metaDescription} */}
      {/*             onChange={(e) => setEditBlog({...editBlog, metaDescription: e.target.value})} */}
      {/*             className="w-full p-2 border border-gray-300 rounded-md text-black" */}
      {/*             rows={2} */}
      {/*           ></textarea> */}
      {/*         </div> */}
      {/*         <div className="col-span-1 md:col-span-2"> */}
      {/*           <label className="block text-sm font-medium text-gray-700 mb-1">Description</label> */}
      {/*           <textarea */}
      {/*             value={editBlog.description} */}
      {/*             onChange={(e) => setEditBlog({...editBlog, description: e.target.value})} */}
      {/*             className="w-full p-2 border border-gray-300 rounded-md text-black" */}
      {/*             rows={8} */}
      {/*           ></textarea> */}
      {/*         </div> */}
      {/*         <div className="col-span-1 md:col-span-2"> */}
      {/*           <label className="block text-sm font-medium text-gray-700 mb-1">Image</label> */}
      {/*           <ImageUpload */}
      {/*             currentImageUrl={editBlog.image} */}
      {/*             onImageUpload={(url) => setEditBlog({...editBlog, image: url})} */}
      {/*             className="w-full" */}
      {/*           /> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*       <div className="mt-8 flex justify-end"> */}
      {/*         <button */}
      {/*           onClick={closeModal} */}
      {/*           className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 mr-2" */}
      {/*         > */}
      {/*           Cancel */}
      {/*         </button> */}
      {/*         <button */}
      {/*           onClick={handleSaveChanges} */}
      {/*           className="bg-[#165D3F] text-white px-4 py-2 rounded-md hover:bg-[#124E33]" */}
      {/*         > */}
      {/*           Save Changes */}
      {/*         </button> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* )} */}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Confirm Deletion</h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this blog? This action cannot be undone.
            </p>
            <div className="flex justify-end">
              <button
                onClick={cancelDelete}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
