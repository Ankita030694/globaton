'use client';

import { useState, useEffect } from 'react';
import { db } from '@/firebase/firebase';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import Blog from './Blog';

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  image: string;
  author: string;
  date: string;
  created: number;
  excerpt: string;
  slug: string;
  metaDescription: string;
}

async function getLatestBlogPosts(): Promise<BlogPost[]> {
  const blogPostsCollection = collection(db, 'blogs');
  const q = query(blogPostsCollection, orderBy('created', 'desc'), limit(3));
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

const BlogWrapper = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getLatestBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#165D3F]"></div>
    </div>;
  }

  return <Blog blogPosts={blogPosts} />;
};

export default BlogWrapper; 