"use client";
import { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "How can Mployyus help with recruitment?",
    answer:
      "Mployyus streamlines the recruitment process by offering AI-powered candidate matching, job postings, and a comprehensive applicant tracking system to help you find and hire top talent quickly and efficiently.",
  },
  {
    question: "Can I manage shifts and temporary staff through Mployyus?",
    answer:
      "Yes, Mployyus enables full shift scheduling, availability tracking, and on-demand management of locum or temporary staff via a central dashboard.",
  },
  {
    question: "Is Mployyus suitable for small businesses?",
    answer:
      "Absolutely. Mployyus is designed to be scalable and budget-friendly, making it a great fit for startups and small businesses that need agile HR solutions.",
  },
  {
    question: "What makes Mployyus different from other HR software?",
    answer:
      "Our platform focuses on real-time responsiveness, AI-driven automation, and a seamless user experience tailored for healthcare and fast-paced workforces.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="containerDiv">
      <div>
        <h4 className="text-start text-[var(--primary-color)] text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h4>
        <p className="p1 text-start text-[var(--text-muted)] mb-10 text-sm">
          Got questions? Our FAQ section provides answers to common inquiries on hiring, workforce
          management, locum staffing, and HR software, helping you navigate our solutions with ease.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
  key={index}
  className={`rounded-lg p-6  transition-colors duration-300 ${
    openIndex === index
      ? "bg-[var(--primary-color)] text-white"
      : "bg-[var(--primary-100)] text-[var(--text-dark)]"
  }`}
>
  <div
    className="flex justify-between items-center cursor-pointer"
    onClick={() => toggle(index)}
  >
    <p
      className={`font-semibold text-base ${
        openIndex === index ? "text-white" : "text-[var(--text-dark)]"
      }`}
    >
      {faq.question}
    </p>
    <div
      className="modalCard"
      style={{
        backgroundColor:
          openIndex === index
            ? "var(--primary-200"
            : "var(--primary-200)",
        padding: "0.5rem",
      }}
    >
      {openIndex === index ? (
        <XMarkIcon className="w-5 h-5 text-[var(--primary-color)]" />
      ) : (
        <PlusIcon className="w-5 h-5 text-[var(--primary-color)]" />
      )}
    </div>
  </div>

  {openIndex === index && (
    <div
      className={`mt-4 border-t pt-4 text-sm ${
        openIndex === index
          ? "text-white border-white"
          : "text-[var(--text-muted)]"
      }`}
    >
     <p className="p1">{faq.answer}</p> 
    </div>
  )}
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;