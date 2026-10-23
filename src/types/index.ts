export interface ScheduleItem {
  id: string;
  timeRange: string;
  title: string;
  category: '發車時間' | '上午' | '午齋' | '下午' | '騎牛歸家' | string;
  badge: string;
  badgeType: 'bus' | 'zen' | 'food' | 'museum' | 'return';
  summary: string;
  highlightNotice?: {
    title: string;
    description: string;
  };
  details: string[];
}

export interface ChecklistItem {
  id: string;
  text: string;
  isImportant?: boolean;
  checked: boolean;
}
