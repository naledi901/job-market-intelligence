import type { Job } from '../types/job';

export const mockJobs: Job[] = [
  // DEVELOPMENT
  { id: '1', title: 'Junior Frontend Dev', company: 'Yoco', location: 'Cape Town', salaryMin: 25000, salaryMax: 35000, skills: ['React', 'TypeScript', 'Tailwind', 'Git'], experienceLevel: 'Junior', category: 'Development' },
  { id: '3', title: 'Junior Web Developer', company: 'SovTech', location: 'Johannesburg', salaryMin: 20000, salaryMax: 30000, skills: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP'], experienceLevel: 'Junior', category: 'Development' },
  { id: '6', title: 'React Native Developer', company: 'Momentum', location: 'Pretoria', salaryMin: 45000, salaryMax: 65000, skills: ['React Native', 'TypeScript', 'Firebase', 'Redux'], experienceLevel: 'Mid', category: 'Development' },
  { id: '7', title: 'Full Stack Engineer', company: 'Takealot', location: 'Cape Town', salaryMin: 55000, salaryMax: 75000, skills: ['React', 'Node.js', 'PostgreSQL', 'GCP'], experienceLevel: 'Mid', category: 'Development' },
  { id: '13', title: 'Senior Java Developer', company: 'Entelect', location: 'Johannesburg', salaryMin: 80000, salaryMax: 110000, skills: ['Java', 'Spring Boot', 'Microservices', 'Kubernetes'], experienceLevel: 'Senior', category: 'Development' },
  { id: '14', title: 'Tech Lead', company: 'OfferZen', location: 'Remote', salaryMin: 95000, salaryMax: 130000, skills: ['React', 'Node.js', 'System Design', 'Mentorship'], experienceLevel: 'Senior', category: 'Development' },
  { id: '20', title: 'Mobile Lead', company: 'DStv', location: 'Johannesburg', salaryMin: 90000, salaryMax: 115000, skills: ['Swift', 'Kotlin', 'Mobile Architecture', 'Team Leadership'], experienceLevel: 'Senior', category: 'Development' },

  // DATA
  { id: '2', title: 'Graduate Analyst', company: 'Discovery Bank', location: 'Johannesburg', salaryMin: 22000, salaryMax: 30000, skills: ['SQL', 'Excel', 'Python', 'PowerBI'], experienceLevel: 'Junior', category: 'Data' },
  { id: '4', title: 'Trainee Data Scientist', company: 'ShopriteX', location: 'Remote', salaryMin: 28000, salaryMax: 40000, skills: ['Python', 'Pandas', 'Machine Learning', 'SQL'], experienceLevel: 'Junior', category: 'Data' },
  { id: '9', title: 'Business Analyst', company: 'FirstRand', location: 'Johannesburg', salaryMin: 45000, salaryMax: 60000, skills: ['SQL', 'BPMN', 'Jira', 'Stakeholder Management'], experienceLevel: 'Mid', category: 'Data' },
  { id: '12', title: 'Data Engineer', company: 'Vodacom', location: 'Johannesburg', salaryMin: 60000, salaryMax: 80000, skills: ['Python', 'Spark', 'AWS', 'Big Data'], experienceLevel: 'Mid', category: 'Data' },
  { id: '16', title: 'Senior Data Analyst', company: 'Capitec', location: 'Cape Town', salaryMin: 75000, salaryMax: 95000, skills: ['SQL', 'Python', 'Tableau', 'Statistics'], experienceLevel: 'Senior', category: 'Data' },

  // CYBERSECURITY & CLOUD
  { id: '8', title: 'Cyber Security Analyst', company: 'Standard Bank', location: 'Johannesburg', salaryMin: 50000, salaryMax: 70000, skills: ['Network Security', 'Python', 'Linux', 'Ethical Hacking'], experienceLevel: 'Mid', category: 'Cybersecurity' },
  { id: '15', title: 'Cloud Architect', company: 'AWS South Africa', location: 'Cape Town', salaryMin: 100000, salaryMax: 150000, skills: ['AWS', 'Terraform', 'Go', 'Security'], experienceLevel: 'Senior', category: 'Cloud' },
  { id: '17', title: 'DevOps Engineer', company: 'Mukuru', location: 'Cape Town', salaryMin: 85000, salaryMax: 110000, skills: ['Docker', 'Kubernetes', 'CI/CD', 'Azure'], experienceLevel: 'Senior', category: 'Cloud' },
  { id: '5', title: 'Support Engineer', company: 'Luno', location: 'Cape Town', salaryMin: 25000, salaryMax: 35000, skills: ['Linux', 'SQL', 'Bash', 'Customer Support'], experienceLevel: 'Junior', category: 'Cloud' },

  // DESIGN
  { id: '11', title: 'UX/UI Designer', company: 'VMLY&R', location: 'Johannesburg', salaryMin: 40000, salaryMax: 55000, skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'], experienceLevel: 'Mid', category: 'Design' },
  { id: '18', title: 'Product Manager', company: 'SnapScan', location: 'Cape Town', salaryMin: 70000, salaryMax: 90000, skills: ['Agile', 'Product Strategy', 'Jira', 'Analytics'], experienceLevel: 'Senior', category: 'Design' },
];