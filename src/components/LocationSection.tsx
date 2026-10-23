import React from 'react';
import { MapPin, Navigation, Landmark, Building2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="glass-card rounded-3xl p-6 sm:p-8 shadow-zen space-y-6 pt-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 border-b border-[#E6C875]/70 pb-3">
        <div className="w-2.5 h-7 bg-[#C49A45] rounded-full" />
        <h2 className="font-serif-tc text-2xl sm:text-3xl text-[#5A3825] font-bold">
          地點導航
        </h2>
      </div>

      {/* Two Location Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Monastery Card */}
        <div className="p-5 rounded-2xl border border-[#E6C875]/70 bg-[#FAF4E1]/80 hover:border-[#C49A45] transition-all shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="font-serif-tc font-bold text-[#5A3825] text-base sm:text-lg flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#C49A45]" />
              <span>中台禪寺</span>
            </span>
            <a
              href="https://maps.google.com/?q=中台禪寺"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#9E7728] bg-white hover:bg-[#FAF4E1] border border-[#E6C875] px-3.5 py-1.5 rounded-full font-medium transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>開啟 Google 導航</span>
            </a>
          </div>
          <p className="text-xs text-[#3A2312]/80 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C49A45] inline mr-1" />
            南投縣埔里鎮中台路2號
          </p>
          <p className="text-xs text-[#9E7728] font-medium">
            行程安排：上午 09:00「中台一支香」禪修坐香 & 11:50-12:30「中台五觀堂」用齋
          </p>
        </div>

        {/* Museum Card */}
        <div className="p-5 rounded-2xl border border-[#E6C875]/70 bg-[#FAF4E1]/80 hover:border-[#C49A45] transition-all shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="font-serif-tc font-bold text-[#5A3825] text-base sm:text-lg flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#C49A45]" />
              <span>中台世界博物館</span>
            </span>
            <a
              href="https://maps.google.com/?q=中台世界博物館"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#9E7728] bg-white hover:bg-[#FAF4E1] border border-[#E6C875] px-3.5 py-1.5 rounded-full font-medium transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>開啟 Google 導航</span>
            </a>
          </div>
          <p className="text-xs text-[#3A2312]/80 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C49A45] inline mr-1" />
            南投縣埔里鎮中台路8號
          </p>
          <p className="text-xs text-[#9E7728] font-medium">
            行程安排：下午 13:00「精舍聯展」參觀巡禮 & 14:15 騎牛歸家
          </p>
        </div>
      </div>
    </section>
  );
};
