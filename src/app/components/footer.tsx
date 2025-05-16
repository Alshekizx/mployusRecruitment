// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" containerDiv bg-[var(--primary-color)] text-white pt-12 pb-8 px-4"
    style={{
            backgroundColor: "#a1007e",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23cc4fa8' fill-opacity='0.21'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
    >

     <div className="flex lg:flex-row flex-col justify-between item-center gap-4 mb-10">
     <div className="w-60 h-20 relative">
    <Image
      src="/logos/WhiteMployusRecruitmentLogo2.png"
      alt="MployUs Logo"
      fill
      className="object-contain"
    />
  </div>
          
          <div className="">
            <p className="" style={{color:'white' }}>Subscribe to our new letters</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-lg px-5 py-3 w-full text-black bg-white"
              />
              <button className="bg-[var(--primary-400)] hover:bg-white hover:text-[var(--primary-color)] px-4 rounded-r-md transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      <div className=" grid md:grid-cols-5 sm:grid-cols-2 gap-8 border-b border-[var(--primary-300)] pb-8">
        {/* Logo + Subscription */}
       

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="footerLinks">Home</Link></li>
            <li><Link href="/forJobSeeker" className="footerLinks">For Job Seeker</Link></li>
            <li><Link href="#" className="footerLinks">Upload CV</Link></li>
            <li><Link href="/employersTabs" className="footerLinks">For Employer</Link></li>
            <li><Link href="/blog" className="footerLinks">Blog</Link></li>
            <li><Link href="/contactUs" className="footerLinks">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>MployUs HR Advice</li>
            <li>Recruitment Support</li>
            <li>Locums Provision</li>
            <li>HR Software & Mobile App</li>
            <li>Locum Software & Mobile App</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm">
            <li>MployUs HR Software</li>
            <li>Recruitment Software</li>
            <li>MployUs Locums</li>
            <li>HR Software & Mobile App</li>
            <li>Locum Software & Mobile App</li>
            <li>Finance Management Software</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy Statement</li>
            <li>Terms and Conditions</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </div>

      {/* Contact + Locations + Social */}
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-8 text-sm text-[var(--secondary-100)]">
        <div>
          <h4 className="font-semibold mb-2">Contact Us:</h4>
          <span style={{color:'white' }}>📞 0818 900 300</span>
          <span style={{color:'white' }}>✉️ info@mployushr.com</span>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Our Locations:</h4>
          <span style={{color:'white' }}><strong>Mployus Ireland</strong><br />7 Station Hill, Clongriffin, Dublin, IRL</span>
        </div>

        <div>
          <h4 className="font-semibold mb-2"> </h4>
          <span style={{color:'white' }}><strong>Mployus UK</strong><br />82 Gorton Road, Stockport, Manchester, UK</span>
        </div>

    <div >
      <div className='flex flex-row items-center gap-2'>
      <h4 className="font-semibold ">Connect with us on:</h4>
      <div className="flex items-center space-x-4 ">
      <Link href="#" className="text-white hover:text-gray-300 transition">
        <FaLinkedin size={20} />
      </Link>
      <Link href="#" className="text-white hover:text-gray-300 transition">
        <FaTwitter size={20} />
      </Link>
    </div>
    </div>

      <div className="mt-4">
        <div className="bg-[#ffffff55] border border-white text-black px-10 py-2 rounded-md inline-flex items-center gap-2">
          <span className="text-xl">🇮🇪</span>
          <span>Ireland</span>
          <ChevronDownIcon className="w-4 h-4 ml-1 text-black" />
        </div>
      </div>
    </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-xs text-[var(--secondary-200)]">
        <span style={{color:'white' }}>
          © 2025 Mployus, All Rights Reserved. Mployus Personnel Services t/a Mployus Recruitment.
          Registered in the Republic of Ireland. Registration Number: 734222. United Kingdom:
          Mployus Personnel Services Limited. Registration number: 15628375
        </span>
      </div>
    </footer>
  );
};

export default Footer;