'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { db } from '@/firebase/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

interface BlogPost {
  id: string
  title: string
  subtitle: string
  metaTitle: string
  image: string
  author: string
  date: string
  created: number
  excerpt: string
  slug: string
  metaDescription: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const blogPostsCollection = collection(db, 'blogs');
  const q = query(blogPostsCollection, orderBy('created', 'desc'));
  const blogSnapshot = await getDocs(q);
  
  return blogSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "Untitled",
      subtitle: data.subtitle || "Uncategorized",
      metaTitle: data.metaTitle || "General",
      image: data.image || "/newspaper.png",
      author: data.author || "Unknown Author",
      date: data.date || "No date",
      created: data.created || 0,
      excerpt: data.metaDescription || data.description?.substring(0, 150) || "No description available",
      slug: data.slug || doc.id,
      metaDescription: data.metaDescription || ""
    };
  });
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow max-w-7xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16 text-black">Latest Blogs</h1>
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1B6B50]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {blogPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block text-black hover:text-black"
              >
                <article 
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:border-[#1B6B50] border border-transparent cursor-pointer flex flex-col h-full group"
                >
                  <div className="relative h-48 md:h-56 lg:h-64 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      unoptimized
                    />
                  </div>

                  <div className="p-4 md:p-6 lg:p-8 flex-grow flex flex-col">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 text-black group-hover:text-[#1B6B50] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 text-xs md:text-sm">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/author.png"
                          alt={post.author}
                          width={20}
                          height={20}
                          className="rounded-full md:w-6 md:h-6"
                        />
                        <span className="text-black font-medium">{post.author}</span>
                      </div>
                      <span className="text-gray-600">{post.date}</span>
                    </div>

                    <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6 line-clamp-3 flex-grow leading-relaxed">{post.excerpt}</p>
                    
                    <span className="text-[#1B6B50] group-hover:text-[#144D3A] text-sm md:text-base font-semibold transition-colors mt-auto inline-flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
