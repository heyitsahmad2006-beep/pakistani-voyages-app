import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../data/destinations';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  selectedProvince: string;
  setSelectedProvince: (prov: string) => void;
  minRating: number;
  setMinRating: (r: number) => void;
  onReset: () => void;
}

const PROVINCES = [
  'All Provinces',
  'KPK Province',
  'Gilgit-Baltistan',
  'Punjab',
  'Sindh',
  'Balochistan',
  'Azad Kashmir'
];

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  setSelectedCategory,
  selectedProvince,
  setSelectedProvince,
  minRating,
  setMinRating,
  onReset,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0e0e0e] border border-white/10 rounded-t-3xl md:rounded-2xl max-w-lg w-full flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between bg-[#111111]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#c5a059]">tune</span>
            <h3 className="text-base font-light tracking-[0.05em] uppercase text-white">Filter Destinations</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 text-white/60 hover:text-white flex items-center justify-center cursor-pointer border border-white/5"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Filters Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh]">
          {/* Category */}
          <div>
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] block mb-2.5">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer border transition-colors ${
                      isSelected
                        ? 'bg-[#c5a059] text-black border-[#c5a059]'
                        : 'bg-[#141414] text-white/60 border-white/5 hover:bg-[#1a1a1a] hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Province / Region */}
          <div>
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] block mb-2.5">
              Province &amp; Territory
            </label>
            <div className="grid grid-cols-2 gap-2">
              {PROVINCES.map((prov) => {
                const isSelected =
                  (prov === 'All Provinces' && !selectedProvince) ||
                  selectedProvince === prov;
                return (
                  <button
                    key={prov}
                    onClick={() =>
                      setSelectedProvince(prov === 'All Provinces' ? '' : prov)
                    }
                    className={`py-2 px-3 rounded-xl text-xs font-normal text-left transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-[#c5a059]/15 text-[#c5a059] border-[#c5a059]/40 font-medium'
                        : 'bg-[#141414] text-white/60 border-white/5 hover:bg-[#1a1a1a] hover:text-white'
                    }`}
                  >
                    {prov}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Minimum Rating */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em]">
                Minimum Rating
              </label>
              <span className="text-xs font-medium text-[#c5a059]">
                {minRating > 0 ? `${minRating.toFixed(1)} ★ & above` : 'Any Rating'}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 4.5, 4.8, 5.0].map((ratingVal) => (
                <button
                  key={ratingVal}
                  onClick={() => setMinRating(ratingVal)}
                  className={`py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                    minRating === ratingVal
                      ? 'bg-[#c5a059] text-black border-[#c5a059]'
                      : 'bg-[#141414] text-white/60 border-white/5 hover:bg-[#1a1a1a] hover:text-white'
                  }`}
                >
                  {ratingVal === 0 ? 'All' : `${ratingVal} ★`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#111111] border-t border-white/5 flex gap-3">
          <button
            onClick={onReset}
            className="py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-white bg-[#141414] border border-white/10 cursor-pointer"
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-[#c5a059] text-black rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#d8b56f] transition-colors cursor-pointer shadow-md"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
