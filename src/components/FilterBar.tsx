import React from 'react';

interface FilterBarProps {
  location: string;
  category: string;
  level: string;
  setLocation: (val: string) => void;
  setCategory: (val: string) => void;
  setLevel: (val: string) => void;
  onClear: () => void;
  isFiltering: boolean;
}

export const FilterBar = ({ 
  location, category, level, 
  setLocation, setCategory, setLevel, 
  onClear, isFiltering 
}: FilterBarProps) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800 items-end shadow-xl mb-8">
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Location</label>
        <select 
          className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="All">All Locations</option>
          <option value="Johannesburg">Johannesburg</option>
          <option value="Cape Town">Cape Town</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Job Category</label>
        <select 
          className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Development">Software Development</option>
          <option value="Data">Data Analytics</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Cloud">Cloud & DevOps</option>
          <option value="Design">UI/UX Design</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Experience Level</label>
        <select 
          className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="All">All Levels</option>
          <option value="Junior">Junior (Entry)</option>
          <option value="Mid">Mid-Level</option>
          <option value="Senior">Senior</option>
        </select>
      </div>

      <div>
        <button 
          onClick={onClear}
          disabled={!isFiltering}
          className={`w-full font-semibold py-2.5 px-4 rounded-lg transition-colors border ${
            isFiltering 
              ? 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20' 
              : 'bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed'
          }`}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};