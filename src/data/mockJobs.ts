import type { Job } from '../types/job';

// --- 1. CONFIGURATION ---
const LOCATIONS = ['Johannesburg', 'Cape Town', 'Remote'];

const COMPANIES = {
  Johannesburg: ['Standard Bank', 'FNB', 'Discovery', 'Absa', 'Nedbank', 'Vodacom', 'MTN', 'Multichoice', 'Investec', 'Dimension Data'],
  'Cape Town': ['Takealot', 'Yoco', 'Amazon AWS', 'Luno', 'GetSmarter', 'Woolworths', 'ShopriteX', 'SnapScan', 'Aerobotics', 'Prodigy Finance'],
  Remote: ['OfferZen', 'Platform45', 'Automattic', 'Canonical', 'GitLab', 'TymeBank', 'SensePost', 'Revix', 'Meltwater', 'Derivco']
};

// --- 2. SKILL POOLS ---
const SKILL_SETS = {
  Development: { 
    common: ['Git', 'Agile', 'Jira', 'CI/CD', 'Unit Testing'], 
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular', 'CSS', 'HTML5', 'Redux'],
    backend: ['Java', 'C#', '.NET Core', 'Spring Boot', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'AWS', 'Docker'],
    mobile: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'iOS', 'Android']
  },
  Data: { 
    // "King" skills are handled in logic, these are the pool for the rest
    pool: ['PowerBI', 'Tableau', 'R', 'Google Analytics', 'Spark', 'Hadoop', 'AWS Glue', 'Snowflake', 'Airflow', 'dbt', 'BigQuery', 'Kafka', 'Pandas', 'TensorFlow']
  },
  Cybersecurity: { 
    pool: ['Linux', 'Networking', 'Python', 'SIEM', 'Splunk', 'Firewalls', 'Wireshark', 'Nessus', 'AppSec', 'IAM', 'Encryption', 'OWASP', 'ISO 27001', 'Risk Management']
  },
  Cloud: { 
    pool: ['Linux', 'Bash', 'AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana']
  },
  Design: { 
    pool: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'HTML/CSS', 'Photoshop', 'Illustrator']
  }
};

const ROLES = {
  Development: ['Frontend Developer', 'Backend Developer', 'Full Stack Engineer', 'Java Developer', 'C# Developer', 'Mobile Developer', 'Software Engineer'],
  Data: ['Data Analyst', 'Data Scientist', 'Data Engineer', 'BI Developer', 'Analytics Engineer'],
  Cybersecurity: ['Security Analyst', 'Penetration Tester', 'SOC Analyst', 'Cyber Engineer', 'CISO'],
  Cloud: ['Cloud Architect', 'DevOps Engineer', 'Site Reliability Engineer', 'Cloud Engineer'],
  Design: ['UX/UI Designer', 'Product Designer', 'UX Researcher', 'Product Owner']
};

// --- 3. GENERATOR FUNCTION ---
const generateJobs = (count: number): Job[] => {
  const jobs: Job[] = [];

  for (let i = 0; i < count; i++) {
    // A. Location & Category Logic
    const randLoc = Math.random();
    let location = 'Johannesburg';
    if (randLoc > 0.45) location = 'Cape Town'; 
    if (randLoc > 0.75) location = 'Remote';

    const randCat = Math.random();
    let category: keyof typeof ROLES = 'Development'; 
    
    if (location === 'Johannesburg') {
      if (randCat < 0.50) category = 'Development';
      else if (randCat < 0.65) category = 'Data';
      else if (randCat < 0.80) category = 'Cybersecurity';
      else if (randCat < 0.90) category = 'Cloud';
      else category = 'Design';
    } else {
      if (randCat < 0.55) category = 'Development';
      else if (randCat < 0.70) category = 'Design';
      else if (randCat < 0.85) category = 'Cloud';
      else if (randCat < 0.95) category = 'Data';
      else category = 'Cybersecurity';
    }

    const roleTitle = ROLES[category][Math.floor(Math.random() * ROLES[category].length)];
    const company = COMPANIES[location as keyof typeof COMPANIES][Math.floor(Math.random() * 10)];

    // B. Experience & Salary
    const randExp = Math.random();
    let experienceLevel: 'Junior' | 'Mid' | 'Senior' = 'Mid';
    let minSal = 35000;
    
    if (randExp < 0.3) {
      experienceLevel = 'Junior';
      minSal = 18000 + Math.floor(Math.random() * 12000); 
    } else if (randExp > 0.7) {
      experienceLevel = 'Senior';
      minSal = 75000 + Math.floor(Math.random() * 45000); 
    } else {
      minSal = 35000 + Math.floor(Math.random() * 35000); 
    }

    // --- C. WEIGHTED SKILL GENERATION (The Fix) ---
    const jobSkills = new Set<string>();
    
    // 1. DATA ANALYTICS: Force "The Big 3" to create a staircase
    if (category === 'Data') {
        jobSkills.add('SQL'); // 100% of Data jobs need SQL
        if (Math.random() > 0.2) jobSkills.add('Python'); // 80% have Python
        if (Math.random() > 0.4) jobSkills.add('Excel'); // 60% have Excel
        if (Math.random() > 0.5) jobSkills.add('PowerBI'); // 50% have PowerBI
        
        // Fill the rest with niche skills (Kafka, Airflow, etc.)
        const pool = SKILL_SETS.Data.pool;
        while (jobSkills.size < 4 + Math.floor(Math.random() * 3)) {
             jobSkills.add(pool[Math.floor(Math.random() * pool.length)]);
        }
    }

    // 2. DEVELOPMENT: Force "Core Stacks" based on location
    else if (category === 'Development') {
        const devSkills = SKILL_SETS.Development;
        let pool: string[] = [];

        // Market Correction: JHB = Java/C#, CPT = React/Python
        if (location === 'Johannesburg') {
             if (Math.random() > 0.3) jobSkills.add(Math.random() > 0.5 ? 'Java' : 'C#');
             if (Math.random() > 0.4) jobSkills.add('SQL');
        } else if (location === 'Cape Town') {
             if (Math.random() > 0.3) jobSkills.add('React');
             if (Math.random() > 0.4) jobSkills.add('Python');
        }

        // Add Role Specifics
        if (roleTitle.includes('Frontend')) pool = devSkills.frontend;
        else if (roleTitle.includes('Backend') || roleTitle.includes('Java') || roleTitle.includes('C#')) pool = devSkills.backend;
        else if (roleTitle.includes('Mobile')) pool = devSkills.mobile;
        else pool = [...devSkills.frontend, ...devSkills.backend]; 
        
        // Fill rest
        while (jobSkills.size < 3 + Math.floor(Math.random() * 3)) {
            jobSkills.add(pool[Math.floor(Math.random() * pool.length)]);
        }
    }

    // 3. OTHER CATEGORIES (General Weighting)
    else {
        let pool: string[] = [];
        if (category === 'Cybersecurity') pool = SKILL_SETS.Cybersecurity.pool;
        else if (category === 'Cloud') pool = SKILL_SETS.Cloud.pool;
        else pool = SKILL_SETS.Design.pool;

        // Force a common skill
        if (category === 'Design') jobSkills.add('Figma');
        if (category === 'Cloud') jobSkills.add('AWS');
        if (category === 'Cybersecurity') jobSkills.add('Network Security'); // Generic placeholder

        while (jobSkills.size < 4) {
            jobSkills.add(pool[Math.floor(Math.random() * pool.length)]);
        }
    }

    jobs.push({
      id: `job-${i}`,
      title: experienceLevel === 'Senior' ? `Senior ${roleTitle}` : experienceLevel === 'Junior' ? `Junior ${roleTitle}` : roleTitle,
      company,
      location,
      salaryMin: minSal,
      salaryMax: minSal + 10000 + Math.floor(Math.random() * 15000),
      skills: Array.from(jobSkills),
      experienceLevel,
      category
    });
  }

  return jobs;
};

export const mockJobs = generateJobs(2500);