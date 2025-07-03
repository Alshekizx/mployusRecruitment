'use client';

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const CookiesPolicy = () => {
  return (
    <section className="w-full pt-20 min-h-screen flex flex-col items-center justify-start pb-20 ">
      {/* Hero Section */}
      <div className="bg-[var(--primary-color)] relative w-full flex flex-col items-center justify-center h-80 text-white mb-10 card-texture-bg">
        <div className="absolute px-[2rem] lg:px-[5rem] top-16 left-6 flex items-center gap-1 text-sm">
          <Link href="/" className="underline hover:text-gray-300">Home</Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span className='p11'>Cookie Policy</span>
        </div>
        <h3 className="text-3xl font-bold text-center">Cookie Policy</h3>
      </div>

      {/* Content */}
      <div className="text-sm containerDiv md:text-base leading-relaxed text-gray-800 space-y-6">
        <section>
          <h3>Cookie Policy</h3>
          <p>
            This Cookie Policy explains what you can expect when visiting any Mployus website, including www.mployus.co.uk and www.mployus.ie. When you access our sites, we may automatically collect certain information such as standard internet log data and user behaviour patterns. This helps us understand how different areas of our websites are being used, but we do not link this data to any personally identifiable information.
          </p>
        </section>

        <section>
          <h4 className="text-[var(--primary-color)] font-semibold">Use of Cookies and Tracking Technologies</h4>
          <span className='p11'>
            When you visit an Mployus website, we may place cookies or similar tracking technologies on your device. These technologies store data about your preferences and interaction with our sites and are used for the reasons outlined below.
          </span>
          <span className='p11'>
            You can manage which categories of cookies you accept by clicking “Cookie Settings.” To consent to all cookies, select “Accept All Cookies” when prompted. Your choices will be applied in accordance with this Cookie Policy.
          </span>
          <span className='p11'>
            If you choose not to accept non-essential cookies, only strictly necessary cookies will be used, which may limit access to some personalised features or services.
          </span>
        </section>

        <section>
          <h4 className="text-[var(--primary-color)] font-semibold">What Are Cookies?</h4>
          <span className='p11'>
            Cookies are small text files stored on your device by a website. They serve multiple purposes such as identifying users, saving preferences, and customising content presentation.
          </span>
          <span className='p11'>
            Cookies used by Mployus Group (UK and Ireland) fall into two main categories:
          </span>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>First-party cookies</strong> – set directly by Mployus websites.</li>
            <li><strong>Third-party cookies</strong> – set by services or platforms we use; governed by their respective privacy policies.</li>
          </ul>
          <span className='p11'>
            To view a full list of cookies used on our websites, visit the “Cookie Settings” link available on all pages.
          </span>
        </section>

        <section>
          <h4 className="text-[var(--primary-color)] font-semibold">Why We Use Cookies</h4>
          <span className='p11'>Cookies used by Mployus UK and Ireland help us to:</span>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensure proper operation and performance of our websites</li>
            <li>Enable access to key services such as job applications or account features</li>
            <li>Preserve your cookie consent choices</li>
            <li>Personalise content and improve user experience</li>
            <li>Analyse traffic patterns and optimise website functionality</li>
            <li>Improve accessibility and responsiveness across devices</li>
          </ul>
          <span className="">
            Note: Disabling essential cookies may restrict your ability to fully access or benefit from certain site features.
          </span>
        </section>

        <section>
          <h4 className="text-[var(--primary-color)] font-semibold">Categories of Cookies We Use</h4>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Strictly Necessary Cookies</strong> – Essential for core site functionality (e.g. secure login, job application forms). These cookies do not collect personally identifiable information and expire after each session or shortly thereafter.</li>
            <li><strong>Performance Cookies</strong> – Help us understand how users interact with our sites through analytics and usage statistics. These cookies are not used for advertising but may be used to test features or optimise performance.</li>
            <li><strong>Functionality Cookies</strong> – Enhance usability by remembering settings or preferences (e.g. language choice, saved job searches). May also enable integration with social platforms for content sharing.</li>
            <li><strong>Targeting Cookies</strong> – Used for delivering ads tailored to user interests, limiting ad frequency, and measuring campaign performance. While Mployus does not currently use targeting cookies directly, third-party platforms integrated with our site (e.g. Google) may employ them. Please review those third parties&apos; privacy policies for more information.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-[var(--primary-color)] font-semibold">Managing Your Cookie Preferences</h4>
          <span className='p11'>
            You have control over how cookies are used on your device:
          </span>
          <ul className="list-disc list-inside space-y-2">
            <li>Use the “Cookie Settings” link at the bottom of each page</li>
            <li>Adjust your browser&apos;s cookie settings</li>
            <li>Use third-party privacy or ad-blocking tools, where applicable</li>
          </ul>
          <span className="text-red-600 italic p11">
            Note: Withdrawing consent for certain cookies may result in limited functionality or access.
          </span>
        </section>

        <section>
          <h4 className="text-[var(--primary-color)] font-semibold">Cookie Retention Period</h4>
          <span className='p11'>
            Cookie-related data is retained for a maximum of 12 months, unless shorter periods are required by UK or Irish data protection legislation.
          </span>
        </section>

        <section>
          <h4 className="text-[var(--primary-color)] font-semibold">Your Data Rights</h4>
          <span className='p11'>
            Under the UK GDPR, Data Protection Act 2018 (UK), EU GDPR (as retained in Irish law), and the Irish Data Protection Act 2018, you have the right to access, amend, or request deletion of your personal data.
          </span>
          <span className='p11'>
            For more details, please refer to our&nbsp;
            <Link href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link>.
          </span>
          <span className='p11'>
            To exercise your rights or to make an enquiry, please contact our Data Protection Officer at:&nbsp;
            <a href="mailto:privacy@mployus.co.uk" className="text-blue-600 underline">privacy@mployus.co.uk</a>&nbsp;or&nbsp;
            <a href="mailto:privacy@mployus.ie" className="text-blue-600 underline">privacy@mployus.ie</a>
          </span>
        </section>
      </div>
    </section>
  );
};

export default CookiesPolicy;
