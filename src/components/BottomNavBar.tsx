import React from 'react';
import { TabType } from '../types';

interface BottomNavBarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  savedCount: number;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
}) => {
  return (
    <nav
      id="mobile-bottom-nav"
      className="fixed bottom-0 w-full z-40 rounded-t-2xl backdrop-blur-xl bg-[#0a0a0a]/95 border-t border-white/5 shadow-[0_-8px_24px_rgba(0,0,0,0.6)] md:hidden transition-all duration-300"
    >
      <div className="flex justify-around items-center h-16 pb-[env(safe-area-inset-bottom,8px)] px-4 w-full">
        {/* Explore */}
        <button
          id="bottom-tab-explore"
          aria-label="Explore"
          onClick={() => setActiveTab('explore')}
          className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-200 w-16 ${
            activeTab === 'explore'
              ? 'text-[#c5a059] font-bold scale-105'
              : 'text-white/40 hover:text-white'
          }`}
        >
          <span
            className="material-symbols-outlined mb-0.5 text-[22px]"
            style={{ fontVariationSettings: activeTab === 'explore' ? "'FILL' 1" : "'FILL' 0" }}
          >
            explore
          </span>
          <span className="text-[10px] font-semibold tracking-widest uppercase">Explore</span>
        </button>

        {/* Saved */}
        <button
          id="bottom-tab-saved"
          aria-label="Saved"
          onClick={() => setActiveTab('saved')}
          className={`flex flex-col items-center justify-center cursor-pointer relative transition-all duration-200 w-16 ${
            activeTab === 'saved'
              ? 'text-[#c5a059] font-bold scale-105'
              : 'text-white/40 hover:text-white'
          }`}
        >
          <div className="relative">
            <span
              className="material-symbols-outlined mb-0.5 text-[22px]"
              style={{ fontVariationSettings: activeTab === 'saved' ? "'FILL' 1" : "'FILL' 0" }}
            >
              bookmark
            </span>
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#c5a059] text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-widest uppercase">Saved</span>
        </button>

        {/* Trips */}
        <button
          id="bottom-tab-trips"
          aria-label="Trips"
          onClick={() => setActiveTab('trips')}
          className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-200 w-16 ${
            activeTab === 'trips'
              ? 'text-[#c5a059] font-bold scale-105'
              : 'text-white/40 hover:text-white'
          }`}
        >
          <span
            className="material-symbols-outlined mb-0.5 text-[22px]"
            style={{ fontVariationSettings: activeTab === 'trips' ? "'FILL' 1" : "'FILL' 0" }}
          >
            travel_explore
          </span>
          <span className="text-[10px] font-semibold tracking-widest uppercase">Trips</span>
        </button>

        {/* Profile */}
        <button
          id="bottom-tab-profile"
          aria-label="Profile"
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-200 w-16 ${
            activeTab === 'profile'
              ? 'text-[#c5a059] font-bold scale-105'
              : 'text-white/40 hover:text-white'
          }`}
        >
          <span
            className="material-symbols-outlined mb-0.5 text-[22px]"
            style={{ fontVariationSettings: activeTab === 'profile' ? "'FILL' 1" : "'FILL' 0" }}
          >
            person
          </span>
          <span className="text-[10px] font-semibold tracking-widest uppercase">Profile</span>
        </button>
      </div>
    </nav>
  );
};
