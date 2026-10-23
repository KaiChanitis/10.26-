import React from 'react';

export type TabType = 'schedule' | 'checklist' | 'location' | 'all';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'schedule', label: '行程' },
    { id: 'checklist', label: '行前' },
    { id: 'location', label: '交通' },
    { id: 'all', label: '全部' },
  ];

  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-3xl mx-auto">
        <nav className="grid grid-cols-4 items-center text-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`min-h-[48px] py-3 text-sm sm:text-base font-bold transition-all relative flex items-center justify-center ${
                  isActive
                    ? 'text-[#1A2D42]'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C49A45] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
