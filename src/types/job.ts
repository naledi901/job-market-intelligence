// This is a "Blueprint". It says every job MUST have these things.
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  skills: string[]; // This is a list of words
  experienceLevel: 'Junior' | 'Mid' | 'Senior';
}