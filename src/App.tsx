import React, { useState } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { HeaderBanner } from './components/HeaderBanner';
import { TabBar, TabType } from './components/TabBar';
import { MilestoneCards } from './components/MilestoneCards';
import { ScheduleSection } from './components/ScheduleSection';
import { ChecklistSection } from './components/ChecklistSection';
import { LocationSection } from './components/LocationSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('schedule');

  return (
    <div className="pattern-bg min-h-screen flex flex-col relative text-[#3A2312]">
      {/* Floating Gold Particles Effect */}
      <ParticleCanvas />

      {/* Dignified Header Banner matching attachment */}
      <HeaderBanner />

      {/* Sticky Top Tab Bar matching attachment */}
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-grow z-10 max-w-3xl mx-auto px-4 sm:px-6 py-6 w-full space-y-6">
        {/* Dynamic Tabbed Content */}
        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <MilestoneCards />
            <ScheduleSection />
          </div>
        )}
        {activeTab === 'checklist' && <ChecklistSection />}
        {activeTab === 'location' && <LocationSection />}
        {activeTab === 'all' && (
          <div className="space-y-8">
            <MilestoneCards />
            <ScheduleSection />
            <ChecklistSection />
            <LocationSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A2D42] text-[#FAF4E1] py-8 text-center text-xs mt-12 z-10 border-t border-[#C49A45]/30">
        <div className="max-w-3xl mx-auto px-4 space-y-2">
          <span className="font-serif-tc text-lg text-white font-bold tracking-widest block">
            10/26(一)中台參學行程
          </span>
          <p className="text-slate-300 text-xs">
            南投埔里中台禪寺 • 中台世界博物館
          </p>
          <p className="text-slate-400 text-[10px] pt-1">
            © 2026 參學行程導覽
          </p>
        </div>
      </footer>
    </div>
  );
}
