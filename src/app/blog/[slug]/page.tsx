// src/app/blog/[slug]/page.tsx
import { blogData } from '../blogSampleData';
import Image from 'next/image';
import BlogCard from '@/app/components/blogComponent/blogCard';

// 🧠 Dynamic Route Support
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

interface BlogViewProps {
  params: {
    slug: string;
  };
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function BlogView({ params }: BlogViewProps) {
  const { slug } = params;
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return <div className="p-10 text-center">Blog post not found.</div>;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8 pb-20">
      {/* Hero Section */}
      <div
        className="bg-[var(--primary-color)] w-full flex flex-col items-center justify-center pt-20 px-4 h-80 text-white text-center"
        style={{
          backgroundColor: "#a1007e",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23cc4fa8' fill-opacity='0.21'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
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
            {/* Text Content */}
            <div className="p-6 flex-1 text-white">
              <h3 className="text-3xl font-bold mb-2">{blog.title}</h3>
              <p className="text-sm mb-4" style={{ color: "white" }}>{blog.category}</p>
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
                  <p className="font-semibold" style={{ color: "white" }}>MployUs Team</p>
                  <span className="text-sm" style={{ color: "white" }}>MployUs Team</span>
                </div>
              </div>
            </div>

            {/* Blog Image */}
            <div className="relative w-full lg:w-1/3 h-64 lg:h-auto overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Summary */}
          <p className="text-[var(--text-muted)]">{blog.summary}</p>

          {/* Subtopics */}
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
        <aside className="w-full lg:w-1/4 space-y-6 max-h-[150vh] overflow-auto">
          <h4 className="text-lg font-semibold text-[var(--text-dark)]">Related Posts</h4>
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
        </aside>
      </div>
    </div>
  );
}