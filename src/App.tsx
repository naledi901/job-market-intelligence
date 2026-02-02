import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { mockJobs } from './data/mockJobs';

export default function App() {
  // 1. DATA LOGIC: Calculate skill frequency
  const skillCounts: Record<string, number> = {};
  
  mockJobs.forEach(job => {
    job.skills.forEach(skill => {
      // If skill exists, add 1. If not, start at 1.
      skillCounts[skill] = (skillCounts[skill] || 0) + 1;
    });
  });

  // Convert object { React: 5 } into array [{ name: 'React', count: 5 }]
  const chartData = Object.entries(skillCounts).map(([name, count]) => ({ 
    name, 
    count 
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8 font-sans">
      
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
          SA Job Market Intelligence
        </h1>
        <p className="text-slate-400 text-lg">
          Analyzing tech trends across Johannesburg, Cape Town, and beyond.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Job List */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">Latest Listings</h2>
          <div className="space-y-4">
            {mockJobs.map((job) => (
              <div key={job.id} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors">
                <h3 className="font-bold text-white">{job.title}</h3>
                <p className="text-sm text-slate-400">{job.company} • {job.location}</p>
                <div className="mt-2 flex gap-2">
                  {job.skills.map(skill => (
                    <span key={skill} className="text-[10px] px-2 py-1 bg-cyan-950 text-cyan-400 rounded-md uppercase font-bold tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: The Chart */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-6 text-cyan-400">Top Skills Demand</h2>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ left: 10 }}>
                {/* Hides the ugly number line at bottom */}
                <XAxis type="number" hide />
                {/* Shows Skill Names on the left */}
                <YAxis dataKey="name" type="category" stroke="#94a3b8" width={80} tick={{fontSize: 12}} />
                {/* Dark mode tooltip */}
                <Tooltip 
                  cursor={{ fill: '#334155', opacity: 0.4 }} 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} 
                />
                {/* The Bars */}
                <Bar dataKey="count" fill="#22d3ee" radius={[0, 4, 4, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </main>
    </div>
  );
}