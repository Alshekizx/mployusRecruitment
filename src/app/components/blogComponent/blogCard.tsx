import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline'; // Import Heroicon

type BlogCardProps = {
  slug: string;
  image: string;
 
  title: string;
  date: string;
  readTime: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  image,
 
  title,
  date,
  description,
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block  w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] hover:shadow-md transition-shadow"
    >
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
        <div className='py-1 px-2 bg-[var(--card-bg)] absolute left-5 top-5 rounded-full'>Blog</div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        {/* Date with calendar icon */}
        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <CalendarDaysIcon className="w-4 h-4 text-[var(--text-muted)]" />
          {date}
        </div>

        {/* Title */}
        <p className="font-bold leading-snug" style={{ color: "var(--text-dark)" }}>
          {title}
        </p>

        {/* Summary */}
        <p className="text-[0.95rem] text-[var(--text-muted)] line-clamp-2">
          {description}
        </p>

        
      </div>
    </Link>
  );
};

export default BlogCard;