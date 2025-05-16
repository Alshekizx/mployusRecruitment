'use client';
import { useState } from "react";
import { JobFilter } from "../components/forJobSeakerComponent/topJobFilter";
import { Job, sampleJobs } from "../components/forJobSeakerComponent/sampleData";
import JobFilter2 from "../components/forJobSeakerComponent/jobFilter";
import JobCard from "../components/forJobSeakerComponent/jobCard";
import JobApplicationDetail from "../components/forJobSeakerComponent/jobApplicationDetails";
import type { FilterOptions } from "../components/forJobSeakerComponent/jobFilter"; 
import StickyBox from 'react-sticky-box';

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
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
 
  


  // Filtering logic
    const filteredJobs = sampleJobs.filter(job =>
  (!filters.jobType || job.jobType === filters.jobType) &&
  (!filters.workModel || job.workType === filters.workModel) &&
  (!filters.industry || job.jobSector === filters.industry)
);

const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  return (
    <div className="containerDiv">
      <div className="pt-20 flex flex-col gap-16">
        <div className="flex flex-col gap-6" >
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

      </div>

        <div className="flex flex-row gap-10 min-h-[1000px]">
          <div className="hidden lg:block" style={{ width: '350px' }}>
            <StickyBox offsetTop={40} offsetBottom={0}>
              <div>
                <JobFilter2
                  filters={filters}
                  sampleJobs={sampleJobs}
                  onFilterChange={setFilters}
                />
              </div>
            </StickyBox>
          </div>


          <div className="w-full">
            {selectedJob ? (
              <JobApplicationDetail
                job={selectedJob}
                onBack={() => setSelectedJob(null)} 
              />
            ) : (
              <JobCard jobs={filteredJobs} onJobClick={setSelectedJob} 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
