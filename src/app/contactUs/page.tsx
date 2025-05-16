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
     <div className='bg-[var(--primary-color)] w-full flex flex-col items-center justify-center pt-20 px-4 h-80'
     style={{
            backgroundColor: "#a1007e",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23cc4fa8' fill-opacity='0.21'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
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