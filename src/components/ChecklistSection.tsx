import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, 
  Plus, 
  RotateCcw, 
  Trash2, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';
import { ChecklistItem } from '../types';

const DEFAULT_ITEMS: ChecklistItem[] = [
  { id: 'item-1', text: '海青 (坐香必備 ⚠️)', isImportant: true, checked: false },
  { id: 'item-2', text: '健保卡與個人身分證件', isImportant: false, checked: false },
  { id: 'item-3', text: '環保隨行水壺 / 保溫杯 (寺內不提供免洗杯)', isImportant: false, checked: false },
  { id: 'item-4', text: '舒適平底包鞋與襪子 (坐香脫鞋需著襪)', isImportant: true, checked: false },
  { id: 'item-5', text: '個人隨身常用藥品 (暈車藥、常備藥)', isImportant: false, checked: false },
  { id: 'item-6', text: '雨具 / 遮陽防風薄外套 (埔里早晚溫差)', isImportant: false, checked: false },
  { id: 'item-7', text: '深色舒適長褲 (坐香海青內穿著用)', isImportant: true, checked: false },
  { id: 'item-8', text: '個人擦手帕 / 隨身紙巾', isImportant: false, checked: false },
];

const STORAGE_KEY = 'chungtai_trip_checklist_v1';

export const ChecklistSection: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse checklist', e);
    }
    return DEFAULT_ITEMS;
  });

  const [newItemText, setNewItemText] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save checklist', e);
    }
  }, [items]);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    const newItem: ChecklistItem = {
      id: `custom-${Date.now()}`,
      text: newItemText.trim(),
      checked: false,
    };
    setItems((prev) => [...prev, newItem]);
    setNewItemText('');
  };

  const handleDeleteItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    if (window.confirm('確定要重置為預設行前準備清單嗎？')) {
      setItems(DEFAULT_ITEMS);
    }
  };

  const checkedCount = items.filter((i) => i.checked).length;
  const totalCount = items.length;
  const progressPercent = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;
  const isAllCompleted = totalCount > 0 && checkedCount === totalCount;

  return (
    <section id="checklist" className="glass-card rounded-3xl p-6 sm:p-8 shadow-zen space-y-6 pt-6">
      {/* Section Header with fine underline like attachment */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E6C875]/60 pb-3 gap-2">
        <h3 className="font-serif-tc text-xl sm:text-2xl text-[#1A2D42] font-bold">
          行前準備 CheckList
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#9E7728] bg-[#FAF4E1] px-3 py-1 rounded-full border border-[#E6C875]">
            準備進度：{checkedCount} / {totalCount} ({progressPercent}%)
          </span>
          <button
            onClick={handleReset}
            title="重置清單"
            className="p-1.5 text-[#5A3825]/70 hover:text-[#5A3825] hover:bg-[#F5EFE6] rounded-full transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#F5EFE6] rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#C49A45] to-[#9E7728] h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <p className="text-xs sm:text-sm text-[#3A2312]/80">
        出發前請逐一勾選確認所需物品，系統已為您自動雲端暫存進度。
      </p>

      {/* Completion Banner */}
      {isAllCompleted && (
        <div className="bg-[#FAF4E1] border border-[#C49A45] p-3.5 rounded-2xl flex items-center gap-2.5 text-xs sm:text-sm text-[#5A3825] animate-fadeIn shadow-sm">
          <Sparkles className="w-5 h-5 text-[#C49A45] flex-shrink-0" />
          <div>
            <span className="font-bold block">吉祥！行前裝備已全部備妥！</span>
            <span className="text-[11px] text-[#9E7728]">
              預祝您 10/26 身心安和，禪悅為食，法喜充滿！
            </span>
          </div>
        </div>
      )}

      {/* Checklist Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
              item.checked
                ? 'bg-[#FAF4E1]/80 border-[#C49A45] opacity-90'
                : 'bg-[#F5EFE6]/50 border-[#E6C875]/70 hover:bg-[#FAF4E1]/50'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0 pr-2">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {}} // Controlled by container onClick
                className="w-5 h-5 rounded border-[#C49A45] text-[#C49A45] focus:ring-[#C49A45] accent-[#C49A45] cursor-pointer flex-shrink-0"
              />
              <span
                className={`text-xs sm:text-sm truncate ${
                  item.checked
                    ? 'line-through text-[#3A2312]/50 font-normal'
                    : item.isImportant
                    ? 'font-bold text-[#5A3825]'
                    : 'text-[#3A2312] font-medium'
                }`}
              >
                {item.text}
              </span>
            </div>

            {/* Custom Item Delete */}
            {item.id.startsWith('custom-') && (
              <button
                onClick={(e) => handleDeleteItem(item.id, e)}
                className="text-[#9E7728]/60 hover:text-red-600 p-1 rounded transition-colors"
                title="刪除自訂項目"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add Custom Item Form */}
      <form onSubmit={handleAddItem} className="flex gap-2 pt-2">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="新增自訂攜帶物品（例如：念佛機、保暖帽）..."
          className="flex-1 px-3.5 py-2 rounded-xl border border-[#E6C875] bg-white/80 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#C49A45]"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#FAF4E1] hover:bg-[#E6C875]/40 text-[#5A3825] border border-[#E6C875] rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>新增</span>
        </button>
      </form>
    </section>
  );
};
