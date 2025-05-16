export default function WhatWeOffer() {

    const services = [
    {
      title: "Access top talent quicker",
      description:
        "With access to over 3 million+ job-seeker profiles and our expert head-hunters, you will easily find the best candidates for your role.",
    },
    {
      title: "Easily filter for the best candidates",
      description:
        "Our matching technology helps you filter, automatically rank and interact with the best candidates that match your criteria.",
    },
    {
      title: "Discover who has the right skills to do the job",
      description:
        "Utilise our personality tests and skills assessments curated by our experts, to validate, compare and rank candidates ability to perform in the role.",
    },
    {
      title: "We can do the work for you",
      description:
        "Get pre-screened and qualified candidates shortlisted by our HR experts to fast track your recruitment process.",
    },
  ];

  return (
    <div className="containerDiv flex flex-col items-center justify-center  gap-20">
      <div className="text-center w-full ">
        <h3 className="text-[var(--primary-color)]">WHAT WE OFFER</h3>
        <p className="text-[var(--text-muted)]">Solutions designed to take your recruitment to the next level</p>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full bg-[var(--card-Trans)] ">
        {services.map((service, index) => (
          <div key={index} className="  p-5">
            <p className="text-[var(--primary-color)]" >{service.title}</p>
            <p className="text-[var(--text-muted)]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}