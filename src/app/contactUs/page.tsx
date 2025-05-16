'use client';
import React from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/20/solid';
import { FaWhatsapp } from 'react-icons/fa6';

const ContactUs = () => {
  return (
    <section className=" w-full min-h-screen flex flex-col items-center justify-center gap-16 pb-20 ">
     <div className='bg-[var(--primary-color)] card-texture-bg  w-full flex flex-col items-center justify-center pt-20 px-4 h-80'
     >

      <h3 className=" w-full text-center  text-white font-bold ">
        Contact Us
      </h3>
      
      </div>

      
    <div className="max-w-6xl flex flex-col gap-10 w-full bg-[var(--primary-100)] rounded-xl  p-8 md:p-12 containerDiv ">
        
        <div>
            <p className=" font-semibold text-center  " style={{color:"var(--primary-color)" ,fontSize:"25px"}}>
            Contact Us
          </p>
          <p className="text-text-muted text-center ">
            Feel free to use the form or drop us an email. Phone calls also work too.
          </p>
          </div>

      {/* Main Card */}
      <div className=" grid md:grid-cols-2 gap-10 ">
        {/* Left Contact Info */}
        <div className="space-y-6 text-text">
          
          <div className="space-y-4 text-base">
            <div className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-primary" />
              <span>7 Station Hill, Clongriffin, Dublin. IRL</span>
            </div>

            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-primary" />
              <span>0818 900 300</span>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="h-5 w-5 text-primary" />
              <span>+353899614186</span>
            </div>

            <div className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5 text-primary" />
              <a href="mailto:info@mployushr.com" className="links">
                info@mployushr.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm mb-1 text-text">Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="bg-white w-full px-4 py-3 border border-color-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary "
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-text">Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="bg-white w-full px-4 py-3 border border-color-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-text">Message:</label>
            <textarea
              rows={5}
              placeholder="Type your message"
              className="bg-white w-full px-4 py-3 border border-color-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <div className="text-right">
            <span className="text-xs text-text-muted">0/1000</span>
          </div>

          <button type="submit" className="button w-fit">
            Send Now →
          </button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;