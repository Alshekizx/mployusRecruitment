import Image from "next/image";

export default function Hero() {
  return (
    <div className="containerDiv flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="max-w-[600px] flex flex-col gap-12">
        <h1>Find Jobs & Hire Talent with <span className="text-[var(--primary-color)]">MployUs</span></h1>
        <p>At MployUs, we connect jobseekers with top opportunities and help businesses hire effortlessly.</p>

        <div className="flex gap-4">
          <button className="button">Request Talents</button>
          <button className="inverseButton">Explore Vacancies</button>
        </div>
      </div>

      {/* Image container with relative positioning */}
      <div className="relative w-[516px] h-[344px]">
        <Image
          src="/images/teamHeroPic.png"
          alt="Team Hero Pic"
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>
    </div>
  );
}