// forJobSeeker/apply/applyCard.tsx
'use client';
import React from "react";
import { Job } from "@/app/components/forJobSeakerComponent/sampleData"; 
import { MapPinIcon } from "@heroicons/react/24/solid";


interface JobCardProps {
  jobs: Job[];
}

const ApplySection : React.FC<JobCardProps> = ({ jobs}) => {
  const primaryColor = "var(--primary-color)";
  const primaryLight = "var(--primary-200)";
  const primaryBorder = "var(--primary-300)";

  return (
    <div className="flex flex-col space-y-5">

      {jobs.map((job: Job) => (
        <div
          key={job.jobId}
          className="group flex flex-col space-y-2 rounded-lg border-l-4 p-6 transition duration-300"
          style={{
            borderLeftColor: primaryBorder,
            backgroundColor: "var(--secondary-100)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = primaryColor;
            Array.from(e.currentTarget.querySelectorAll("p, span, svg, div")).forEach((el) => {
              (el as HTMLElement).style.color = "#ffffff";
            });
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "white";

            Array.from(e.currentTarget.querySelectorAll("p, span")).forEach((el) => {
              const isHeading = (el as HTMLElement).dataset.role === "heading";
              (el as HTMLElement).style.color = isHeading ? primaryColor : "#4B5563"; 
            });

            const idTag = e.currentTarget.querySelector("[data-role='id']");
            if (idTag) (idTag as HTMLElement).style.color = primaryLight;

            const icon = e.currentTarget.querySelector("svg");
            if (icon) (icon as SVGElement).style.color = primaryLight;

            const jobTypeTag = e.currentTarget.querySelector("[data-role='job-type']");
            if (jobTypeTag) (jobTypeTag as HTMLElement).style.color = primaryColor;
          }}
             >
          <div className="flex justify-between items-start ">
            <p
              className="text-lg font-bold"
              style={{ color: primaryColor }}
              data-role="heading"
            >
              {job.positionName}
            </p>
            <span
              className=""
              style={{ color: primaryLight }}
              data-role="id"
            >
              {job.jobId}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" style={{ color: primaryLight }} />
            <span>{job.location}, {job.country}</span>
            <span className="mx-2">•</span>
            <span>{job.workType}</span>
          </div>

          <p>{job.jobDescription}</p>

          <div
            className=""
            data-role="job-type"
            style={{ color: primaryColor, marginTop: "10px" }}
          >
            {job.jobType}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplySection;