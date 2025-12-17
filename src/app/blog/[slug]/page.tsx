import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { db } from '@/firebase/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { notFound } from 'next/navigation'

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
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-[#165D3F] via-[#1B6B50] to-[#165D3F] py-16 md:py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#EABE4C] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#C4942D] rounded-full animate-spin"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center space-x-2 text-sm mb-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/60">→</span>
              <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                Blog
              </Link>
              <span className="text-white/60">→</span>
              <span className="text-[#EABE4C] font-medium">{blog.title}</span>
            </nav>
            
            {/* Blog Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            {/* Subtitle */}
            {blog.subtitle && (
              <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-3xl mx-auto">
                {blog.subtitle}
              </h2>
            )}
            
            {/* Author and Date */}
            <div className="flex items-center justify-center space-x-6 text-white/80">
              {blog.author && (
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src="/logo3.jpg"
                      alt={blog.author}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-white/20"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#EABE4C]/20 to-transparent"></div>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{blog.author}</p>
                    <p className="text-white/60 text-sm">Author</p>
                  </div>
                </div>
              )}
              {blog.date && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#EABE4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white font-medium">{blog.date}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 -mt-16 relative z-20 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image Card */}
          {blog.image && (
            <div className="relative mb-12 group">
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EABE4C] rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#1B6B50] rounded-full opacity-40"></div>
            </div>
          )}
          
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
            <div className="p-8 md:p-12">
              {/* Blog Content with Tiptap Editor Styles */}
              <div className="prose prose-lg max-w-none text-gray-800 
                           prose-headings:font-bold prose-headings:text-inherit
                           prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
                           prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-7
                           prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-6
                           prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                           prose-strong:font-semibold prose-strong:text-inherit
                           prose-em:text-gray-600 prose-em:italic
                           prose-a:underline prose-a:font-medium prose-a:text-inherit
                           prose-a:hover:text-[#165D3F] prose-a:transition-colors
                           prose-blockquote:border-l-4 prose-blockquote:border-[#EABE4C] 
                           prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                           prose-blockquote:text-gray-700 prose-blockquote:italic
                           prose-ul:text-gray-700 prose-ol:text-gray-700
                           prose-li:mb-2 prose-li:text-gray-700
                           prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                           prose-code:font-mono prose-code:text-sm prose-code:text-inherit
                           prose-pre:bg-gray-900 prose-pre:text-white prose-pre:rounded-lg
                           prose-table:border-collapse prose-table:w-full
                           prose-th:bg-[#1B6B50] prose-th:text-white prose-th:p-3 prose-th:font-semibold
                           prose-td:border prose-td:border-gray-200 prose-td:p-3
                           prose-img:rounded-lg prose-img:shadow-md prose-img:my-6"
                   dangerouslySetInnerHTML={{ __html: blog.description || '' }} 
              />
            </div>
          </div>
          
          {/* FAQs Section */}
          {blog.faqs && blog.faqs.length > 0 && (
            <div className="bg-gradient-to-br from-[#1B6B50]/5 via-white to-[#EABE4C]/5 rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
              <div className="bg-gradient-to-r from-[#1B6B50] to-[#165D3F] p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Frequently Asked Questions
                </h2>
                <div className="w-24 h-1 bg-[#EABE4C] mx-auto mt-4 rounded-full"></div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  {blog.faqs.map((faq, index) => (
                    <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#1B6B50]/30">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#1B6B50] to-[#165D3F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-[#1B6B50] mb-3 group-hover:text-[#165D3F] transition-colors">
                            {faq.question}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Back to Blogs Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1B6B50] mb-2">
                  Explore More Articles
                </h3>
                <p className="text-gray-600">
                  Discover more insights and expert advice on our blog
                </p>
              </div>
              <Link 
                href="/blog"
                className="group flex items-center gap-3 bg-gradient-to-r from-[#1B6B50] to-[#165D3F] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all blogs
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}