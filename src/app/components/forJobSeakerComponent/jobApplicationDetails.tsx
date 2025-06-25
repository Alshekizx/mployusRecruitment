import React from "react";
import { Job } from "./sampleData";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

interface JobApplicationDetailProps {
  job: Job;
  onBack: () => void;
}

const JobApplicationDetail: React.FC<JobApplicationDetailProps> = ({ job, onBack }) => {
  const router = useRouter();
  
  return (
    <div className=" flex flex-col gap-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2  cursor-pointer group" onClick={onBack}>
        <p className="p111 text-[var(--text-muted)] group-hover:text-[var(--primary-color)] transition">Available Vacancies</p>
        <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[var(--primary-color)] transition" />
        <p className="p111" style={{color:"var(--primary-color)"}}>{job.positionName}</p>
      </div>

      {/* Header Info */}
      <div className="">
        <h4 className="text-3xl font-semibold mb-2">{job.positionName}</h4>
        <p className="text-[var(--primary-200)] ">Job No: {job.jobId}</p>
      </div>

      <div>
      <div className="flex flex-row gap-5 ">
        <p className="p111">Salary Range:</p>
          <p className=" font-semibold p111" style={{color:"var(--primary-color)"}}>{job.salaryRange}</p>
      </div>

      <div className="flex flex-row gap-5 ">
        <p className="p111">Location:</p>
          <p className=" p111 font-semibold " style={{color:"var(--primary-color)"}}>{job.location}, {job.country}</p>
      </div>
      </div>

      {/* Job Metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        
        <div className="p-4 rounded-lg bg-[var(---bg)] bg-[var(--primary-100)] text-center">
          <p className="p11 text-[var(--primary-300)]">Work Model</p>
          <p className=" font-semibold">{job.workType}</p>
        </div>
        <div className="p-4 rounded-lg bg-[var(---bg)] bg-[var(--primary-100)] text-center">
          <p className="p11 text-[var(--primary-300)]">Job Type</p>
          <p className=" font-semibold">{job.jobType}</p>
        </div>
        <div className="p-4 rounded-lg bg-[var(---bg)] bg-[var(--primary-100)] text-center">
          <p className="p11 text-[var(--primary-300)]">Level</p>
          <p className=" font-semibold">{job.jobLevel}</p>
        </div>
      </div>

      {/* Job Description */}
      <div className=" ">
        <h4 className=" mt-10 text-gray-600 font-semibold mb-4">Job Description</h4>
        <div className="p-4 mt-5 text-gray-700 rounded-md bg-gray-100">
           <p className="p1">{job.jobDescription}</p>
        </div>
      </div>

      {/* Responsibilities */}
      <div className=" ">
        <h4 className=" mt-10 text-gray-600 text-2xl font-semibold mb-4">Responsibilities</h4>
        <div className="p-4 mt-5 text-gray-700 rounded-md bg-gray-100">
          <ul className="list-disc pl-6 space-y-2">
          {job.jobResponsibility.map((item, idx) => (
            <li className="p1" key={idx}>{item}</li>
          ))}
        </ul>
        </div>
        
      </div>

      {/* Requirements */}
      <div className=" ">
        <h4 className=" mt-10 text-gray-600 text-2xl font-semibold mb-4">Requirements</h4>
         <div className="p-4 mt-5 text-gray-700 rounded-md bg-gray-100">
           <ul className="list-disc pl-6 space-y-2">
          {job.jobRequirement.map((item, idx) => (
            <li className="p1" key={idx}>{item}</li>
          ))}
        </ul>
         </div>
       
      </div>

      {/* Apply Button */}
      <div className="text-end">

        <button className=" mt-5 button w-1/2" onClick={() => router.push(`/views/forJobSeeker/apply/${job.jobId}`)}>
           <p>Apply</p> 
          </button>

      </div>
    </div>
  );
};

export default JobApplicationDetail;