// component/sampleData.tsx
export interface Job {
  jobId: string;
  positionName: string;
  jobSector: string;
  location: string;
  country: string;
  jobType: string;
  workType: string;
  salaryRange: string;
  jobLevel: string;
  jobDescription: string;
  jobResponsibility: string[];
  jobRequirement: string[];
}

// Sample data for jobs
export const sampleJobs: Job[] = [
  {
    jobId: "JID-001",
    positionName: "Frontend Developer",
    jobSector: "Information Technology",
    location: "Lagos",
    country: "Nigeria",
    jobType: "Full-Time",
    workType: "Remote",
    salaryRange: "₦300,000 - ₦450,000/month",
    jobLevel: "Mid-Level",
    jobDescription: "We are seeking a skilled Frontend Developer to join our dynamic team in building scalable and user-friendly web applications.",
    jobResponsibility: [
      "Develop responsive web interfaces using React.js",
      "Collaborate with designers and backend developers",
      "Optimize applications for maximum speed and scalability"
    ],
    jobRequirement: [
      "2+ years of experience in frontend development",
      "Proficiency in JavaScript, HTML, CSS, and React.js",
      "Good understanding of RESTful APIs and Git"
    ]
  },
  {
    jobId: "JID-002",
    positionName: "Marketing Manager",
    jobSector: "Marketing & Communications",
    location: "Nairobi",
    country: "Kenya",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "KES 150,000 - KES 250,000/month",
    jobLevel: "Senior-Level",
    jobDescription: "We are looking for a creative and strategic Marketing Manager to drive our campaigns and enhance brand visibility.",
    jobResponsibility: [
      "Design and implement marketing strategies aligned with business goals",
      "Lead the marketing team and supervise campaign execution",
      "Analyze marketing data and performance metrics"
    ],
    jobRequirement: [
      "5+ years experience in a marketing leadership role",
      "Excellent communication and project management skills",
      "Knowledge of digital marketing tools and analytics platforms"
    ]
  },
  {
    jobId: "JID-003",
    positionName: "Customer Support Representative",
    jobSector: "Customer Service",
    location: "Cape Town",
    country: "South Africa",
    jobType: "Part-Time",
    workType: "Hybrid",
    salaryRange: "ZAR 8,000 - ZAR 12,000/month",
    jobLevel: "Entry-Level",
    jobDescription: "Join our support team to help resolve customer issues, ensure satisfaction, and maintain service quality.",
    jobResponsibility: [
      "Respond to customer inquiries via chat, email, and phone",
      "Troubleshoot and resolve product issues",
      "Document customer feedback and common problems"
    ],
    jobRequirement: [
      "Strong communication and interpersonal skills",
      "Familiarity with CRM tools",
      "Patience and a problem-solving mindset"
    ]
  }
];