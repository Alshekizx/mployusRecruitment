'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  Bars3Icon,
  HomeIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = false;

  const UserIcon = () => (
    isLoggedIn ? (
      <div className="rounded-full bg-[var(--primary-color)] overflow-hidden w-10 h-10 flex items-center justify-center">
        <Image
          src="/images/default.jpg"
          alt="User Icon"
          width={100}
          height={100}
          className="object-cover w-full h-full"
        />
      </div>
    ) : (
      <Link
        href="/login"
        className="links transition"
      >
        Login / Signup
      </Link>
    )
  );

  const NavLinks = () => (
    <>
      <Link href="#" className="links transition">Home</Link>
      <Link href="#" className="links transition">For Job Seeker</Link>
      <Link href="#" className="links transition">For Employer</Link>
      <Link href="#" className="links transition">Blog</Link>
      <Link href="#" className="links transition">Contact Us</Link>
    </>
  );

  return (
    <header className="bg-[var(--card-bg)] text-[var(--text-dark)] border-b border-[var(--border-color)] fixed top-0 w-full z-50">
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Logo and Icons */}
        <div className="flex items-center space-x-1">
          <HomeIcon className="h-8 w-8 text-[var(--primary-color)]" />
          <ChevronRightIcon className="h-6 w-6 mr-4 text-[var(--text-muted)]" />
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/MployusRecruitmentLogo.png"
              alt="Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </Link>
        </div>

        {/* User Icon & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Show on all screens, but only outside nav on mobile */}
          <div className="lg:hidden text-[var(--text-muted)] text-lg">
            <UserIcon />
          </div>

          <button
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
        <div className="md:hidden bg-[var(--card-bg)] px-4 pb-4 space-y-2 text-[var(--text-muted)]">
          <NavLinks />
        </div>
      )}
    </header>
  );
}