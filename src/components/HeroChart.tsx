import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer 
} from 'recharts';

interface HeroChartProps {
  data: { name: string; count: number }[];
  totalJobs: number;
}

export const HeroChart = ({ data, totalJobs }: HeroChartProps) => {
  return (
    <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-cyan-400">🔥 Most In-Demand Skills</h2>
        <span className="text-sm text-slate-500 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
          Analyzing {totalJobs} active roles
        </span>
      </div>
      <div className="flex-1 min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} tick={{fontSize: 13, fontWeight: 500}} />
            <Tooltip 
              cursor={{fill: '#334155', opacity: 0.2}} 
              contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', color: '#fff', borderRadius: '8px'}} 
            />
            <Bar dataKey="count" fill="#22d3ee" radius={[0, 4, 4, 0]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};