import React from 'react';
import BlogCard from '../components/blogComponent/blogCard';
import { blogData } from './blogSampleData';

// Simulated data - replace with your NestJS API response


const BlogIndexPage = () => {

  const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-8 pb-20'>
      <div className='bg-[var(--primary-color)] card-texture-bg  w-full flex flex-col items-center justify-center pt-20 px-4 h-80'
      >

      <h3 className=" w-full text-center  text-white font-bold ">
        Recruitment Blogs
      </h3>
      <p className='w-full text-center max-w-[700px] ' style={{color:"white" }}>Insights, trends, and practical tips on recruitment and shift-based workforce management for HR teams, locum workers, and business leaders.</p>
      
      </div>
    <div className="containerDiv grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6" >
      
  {blogData.map((post) => (
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
</div>
  );
};

export default BlogIndexPage;