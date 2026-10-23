import React, { useState } from 'react';
import { 
  Bus, 
  Sparkles, 
  Utensils, 
  Landmark, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  CheckCircle2, 
  CalendarPlus, 
  Clock 
} from 'lucide-react';
import { ScheduleItem } from '../types';

const SCHEDULE_DATA: ScheduleItem[] = [
  {
    id: 'step-1',
    timeRange: '07:30',
    category: '發車時間',
    title: '集合整隊 準時發車啟程',
    badge: '遊覽車接駁',
    badgeType: 'bus',
    summary: '準時發車啟程前往埔里中台禪寺，請提早抵達集合點。',
    details: [
      '請隨身攜帶個人所需藥品、環保水壺與健保身分證件。',
      '車上請保持清淨安靜，放鬆心境。',
    ],
  },
  {
    id: 'step-2',
    timeRange: '09:00 - 11:40',
    category: '上午',
    title: '中台一支香 靜坐禪修體驗',
    badge: '中台一支香 (禪修靜坐)',
    badgeType: 'zen',
    summary: '入禪堂體會澄心靜慮、心安神定之禪味。',
    highlightNotice: {
      title: '特別提醒：',
      description: '坐香需著海青',
    },
    details: [
      '進入禪堂前請將手機完全關機或轉為靜音。',
      '請務必穿著海青，並著舒適襪子。',
    ],
  },
  {
    id: 'step-3',
    timeRange: '11:50 - 12:30',
    category: '午齋',
    title: '中台五觀堂 用齋',
    badge: '享用十方素齋',
    badgeType: 'food',
    summary: '體驗大叢林傳統用齋，存五觀之想，惜福知足。',
    details: [
      '用齋過程請保持安靜（禁語），食存五觀。',
      '珍惜食物，粒米不浪費。',
    ],
  },
  {
    id: 'step-4',
    timeRange: '13:00 - 14:00',
    category: '下午',
    title: '中台世界博物館 參觀精舍聯展',
    badge: '展覽參觀',
    badgeType: 'museum',
    summary: '體悟佛法藝術化',
    details: [],
  },
  {
    id: 'step-5',
    timeRange: '14:15',
    category: '騎牛歸家',
    title: '騎牛歸家',
    badge: '法喜滿載返程',
    badgeType: 'return',
    summary: '於博物館前廣場或指定車輛停靠區集合，清點人數後搭車踏上歸途。',
    details: [
      '請準時至指定車輛集合點報到，勿擅自脫隊。',
      '各車車長清點全體人員後開車啟程，預祝各位同修滿載法喜、闔家平安。',
    ],
  },
];

export const ScheduleSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'step-2': true,
  });

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent('10/26(一)中台參學行程');
    const details = encodeURIComponent(
      '參學行程：07:30準時發車、09:00中台一支香(坐香需著海青)、11:50-12:30中台五觀堂用齋、13:00中台世界博物館參觀精舍聯展(體悟佛法藝術化)、14:15騎牛歸家。'
    );
    const location = encodeURIComponent('南投縣埔里鎮中台路2號（中台禪寺）');
    const dates = '20261026T073000/20261026T170000';
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <section id="schedule" className="space-y-6 pt-4">
      {/* Section Header with fine underline like attachment */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E6C875]/60 pb-3 gap-2">
        <h3 className="font-serif-tc text-xl sm:text-2xl text-[#1A2D42] font-bold">
          參學行程時間軸
        </h3>

        <button
          onClick={handleAddToCalendar}
          className="inline-flex items-center gap-1.5 text-xs text-[#5A3825] bg-[#FAF4E1] hover:bg-[#E6C875]/30 border border-[#E6C875] px-3.5 py-1.5 rounded-full font-medium transition-colors shadow-sm w-fit"
        >
          <CalendarPlus className="w-3.5 h-3.5 text-[#C49A45]" />
          <span>加入 Google 行事曆</span>
        </button>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#C49A45] before:via-[#D4AF37] before:to-[#5A3825]">
        {SCHEDULE_DATA.map((item) => {
          const isExpanded = !!expandedItems[item.id];
          const hasDetails = item.details && item.details.length > 0;

          return (
            <div key={item.id} className="relative group">
              {/* Dot on timeline */}
              <div className="absolute -left-6 sm:-left-8 top-4 w-5 h-5 rounded-full bg-[#C49A45] border-4 border-[#FDFBF7] shadow-md flex items-center justify-center group-hover:scale-110 transition-transform" />

              {/* Card Container */}
              <div
                onClick={() => hasDetails && toggleItem(item.id)}
                className={`glass-card rounded-2xl p-5 sm:p-6 shadow-zen transition-all border ${
                  hasDetails ? 'cursor-pointer hover:border-[#C49A45]' : ''
                } ${
                  item.highlightNotice
                    ? 'border-l-4 border-l-[#C49A45] border-[#E6C875]'
                    : 'border-[#E6C875]/60'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="px-3 py-1 bg-[#5A3825] text-[#FAF4E1] font-serif-tc text-xs sm:text-sm font-semibold rounded-lg shadow-sm">
                      {item.category}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold font-serif-tc text-[#5A3825]">
                      {item.timeRange}
                    </span>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2">
                    <span className="inline-flex items-center gap-1 text-xs text-[#5A3825] bg-[#FAF4E1] px-2.5 py-1 rounded-full border border-[#E6C875]/60 font-medium">
                      {item.badgeType === 'bus' && <Bus className="w-3 h-3 text-[#C49A45]" />}
                      {item.badgeType === 'zen' && <Sparkles className="w-3 h-3 text-[#C49A45]" />}
                      {item.badgeType === 'food' && <Utensils className="w-3 h-3 text-[#C49A45]" />}
                      {item.badgeType === 'museum' && <Landmark className="w-3 h-3 text-[#C49A45]" />}
                      {item.badgeType === 'return' && <Clock className="w-3 h-3 text-[#C49A45]" />}
                      <span>{item.badge}</span>
                    </span>

                    {hasDetails && (
                      <button
                        type="button"
                        className="text-[#9E7728] p-1 rounded hover:bg-[#FAF4E1]"
                        aria-label="展開詳細資訊"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Title & Summary */}
                <h3 className="text-base sm:text-lg font-bold text-[#5A3825] mb-1 font-serif-tc">
                  {item.title}
                </h3>
                <p className="text-sm text-[#3A2312]/90 leading-relaxed">{item.summary}</p>

                {/* Highlight Notice: 特別提醒：坐香需著海青 */}
                {item.highlightNotice && (
                  <div className="mt-3 bg-amber-50/90 border-l-4 border-[#C49A45] p-3 rounded-r-xl flex items-center gap-2.5 shadow-sm">
                    <AlertTriangle className="w-4 h-4 text-[#C49A45] flex-shrink-0" />
                    <div>
                      <span className="font-bold text-[#5A3825] text-xs inline mr-1">
                        {item.highlightNotice.title}
                      </span>
                      <span className="text-xs text-[#5A3825] font-semibold">
                        {item.highlightNotice.description}
                      </span>
                    </div>
                  </div>
                )}

                {/* Collapsible Details */}
                {hasDetails && isExpanded && (
                  <div className="mt-4 pt-3 border-t border-[#E6C875]/40 text-xs sm:text-sm text-[#3A2312]/80 space-y-2 animate-fadeIn">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C49A45] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
