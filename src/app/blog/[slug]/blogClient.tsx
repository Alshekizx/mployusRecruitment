'use client';

import Image from 'next/image';
import BlogCard from '@/app/components/blogComponent/blogCard';
import { blogData, BlogPost} from '../blogSampleData';

interface BlogClientProps {
  blog: BlogPost;
}

export default function BlogClient({ blog }: BlogClientProps) {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });


  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8 pb-20">
      {/* Hero Section */}
      <div
        className="bg-[var(--primary-color)] w-full flex flex-col items-center justify-center pt-20 px-4 h-80 text-white text-center card-texture-bg "
       >
        <h3 className="text-4xl font-bold mb-4">Recruitment Blogs</h3>
        <p className="max-w-[700px]" style={{ color: "white" }}>
          Insights, trends, and practical tips on recruitment and shift-based workforce management for HR teams, locum workers, and business leaders.
        </p>
      </div>

      {/* Blog Content */}
      <div className="containerDiv flex flex-col lg:flex-row gap-10 px-4 sm:px-8 lg:px-16">
        {/* Main Blog Section */}
        <div className="w-full lg:w-3/4 space-y-8">
          {/* Blog Header Card */}
          <div className="flex flex-col-reverse lg:flex-row bg-[var(--primary-color)] rounded-lg overflow-hidden p-4">
            <div className="p-6 flex-1 text-white">
              <h3 className="text-3xl font-bold mb-2">{blog.title}</h3>
              <p className="text-sm mb-4" style={{color:"white"}}>{blog.category}</p>
              <div className="flex items-center gap-3">
                <div className="h-10 bg-[var(--primary-100)] rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logos/logo-icon.png"
                    alt="MployUs Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-semibold" style={{color:"white"}}>MployUs Team</p>
                  <span className="text-sm">MployUs Team</span>
                </div>
              </div>
            </div>

            <div className="relative w-full lg:w-1/3 h-64 lg:h-auto overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-[var(--text-muted)]">{blog.summary}</p>

          <div className="space-y-8">
            {blog.subtopics.map((subtopic, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2 text-[var(--text-dark)]">{subtopic.heading}</h3>
                <p className="text-[var(--text-muted)]">{subtopic.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <aside className="w-full hidden lg:block lg:w-1/4 space-y-6
        ">
            
          <h4 className="text-lg font-semibold text-[var(--text-dark)]">Related Posts</h4>
          
          <div className="w-full  max-h-[150vh] overflow-auto scrollbar-hide 
        grid grid-cols-2 lg:grid-cols-1 gap-6
        ">
          {blogData
            .filter((post) => post.slug !== blog.slug)
            .map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                image={post.image}
                title={post.title}
                date={formatDate(post.datePosted)}
                readTime={post.readTime}
                description={post.summary}
              />
            ))}
            </div>
        </aside>
      </div>
    </div>
  );
}