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
  isApplied: boolean;
}

// Sample data for jobs
export const sampleJobs: Job[] = [
  {
    jobId: "JID-001",
    positionName: "Frontend Developer",
    jobSector: "Information Technology",
    location: "Lagos",
    country: "England",
    jobType: "Full-Time",
    workType: "Remote",
    salaryRange: "₦300,000 - ₦450,000/month",
    jobLevel: "Mid-Level",
    jobDescription:
      "We are seeking a skilled Frontend Developer to join our dynamic team in building scalable and user-friendly web applications.",
    jobResponsibility: [
      "Develop responsive web interfaces using React.js",
      "Collaborate with designers and backend developers",
      "Optimize applications for maximum speed and scalability",
    ],
    jobRequirement: [
      "2+ years of experience in frontend development",
      "Proficiency in JavaScript, HTML, CSS, and React.js",
      "Good understanding of RESTful APIs and Git",
    ],
    isApplied: true,
  },
  {
    jobId: "JID-002",
    positionName: "Marketing Manager",
    jobSector: "Marketing & Communications",
    location: "Nairobi",
    country: "Scotland",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "KES 150,000 - KES 250,000/month",
    jobLevel: "Senior-Level",
    jobDescription:
      "We are looking for a creative and strategic Marketing Manager to drive our campaigns and enhance brand visibility.",
    jobResponsibility: [
      "Design and implement marketing strategies aligned with business goals",
      "Lead the marketing team and supervise campaign execution",
      "Analyze marketing data and performance metrics",
    ],
    jobRequirement: [
      "5+ years experience in a marketing leadership role",
      "Excellent communication and project management skills",
      "Knowledge of digital marketing tools and analytics platforms",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-003",
    positionName: "Customer Support Representative",
    jobSector: "Customer Service",
    location: "Cape Town",
    country: "Wales",
    jobType: "Part-Time",
    workType: "Hybrid",
    salaryRange: "ZAR 8,000 - ZAR 12,000/month",
    jobLevel: "Entry-Level",
    jobDescription:
      "Join our support team to help resolve customer issues, ensure satisfaction, and maintain service quality.",
    jobResponsibility: [
      "Respond to customer inquiries via chat, email, and phone",
      "Troubleshoot and resolve product issues",
      "Document customer feedback and common problems",
    ],
    jobRequirement: [
      "Strong communication and interpersonal skills",
      "Familiarity with CRM tools",
      "Patience and a problem-solving mindset",
    ],
    isApplied: true,
  },

  // New 6 entries below

  {
    jobId: "JID-004",
    positionName: "Backend Developer",
    jobSector: "Information Technology",
    location: "Abuja",
    country: "England",
    jobType: "Full-Time",
    workType: "Remote",
    salaryRange: "₦350,000 - ₦500,000/month",
    jobLevel: "Mid-Level",
    jobDescription:
      "Looking for an experienced Backend Developer to create robust APIs and services with Node.js and databases.",
    jobResponsibility: [
      "Develop and maintain server-side logic",
      "Integrate front-end elements with server-side logic",
      "Manage database design and integration",
    ],
    jobRequirement: [
      "3+ years experience with Node.js and Express",
      "Experience with SQL and NoSQL databases",
      "Familiarity with RESTful API design",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-005",
    positionName: "Graphic Designer",
    jobSector: "Design",
    location: "Accra",
    country: "Northern Ireland",
    jobType: "Contract",
    workType: "On-site",
    salaryRange: "GHS 3,000 - GHS 5,000/month",
    jobLevel: "Mid-Level",
    jobDescription:
      "Seeking a creative Graphic Designer to produce visual concepts for print and digital media.",
    jobResponsibility: [
      "Design logos, brochures, and social media graphics",
      "Collaborate with marketing and content teams",
      "Ensure consistent brand messaging",
    ],
    jobRequirement: [
      "Proficiency in Adobe Creative Suite",
      "Strong portfolio showcasing design skills",
      "Attention to detail and creativity",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-006",
    positionName: "Data Analyst",
    jobSector: "Data Science",
    location: "Kampala",
    country: "Republic of Ireland",
    jobType: "Full-Time",
    workType: "Hybrid",
    salaryRange: "UGX 2,000,000 - UGX 3,500,000/month",
    jobLevel: "Entry-Level",
    jobDescription:
      "Analyze data to provide actionable insights supporting business decisions.",
    jobResponsibility: [
      "Collect and analyze data sets",
      "Generate reports and visualizations",
      "Collaborate with teams to understand data needs",
    ],
    jobRequirement: [
      "Proficiency with Excel and SQL",
      "Experience with data visualization tools (e.g. Tableau)",
      "Strong analytical and problem-solving skills",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-007",
    positionName: "Human Resources Specialist",
    jobSector: "Human Resources",
    location: "Lagos",
    country: "England",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "₦200,000 - ₦300,000/month",
    jobLevel: "Mid-Level",
    jobDescription:
      "Manage recruitment, employee relations, and HR policies.",
    jobResponsibility: [
      "Conduct interviews and onboarding",
      "Manage employee records",
      "Support HR policy development",
    ],
    jobRequirement: [
      "3+ years HR experience",
      "Excellent communication skills",
      "Knowledge of labor laws",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-008",
    positionName: "Project Manager",
    jobSector: "Construction",
    location: "Johannesburg",
    country: "Wales",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "ZAR 30,000 - ZAR 45,000/month",
    jobLevel: "Senior-Level",
    jobDescription:
      "Lead construction projects ensuring on-time and on-budget delivery.",
    jobResponsibility: [
      "Plan and manage project timelines",
      "Coordinate teams and subcontractors",
      "Monitor budgets and resources",
    ],
    jobRequirement: [
      "PMP certification preferred",
      "5+ years experience in construction management",
      "Strong leadership and communication skills",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-009",
    positionName: "Digital Marketing Specialist",
    jobSector: "Marketing & Communications",
    location: "Dar es Salaam",
    country: "Republic of Ireland",
    jobType: "Part-Time",
    workType: "Remote",
    salaryRange: "TZS 1,000,000 - TZS 1,500,000/month",
    jobLevel: "Entry-Level",
    jobDescription:
      "Develop and implement digital marketing campaigns to boost online presence.",
    jobResponsibility: [
      "Manage social media channels",
      "Optimize SEO and SEM strategies",
      "Analyze campaign performance",
    ],
    jobRequirement: [
      "Knowledge of Google Analytics and AdWords",
      "Strong written and verbal communication",
      "Creativity and initiative",
    ],
    isApplied: false,
  },

  {
    jobId: "JID-010",
    positionName: "UI/UX Designer",
    jobSector: "Design",
    location: "Kigali",
    country: "Northern Ireland",
    jobType: "Full-Time",
    workType: "Remote",
    salaryRange: "FRW 400,000 - FRW 600,000/month",
    jobLevel: "Mid-Level",
    jobDescription:
      "Design intuitive user interfaces and improve user experience for web and mobile apps.",
    jobResponsibility: [
      "Create wireframes, prototypes, and design mockups",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
    ],
    jobRequirement: [
      "Experience with Figma, Sketch, or Adobe XD",
      "Strong portfolio in UI/UX design",
      "Understanding of design principles and accessibility",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-011",
    positionName: "DevOps Engineer",
    jobSector: "Information Technology",
    location: "Lagos",
    country: "England",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "₦400,000 - ₦600,000/month",
    jobLevel: "Senior-Level",
    jobDescription:
      "Manage infrastructure, automate deployments, and ensure high availability.",
    jobResponsibility: [
      "Set up CI/CD pipelines",
      "Monitor system performance and reliability",
      "Automate infrastructure provisioning",
    ],
    jobRequirement: [
      "Experience with AWS, Azure, or GCP",
      "Proficiency with Docker and Kubernetes",
      "Strong scripting skills (Bash, Python)",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-012",
    positionName: "Content Writer",
    jobSector: "Marketing & Communications",
    location: "Accra",
    country: "Northern Ireland",
    jobType: "Part-Time",
    workType: "Remote",
    salaryRange: "GHS 1,200 - GHS 2,000/month",
    jobLevel: "Entry-Level",
    jobDescription:
      "Create engaging and SEO-friendly content for blogs, websites, and social media.",
    jobResponsibility: [
      "Write articles, blogs, and marketing copy",
      "Research industry topics",
      "Collaborate with marketing team",
    ],
    jobRequirement: [
      "Excellent writing and grammar skills",
      "Familiarity with SEO best practices",
      "Ability to meet deadlines",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-013",
    positionName: "Mobile App Developer",
    jobSector: "Information Technology",
    location: "Nairobi",
    country: "Scotland",
    jobType: "Full-Time",
    workType: "Hybrid",
    salaryRange: "KES 250,000 - KES 400,000/month",
    jobLevel: "Mid-Level",
    jobDescription:
      "Develop and maintain mobile applications for iOS and Android platforms.",
    jobResponsibility: [
      "Write clean and maintainable code",
      "Collaborate with UI/UX designers",
      "Test and debug applications",
    ],
    jobRequirement: [
      "Experience with React Native or Flutter",
      "Knowledge of mobile app lifecycle",
      "Familiarity with RESTful APIs",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-014",
    positionName: "Financial Analyst",
    jobSector: "Finance",
    location: "Lagos",
    country: "Northern Ireland",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "₦350,000 - ₦500,000/month",
    jobLevel: "Mid-Level",
    jobDescription:
      "Analyze financial data and assist in budgeting and forecasting.",
    jobResponsibility: [
      "Prepare financial reports",
      "Monitor budgets and expenses",
      "Conduct variance analysis",
    ],
    jobRequirement: [
      "Degree in Finance, Accounting or related field",
      "Strong analytical skills",
      "Proficiency with Excel and financial software",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-015",
    positionName: "Sales Executive",
    jobSector: "Sales",
    location: "Dar es Salaam",
    country: "Republic of Ireland",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "TZS 1,500,000 - TZS 2,500,000/month",
    jobLevel: "Entry-Level",
    jobDescription:
      "Drive sales growth by acquiring new clients and maintaining existing relationships.",
    jobResponsibility: [
      "Identify and contact potential clients",
      "Prepare sales presentations",
      "Meet and exceed sales targets",
    ],
    jobRequirement: [
      "Strong communication and negotiation skills",
      "Self-motivated and goal-oriented",
      "Previous sales experience is a plus",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-016",
    positionName: "Quality Assurance Tester",
    jobSector: "Information Technology",
    location: "Johannesburg",
    country: "Wales",
    jobType: "Contract",
    workType: "Remote",
    salaryRange: "ZAR 15,000 - ZAR 25,000/month",
    jobLevel: "Entry-Level",
    jobDescription:
      "Test software applications to ensure functionality, performance, and security.",
    jobResponsibility: [
      "Develop and execute test plans",
      "Report bugs and issues",
      "Collaborate with developers on fixes",
    ],
    jobRequirement: [
      "Basic understanding of QA methodologies",
      "Attention to detail",
      "Experience with automated testing tools is a plus",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-017",
    positionName: "HR Manager",
    jobSector: "Human Resources",
    location: "Kampala",
    country: "Republic of Ireland",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "UGX 3,500,000 - UGX 5,000,000/month",
    jobLevel: "Senior-Level",
    jobDescription:
      "Lead the HR team and oversee all HR functions and policies.",
    jobResponsibility: [
      "Develop HR strategies",
      "Manage recruitment and employee relations",
      "Ensure compliance with labor laws",
    ],
    jobRequirement: [
      "5+ years HR experience",
      "Strong leadership skills",
      "Excellent communication and organizational skills",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-018",
    positionName: "Network Administrator",
    jobSector: "Information Technology",
    location: "Lagos",
    country: "England",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "₦300,000 - ₦450,000/month",
    jobLevel: "Mid-Level",
    jobDescription:
      "Manage and maintain company network infrastructure ensuring reliability and security.",
    jobResponsibility: [
      "Install, configure and maintain network equipment",
      "Monitor network performance",
      "Troubleshoot network issues",
    ],
    jobRequirement: [
      "Experience with Cisco or Juniper hardware",
      "Strong problem-solving skills",
      "Knowledge of network security protocols",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-019",
    positionName: "Social Media Manager",
    jobSector: "Marketing & Communications",
    location: "Accra",
    country: "Northern Ireland",
    jobType: "Full-Time",
    workType: "Remote",
    salaryRange: "GHS 3,000 - GHS 4,500/month",
    jobLevel: "Mid-Level",
    jobDescription:
      "Manage social media accounts to enhance brand presence and engagement.",
    jobResponsibility: [
      "Develop social media strategies",
      "Create and curate content",
      "Analyze engagement metrics",
    ],
    jobRequirement: [
      "Experience with social media platforms and tools",
      "Strong communication skills",
      "Creative mindset",
    ],
    isApplied: false,
  },
  {
    jobId: "JID-020",
    positionName: "Technical Support Engineer",
    jobSector: "Information Technology",
    location: "Nairobi",
    country: "Scotland",
    jobType: "Full-Time",
    workType: "Hybrid",
    salaryRange: "KES 120,000 - KES 180,000/month",
    jobLevel: "Entry-Level",
    jobDescription:
      "Provide technical assistance and support for incoming queries and issues.",
    jobResponsibility: [
      "Respond to support requests",
      "Troubleshoot hardware and software issues",
      "Document solutions and procedures",
    ],
    jobRequirement: [
      "Basic understanding of IT systems",
      "Good communication skills",
      "Ability to work under pressure",
    ],
    isApplied: false,
  },
];