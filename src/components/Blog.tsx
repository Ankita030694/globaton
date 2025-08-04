'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

interface BlogProps {
  blogPosts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="bg-[#CBA135] text-white px-3 py-1 rounded-sm text-sm">
              BLOGS
            </span>
            <h2 className="text-4xl font-semibold mt-4 text-black">Latest Blog posts</h2>
          </div>
          <Link 
            href="/blog"
            className="flex items-center gap-2 bg-[#1B5B45] text-white px-4 py-2 rounded-full hover:bg-opacity-90"
          >
            View all
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id}
              className="group bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-black">
                {post.title}
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </h3>
              <p className="text-gray-600 mb-4 text-black">{post.excerpt}</p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/logo3.jpg"
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-black">{post.author}</p>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
