'use client'

import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import dynamic from 'next/dynamic';
import ImageUpload from '@/components/ImageUpload';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import('./TiptapEditor'), { 
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

// Define Blog interface with structured data
interface Blog {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  faqs?: { question: string; answer: string }[];
  author: string;
}

const BlogsDashboard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: string; message: string } | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [formData, setFormData] = useState<Blog>({
    title: '',
    subtitle: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '',
    faqs: [],
    author: 'Ishan Srivastava'
  });
  const [showPublishedModal, setShowPublishedModal] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the current blogs to display based on the pagination
  const currentBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        // Redirect to login if not authenticated
        router.push('/login');
      } else {
        fetchBlogs();
        
        // Check if there's edit data in localStorage
        const editBlogData = localStorage.getItem('editBlogData');
        if (editBlogData) {
          try {
            const blogData = JSON.parse(editBlogData);
            setFormData({
              ...blogData,
              date: blogData.date || new Date().toISOString().split('T')[0]
            });
            setEditingBlogId(blogData.id);
            // Clear the localStorage data
            localStorage.removeItem('editBlogData');
          } catch (error) {
            console.error('Error parsing edit blog data:', error);
          }
        }
      }
    }
  }, [user, authLoading, router, submitStatus]);

  const fetchBlogs = async () => {
    try {
      const blogsCollection = collection(db, 'blogs');
      const blogsSnapshot = await getDocs(blogsCollection);
      const blogsList = blogsSnapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          title: docData.title || '',
          subtitle: docData.subtitle || '',
          description: docData.description || '',
          date: docData.date || '',
          image: docData.image || '',
          created: docData.created || Date.now(),
          metaTitle: docData.metaTitle || '',
          metaDescription: docData.metaDescription || '',
          slug: docData.slug || '',
          faqs: docData.faqs || [],
          author: docData.author || 'Anuj Anand Malik'
        };
      });
      setBlogs(blogsList);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

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

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      // If title field is changed, auto-generate slug (only if slug is empty or user hasn't modified it)
      if (name === 'title' && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return {
          ...prevState,
          [name]: value,
          slug: generateSlug(value)
        };
      }
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  // Handle Tiptap editor content changes
  const handleEditorChange = (content: string) => {
    setFormData(prevState => ({
      ...prevState,
      description: content
    }));
  };

  // Add FAQ to the blog
  const addFaq = () => {
    setFormData(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  // Remove FAQ from the blog
  const removeFaq = (index: number) => {
    setFormData(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }));
  };

  // Handle FAQ input changes
  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setFormData(prevState => {
      const updatedFaqs = [...(prevState.faqs || [])];
      updatedFaqs[index] = { 
        ...updatedFaqs[index], 
        [field]: value 
      };
      return {
        ...prevState,
        faqs: updatedFaqs
      };
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      created: Date.now(),
      metaTitle: '',
      metaDescription: '',
      slug: '',
      faqs: [],
      author: 'Anuj Anand Malik'
    });
    setEditingBlogId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Add timestamp and format the date
      const blogWithMetadata = {
        ...formData,
        created: editingBlogId ? formData.created : Date.now(),
        date: new Date(formData.date).toISOString().split('T')[0]
      };
      
      if (editingBlogId) {
        // Update existing blog
        const blogRef = doc(db, 'blogs', editingBlogId);
        await updateDoc(blogRef, blogWithMetadata);
        setSubmitStatus({ type: 'success', message: 'Blog updated successfully!' });
      } else {
        // Add new blog
        await addDoc(collection(db, 'blogs'), blogWithMetadata);
        setSubmitStatus({ type: 'success', message: 'Blog added successfully!' });
      }
      
      // Reset form and fetch updated blogs
      resetForm();
      
      const blogsCollection = collection(db, 'blogs');
      const blogsSnapshot = await getDocs(blogsCollection);
      const blogsList = blogsSnapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          title: docData.title || '',
          subtitle: docData.subtitle || '',
          description: docData.description || '',
          date: docData.date || '',
          image: docData.image || '',
          created: docData.created || Date.now(),
          metaTitle: docData.metaTitle || '',
          metaDescription: docData.metaDescription || '',
          slug: docData.slug || '',
          faqs: docData.faqs || [],
          author: docData.author || 'Anuj Anand Malik'
        };
      });
      setBlogs(blogsList);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: editingBlogId ? 'Failed to update blog. Please try again.' : 'Failed to add blog. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = async (blog: Blog) => {
    if (!blog.id) return;
    
    try {
      // Fetch FAQs for this blog from subcollection if they exist
      let faqs = blog.faqs || [];
      
      try {
        const faqsSnapshot = await getDocs(collection(db, 'blogs', blog.id, 'faqs'));
        if (!faqsSnapshot.empty) {
          faqs = faqsSnapshot.docs.map(doc => ({
            question: doc.data().question || '',
            answer: doc.data().answer || ''
          }));
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
      
      // Set form data with the blog and FAQs
      setFormData({
        ...blog,
        faqs
      });
      
      setEditingBlogId(blog.id);
      
      // Scroll to form
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Error setting up edit:", error);
    }
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        setIsSubmitting(true);
        await deleteDoc(doc(db, 'blogs', id));
        setSubmitStatus({ type: 'success', message: 'Blog deleted successfully!' });
        
        // Update blogs list
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error('Error deleting blog:', error);
        setSubmitStatus({ type: 'error', message: 'Failed to delete blog. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const cancelEdit = () => {
    resetForm();
    setSubmitStatus(null);
  };

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Blogs</h1>
          <a href="/dashboard/blogs" className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded-lg transition-colors">
            Back to Blogs
          </a>
        </div>
        
        <div className="gap-8">
          {/* Add/Edit Blog Form */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#165D3F] p-6 text-white">
              <h2 className="text-xl font-bold">{editingBlogId ? 'Edit Blog' : 'Add New Blog'}</h2>
              <p className="text-sm opacity-80">{editingBlogId ? 'Update existing blog post' : 'Create a new blog post'}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter blog title"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug *</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="url-friendly-blog-title"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Will be used in the URL: /blog/{formData.slug}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle/SEO Keywords *</label>
                <input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                  placeholder="Enter subtitle or SEO keywords"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle || ''}
                  onChange={handleChange}
                  placeholder="Enter meta title for SEO"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <input
                  type="text"
                  name="metaDescription"
                  value={formData.metaDescription || ''}
                  onChange={handleChange}
                  placeholder="Enter meta description for SEO"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Publication Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image *</label>
                <ImageUpload
                  currentImageUrl={formData.image}
                  onImageUpload={(url) => setFormData(prev => ({ ...prev, image: url }))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blog Content *</label>
                <div className="border border-gray-300 rounded-lg">
                  <TiptapEditor
                    content={formData.description}
                    onChange={handleEditorChange}
                    className="bg-white text-black min-h-[300px]"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">Use the toolbar to format your content.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">FAQs</label>
                <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
                  {/* Display existing FAQs */}
                  {(formData.faqs || []).map((faq, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium text-[#5A4C33]">FAQ #{index + 1}</h3>
                        <button
                          type="button"
                          onClick={() => removeFaq(index)}
                          className="px-2 py-1 bg-red-500 text-white text-xs rounded-md"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mb-2">
                        <label className="block text-xs font-medium text-[#5A4C33] mb-1">Question</label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                          className="text-black w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EABE4C] focus:border-transparent"
                          placeholder="Enter FAQ question"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#5A4C33] mb-1">Answer</label>
                        <textarea
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                          rows={3}
                          className="text-black w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EABE4C] focus:border-transparent"
                          placeholder="Enter FAQ answer"
                        />
                      </div>
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    onClick={addFaq}
                    className="mt-2 px-4 py-2 bg-[#D2A02A] text-white rounded-md text-sm font-medium flex items-center"
                  >
                    Add FAQ
                  </button>
                  <p className="mt-2 text-xs text-gray-500">Add frequently asked questions related to this blog post.</p>
                </div>
              </div>
              
              {submitStatus && (
                <div className={`p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="flex gap-2">
                {editingBlogId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="w-1/2 bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className={`${editingBlogId ? 'w-1/2' : 'w-full'} bg-[#EABE4C] text-black py-3 rounded-xl hover:bg-[#D4AB3A] font-medium transition-colors flex justify-center`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : editingBlogId ? 'Update Blog' : 'Publish Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDashboard;
