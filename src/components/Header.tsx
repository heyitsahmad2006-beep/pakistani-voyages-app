import React from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenMenu,
}) => {
  return (
    <>
      {/* Mobile TopAppBar */}
      <header
        id="mobile-header"
        className="fixed top-0 w-full z-40 backdrop-blur-xl bg-[#0a0a0a]/90 border-b border-white/5 shadow-sm transition-all duration-300 md:hidden"
      >
        <div className="flex justify-between items-center px-6 py-3.5 w-full">
          <button
            id="mobile-menu-btn"
            aria-label="Menu"
            onClick={onOpenMenu}
            className="text-[#c5a059] hover:opacity-80 transition-opacity active:scale-95 duration-200 p-2 -ml-2 rounded-full cursor-pointer flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          <div
            onClick={() => setActiveTab('explore')}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#8a6e3d] flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-black font-bold">explore</span>
            </div>
            <h1 className="text-[18px] font-bold text-white tracking-tight">
              Pakistani <span className="text-[#c5a059] font-serif italic">Voyages</span>
            </h1>
          </div>
          <div className="w-8 h-8" />
        </div>
      </header>

      {/* Desktop TopAppBar */}
      <header className="hidden md:flex fixed top-0 w-full z-40 backdrop-blur-xl bg-[#0a0a0a]/90 border-b border-white/5 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center space-x-10">
            <div
              onClick={() => setActiveTab('explore')}
              className="flex items-center gap-2.5 cursor-pointer select-none group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#8a6e3d] flex items-center justify-center shadow-[0_0_12px_rgba(197,160,89,0.25)]">
                <span className="material-symbols-outlined text-[18px] text-black font-bold">explore</span>
              </div>
              <h1 className="text-[22px] font-light text-white tracking-wide">
                Pakistani <span className="font-serif italic text-[#c5a059] font-normal">Voyages</span>
              </h1>
            </div>

            <nav className="flex space-x-2 items-center">
              <button
                id="desktop-nav-explore"
                onClick={() => setActiveTab('explore')}
                className={`text-[11px] uppercase tracking-[0.15em] font-semibold flex items-center space-x-2 py-2 px-4 rounded-full transition-all cursor-pointer ${
                  activeTab === 'explore'
                    ? 'text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30'
                    : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: activeTab === 'explore' ? "'FILL' 1" : "'FILL' 0" }}
                >
                  explore
                </span>
                <span>Explore</span>
              </button>

              <button
                id="desktop-nav-saved"
                onClick={() => setActiveTab('saved')}
                className={`text-[11px] uppercase tracking-[0.15em] font-semibold flex items-center space-x-2 py-2 px-4 rounded-full transition-all cursor-pointer ${
                  activeTab === 'saved'
                    ? 'text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30'
                    : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: activeTab === 'saved' ? "'FILL' 1" : "'FILL' 0" }}
                >
                  bookmark
                </span>
                <span>Saved</span>
              </button>

              <button
                id="desktop-nav-trips"
                onClick={() => setActiveTab('trips')}
                className={`text-[11px] uppercase tracking-[0.15em] font-semibold flex items-center space-x-2 py-2 px-4 rounded-full transition-all cursor-pointer ${
                  activeTab === 'trips'
                    ? 'text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30'
                    : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: activeTab === 'trips' ? "'FILL' 1" : "'FILL' 0" }}
                >
                  travel_explore
                </span>
                <span>Trips</span>
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-[18px] pointer-events-none">
                search
              </span>
              <input
                id="desktop-global-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111111] border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#c5a059] focus:border-[#c5a059] transition-all"
                placeholder="Where to in Pakistan?"
                type="text"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>

            <button
              id="desktop-quick-guide-btn"
              onClick={onOpenMenu}
              className="p-2 rounded-full bg-[#141414] text-white/40 hover:text-[#c5a059] hover:bg-[#1a1a1a] border border-white/10 transition-colors cursor-pointer"
              title="Traveler Toolkit & Guides"
            >
              <span className="material-symbols-outlined text-[18px]">info</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
