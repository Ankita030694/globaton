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

const BlogWrapper = async () => {
  const blogPosts = await getLatestBlogPosts();
  
  return <Blog blogPosts={blogPosts} />;
};

export default BlogWrapper; 