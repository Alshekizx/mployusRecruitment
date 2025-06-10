import Image from "next/image";

export default function Hero() {
  return (
    <div className="containerDiv flex flex-col lg:flex-row items-center justify-between gap-20">
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
   <div className="relative w-full p-5 lg:w-1/2">
  <Image
    src="/images/backgnd.png"
    alt="Decor Top Right"
    width={200}
    height={200}
    className="absolute z-0 w-80 h-auto right-0 top-0"
    priority
  />
  <Image
    src="/images/backgnd.png"
    alt="Decor Bottom Left"
    width={200}
    height={200}
    className="absolute z-0 w-80 h-auto left-0 bottom-0 transform scale-x-[-1]"
    priority
  />
  <Image
    src="/images/teamHeroPic2.png"
    alt="Team Hero Pic"
    width={630}
    height={460}
    className="relative object-contain z-10 left-1/2 transform -translate-x-1/2 mt-2 h-auto"
    priority
  />
</div>
    </div>
  );
}