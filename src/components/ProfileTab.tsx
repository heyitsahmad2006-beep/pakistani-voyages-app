import React, { useState } from 'react';
import { USER_AVATAR_LARGE } from '../data/destinations';

interface ProfileTabProps {
  savedCount: number;
}

const PROVINCE_BADGES = [
  { name: 'Khyber Pakhtunkhwa', key: 'kpk', visited: true, count: 4, icon: 'mountain' },
  { name: 'Gilgit-Baltistan', key: 'gb', visited: true, count: 6, icon: 'landscape' },
  { name: 'Punjab', key: 'punjab', visited: true, count: 8, icon: 'temple_buddhist' },
  { name: 'Sindh', key: 'sindh', visited: false, count: 0, icon: 'water_drop' },
  { name: 'Balochistan', key: 'balochistan', visited: false, count: 0, icon: 'nature' },
  { name: 'Azad Kashmir', key: 'ajk', visited: true, count: 3, icon: 'forest' },
];

export const ProfileTab: React.FC<ProfileTabProps> = ({ savedCount }) => {
  const [offlineMapsEnabled, setOfflineMapsEnabled] = useState(true);
  const [currency, setCurrency] = useState<'PKR' | 'USD' | 'GBP' | 'EUR' | 'AED'>('PKR');

  return (
    <main className="pt-24 md:pt-32 px-6 max-w-4xl mx-auto pb-32 animate-fade-in space-y-8">
      {/* Profile Header Card */}
      <div className="bg-[#111111] rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="relative">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#c5a059] ring-4 ring-[#c5a059]/20 shadow-xl">
            <img
              src={USER_AVATAR_LARGE}
              alt="Traveler Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#c5a059] text-black flex items-center justify-center text-xs font-bold border-2 border-[#0a0a0a]">
            ✓
          </span>
        </div>

        <div className="flex-1 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#c5a059]/20">
            <span>Explorer Level 4</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white">
            Ahmad Raza
          </h2>
          <p className="text-xs text-white/50 font-light">
            Northern Pakistan Alpine Trekker &amp; Heritage Enthusiast
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2 text-xs">
            <div className="bg-[#141414] px-3.5 py-1.5 rounded-xl border border-white/5">
              <span className="text-white/40 block text-[10px] uppercase tracking-wider">Saved Sights</span>
              <span className="font-semibold text-[#c5a059]">{savedCount} Places</span>
            </div>
            <div className="bg-[#141414] px-3.5 py-1.5 rounded-xl border border-white/5">
              <span className="text-white/40 block text-[10px] uppercase tracking-wider">Provinces Explored</span>
              <span className="font-semibold text-white">4 of 6</span>
            </div>
            <div className="bg-[#141414] px-3.5 py-1.5 rounded-xl border border-white/5">
              <span className="text-white/40 block text-[10px] uppercase tracking-wider">Highest Altitude</span>
              <span className="font-semibold text-white">4,693 m (Khunjerab)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pakistan Travel Passport / Province Badges */}
      <div className="bg-[#111111] rounded-2xl border border-white/5 p-6 md:p-8 space-y-4">
        <div className="flex justify-between items-baseline">
          <h3 className="text-base font-light uppercase tracking-[0.1em] text-white">
            Pakistan Regional Explorer Badges
          </h3>
          <span className="text-xs text-[#c5a059] font-medium">4 / 6 Completed</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {PROVINCE_BADGES.map((badge) => (
            <div
              key={badge.key}
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                badge.visited
                  ? 'bg-[#141414] border-[#c5a059]/40'
                  : 'bg-[#0e0e0e] border-white/5 opacity-40'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="material-symbols-outlined text-[#c5a059] text-[20px]">
                  {badge.icon}
                </span>
                {badge.visited && (
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#c5a059] bg-[#c5a059]/10 px-1.5 py-0.5 rounded border border-[#c5a059]/20">
                    Unlocked
                  </span>
                )}
              </div>
              <div>
                <div className="text-xs font-medium text-white">{badge.name}</div>
                <div className="text-[10px] text-white/40 font-light">
                  {badge.visited ? `${badge.count} sights visited` : 'Not visited yet'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Preferences & Utilities */}
      <div className="bg-[#111111] rounded-2xl border border-white/5 p-6 md:p-8 space-y-5">
        <h3 className="text-base font-light uppercase tracking-[0.1em] text-white">
          Travel Preferences &amp; Settings
        </h3>

        <div className="space-y-4 text-sm">
          {/* Offline maps toggle */}
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <div>
              <div className="font-normal text-white text-xs">Offline Mountain Maps Cache</div>
              <div className="text-[11px] text-white/40 font-light">
                Pre-download Kaghan &amp; Karakoram Highway topo routes
              </div>
            </div>
            <button
              onClick={() => setOfflineMapsEnabled(!offlineMapsEnabled)}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                offlineMapsEnabled ? 'bg-[#c5a059]' : 'bg-[#222222]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-black absolute top-0.5 transition-transform ${
                  offlineMapsEnabled ? 'left-5.5' : 'left-0.5'
                }`}
              />
            </button>
          </div>

          {/* Currency selection */}
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <div>
              <div className="font-normal text-white text-xs">Preferred Currency</div>
              <div className="text-[11px] text-white/40 font-light">
                Display hotel &amp; jeep transport estimates in selected currency
              </div>
            </div>
            <div className="flex gap-1.5">
              {(['PKR', 'USD', 'GBP', 'EUR', 'AED'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                    currency === curr
                      ? 'bg-[#c5a059] text-black border-[#c5a059]'
                      : 'bg-[#141414] text-white/60 border-white/5 hover:bg-[#1a1a1a]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
