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

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Latest Blogs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block text-black hover:text-black"
            >
              <article 
                className="bg-white rounded-lg overflow-hidden shadow transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-[#1B6B50] border border-transparent cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-64 w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/70 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-black">
                      {post.subtitle}
                    </span>
                    <span className="bg-white/70 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-black">
                      {post.metaTitle}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-semibold mb-4 text-black hover:text-[#1B6B50] transition-colors">
                    {post.title}
                  </h2>

                  <div className="flex items-center space-x-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/author.png"
                        alt={post.author}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-black">{post.author}</span>
                    </div>
                    <span className="text-black">{post.date}</span>
                  </div>

                  <p className="text-black text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  
                  <span className="text-[#1B6B50] hover:text-[#144D3A] text-sm font-medium transition-colors mt-auto">
                    View Post
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
