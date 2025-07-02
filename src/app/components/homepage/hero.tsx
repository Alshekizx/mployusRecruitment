import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="pt-10">
         <div className="containerDiv flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="flex flex-col gap-4 max-w-[719px]">
        <h4 className="text-[var(--primary-color)]">Comprehensive Talent Solutions</h4>
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

        <div className="flex gap-4 my-6">
          <Link className="button p11" href="/views/employersTabs">Request Talents</Link>
          <Link className="inverseButton p11" href="/views/jobSeekersTabs">Explore Vacancies</Link>
        </div>
        <div className="flex flex-row gap-4 text-center text-[var(--text-dark)]">
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
    className="absolute z-0 w-70 h-auto right-0 top-0"
    priority
  />
  <Image
    src="/images/backgnd.png"
    alt="Decor Bottom Left"
    width={200}
    height={200}
    className="absolute z-0 w-70 h-auto left-0 bottom-0 transform scale-x-[-1]"
    priority
  />
  <Image
    src="/images/teamHeroPic2.png"
    alt="Team Hero Pic"
    width={630}
    height={460}
    className="relative object-contain z-10 left-1/2 transform -translate-x-1/2 mt-2 h-auto max-h-[550px]"
    priority
  />
</div>
    </div>
    </div>
  );
}