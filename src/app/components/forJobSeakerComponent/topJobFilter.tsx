'use client';

import React, { useState } from 'react';

type FilterOption = {
  label: string;
  value: string;
};

type JobFilterProps = {
  jobTypes: FilterOption[];
  workTypes: FilterOption[];
  industries: FilterOption[];
};

export const JobFilter: React.FC<JobFilterProps> = ({
  jobTypes,
  workTypes,
  industries,
}) => {
  const [jobType, setJobType] = useState('');
  const [workType, setWorkType] = useState('');
  const [industry, setIndustry] = useState('');

  const handleSearch = () => {
    console.log('Search Filters:', {
      jobType,
      workType,
      industry,
    });
    // You can call a client-side fetch here if needed
  };

  return (
    <div className="flex flex-row items-center justify-between gap-4  p-4 rounded-lg  border border-1" style={{ backgroundColor: 'var(--secondary-100)', borderColor: 'var(--secondary-200)' }}>
      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className="p-4 border border-1 rounded-md w-full"
        style={{borderColor: 'var(--secondary-200)', backgroundColor: '#ffffff'}}
      >
        <option value="">Job Type</option>
        {jobTypes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        value={workType}
        onChange={(e) => setWorkType(e.target.value)}
        className="p-4 border border-1 rounded-md w-full"
        style={{borderColor: 'var(--secondary-200)', backgroundColor: '#ffffff'}}
      >
        <option value="">Work Type</option>
        {workTypes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="p-4 border border-1 rounded-md w-full"
        style={{borderColor: 'var(--secondary-200)', backgroundColor: '#ffffff'}}
      >
        <option value="">Industry</option>
        {industries.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button onClick={handleSearch} className="button w-full">
        Search
      </button>
    </div>
  );
};