import type { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Junior React Developer',
    company: 'Standard Bank',
    location: 'Johannesburg',
    salaryMin: 25000,
    salaryMax: 35000,
    skills: ['React', 'TypeScript', 'Tailwind'],
    experienceLevel: 'Junior'
  },
  {
    id: '2',
    title: 'Data Analyst',
    company: 'Vodacom',
    location: 'Midrand',
    salaryMin: 30000,
    salaryMax: 45000,
    skills: ['Python', 'SQL', 'Excel'],
    experienceLevel: 'Junior'
  }
];