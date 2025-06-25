'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
  Bars3Icon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/authContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

 const { isLoggedIn, logout } = useAuth();


  // Close dropdown on outside click
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    setTimeout(() => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsDropdownOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }, 0); // Delay to allow the button onClick to fire
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

  const UserIcon = () =>
    isLoggedIn ? (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="rounded-full bg-[var(--primary-color)] overflow-hidden w-10 h-10 flex items-center justify-center"
        >
          <Image
            src="/images/default.jpg"
            alt="User Icon"
            width={100}
            height={100}
            className=" w-full h-full"
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-[var(--header-color)] border rounded shadow-lg z-50 text-sm">
            <Link
              href="/views/myApplications"
              className="block px-4 py-2 cursor-pointer hover:text-[var(--primary-color)] text-[var(--text-dark)]"
            >
              My Applications
            </Link>
            <Link
              href="/views/myProfile"
              className="block px-4 py-2 cursor-pointer hover:text-[var(--primary-color)] text-[var(--text-dark)]"
            >
              My Profile
            </Link>

          <button onClick={logout} className="block px-4 py-2 cursor-pointer hover:text-[var(--primary-color)] text-[var(--text-dark)]">
            Logout
          </button>

          </div>
        )}
      </div>
    ) : (
      <Link href="/auth/login" className="links responsive-button transition cursor-pointer p111">
        Login / Signup
      </Link>
    );

  const NavLinks = () => {
    const pathname = usePathname();
      const isActive = (path: string) => pathname === path;

    const linkClass = (path: string) =>
    `  transition pb-1 ${isActive(path) ? 'text-[var(--primary-color)]  border-b-2 border-[var(--primary-color)] ' : ''}`;

    return (
      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/views/" className={linkClass('/')} ><p className='p111'>Home</p></Link>
        <Link href="/views/forJobSeeker" className={linkClass('/views/forJobSeeker')} ><p className='p111'>For Job Seeker</p></Link>
        <Link href="/views/employersTabs" className={linkClass('/views/employersTabs')} ><p className='p111'>For Employer</p></Link>
        <Link href="/views/blog" className={linkClass('/views/blog')} ><p className='p111'>Blog</p></Link>
        <Link href="/views/contactUs" className={linkClass('/views/contactUs')} ><p className='p111'>Contact Us</p></Link>
        <div className="lg:hidden md:hidden sm:flex text-[var(--text-muted)] text-lg">
          <UserIcon />
        </div>
      </div>
  );
}

  return (
     <header className="bg-[var(--header-color)] flex flex-col items-center text-[var(--text-dark)] border-b border-[var(--border-color)] fixed top-0 w-full z-50">
      <div className=' max-w-[1400px] w-full  '>
      <div className="py-5 px-4 lg:px-10 flex justify-between items-center">
        {/* Logo and Icons */}
        <div className="flex items-center space-x-1">
          <div className='hidden md:flex flex-row gap-2 items-center'>
          <Image
              src="/images/home2.png"
              alt="Logo"
              width={31}
              height={34}
              className="h-full"
            />
          <ChevronRightIcon className="h-10 w-10  text-[var(--text-muted)]" />
         </div>
          <Link href="/views/" className="flex items-center space-x-2">
            <Image
              src="/logos/MployusRecruitmentLogo.png"
              alt="Logo"
              width={186}
              height={56}
              className="object-contain"
            />
          </Link>
        </div>

        {/* User Icon & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          
          <button
            ref={mobileMenuButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--text-muted)]"
            aria-label="Toggle Menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-[var(--text-muted)] text-base">
          <NavLinks />
        </nav>

        {/* Desktop User Icon */}
        <div className="hidden md:flex items-center text-[var(--text-muted)] text-lg">
          <UserIcon />
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden flex flex-col bg-[var(--header-color)] px-4 pb-4 space-y-2 text-[var(--text-muted)]"
        >
          <NavLinks />
        </div>
      )}
      </div>
    </header>
   
  );
}