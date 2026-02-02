import type { Job } from '../types/job';

export const mockJobs: Job[] = [
  // =========================================================================
  // CATEGORY: DEVELOPMENT (Filter: Software Development)
  // =========================================================================
  
  // JOHANNESBURG (Banking/Enterprise Hub - Java, C#, Angular)
  { id: 'dev-jhb-1', title: 'Junior Java Developer', company: 'Standard Bank', location: 'Johannesburg', salaryMin: 25000, salaryMax: 35000, skills: ['Java', 'Spring Boot', 'SQL'], experienceLevel: 'Junior', category: 'Development' },
  { id: 'dev-jhb-2', title: 'Intermediate C# Developer', company: 'Discovery', location: 'Johannesburg', salaryMin: 45000, salaryMax: 65000, skills: ['C#', '.NET Core', 'Azure', 'SQL'], experienceLevel: 'Mid', category: 'Development' },
  { id: 'dev-jhb-3', title: 'Senior Frontend Engineer', company: 'Nedbank', location: 'Johannesburg', salaryMin: 80000, salaryMax: 110000, skills: ['Angular', 'TypeScript', 'RxJS'], experienceLevel: 'Senior', category: 'Development' },
  { id: 'dev-jhb-4', title: 'Full Stack Developer', company: 'FNB', location: 'Johannesburg', salaryMin: 60000, salaryMax: 90000, skills: ['Java', 'Kotlin', 'Oracle', 'Docker'], experienceLevel: 'Senior', category: 'Development' },
  { id: 'dev-jhb-5', title: 'Graduate Developer', company: 'BBD', location: 'Johannesburg', salaryMin: 22000, salaryMax: 30000, skills: ['C#', 'Java', 'Git'], experienceLevel: 'Junior', category: 'Development' },
  { id: 'dev-jhb-6', title: 'Solutions Architect', company: 'Absa', location: 'Johannesburg', salaryMin: 120000, salaryMax: 160000, skills: ['Architecture', 'Cloud', 'Microservices'], experienceLevel: 'Senior', category: 'Development' },
  { id: 'dev-jhb-7', title: 'Mobile Developer (iOS)', company: 'Investec', location: 'Johannesburg', salaryMin: 50000, salaryMax: 75000, skills: ['Swift', 'SwiftUI', 'Objective-C'], experienceLevel: 'Mid', category: 'Development' },
  { id: 'dev-jhb-8', title: 'Backend Engineer', company: 'Momentum', location: 'Johannesburg', salaryMin: 55000, salaryMax: 75000, skills: ['C#', 'SQL Server', 'Azure'], experienceLevel: 'Mid', category: 'Development' },

  // CAPE TOWN (Startup/Tech Hub - React, Python, AWS)
  { id: 'dev-cpt-1', title: 'Junior React Dev', company: 'Yoco', location: 'Cape Town', salaryMin: 25000, salaryMax: 40000, skills: ['React', 'JavaScript', 'Tailwind'], experienceLevel: 'Junior', category: 'Development' },
  { id: 'dev-cpt-2', title: 'Python Backend Lead', company: 'Takealot', location: 'Cape Town', salaryMin: 95000, salaryMax: 130000, skills: ['Python', 'Django', 'PostgreSQL', 'AWS'], experienceLevel: 'Senior', category: 'Development' },
  { id: 'dev-cpt-3', title: 'Mid-Level Golang Dev', company: 'Luno', location: 'Cape Town', salaryMin: 60000, salaryMax: 85000, skills: ['Go', 'Microservices', 'GRPC'], experienceLevel: 'Mid', category: 'Development' },
  { id: 'dev-cpt-4', title: 'Frontend Developer', company: 'GetSmarter', location: 'Cape Town', salaryMin: 40000, salaryMax: 60000, skills: ['Vue.js', 'JavaScript', 'SASS'], experienceLevel: 'Mid', category: 'Development' },
  { id: 'dev-cpt-5', title: 'Senior PHP Developer', company: 'Woolworths', location: 'Cape Town', salaryMin: 70000, salaryMax: 95000, skills: ['PHP', 'Laravel', 'MySQL'], experienceLevel: 'Senior', category: 'Development' },
  { id: 'dev-cpt-6', title: 'Android Engineer', company: 'SnapScan', location: 'Cape Town', salaryMin: 50000, salaryMax: 80000, skills: ['Kotlin', 'Java', 'Android SDK'], experienceLevel: 'Mid', category: 'Development' },
  { id: 'dev-cpt-7', title: 'Software Engineer Intern', company: 'Amazon', location: 'Cape Town', salaryMin: 30000, salaryMax: 45000, skills: ['Java', 'C++', 'Algorithms'], experienceLevel: 'Junior', category: 'Development' },
  { id: 'dev-cpt-8', title: 'Full Stack Engineer', company: 'Prodigy Finance', location: 'Cape Town', salaryMin: 65000, salaryMax: 90000, skills: ['React', 'Node.js', 'PostgreSQL'], experienceLevel: 'Senior', category: 'Development' },

  // REMOTE (International/Flexible - Ruby, Rust, Web3)
  { id: 'dev-rem-1', title: 'Remote Ruby Developer', company: 'Platform45', location: 'Remote', salaryMin: 50000, salaryMax: 75000, skills: ['Ruby', 'Rails', 'PostgreSQL'], experienceLevel: 'Mid', category: 'Development' },
  { id: 'dev-rem-2', title: 'Senior Tech Lead', company: 'OfferZen', location: 'Remote', salaryMin: 110000, salaryMax: 150000, skills: ['React', 'Node.js', 'System Design'], experienceLevel: 'Senior', category: 'Development' },
  { id: 'dev-rem-3', title: 'Blockchain Developer', company: 'Revix', location: 'Remote', salaryMin: 80000, salaryMax: 120000, skills: ['Solidity', 'Rust', 'Web3'], experienceLevel: 'Senior', category: 'Development' },
  { id: 'dev-rem-4', title: 'WordPress Developer', company: 'Automattic', location: 'Remote', salaryMin: 40000, salaryMax: 60000, skills: ['WordPress', 'PHP', 'React'], experienceLevel: 'Mid', category: 'Development' },

  // =========================================================================
  // CATEGORY: DATA (Filter: Data Analytics)
  // =========================================================================
  
  { id: 'data-1', title: 'Junior Data Analyst', company: 'MultiChoice', location: 'Johannesburg', salaryMin: 25000, salaryMax: 35000, skills: ['Excel', 'SQL', 'PowerBI'], experienceLevel: 'Junior', category: 'Data' },
  { id: 'data-2', title: 'Data Scientist', company: 'Capitec', location: 'Cape Town', salaryMin: 60000, salaryMax: 85000, skills: ['Python', 'Pandas', 'Machine Learning'], experienceLevel: 'Mid', category: 'Data' },
  { id: 'data-3', title: 'Senior Data Engineer', company: 'Vodacom', location: 'Johannesburg', salaryMin: 90000, salaryMax: 120000, skills: ['Spark', 'Hadoop', 'AWS', 'Python'], experienceLevel: 'Senior', category: 'Data' },
  { id: 'data-4', title: 'BI Developer', company: 'ShopriteX', location: 'Cape Town', salaryMin: 45000, salaryMax: 65000, skills: ['PowerBI', 'DAX', 'SQL Server'], experienceLevel: 'Mid', category: 'Data' },
  { id: 'data-5', title: 'Analytics Engineer', company: 'TymeBank', location: 'Remote', salaryMin: 70000, salaryMax: 95000, skills: ['dbt', 'Snowflake', 'SQL'], experienceLevel: 'Senior', category: 'Data' },
  { id: 'data-6', title: 'Junior Data Scientist', company: 'Discovery Insure', location: 'Johannesburg', salaryMin: 30000, salaryMax: 45000, skills: ['R', 'Python', 'Statistics'], experienceLevel: 'Junior', category: 'Data' },
  { id: 'data-7', title: 'AI Engineer', company: 'Aerobotics', location: 'Cape Town', salaryMin: 80000, salaryMax: 110000, skills: ['TensorFlow', 'Python', 'Computer Vision'], experienceLevel: 'Senior', category: 'Data' },
  { id: 'data-8', title: 'Database Administrator', company: 'MTN', location: 'Johannesburg', salaryMin: 50000, salaryMax: 70000, skills: ['Oracle', 'SQL', 'Linux'], experienceLevel: 'Mid', category: 'Data' },
  { id: 'data-9', title: 'Data Analyst Intern', company: 'Mr Price', location: 'Remote', salaryMin: 15000, salaryMax: 20000, skills: ['Excel', 'Python'], experienceLevel: 'Junior', category: 'Data' },

  // =========================================================================
  // CATEGORY: CYBERSECURITY (Filter: Cybersecurity)
  // =========================================================================
  
  { id: 'sec-1', title: 'Security Analyst', company: 'Dimension Data', location: 'Johannesburg', salaryMin: 35000, salaryMax: 50000, skills: ['Network Security', 'Firewalls', 'SIEM'], experienceLevel: 'Mid', category: 'Cybersecurity' },
  { id: 'sec-2', title: 'Penetration Tester', company: 'SensePost', location: 'Remote', salaryMin: 60000, salaryMax: 90000, skills: ['Ethical Hacking', 'Burp Suite', 'Python'], experienceLevel: 'Mid', category: 'Cybersecurity' },
  { id: 'sec-3', title: 'CISO', company: 'Absa', location: 'Johannesburg', salaryMin: 150000, salaryMax: 200000, skills: ['Governance', 'Risk', 'Compliance'], experienceLevel: 'Senior', category: 'Cybersecurity' },
  { id: 'sec-4', title: 'Junior SOC Analyst', company: 'Liquid Intelligent', location: 'Johannesburg', salaryMin: 20000, salaryMax: 30000, skills: ['Networking', 'Linux', 'Monitoring'], experienceLevel: 'Junior', category: 'Cybersecurity' },
  { id: 'sec-5', title: 'Cyber Security Engineer', company: 'Luno', location: 'Cape Town', salaryMin: 75000, salaryMax: 100000, skills: ['AppSec', 'Cloud Security', 'Python'], experienceLevel: 'Senior', category: 'Cybersecurity' },
  { id: 'sec-6', title: 'Identity Access Manager', company: 'Old Mutual', location: 'Cape Town', salaryMin: 55000, salaryMax: 75000, skills: ['IAM', 'Active Directory', 'Azure AD'], experienceLevel: 'Mid', category: 'Cybersecurity' },

  // =========================================================================
  // CATEGORY: CLOUD (Filter: Cloud & DevOps)
  // =========================================================================
  
  { id: 'cloud-1', title: 'AWS Cloud Architect', company: 'Amazon', location: 'Cape Town', salaryMin: 100000, salaryMax: 140000, skills: ['AWS', 'Terraform', 'Architecture'], experienceLevel: 'Senior', category: 'Cloud' },
  { id: 'cloud-2', title: 'DevOps Engineer', company: 'Mukuru', location: 'Cape Town', salaryMin: 65000, salaryMax: 90000, skills: ['Docker', 'Kubernetes', 'CI/CD'], experienceLevel: 'Mid', category: 'Cloud' },
  { id: 'cloud-3', title: 'Azure Specialist', company: 'Altron', location: 'Johannesburg', salaryMin: 55000, salaryMax: 80000, skills: ['Azure', 'PowerShell', 'Active Directory'], experienceLevel: 'Mid', category: 'Cloud' },
  { id: 'cloud-4', title: 'Junior Cloud Support', company: 'Afrihost', location: 'Johannesburg', salaryMin: 18000, salaryMax: 25000, skills: ['Linux', 'Networking', 'Troubleshooting'], experienceLevel: 'Junior', category: 'Cloud' },
  { id: 'cloud-5', title: 'Site Reliability Engineer', company: 'Luno', location: 'Remote', salaryMin: 90000, salaryMax: 120000, skills: ['Go', 'Grafana', 'Prometheus'], experienceLevel: 'Senior', category: 'Cloud' },
  { id: 'cloud-6', title: 'Cloud Engineer', company: 'BCX', location: 'Johannesburg', salaryMin: 50000, salaryMax: 70000, skills: ['AWS', 'Azure', 'Python'], experienceLevel: 'Mid', category: 'Cloud' },

  // =========================================================================
  // CATEGORY: DESIGN (Filter: UI/UX Design)
  // =========================================================================
  
  { id: 'des-1', title: 'UX/UI Designer', company: 'VMLY&R', location: 'Cape Town', salaryMin: 35000, salaryMax: 50000, skills: ['Figma', 'Wireframing', 'Prototyping'], experienceLevel: 'Mid', category: 'Design' },
  { id: 'des-2', title: 'Product Manager', company: 'SnapScan', location: 'Cape Town', salaryMin: 65000, salaryMax: 90000, skills: ['Agile', 'Roadmapping', 'User Research'], experienceLevel: 'Senior', category: 'Design' },
  { id: 'des-3', title: 'Junior Graphic Designer', company: 'Ogilvy', location: 'Johannesburg', salaryMin: 15000, salaryMax: 22000, skills: ['Photoshop', 'Illustrator', 'InDesign'], experienceLevel: 'Junior', category: 'Design' },
  { id: 'des-4', title: 'Product Owner', company: 'Mr D Food', location: 'Remote', salaryMin: 55000, salaryMax: 75000, skills: ['Scrum', 'Jira', 'User Stories'], experienceLevel: 'Mid', category: 'Design' },
  { id: 'des-5', title: 'Senior UX Researcher', company: 'Standard Bank', location: 'Johannesburg', salaryMin: 70000, salaryMax: 95000, skills: ['User Testing', 'Research', 'Figma'], experienceLevel: 'Senior', category: 'Design' },
  { id: 'des-6', title: 'UI Designer', company: 'Superbalist', location: 'Cape Town', salaryMin: 30000, salaryMax: 45000, skills: ['Figma', 'Sketch', 'HTML/CSS'], experienceLevel: 'Mid', category: 'Design' }
];