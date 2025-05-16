'use client';

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const CookiesPolicy = () => {
  return (
    <section className="w-full pt-10 min-h-screen flex flex-col items-center justify-start pb-20 ">
      {/* Hero Section */}
      <div className="bg-[var(--primary-color)] relative w-full flex flex-col items-center justify-center h-80 text-white mb-10"
      style={{
            backgroundColor: "#a1007e",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23cc4fa8' fill-opacity='0.21'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
      >
        <div className="absolute top-16 left-6 flex items-center gap-1 text-sm">
          <Link href="/" className="underline hover:text-gray-300">Home</Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span>Privacy Policy</span>
        </div>
        <h3 className="text-3xl font-bold text-center">Cookies Policy</h3>
      </div>

      {/* Content */}
      <div className="text-sm containerDiv md:text-base leading-relaxed text-gray-800 space-y-6">
        <section>
          <h4 className="text-lg font-semibold">Policy Overview</h4>
          <p>
            At Mployus Ireland, we are committed to being transparent about how we use cookies and similar tracking technologies.
            This Cookies Policy outlines the types of cookies we use on our website, why we use them, and how you can control or manage your cookie preferences.
          </p>
          <p>
            This Policy forms part of our broader commitment to user privacy and should be read alongside our Privacy Policy. We may update this Policy periodically to reflect changes in our cookie usage or regulatory requirements.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">What Are Cookies?</h4>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help us remember your preferences, enhance your browsing experience, understand how our site is used, and display personalised content or advertisements.
          </p>
          <p>
            Cookies are essential for improving site functionality and providing you with a more tailored and efficient user experience.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Types of Cookies We Use</h4>
          <p>We use both first-party cookies (set by Mployus.ie) and third-party cookies (set by service providers such as Google) for various purposes. These include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Strictly Necessary Cookies:</strong> Essential for site functionality, such as security, network management, and accessibility. These cannot be disabled via our cookie banner.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand site usage, which pages are popular, and where improvements are needed. Data is collected anonymously.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Remember preferences such as language or region to provide more personalized features.
            </li>
            <li>
              <strong>Targeting/Advertising Cookies:</strong> Set by advertising partners to build a profile of your interests and display relevant ads.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Other Tracking Technologies</h4>
          <p>
            Besides cookies, we use tracking technologies like web beacons (tracking pixels), which help monitor website traffic, measure email campaign success, or determine referral sources. These may depend on cookies to function effectively.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Social Media Features</h4>
          <p>
            Our website includes features such as Facebook Like and LinkedIn Share buttons. These may collect your IP address and track the page you&lsquo;re visiting. Interactions are governed by the privacy policy of the respective platform.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Do Cookies Expire?</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Session Cookies:</strong> Temporary cookies that expire when the browser is closed. They enable seamless navigation without reauthentication.
            </li>
            <li>
              <strong>Persistent Cookies:</strong> Remain on your device until expiry or manual deletion. Some may last up to five years for analytics or advertising purposes.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-lg font-semibold">How to Manage Your Cookie Preferences</h4>
          <p>
            On visiting mployus.ie, you can manage cookie preferences through our consent banner. Except for strictly necessary cookies, you can choose which categories to allow.
          </p>
          <p>
            You can update preferences at any time by clicking the &ldquo;Manage Cookie Settings &ldquo; link on our website.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Browser Settings and Third-Party Tools</h4>
          <p>
            In addition to our banner, you can manage cookies using your browser settings. Most browsers allow deleting, blocking, or warning before storing cookies.
          </p>
          <p>
            Useful tools and links include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>All About Cookies – Browser Settings</li>
            <li>About Cookies</li>
            <li>Ad-Aware by Lavasoft</li>
            <li>Spybot Search & Destroy</li>
            <li>Webroot Spy Sweeper</li>
          </ul>
          <p className="text-red-600 italic">Note: Disabling cookies may affect site functionality.</p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Cookie Management via Google Tag Manager</h4>
          <p>
            Mployus Ireland uses Google Tag Manager to ensure compliant and accurate cookie script deployment across our site.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Changes to This Policy</h4>
          <p>
            We may update this Cookies Policy to reflect changes in legal requirements, technology, or usage. Updates will be posted on this page with a revised date.
          </p>
          <p>
            By continuing to use our site, you agree to the practices outlined in this Policy.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Last Updated</h4>
          <p>April 2025</p>
        </section>

        <section>
          <h4 className="text-lg font-semibold">Contact</h4>
          <p>
            If you have questions regarding this policy, please contact us at: <a href="mailto:privacy@mployus.ie" className="text-blue-600 underline">privacy@mployus.ie</a>
          </p>
        </section>
      </div>
    </section>
  );
};

export default CookiesPolicy;