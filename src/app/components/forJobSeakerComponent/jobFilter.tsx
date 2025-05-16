"use client";
import React, { useEffect, useState } from 'react';

export type FilterOptions = {
  jobType?: string;
  industry?: string;
  workModel?: string;
  country?: string;
  location?: string;
  experienceLevel?: string;
};

type JobFilter2Props = {
  sampleJobs: {
    jobType: string;
    jobSector: string;
    workType: string;
    country: string;
    location: string;
    jobLevel: string;
  }[];
  filters: FilterOptions;
  onFilterChange?: (filters: FilterOptions) => void;
};

const JobFilter2: React.FC<JobFilter2Props> = ({
  sampleJobs,
  filters,
  onFilterChange,
}) => {
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [workModels, setWorkModels] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [experienceLevels, setExperienceLevels] = useState<string[]>([]);

  // Populate dropdown options from sampleJobs
  useEffect(() => {
    const jobTypeSet = new Set<string>();
    const industrySet = new Set<string>();
    const workModelSet = new Set<string>();
    const countrySet = new Set<string>();
    const locationSet = new Set<string>();
    const experienceLevelSet = new Set<string>();

    sampleJobs.forEach((job) => {
      jobTypeSet.add(job.jobType);
      industrySet.add(job.jobSector);
      workModelSet.add(job.workType);
      countrySet.add(job.country);
      locationSet.add(job.location);
      experienceLevelSet.add(job.jobLevel);
    });

    setJobTypes(Array.from(jobTypeSet));
    setIndustries(Array.from(industrySet));
    setWorkModels(Array.from(workModelSet));
    setCountries(Array.from(countrySet));
    setLocations(Array.from(locationSet));
    setExperienceLevels(Array.from(experienceLevelSet));
  }, [sampleJobs]);

  const handleSelect = (key: keyof FilterOptions, value: string) => {
    const updatedFilters = { ...filters, [key]: value };
    onFilterChange?.(updatedFilters);
  };

  const resetFilters = () => {
    onFilterChange?.({});
  };

  const renderDropdown = (
    label: string,
    key: keyof FilterOptions,
    options: string[]
  ) => (
    <div className="">
      <select
        value={filters[key] || ''}
        onChange={(e) => handleSelect(key, e.target.value)}
        className="block w-full border border-[var(--secondary-200)] px-6 py-4 custom-ring-color"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-6">
      <p className="font-medium">Filter Applied</p>

      {/* Tags */}
      <div className='rounded-lg border border-[var(--primary-200)] p-6 bg-[var(--primary-100)]'>
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(filters).map(([key, value]) =>
            value ? (
              <span
                key={key}
                className="rounded-full bg-white border border-pink-100 text-gray-600 text-xs px-3 py-1"
              >
                {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
              </span>
            ) : null
          )}
        </div>

        <button
          onClick={resetFilters}
          className="mb-4 w-full rounded-md border border-pink-500 text-pink-600 py-2 text-sm font-medium hover:bg-pink-100 transition"
        >
          Reset Filter
        </button>
      </div>

      {/* Dropdowns */}
      <div>
        {renderDropdown('Job Type', 'jobType', jobTypes)}
        {renderDropdown('Industry', 'industry', industries)}
        {renderDropdown('Work Model', 'workModel', workModels)}
        {renderDropdown('Country', 'country', countries)}
        {renderDropdown('Location', 'location', locations)}
        {renderDropdown('Experience Level', 'experienceLevel', experienceLevels)}
      </div>
    </div>
  );
};

export default JobFilter2;