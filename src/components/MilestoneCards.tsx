import React from 'react';

export const MilestoneCards: React.FC = () => {
  return (
    <div className="space-y-3">
      {/* Milestone Cards Grid (Four key milestone times) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {/* Milestone 1: 發車 */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 border-t-4 border-t-[#C49A45] shadow-sm text-left">
          <div className="font-serif-tc text-xl sm:text-2xl font-bold text-[#1A2D42]">
            07:30 準時
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
            發車啟程前往
          </div>
        </div>

        {/* Milestone 2: 坐香 */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 border-t-4 border-t-[#C49A45] shadow-sm text-left">
          <div className="font-serif-tc text-xl sm:text-2xl font-bold text-[#1A2D42]">
            09:00 前
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
            禪堂入座坐香
          </div>
        </div>

        {/* Milestone 3: 午齋 */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 border-t-4 border-t-[#C49A45] shadow-sm text-left">
          <div className="font-serif-tc text-xl sm:text-2xl font-bold text-[#1A2D42]">
            11:50
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
            五觀堂用齋
          </div>
        </div>

        {/* Milestone 4: 下午展覽 */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 border-t-4 border-t-[#C49A45] shadow-sm text-left">
          <div className="font-serif-tc text-xl sm:text-2xl font-bold text-[#1A2D42]">
            13:00 前
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
            參觀精舍聯展
          </div>
        </div>
      </div>

      {/* Reminder Strip Container */}
      <div className="bg-[#EEF2F6] rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium border border-slate-200/80 text-left">
        坐香需著海青，請自備海青並著舒適長褲與襪子，進入禪堂請禁語
      </div>
    </div>
  );
};
