import { MetadataRoute } from 'next';
import { db } from '@/firebase/firebase';
import { collection, getDocs, query } from 'firebase/firestore';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.globaton.in';

    // Static pages (excluding admin and dashboard)
    const staticRoutes = [
        '',
        '/about',
        '/blog',
        '/form',
        '/packagedetail',
        '/payrefundpol',
        '/privacypolicy',
        '/services/accounting-&-bookkeeping',
        '/services/gst',
        '/services/gstfiling',
        '/services/gstnotice',
        '/services/llp',
        '/services/opc',
        '/services/partnership',
        '/services/pvltd',
        '/services/soleprop',
        '/services/trademark',
        '/termsandcondition'
    ];

    const staticPages = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`.replace(/&/g, '&amp;'),
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    try {
        const blogsCollection = collection(db, 'blogs');
        const blogsSnapshot = await getDocs(query(blogsCollection));

        const blogPages = blogsSnapshot.docs.map((doc) => {
            const blog = doc.data();
            let lastModified = new Date().toISOString();

            // Try to use the created timestamp if available
            if (blog.created) {
                try {
                    if (typeof blog.created === 'number') {
                        lastModified = new Date(blog.created).toISOString();
                    } else if (blog.created.toDate) { // If it's a Firestore Timestamp object
                        lastModified = blog.created.toDate().toISOString();
                    }
                } catch (e) {
                    console.error("Error parsing blog date:", e);
                }
            }

            return {
                url: `${baseUrl}/blog/${blog.slug}`.replace(/&/g, '&amp;'),
                lastModified,
                changeFrequency: 'weekly' as const,
                priority: 0.6,
            };
        });

        return [...staticPages, ...blogPages];
    } catch (error) {
        console.error('Error fetching blogs for sitemap:', error);
        return staticPages;
    }
}
