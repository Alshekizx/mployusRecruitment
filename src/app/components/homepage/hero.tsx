import Image from "next/image";

export default function Hero() {
  return (
    <div className="containerDiv flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="flex flex-col gap-4 max-w-xl">
        <p className="text-[var(--primary-color)]">Comprehensive Talent Solutions</p>
        <h1>
          Expert {" "} <span className="text-[var(--primary-color)]">Talent</span>{" "}
          & {" "}<span className="text-[var(--primary-color)]">Candidate</span>{" "}
          Sourcing for Smarter Hiring
        </h1>
        <p className="text-[var(--text-muted)]">
          We help you find the right talent, faster. 
          Through targeted job postings, active search, 
          and thorough screening, we connect you with 
          qualified candidates for both full-time and 
          temporary rolesmatched to your needs, culture, 
          and timeline.
        </p>

        <div className="flex gap-4">
          <button className="button">Request Talents</button>
          <button className="inverseButton">Explore Vacancies</button>
        </div>
        <div className="flex flex-row gap-4 text-center text-[var(--text-muted)]">
          <div><h3>120+</h3> <span>Job post</span></div>
          <div><h3>64+</h3><span>Available Talents</span></div>
          <div><h3>50+</h3><span>Successful Placements</span></div>
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