'use client';

import Image from "next/image";
import { useState } from "react";

export default function SectorsWeCover() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "ICT",
      detail:
        "We support tech-driven businesses by recruiting top IT talent, including software developers, network engineers, IT support specialists, and data analysts etc.",
      bgImage: "/images/ICT.png",
    },
    {
      title: "Hospitality",
      detail:
        "We recruit for key hospitality roles such as chefs, waiting staff, kitchen porters, front-of-house staff, and housekeeping—ensuring candidates match your service standards ",
      bgImage: "/images/Hospitality.png",
    },
    {
      title: "Healthcare",
      detail:
        "We support healthcare organisations and facilities by streamlining recruitment for critical roles such as, support workers, medical administrators etc.",
      bgImage: "/images/Healthcare.png",
    },
    {
      title: "Business Support",
      detail:
        "We support business operations by streamlining recruitment for  roles such as administrative assistants, office managers, customer service agents, executive support staff and more.",
      bgImage: "/images/BusinessSupport.png",
    },
    {
      title: "Construction",
      detail:
        "We support construction companies by sourcing skilled professionals such as site managers, general labourers, electricians, quantity surveyors and other related professions.",
      bgImage: "/images/Construction.png",
    },
    {
      title: "Life Sciences",
      detail:
        "We help life sciences organisations streamline recruitment for critical roles such as laboratory technicians, research scientists, clinical trial coordinators among others.",
      bgImage: "/images/LifeSciences.png",
    },
    {
      title: "Logistics",
      detail:
        "We recruit for essential logistics roles including warehouse operatives, forklift drivers, pickers and packers, delivery drivers, transport coordinators, and shift supervisors and more.",
      bgImage: "/images/Logistics.png",
    },
    {
      title: "Finance",
      detail:
        "We recruit for finance roles including accountants, bookkeepers, payroll & financial analysts, credit controllers etc—ensuring each candidate aligns with your business goals ",
      bgImage: "/images/Finance.png",
    },
  ];

  return (
    <div className="containerDiv flex flex-col items-center justify-center gap-20">
      <div className="text-center w-full max-w-[800px]">
        <h3 className="text-[var(--primary-color)] text-2xl font-bold">Sectors We Cover</h3>
        <p className="text-base">
          We provide expert recruitment services to a wide range of sectors. Our tailored solutions meet the unique needs of each industry, ensuring compliance and smooth onboarding.
        </p>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden min-w-[360px] h-[661px] group cursor-pointer"
                onClick={() =>
                  setActiveIndex((prev) => (prev === index ? null : index))
                }
              >
                <Image
                  src={service.bgImage}
                  alt={`${service.title} sector`}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/60 group-hover:bg-black/60 flex flex-col justify-end p-4 transition-all duration-300">
                  <h1 className="text-white text-xl font-semibold">{service.title}</h1>
                  <p
                    className={`text-white mt-2 transition-opacity duration-300 p11${
                      isActive ? "opacity-100 block" : "opacity-0 hidden group-hover:block group-hover:opacity-100"
                    }`}
                  >
                    {service.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
