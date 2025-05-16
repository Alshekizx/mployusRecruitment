import { ChevronRightIcon } from '@heroicons/react/20/solid';


export default function TailoredHiringSolutions() {

  
    const services = [
    {
      title: "Permanent Job Placement",
      description:
        "We connect businesses with qualified candidates for long-term roles, focusing on cultural fit and future growth.",
    },
    {
      title: "Contract Staffing",
      description:
        "Quick and flexible staffing for temporary or project-based needs, helping you scale your team without long-term commitments.",
    },
    {
      title: "Resourcing Services",
      description:
        "End-to-end support for sourcing, screening, and onboarding talent ideal for businesses needing consistent staffing assistance.",
    },
    {
      title: "Executive Search",
      description:
        "Targeted recruitment for senior and executive roles, helping you secure experienced leaders to drive business growth.",
    },
  ];

  return (
    <div className="containerDiv flex flex-col items-center justify-center  gap-20">
      <div className="text-center w-full max-w-[800px] ">
        <h3 className="text-[var(--primary-color)]">Tailored hiring solutions to match your business needs</h3>
        <p className="text-[var(--text-muted)] mt-5">Whether you&apos;re scaling quickly or building a long-term team, we connect you with the right talent through flexible and strategic recruitment models.</p>
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-4 w-full gap-6">
        {services.map((service, index) => {
          const gradientClass =
            index % 2 === 0
              ? 'bg-gradient-to-br from-[var(--primary-color)] to-[#4d023c]'
              : 'bg-gradient-to-br from-[var(--primary-color)] to-[#86056a]';

          return (
            <div
              key={index}
              className={`flex flex-col justify-between items-center rounded-lg gap-5 p-5 ${gradientClass}`}
            >
              <h3 className="text-center w-full max-w-[220px] text-white">{service.title}</h3>
              <p className="text-center text-white">{service.description}</p>
              <div className="flex items-center gap-2 border border-white text-white p-2 cursor-pointer hover:bg-white hover:text-black transition">
                <span>Learn more</span>
                <ChevronRightIcon className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}