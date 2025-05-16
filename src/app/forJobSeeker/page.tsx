'use client';
import { useState } from "react";
import { JobFilter } from "../components/forJobSeakerComponent/topJobFilter";
import { Job, sampleJobs } from "../components/forJobSeakerComponent/sampleData";
import JobFilter2 from "../components/forJobSeakerComponent/jobFilter";
import JobCard from "../components/forJobSeakerComponent/jobCard";
import JobApplicationDetail from "../components/forJobSeakerComponent/jobApplicationDetails";
import type { FilterOptions } from "../components/forJobSeakerComponent/jobFilter"; 

const jobTypeOptions = Array.from(new Set(sampleJobs.map(job => job.jobType))).map(value => ({
  label: value,
  value,
}));

const workTypeOptions = Array.from(new Set(sampleJobs.map(job => job.workType))).map(value => ({
  label: value,
  value,
}));

const industryOptions = Array.from(new Set(sampleJobs.map(job => job.jobSector))).map(value => ({
  label: value,
  value,
}));



export default function ForJobSeeker() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({});



  // Filtering logic
    const filteredJobs = sampleJobs.filter(job =>
      (!filters.jobType || job.jobType === filters.jobType) &&
      (!filters.workModel || job.workType === filters.workModel) &&
      (!filters.industry || job.jobSector === filters.industry)
    );

  return (
    <div className="containerDiv">
      <div className="py-20 flex flex-col gap-8">
        <p>Find Available Vacancy</p>
      <JobFilter
        filters={{
          jobType: filters.jobType,
          workType: filters.workModel, // ensure naming matches
          industry: filters.industry,
        }}
        jobTypes={jobTypeOptions}
        workTypes={workTypeOptions}
        industries={industryOptions}
        onFilterChange={(updated) =>
          setFilters((prev) => ({
            ...prev,
            jobType: updated.jobType,
            workModel: updated.workType,
            industry: updated.industry,
          }))
        }
      />

        <div className="flex flex-row gap-10">
          <div className="hidden md:block w-full max-w-[300px]">
            <JobFilter2
              filters={filters}
              sampleJobs={sampleJobs}
              onFilterChange={setFilters}
            />
          </div>

          <div className="w-full">
            {selectedJob ? (
              <JobApplicationDetail
                job={selectedJob}
                onBack={() => setSelectedJob(null)} 
              />
            ) : (
              <JobCard jobs={filteredJobs} onJobClick={setSelectedJob} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
