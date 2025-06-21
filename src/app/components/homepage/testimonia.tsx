"use client";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const testimonials = [
  {
    name: "David M.",
    position: "HR Manager, Medlink Solutions",
    review:
      "As an employer, MployUs transformed our hiring process. We quickly connected with skilled candidates, and the AI-driven matching saved us so much time!",
  },
  {
    name: "Renee Wells",
    position: "Talent Lead, BrightPath",
    review:
      "With MployUs, we found qualified candidates quickly. The platform is intuitive and efficient—made recruitment so much easier.",
  },
  {
    name: "Michael Lee",
    position: "Operations Director, CoreTech",
    review:
      "Their AI-based tools are game-changers. We've saved tons of time on recruitment while improving candidate quality.",
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
    <section className="w-full containerDiv py-16 bg-white">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6 h-full flex flex-col justify-between">
          <p className="text-[var(--accent-color)] .h33 font-semibold text-sm">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)]"style={{color: "var(--text-dark)", fontSize:'68px'}} >
            What Our Clients Are Saying About Us
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            At Mployus, we make recruitment easier for all business sizes. Our service is tailored to each client, ensuring you get qualified candidates who truly fit your team and values.
          </p>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            We focus on long-term hiring success, not just filling roles. With Mployus, you save time, reduce hiring risks, and gain a trusted partner to support your growth with smarter, more efficient recruitment.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 bg-[var(--primary-color)] text-white px-8 py-12 relative item-center flex flex-col justify-between ">

        <Image
            src="/images/colon.png"
            alt="Team Hero Pic"
            width={200}
            height={200}
            className="absolute top-0 right-1/3  z-0 w-60 h-auto"
            priority
          />

          <div className="space-y-4">
            <blockquote className="text-lg leading-relaxed italic">
              <h3 className="h33">“{testimonial.review}”</h3>
            </blockquote>
            <div>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm">{testimonial.position}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-4 right-[-20px] flex items-center gap-2">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center hover:bg-white transition"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full bg-[var(--primary-100)] text-[var(--primary-color)] flex items-center justify-center hover:bg-white transition"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;