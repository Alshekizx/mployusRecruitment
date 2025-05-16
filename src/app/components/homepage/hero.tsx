import Image from "next/image";

export default function Hero() {
  return (
    <div className="containerDiv flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="flex flex-col gap-12 max-w-xl">
        <h1>
          Find Jobs & Hire Talent with{" "}
          <span className="text-[var(--primary-color)]">MployUs</span>
        </h1>
        <p className="text-[var(--text-muted)]">
          At MployUs, we connect jobseekers with top opportunities and help
          businesses hire effortlessly.
        </p>

        <div className="flex gap-4">
          <button className="button">Request Talents</button>
          <button className="inverseButton">Explore Vacancies</button>
        </div>
      </div>

      {/* Fixed height to allow Image fill to work correctly */}
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/teamHeroPic.png"
        alt="Team Hero Pic"
        width={630} // or any natural width of your image
        height={460} // or the natural height, no need to calculate it
        className="w-full h-auto "
        priority
      />
  </div>
    </div>
  );
}