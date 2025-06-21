'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/20/solid';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import HeroSection  from '../components/heroSection';

const ContactUs = () => {
  const [message, setMessage] = useState('');
  const maxChars = 1000;

  return (
    <section className="w-full  pt-10 pb-24 overflow-hidden">

       <HeroSection
                   title="Contact Us"
                   description=""
                   breadcrumbs={[
                     { label: 'Home', href: '/' },
                     { label: 'Contact Us' },
                  
                   ]}
                 />
      {/* ---------- HERO HEADER ---------- */}
      <div className=" containerDiv  mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Text block */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Contact&nbsp;Us
          </h1>
          <p className="text-text-muted leading-relaxed mb-6">
            Feel free to reach out for any inquiries via our phone or email.
            <br className="hidden md:block" />
            We are here to help!
          </p>

          {/* Social icons (optional) */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="IconButton !p-2 rounded-full"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Linked-In"
              className="IconButton !p-2 rounded-full"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Hero illustration */}
        <div className="relative w-full max-w-sm lg:max-w-md justify-self-end">
          <Image
            src="/images/Questions.png" /* replace with your asset */
            alt="Illustration of devices showing messages"
            width={500}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* ---------- CONTACT CARDS ---------- */}
      <div className="containerDiv mx-auto mt-16 grid sm:grid-cols-3 gap-6" style={{minHeight:'20px'}}>
        {/* Phone */}
        <div className="bg-[var(--primary-100)] px-6 py-8 rounded-xl shadow-md text-center space-y-1">
          <PhoneIcon className="h-10 w-10 mx-auto text-[var(--primary-color)] mb-2" />
          <p className="font-medium">Phone</p>
          <p className="text-text-muted">0818&nbsp;900&nbsp;300</p>
        </div>

        {/* Email */}
        <div className="bg-[var(--primary-100)] rounded-xl shadow-md px-6 py-8 text-center space-y-1">
          <EnvelopeIcon className="h-10 w-10 mx-auto text-[var(--primary-color)] mb-2" />
          <p className="font-medium">Email</p>
          <a
            href="mailto:info@mployushr.com"
            className="links inline-block break-all"
          >
            info@mployushr.com
          </a>
        </div>

        {/* Location */}
        <div className="bg-[var(--primary-100)] rounded-xl shadow-md px-6 py-8 text-center space-y-1">
          <MapPinIcon className="h-10 w-10 mx-auto text-[var(--primary-color)] mb-2" />
          <p className="font-medium">Location</p>
          <p className="text-text-muted">7&nbsp;Station&nbsp;Hill, Clongriffin, Dublin</p>
        </div>
      </div>

      {/* ---------- FORM ---------- */}
      <div className="max-w-6xl flex flex-col items-center mx-auto mt-20 px-4">
        <h3 className="text-center mb-2 font-bold" >
          Get&nbsp;In&nbsp;<span className='text-[#B21589]'>Touch</span> 
        </h3>
        <p className="text-center text-text-muted max-w-[700px] mb-10">
          Have questions or want to make a request? We are here to help! Fill out the form below or email us directly.
        </p>

        <form className="space-y-6 w-full">
          <div className="grid md:grid-cols-1 gap-6">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                
                className="bg-[var(--secondary-100)] w-full border border-gray-600 rounded-md px-4 py-4 custom-ring-color ]"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
              
                className="bg-[var(--secondary-100)] w-full border border-gray-600 rounded-md px-4 py-4 custom-ring-color ]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Your&nbsp;Message</label>
            <textarea
              rows={6}
              value={message}
              maxLength={maxChars}
              onChange={(e) => setMessage(e.target.value)}
            
              className="bg-[var(--secondary-100)] w-full border border-gray-600 rounded-md px-4 py-4 custom-ring-color ] resize-none"
            />
            <div className="text-right text-xs text-text-muted mt-1">
              {message.length}/{maxChars}
            </div>
          </div>

          <button type="submit" className="button p1 bg_themed_colorw-full block"style={{ borderRadius:'5px' }}>
            Send&nbsp;Now &rarr;
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;