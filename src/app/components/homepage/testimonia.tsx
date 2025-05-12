"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const testimonials = [
  {
    name: "Renee Wells",
    title: "Effortless Hiring & Quality Candidates",
    rating: 5,
    review:
      "With Agency the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors on my website",
  },
  {
    name: "Michael Lee",
    title: "Effortless Hiring & Quality Candidates",
    rating: 5,
    review:
      "They streamlined our HR processes effortlessly. Their tools are intuitive and their support team is amazing.",
  },
  {
    name: "Fatima Musa",
    title: "Effortless Hiring & Quality Candidates",
    rating: 4,
    review:
      "A reliable and innovative team. Their HR software changed how we manage payroll and attendance.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="containerDiv flex items-center justify-center min-h-screen">
      <div className="text-center py-10 flex flex-col gap-20">
        <div className="text-center w-full max-w-[800px] mx-auto">
          <h3 className="text-[var(--primary-color)] font-bold">TESTIMONIALS</h3>
          <p>What clients say jobseekers and employers say about us</p>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-[var(--background)] rounded-lg p-6 relative flex flex-col gap-5">
            <p className="text-[var(--primary-color)] " style={{color: "var(--primary-color)" }}>{testimonial.title}</p>
          <blockquote className="text-lg font-medium text-[var(--text-dark)] italic">
            “{testimonial.review}”
          </blockquote>

          
         <div>
              <p className="text-[var(--text-dark)] font-semibold">-{testimonial.name}-</p>
            </div>
          

          {/* Navigation buttons with Heroicons */}
          <div className="absolute inset-[-30] flex justify-between items-center px-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronLeftIcon className="w-5 h-5 text-[var(--text-muted)]" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center hover:opacity-80"
            >
              <ChevronRightIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;