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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">{blog.title}</h1>
          
          {blog.subtitle && (
            <h2 className="text-xl text-gray-700 mb-6">{blog.subtitle}</h2>
          )}
          
          <div className="flex items-center space-x-4 mb-8 text-sm">
            {blog.author && (
              <div className="flex items-center gap-2">
                <Image
                  src="/logo3.jpg"
                  alt={blog.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-black font-bold">{blog.author}</span>
              </div>
            )}
            {blog.date && (
              <span className="text-black font-bold">{blog.date}</span>
            )}
          </div>
          
          {/* Featured Image */}
          {blog.image && (
            <div className="relative w-full h-96 mb-8">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                unoptimized
              />
            </div>
          )}
          
          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-black"
               dangerouslySetInnerHTML={{ __html: blog.description || '' }} />
          
          {/* FAQs Section */}
          {blog.faqs && blog.faqs.length > 0 && (
            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {blog.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Back to Blogs Link */}
          <div className="mt-12 border-t pt-6">
            <Link 
              href="/blog"
              className="text-[#1B6B50] hover:text-[#144D3A] font-medium transition-colors"
            >
              ← Back to all blogs
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}