import React from 'react';

export const HeaderBanner: React.FC = () => {
  return (
    <header className="bg-[#1A2D42] text-white pt-6 pb-6 px-5 sm:px-8 rounded-b-3xl sm:rounded-3xl shadow-md border-b-2 border-[#C49A45]/70 relative overflow-hidden">
      {/* Official 中台世界 Logo (Replacing previous 卍 mark) */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-6 z-20">
        <img
          src="/assets/aistudio/images_72e2b7cd.png"
          alt="中台世界 Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-md border border-[#E6C875]/40 object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto space-y-2 relative z-10 pr-14 sm:pr-16">
        {/* Organization / Subtitle */}
        <p className="text-xs sm:text-sm text-slate-300 tracking-wide font-normal">
          南投埔里中台禪寺 / 中台世界博物館
        </p>

        {/* Main Event Title */}
        <h1 className="font-serif-tc text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white">
          10/26(一)中台參學行程
        </h1>

        {/* Quote */}
        <div className="pt-2 text-xs sm:text-sm text-[#E6C875] font-serif-tc border-t border-slate-700/80 mt-3">
          靜心尋道，尋訪靈山
        </div>
      </div>
    </header>
  );
};
