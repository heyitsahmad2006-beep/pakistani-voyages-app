import React from 'react';

interface QuickGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickGuideDrawer: React.FC<QuickGuideDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0e0e0e] border-r border-white/10 w-full max-w-sm h-full flex flex-col shadow-2xl p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c5a059]">explore</span>
            <h3 className="font-light tracking-[0.1em] uppercase text-sm text-white">Pakistani Voyages</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 text-white/60 hover:text-white flex items-center justify-center cursor-pointer border border-white/5"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Sections */}
        <div className="space-y-6 flex-1 text-xs text-white/60">
          {/* Quick info */}
          <div className="p-4 bg-[#141414] rounded-xl border border-white/5 space-y-2">
            <h4 className="font-medium text-white text-xs flex items-center gap-1.5 uppercase tracking-wider">
              <span className="material-symbols-outlined text-[#c5a059] text-[16px]">info</span>
              <span>Essential Alpine Advisory</span>
            </h4>
            <p className="leading-relaxed font-light text-white/70">
              When traveling to Northern Pakistan (Naran, Hunza, Skardu, Fairy Meadows), always check Babusar Pass and KKH road clearance before departure.
            </p>
          </div>

          {/* Emergency contacts */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white/50 uppercase tracking-[0.2em] text-[10px]">
              Emergency Tourism Helplines
            </h4>
            <div className="space-y-1.5">
              <div className="flex justify-between p-2.5 bg-[#141414] rounded-lg border border-white/5">
                <span className="text-white/60 font-light">Motorway Police Helpline</span>
                <span className="font-semibold text-[#c5a059]">130</span>
              </div>
              <div className="flex justify-between p-2.5 bg-[#141414] rounded-lg border border-white/5">
                <span className="text-white/60 font-light">Rescue Emergency (National)</span>
                <span className="font-semibold text-[#c5a059]">1122</span>
              </div>
              <div className="flex justify-between p-2.5 bg-[#141414] rounded-lg border border-white/5">
                <span className="text-white/60 font-light">KPK Tourism Police</span>
                <span className="font-semibold text-[#c5a059]">1422</span>
              </div>
            </div>
          </div>

          {/* High altitude tips */}
          <div className="space-y-2">
            <h4 className="font-bold text-white/50 uppercase tracking-[0.2em] text-[10px]">
              Altitude Sickness (AMS) Guide
            </h4>
            <ul className="space-y-1.5 list-disc pl-4 text-white/60 font-light">
              <li>Stay hydrated with min. 3-4 liters of water daily.</li>
              <li>Ascend gradually past 2,500m (Naran/Hunza).</li>
              <li>Avoid high exertion on your first day of arrival.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/30 text-center font-light">
          Pakistani Voyages • Alpine &amp; Cultural Explorer
        </div>
      </div>

      {/* Backdrop click to close */}
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};
