import { useState, useMemo } from 'react';
import { mockJobs } from './data/mockJobs';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { HeroChart } from './components/HeroChart';
import { InsightCards } from './components/InsightCards';

export default function App() {
  // 1. STATE
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // 2. FILTER LOGIC (Wrapped in useMemo for performance)
  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchLocation = selectedLocation === 'All' || job.location === selectedLocation;
      const matchCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchLevel = selectedLevel === 'All' || job.experienceLevel === selectedLevel;
      return matchLocation && matchCategory && matchLevel;
    });
  }, [selectedLocation, selectedCategory, selectedLevel]);

  // 3. DATA TRANSFORMATION
  const topSkillsData = useMemo(() => {
    const skillCounts: Record<string, number> = {};
    filteredJobs.forEach(job => job.skills.forEach(skill => skillCounts[skill] = (skillCounts[skill] || 0) + 1));
    return Object.entries(skillCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, [filteredJobs]);

  const experienceData = useMemo(() => {
    const expCounts: Record<string, number> = {};
    filteredJobs.forEach(job => expCounts[job.experienceLevel] = (expCounts[job.experienceLevel] || 0) + 1);
    return Object.entries(expCounts).map(([name, value]) => ({ name, value }));
  }, [filteredJobs]);

  const salaryData = useMemo(() => {
    const ranges = [
      { name: '0-30k', min: 0, max: 30000, count: 0 },
      { name: '30k-60k', min: 30001, max: 60000, count: 0 },
      { name: '60k-90k', min: 60001, max: 90000, count: 0 },
      { name: '90k+', min: 90001, max: 999999, count: 0 },
    ];
    filteredJobs.forEach(job => {
      const range = ranges.find(r => job.salaryMin >= r.min && job.salaryMin <= r.max);
      if (range) range.count++;
    });
    return ranges;
  }, [filteredJobs]);

  const isFiltering = selectedLocation !== 'All' || selectedCategory !== 'All' || selectedLevel !== 'All';

  const clearFilters = () => {
    setSelectedLocation('All');
    setSelectedCategory('All');
    setSelectedLevel('All');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-6 font-sans flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        
        <Header />

        <FilterBar 
          location={selectedLocation} setLocation={setSelectedLocation}
          category={selectedCategory} setCategory={setSelectedCategory}
          level={selectedLevel} setLevel={setSelectedLevel}
          onClear={clearFilters}
          isFiltering={isFiltering}
        />

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <HeroChart data={topSkillsData} totalJobs={filteredJobs.length} />
          <InsightCards salaryData={salaryData} experienceData={experienceData} />
        </main>

      </div>
    </div>
  );
}