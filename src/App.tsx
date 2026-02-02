import { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from 'recharts';
import { mockJobs } from './data/mockJobs';

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899'];

export default function App() {
  // 1. FILTER STATE (The 3 Controls)
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // 2. THE LOGIC ENGINE (Universal Filter)
  const filteredJobs = mockJobs.filter(job => {
    const matchLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);
    const matchCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchLevel = selectedLevel === 'All' || job.experienceLevel === selectedLevel;
    return matchLocation && matchCategory && matchLevel;
  });

  // 3. CHART DATA GENERATORS
  // A. Top Skills
  const skillCounts: Record<string, number> = {};
  filteredJobs.forEach(job => job.skills.forEach(skill => skillCounts[skill] = (skillCounts[skill] || 0) + 1));
  const topSkillsData = Object.entries(skillCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10); // Top 10 as requested

  // B. Experience Distribution
  const expCounts: Record<string, number> = {};
  filteredJobs.forEach(job => expCounts[job.experienceLevel] = (expCounts[job.experienceLevel] || 0) + 1);
  const pieData = Object.entries(expCounts).map(([name, value]) => ({ name, value }));

  // C. Salary Ranges (Histogram Logic)
  const salaryRanges = [
    { name: '0-30k', min: 0, max: 30000, count: 0 },
    { name: '30k-60k', min: 30001, max: 60000, count: 0 },
    { name: '60k-90k', min: 60001, max: 90000, count: 0 },
    { name: '90k+', min: 90001, max: 999999, count: 0 },
  ];
  filteredJobs.forEach(job => {
    const range = salaryRanges.find(r => job.salaryMin >= r.min && job.salaryMin <= r.max);
    if (range) range.count++;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-6 font-sans">
      
      {/* HEADER & FILTERS */}
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">SA Job Market Intelligence</h1>
        <p className="text-slate-400 mb-6">Real-time market insights for South African tech professionals.</p>

        {/* THE CONTROL ROOM (3 Filters) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
          
          {/* Location Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Location</label>
            <select 
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="All">All Locations</option>
              <option value="Johannesburg">Johannesburg</option>
              <option value="Cape Town">Cape Town</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Job Category</label>
            <select 
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Development">Software Development</option>
              <option value="Data">Data Analytics</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Cloud">Cloud & DevOps</option>
              <option value="Design">UI/UX Design</option>
            </select>
          </div>

          {/* Experience Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Experience Level</label>
            <select 
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="All">All Levels</option>
              <option value="Junior">Junior (Entry)</option>
              <option value="Mid">Mid-Level</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>
      </header>

      {/* DASHBOARD GRID */}
      <main className="max-w-7xl mx-auto space-y-6">
        
        {/* ROW 1: HERO CHART (Top Skills) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-cyan-400">🔥 Most In-Demand Skills</h2>
            <span className="text-sm text-slate-500">Based on {filteredJobs.length} active jobs</span>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topSkillsData} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: '#334155', opacity: 0.2}} contentStyle={{backgroundColor: '#0f172a', border: 'none', color: '#fff'}} />
                <Bar dataKey="count" fill="#22d3ee" radius={[0, 4, 4, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ROW 2: SECONDARY CHARTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Salary Distribution */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg font-bold text-emerald-400 mb-4">💰 Salary Ranges (Monthly)</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryRanges}>
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                  <Tooltip cursor={{fill: '#334155', opacity: 0.2}} contentStyle={{backgroundColor: '#0f172a', border: 'none', color: '#fff'}} />
                  <Bar dataKey="count" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Experience Pie Chart */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg font-bold text-purple-400 mb-4">🎓 Market Seniority Split</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={pieData} 
                    cx="50%" cy="50%" 
                    innerRadius={60} 
                    outerRadius={80} 
                    paddingAngle={5} 
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '8px'}} />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}