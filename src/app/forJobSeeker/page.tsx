'use client';
import { useState } from "react";
import { JobFilter } from "../components/forJobSeakerComponent/topJobFilter";
import { Job, sampleJobs } from "../components/forJobSeakerComponent/sampleData";
import JobFilter2 from "../components/forJobSeakerComponent/jobFilter";
import JobCard from "../components/forJobSeakerComponent/jobCard";
import JobApplicationDetail from "../components/forJobSeakerComponent/jobApplicationDetails";

const jobTypeOptions = [
  { label: 'Full-time', value: 'full-time' },
  { label: 'Part-time', value: 'part-time' },
  { label: 'Contract', value: 'contract' },
];

const workTypeOptions = [
  { label: 'Remote', value: 'remote' },
  { label: 'Onsite', value: 'onsite' },
  { label: 'Hybrid', value: 'hybrid' },
];

const industryOptions = [
  { label: 'Tech', value: 'tech' },
  { label: 'Finance', value: 'finance' },
  { label: 'Healthcare', value: 'healthcare' },
];

export default function Home() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  

  return (
    <div className="containerDiv">
      <div className="py-20 flex flex-col gap-8">
        <p>Find Available Vacancy</p>
        <JobFilter
          jobTypes={jobTypeOptions}
          workTypes={workTypeOptions}
          industries={industryOptions}
        />

        <div className="flex flex-row gap-10">
          <div className="w-full max-w-[350px]">
            <JobFilter2 />
          </div>

          <div className="w-full">
            {selectedJob ? (
              <JobApplicationDetail
                job={selectedJob}
                onBack={() => setSelectedJob(null)} 
              />
            ) : (
              <JobCard jobs={sampleJobs} onJobClick={setSelectedJob} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}