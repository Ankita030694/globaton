import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { db } from '@/firebase/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import TOC from '@/components/TOC'
import SidebarCTA from '@/components/SidebarCTA'
import RelatedPages from '@/components/RelatedPages'

export const dynamic = 'force-dynamic';

// Define the blog post interface
interface BlogPost {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  date: string;
  image: string;
  description: string;
  created: number;
  slug: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogsCollection = collection(db, 'blogs');
  const q = query(blogsCollection, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  return querySnapshot.docs[0].data() as BlogPost;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.subtitle,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.subtitle,
      images: [blog.image],
    },
  };
}

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: blog.title, href: `/blog/${slug}` },
  ];

  // Placeholder TOC items - in a real scenario, these would be parsed from blog.description
  const tocItems = [
    { id: 'article-header', label: 'Introduction' },
    { id: 'main-content', label: 'Article Details' },
    { id: 'faq-section', label: 'FAQs' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Highly Optimized Hero Section */}
      <header className="relative bg-gradient-to-br from-[#165D3F] via-[#1B6B50] to-[#165D3F] pt-24 pb-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#EABE4C] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Highly Optimized Title and Subtitle */}
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {blog.subtitle && (
              <p className="text-xl md:text-2xl text-emerald-50/90 mb-10 font-light max-w-3xl mx-auto">
                {blog.subtitle}
              </p>
            )}

            {/* CTA Button in Hero */}
            <div className="flex justify-center mt-8">
              <Link href="/form?service=consultation">
                <button className="bg-[#CBA135] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#B58E2F] transition-all shadow-2xl hover:scale-105">
                  Schedule a Free Call
                </button>
              </Link>
            </div>

            {/* Author and Date Meta */}
            <div className="flex items-center justify-center space-x-6 text-white/80 mt-12">
              {blog.author && (
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo3.jpg"
                    alt={blog.author}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white/20"
                  />
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">{blog.author}</p>
                    <p className="text-white/60 text-xs">Expert Contributor</p>
                  </div>
                </div>
              )}
              {blog.date && (
                <div className="flex items-center gap-2 text-sm font-medium">
                  <svg className="w-5 h-5 text-[#EABE4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{blog.date}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb detected by rich results - below the hero section */}
      <div className="border-b border-gray-100 bg-white">
        <div className="w-full px-4 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <main className="w-full px-4 lg:px-8 py-12 flex-grow">
        {/* 3 Column Layout combined occupy the full width */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Column: Table of Contents (20%) */}
          <div className="lg:w-1/5">
            <TOC items={tocItems} />
          </div>

          {/* Middle Column: Main Content (60%) */}
          <article id="main-content" className="lg:w-3/5 flex-grow scroll-mt-24">
            {blog.image && (
              <div className="relative w-full h-64 md:h-[450px] rounded-2xl overflow-hidden shadow-lg mb-10">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            )}

            <div id="article-header" className="prose prose-lg max-w-none text-gray-800 
                         prose-headings:text-[#165D3F] prose-headings:font-bold
                         prose-p:leading-relaxed prose-p:text-gray-700
                         prose-strong:text-[#165D3F]
                         prose-a:text-[#1B6B50] prose-a:font-semibold hover:prose-a:text-[#165D3F]
                         prose-img:rounded-2xl prose-img:shadow-md
                         prose-blockquote:border-[#EABE4C] prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-xl"
              dangerouslySetInnerHTML={{ __html: blog.description || '' }}
            />

            {/* FAQs Section within middle content */}
            {blog.faqs && blog.faqs.length > 0 && (
              <section id="faq-section" className="mt-16 pt-16 border-t border-gray-100 scroll-mt-24">
                <h2 className="text-3xl font-bold text-[#165D3F] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {blog.faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#1B6B50] mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Back to Blog */}
            <div className="mt-16 pt-10 border-t border-gray-100 flex items-center justify-between">
              <Link href="/blog" className="text-[#1B6B50] font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
              <div className="flex gap-4">
                {/* Social Share Placeholder */}
              </div>
            </div>
          </article>

          {/* Right Column: CTA and Related Pages (20%) */}
          <div className="lg:w-1/5 space-y-8">
            <div className="sticky top-24">
              {/* 1st CTA container */}
              <SidebarCTA />

              {/* below that related pages container */}
              <RelatedPages />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
