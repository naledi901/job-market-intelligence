import React from 'react';
import { 
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from 'recharts';

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899'];

interface InsightCardsProps {
  salaryData: { name: string; count: number }[];
  experienceData: { name: string; value: number }[];
}

export const InsightCards = ({ salaryData, experienceData }: InsightCardsProps) => {
  return (
    <div className="space-y-6 flex flex-col">
      
      {/* Salary Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex-1">
        <h2 className="text-lg font-bold text-emerald-400 mb-4">💰 Salary Ranges</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salaryData}>
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
              <Tooltip 
                cursor={{fill: '#334155', opacity: 0.2}} 
                contentStyle={{backgroundColor: '#0f172a', border: 'none', color: '#fff'}} 
              />
              <Bar dataKey="count" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Experience Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex-1">
        <h2 className="text-lg font-bold text-purple-400 mb-4">🎓 Seniority Split</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie 
                data={experienceData} 
                cx="50%" cy="50%" 
                innerRadius={40} 
                outerRadius={70} 
                paddingAngle={5} 
                dataKey="value"
              >
                {experienceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '8px'}} />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontSize: '12px'}} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};