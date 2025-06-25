'use client';
import React from 'react';
import HeroSection from '../../components/heroSection';

const PrivacyPolicy = () => {
  return (
    <section className="w-full pt-10 min-h-screen flex flex-col items-center justify-start pb-20  text-[var(--text-dark)]">
      {/* Hero Section */}
      <HeroSection
              title="Privacy Statement"
              description=""
              breadcrumbs={[
                
              ]}
            />

      {/* Privacy Content */}
      <article className="containerDiv max-w-5xl px-6 md:px-0 text-[var(--text-dark)] leading-relaxed">
        <section className="space-y-8 text-[24px]">
          <div>
            <h4 className="text-[var(--primary-color)] text-[44px] font-semibold">Introduction</h4>
            <p>
              This Privacy Statement describes the rights of individuals (“Data Subjects”) under the UK General Data Protection Regulation (UK GDPR) and the EU General Data Protection Regulation (EU GDPR), along with relevant local data legislation in the UK and Ireland. It applies to personal data collected and processed by Mployus Recruitment, Mployus Ireland, Mployus UK, and Mployus Group UK & Ireland.
            </p>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[44px] font-semibold">GDPR Overview</h4>
            <p>
              The GDPR is a data protection law adopted within the EU and retained in the UK post-Brexit. It grants individuals significant rights over their personal data and imposes strict obligations on organisations processing this data. It ensures lawful handling, promotes transparency, and safeguards data subjects’ rights.
            </p>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Who Are Our Data Subjects?</h4>
            <p>We process personal data of individuals in the following categories:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Candidates – including permanent staff, temporary agency workers, and contractors</li>
              <li>Client and supplier contacts, clients, and candidates’ referees</li>
              <li>Employees – whose data processing is described in our internal employee handbook</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Legal Basis for Processing Personal Data</h4>
            <ul className="list-disc list-inside pl-4">
              <li><strong>Contract:</strong> Where data use is required to fulfil a contract or initiate contract-related steps</li>
              <li><strong>Legal Obligation:</strong> Where we’re required to collect and retain data to meet legal obligations</li>
              <li><strong>Legitimate Interest:</strong> Where data use is in our legitimate business interest and is balanced against your rights</li>
              <li><strong>Consent:</strong> On rare occasions, we may rely on explicit consent</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Collection and Use of Personal Data</h4>

            <p><strong>Candidates:</strong></p>
            <ul className="list-disc list-inside pl-4">
              <li>Name, contact details, employment and education history, CV</li>
              <li>Details submitted via our website or social media</li>
              <li>Information shared during screening, interviews, or onboarding</li>
            </ul>
            <p>We process this data to:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Match individuals with job opportunities</li>
              <li>Share relevant vacancies</li>
              <li>Communicate and follow up</li>
              <li>Client sharing (only with your knowledge)</li>
            </ul>

            <p><strong>Clients/Suppliers:</strong></p>
            <ul className="list-disc list-inside pl-4">
              <li>Name, email, phone number, and business details</li>
              <li>Information gathered directly or via business sources</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Security of Personal Information</h4>
            <p>
              We implement appropriate security measures, including encryption and restricted access. While data transmission over the internet is not fully secure, we apply all reasonable precautions once the data is received.
            </p>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Cookies and External Links</h4>
            <p>
              Our websites use cookies to improve user experience and gather analytics. You can manage preferences via the “Cookie Settings” popup. External links on our site are for convenience; we are not responsible for the third-party privacy practices.
            </p>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Data Retention</h4>
            <p>We retain data only as long as is necessary for contractual, legal, or operational reasons.</p>

            <div className="overflow-x-auto mt-4 text-[20px]">
              <table className="table-auto border w-full text-left border-[var(--border-color)]">
                <thead className="bg-[var(--primary-100)] text-[var(--text-dark)]">
                  <tr>
                    <th className="px-4 py-2 border">Source of Obligation</th>
                    <th className="px-4 py-2 border">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-4 py-2 border">Revenue Commissioners / HMRC</td><td className="px-4 py-2 border">6 years</td></tr>
                  <tr><td className="px-4 py-2 border">Personal injury claims</td><td className="px-4 py-2 border">3 years (or until 3 years after a minor turns 18)</td></tr>
                  <tr><td className="px-4 py-2 border">Breach of contract records</td><td className="px-4 py-2 border">6 years</td></tr>
                  <tr><td className="px-4 py-2 border">Candidates (Unsuccessful)</td><td className="px-4 py-2 border">1 year</td></tr>
                  <tr><td className="px-4 py-2 border">Candidates (Successful)</td><td className="px-4 py-2 border">Indefinitely or until requested for removal</td></tr>
                  <tr><td className="px-4 py-2 border">Employment contracts</td><td className="px-4 py-2 border">Duration of employment</td></tr>
                  <tr><td className="px-4 py-2 border">Working time, wage compliance</td><td className="px-4 py-2 border">3 years post-employment</td></tr>
                  <tr><td className="px-4 py-2 border">Parental Leave records</td><td className="px-4 py-2 border">8 years</td></tr>
                  <tr><td className="px-4 py-2 border">Equality records</td><td className="px-4 py-2 border">1 year</td></tr>
                  <tr><td className="px-4 py-2 border">Health and safety</td><td className="px-4 py-2 border">10 years</td></tr>
                  <tr><td className="px-4 py-2 border">GDPR compliance documentation</td><td className="px-4 py-2 border">5 years</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Your Rights Under GDPR (UK & Ireland)</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Access – You can request a copy of your personal data</li>
              <li>Rectification – You may correct inaccurate or incomplete information</li>
              <li>Erasure – You may request deletion, subject to legal retention limits</li>
              <li>Restriction – You may request limits on processing</li>
              <li>Portability – You may request your data in a transferable format</li>
              <li>Objection – You may object to certain types of processing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">How to Request or Verify Your Data</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Provide proof of ID (e.g. passport or driver’s licence)</li>
              <li>One recent utility bill or similar proof of address</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Mployus Recruitment – UK & Ireland Offices</h4>
            <p><strong>Ireland Office:</strong><br />7 Station Road, Clongriffin, Dublin, Ireland<br />info@mployus.ie</p>
            <p><strong>UK Office:</strong><br />82 Gordon Road, Stockport, Manchester<br />info@mployus.co.uk</p>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Complaints</h4>
            <p>
              If you are not satisfied with how we handled your data, you may contact:
            </p>
            <p>
              <strong>Data Protection Commission</strong><br />Canal House, Station Road, Portarlington, Co. Laois R32 AP23<br />+353 57 868 4800 | info@dataprotection.ie
            </p>
            <p>
              <strong>Information Commissioner’s Office (ICO)</strong><br />Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF<br />+44 303 123 1113 | www.ico.org.uk
            </p>
          </div>

          <div>
            <h4 className="text-[var(--primary-color)] text-[34px] font-semibold">Changes to This Privacy Statement</h4>
            <p>
              This Privacy Statement may be updated periodically to reflect changes in legislation, services, or practices. Please check this page for the latest version.
            </p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default PrivacyPolicy;
