export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  skills: string[];
  experienceLevel: 'Junior' | 'Mid' | 'Senior';
  category: 'Development' | 'Data' | 'Cybersecurity' | 'Cloud' | 'Design'; // <-- NEW!
}