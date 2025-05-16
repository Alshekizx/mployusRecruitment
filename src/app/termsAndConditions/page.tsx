'use client';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <section className="w-full pt-10 min-h-screen flex flex-col items-center justify-start pb-20">
      {/* Hero Section */}
      <div className="bg-[var(--primary-color)] relative w-full flex flex-col items-center justify-center px-4 h-80 text-white"
      style={{
            backgroundColor: "#a1007e",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23cc4fa8' fill-opacity='0.21'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
      >
        <div className="absolute top-16 left-6 flex items-center gap-1 text-sm">
          <Link className="underline" href="/">
            Home
          </Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span>Privacy Policy</span>
        </div>
        <h3 className="text-3xl font-bold text-center">Terms and Conditions</h3>
      </div>

      {/* Terms Content */}
      <div className="container mx-auto px-4 text-sm md:text-base leading-relaxed pt-20 text-gray-800">
        <p className="mb-4 font-semibold">Terms of Service</p>
        <p className="mb-6">Updated: 19th December 2023</p>

        <p className="mb-4">
          Items one to seven are the total Terms and Conditions which govern the
          recruitment services undertaken by Mployus Personnel Services or Mployus Group UK & Ireland.
        </p>

        <h4 className="font-semibold mt-6 mb-2">1. Notification of Successful Hire</h4>
        <p className="mb-4">
          The client undertakes to notify Mployus Personnel Services immediately on agreeing an
          engagement with any applicant who has been introduced by the agency during the preceding
          12 months and to pay the agency an introduction fee due in accordance with clause 2
          hereof within 30 days of the receipt of invoice.
        </p>

        <h4 className="font-semibold mt-6 mb-2">2. Invoicing</h4>
        <p className="mb-4">
          Once an offer is made by the client and has been accepted by the job applicant, the
          recruitment partner will invoice the client on the applicant&apos;s agreed start date. The
          invoice becomes payable within the next 30 days of this start date.
        </p>

        <h4 className="font-semibold mt-6 mb-2">3. Refund of Placement Fee</h4>
        <p className="mb-4">
          Provided that our placement fee has been settled in full within the agreed 30 days,
          should the employment of an applicant terminate within 12 weeks (excluding redundancies),
          the agency guarantees a replacement. If the client opts not to replace, the placement
          fee will be credited or refunded as follows:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Leaving within 4 weeks – 100% refund</li>
          <li>Leaving within 8 weeks – 50% refund</li>
          <li>Leaving within 12 weeks – 25% refund</li>
        </ul>

        <h4 className="font-semibold mt-6 mb-2">4. Liability</h4>
        <p className="mb-4">
          Applicants are carefully sourced and selected. Mployus takes references, but clients
          should confirm skills and integrity themselves. The recruitment partner is not liable for
          any loss, damage, or injury resulting from the applicant&apos;s actions or omissions, even if
          negligent or fraudulent.
        </p>

        <h4 className="font-semibold mt-6 mb-2">5. Statutory Compliance</h4>
        <p className="mb-4">
          The recruitment partner complies with all statutory requirements, particularly GDPR. We
          are Data Controllers and share applicant data only for recruitment purposes. Clients are
          also Controllers. Both parties must comply with GDPR and indemnify each other against
          breaches. Once hired, the joint controller relationship ends.
        </p>

        <h4 className="font-semibold mt-6 mb-2">6. Our Service</h4>
        <p className="mb-4">
          Established in 2023, Mployus Personnel Services matches the right candidates with the
          right employers. We offer hybrid recruitment services and only refer genuinely interested
          candidates. We collaborate closely with your HR team to present your brand positively to
          candidates.
        </p>

        <h4 className="font-semibold mt-6 mb-2">7. Acceptance</h4>
        <p className="mb-4">
          By inviting Mployus candidates for interviews, you accept our terms. Any renegotiations
          require 14 days’ written notice and only apply to future work, not past engagements.
        </p>

        <p className="mt-6 font-medium">
          We look forward to working with you and supporting your growth with quality recruitment services.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;