'use client';
import React, { useState } from 'react';
import HeroSection from '../../components/heroSection';

const termsContent = {
  uk: {
    region: 'UK and NI',
    updated: '19th December 2023',
    sections: [
      {
        title: '1. Notification of Successful Hire',
        body: `The client undertakes to notify Mployus Personnel Services immediately on agreeing an engagement with any applicant who has been introduced by the agency during the preceding 12 months and to pay the agency an introduction fee due in accordance with clause 2 hereof within 30 days of the receipt of invoice.`
      },
      {
        title: '2. Invoicing',
        body: `Once an offer is made by the client and has been accepted by the job applicant, the recruitment partner will invoice the client on the applicant's agreed start date. The invoice becomes payable within the next 30 days of this start date.`
      },
      {
        title: '3. Refund of Placement Fee',
        body: `Provided that our placement fee has been settled in full within the agreed 30 days, should the employment of an applicant, who was introduced by the recruitment partner, terminate within 12 weeks, excluding company redundancies (the recruitment partner cannot accept responsibility or issue a refund for a candidate who is made redundant by the client as these circumstances are beyond our control), the agency will guarantee a replacement. In the event the Client does not wish to replace the placement, the placement fee will be credited or refunded by the recruitment partner in the following manner:`,
        list: [
          'Candidate leaving within 4 weeks – 100% refund;',
          'Candidate leaving within 8 weeks – 50% refund;',
          'Candidate leaving within 12 weeks – 25% refund;',
        ]
      },
      {
        title: '4. Liability',
        body: `Applicants introduced to the client are carefully sourced and selected for the relevant vacancies to be filled. Mployus Personnel Services endeavours to take up references but the client should take all necessary steps to obtain confirmation of the applicant’s necessary skills, qualifications, and general integrity. The ultimate decision to hire an applicant will be the client’s. The recruitment partner can accept no liability for any kind of loss or damage to property or for any loss, including without prejudice to the generality of the foregoing, loss of profits, or for any injury to persons arising directly or indirectly from any act or omission of any applicant introduced by the recruitment partner, even if such act or omission is negligent, fraudulent or reveals dishonesty.`
      },
      {
        title: '5. Statutory Compliance',
        body: `The recruitment partner is committed to compliance with all statutory requirements, specifically the General Data Protection Regulation. We assert our position as Data Controllers in respect of the candidate data collected by us and shared with our clients. Data shared with the client is for the purpose of the recruitment process alone. Clients are also considered Data Controllers. Both parties agree to comply with GDPR and indemnify each other against breaches. Once the applicant is employed, the joint controller relationship ends.`
      },
      {
        title: '6. Our Service',
        body: `Mployus Personnel Services was established in 2023 to place the right candidates with the right employers. We offer hybrid database/contingency recruitment. Our trained recruiters submit only genuinely interested candidates. We aim to present your company as an employer of choice and work closely with your HR and Management team.`
      },
      {
        title: '7. Acceptance',
        body: `By inviting Mployus candidates for interviews, you accept our terms. Re-negotiations must be submitted in writing with 14 days’ notice and will apply only to future work.`
      }
    ]
  },

  ireland: {
    region: 'Ireland',
    updated: '19th December 2023',
    sections: [
      {
        title: '1. Notification of Successful Hire',
        body: `The client undertakes to notify Mployus Personnel Services immediately on agreeing an engagement with any applicant who has been introduced by the agency during the preceding 12 months and to pay the agency an introduction fee due in accordance with clause 2 hereof within 30 days of the receipt of invoice.`
      },
      {
        title: '2. Invoicing',
        body: `Once an offer is made by the client and has been accepted by the job applicant, the recruitment partner will invoice the client on the applicant's agreed start date. The invoice becomes payable within the next 30 days of this start date.`
      },
      {
        title: '3. Refund of Placement Fee',
        body: `Provided that our placement fee has been settled in full within the agreed 30 days, should the employment of an applicant, who was introduced by the recruitment partner, terminate within 12 weeks, excluding company redundancies (the recruitment partner cannot accept responsibility or issue a refund for a candidate who is made redundant by the client as these circumstances are beyond our control), the agency will guarantee a replacement. In the event the Client does not wish to replace the placement, the placement fee will be credited or refunded by the recruitment partner in the following manner:`,
        list: [
          'Candidate leaving within 4 weeks – 100% refund;',
          'Candidate leaving within 8 weeks – 50% refund;',
          'Candidate leaving within 12 weeks – 25% refund;',
        ]
      },
      {
        title: '4. Liability',
        body: `Applicants introduced to the client are carefully sourced and selected for the relevant vacancies to be filled. Mployus Personnel Services endeavours to take up references but the client should take all necessary steps to obtain confirmation of the applicant’s necessary skills, qualifications, and general integrity. The ultimate decision to hire an applicant will be the client’s. The recruitment partner can accept no liability for any kind of loss or damage to property or for any loss, including without prejudice to the generality of the foregoing, loss of profits, or for any injury to persons arising directly or indirectly from any act or omission of any applicant introduced by the recruitment partner, even if such act or omission is negligent, fraudulent or reveals dishonesty.`
      },
      {
        title: '5. Statutory Compliance',
        body: `The recruitment partner is committed to compliance with all statutory requirements, specifically the General Data Protection Regulation. We assert our position as Data Controllers in respect of the candidate data collected by us and shared with our clients. Data shared with the client is for the purpose of the recruitment process alone. Clients are also considered Data Controllers. Both parties agree to comply with GDPR and indemnify each other against breaches. Once the applicant is employed, the joint controller relationship ends.`
      },
      {
        title: '6. Our Service',
        body: `Mployus Personnel Services was established in 2023 to place the right candidates with the right employers. We offer hybrid database/contingency recruitment. Our trained recruiters submit only genuinely interested candidates. We aim to present your company as an employer of choice and work closely with your HR and Management team.`
      },
      {
        title: '7. Acceptance',
        body: `By inviting Mployus candidates for interviews, you accept our terms. Re-negotiations must be submitted in writing with 14 days’ notice and will apply only to future work.`
      }
    ]
  }
};


const TermsAndConditions = () => {
  const [region, setRegion] = useState<'uk' | 'ireland'>('uk');
  const active = termsContent[region];

  return (
    <section className="w-full pt-10 min-h-screen flex flex-col items-center justify-start pb-20 text-[var(--text-dark)]">
      {/* Hero */}
      <HeroSection title="Terms & Conditions" description="" breadcrumbs={[]} />

      {/* Region Selector */}


      {/* Terms Content */}
      <div className="container  pt-20 leading-relaxed text-[20px]">
          <div className="my-6 flex gap-4">
  <button
    onClick={() => setRegion('uk')}
    className={region === 'uk' ? 'button' : 'inverseButton'}
  >
    UK and NI
  </button>
  <button
    onClick={() => setRegion('ireland')}
    className={region === 'ireland' ? 'button' : 'inverseButton'}
  >
    Ireland
  </button>
</div>

        <p className="text-[22px] font-semibold mb-2 text-[var(--primary-color)]">Terms of Service</p>
        <p className="mb-6 text-[18px] text-[var(--text-muted)]">Updated: {active.updated}</p>

        <p className="mb-6">
          Items one to seven are the total Terms and Conditions which govern the recruitment
          services undertaken by Mployus Personnel Services or Mployus Group UK & Ireland.
        </p>

        {active.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-[28px] font-semibold text-[var(--primary-color)] mb-2">{section.title}</h4>
            <p className="mb-2">{section.body}</p>
            {section.list && (
              <ul className="list-disc list-inside mt-2 space-y-1">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <p className="mt-10 font-medium text-[22px]">
          We look forward to working with you and supporting your growth with quality recruitment services.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;