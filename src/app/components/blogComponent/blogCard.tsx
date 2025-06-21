import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

type BlogCardProps = {
  slug: string;
  image: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  category: string;
  author: {
    name: string;
    position: string;
    profilePicture: string;
  };
};

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  image,
  title,
  date,
  description,
  author,
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block w-full h-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] hover:shadow-md transition-shadow"
    >
      {/* Thumbnail + Category Badge */}
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
        <div className="py-1 px-2 bg-[var(--card-bg)] absolute left-5 top-5 rounded-full text-sm font-medium">
          Blog
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)] gap-2">
        <div className="flex flex-col gap-2">
          {/* Date + Read Time */}
          <div className="flex items-center gap-2 text-[12px] text-[var(--text-muted)]">
            <CalendarDaysIcon className="w-4 h-4 text-[var(--text-muted)]" />
            <span >{date}</span>
            
          </div>

          {/* Title */}
          <p className="font-bold leading-snug text-[var(--text-dark)]" style={{ fontSize: '15px' }}>{title}</p>

          {/* Description */}
          <p className="text-[0.95rem] text-[var(--text-muted)] line-clamp-2" style={{ fontSize: '13px' }}>
            {description}
          </p>

          {/* Tag */}
          
        </div>

        {/* Author Info */}
        {author && (
          <div className="flex flex-col gap-3  " >
          <div className="flex items-center gap-3  ">
            <div className="h-10 w-10 bg-[var(--primary-100)] rounded-full overflow-hidden">
              <Image
                src={author.profilePicture}
                alt={author.name}
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className="font-semibold p1111 text-[var(--text-dark)]">{author.name}</p>
              <span className="text-sm p1111 text-[var(--text-muted)]">{author.position}</span>
            </div>
          </div>
          <span className="px-4 py-1 p1111 bg-[var(--primary-100)] text-[var(--primary-color)] rounded-full text-sm inline-block w-fit">
            Employment Contract
          </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;