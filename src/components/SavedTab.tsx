import React from 'react';
import { Destination } from '../types';

interface SavedTabProps {
  savedDestinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
  onRemoveSave: (id: string, e?: React.MouseEvent) => void;
  onExploreMore: () => void;
}

export const SavedTab: React.FC<SavedTabProps> = ({
  savedDestinations,
  onSelectDestination,
  onRemoveSave,
  onExploreMore,
}) => {
  return (
    <main className="pt-24 md:pt-32 px-6 max-w-7xl mx-auto pb-32 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#c5a059]/20">
            <span className="material-symbols-outlined text-[14px]">bookmark</span>
            <span>Saved Wishlist</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-light text-white leading-tight">
            Bookmarked Places
          </h2>
          <p className="text-xs text-white/50 uppercase tracking-wider">
            {savedDestinations.length}{' '}
            {savedDestinations.length === 1 ? 'destination' : 'destinations'} saved for your journeys
          </p>
        </div>

        {savedDestinations.length > 0 && (
          <button
            onClick={onExploreMore}
            className="self-start md:self-auto px-5 py-2 rounded-full bg-[#111111] text-[#c5a059] border border-white/10 hover:bg-[#161616] text-xs font-medium uppercase tracking-[0.15em] flex items-center gap-2 cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>Discover More</span>
          </button>
        )}
      </div>

      {savedDestinations.length === 0 ? (
        <div className="p-12 text-center bg-[#111111] rounded-2xl border border-white/5 max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#161616] text-[#c5a059] flex items-center justify-center mx-auto mb-4 border border-white/5">
            <span className="material-symbols-outlined text-2xl">bookmark_border</span>
          </div>
          <h3 className="text-lg font-light uppercase tracking-wider text-white mb-2">
            No saved destinations yet
          </h3>
          <p className="text-xs text-white/50 mb-6 leading-relaxed font-light">
            Bookmark Naran, Hunza, Skardu, Badshahi Mosque, or any destination to build your personal luxury Pakistan bucket list.
          </p>
          <button
            onClick={onExploreMore}
            className="px-6 py-2.5 bg-[#c5a059] text-black font-bold rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#d8b56f] transition-colors cursor-pointer shadow-md"
          >
            Explore Pakistan Destinations
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedDestinations.map((dest) => (
            <article
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#111111] border border-white/5 hover:border-[#c5a059]/40 shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image Banner */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={dest.thumbnailImage}
                  alt={dest.name}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />

                <button
                  onClick={(e) => onRemoveSave(dest.id, e)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0a0a0a]/70 backdrop-blur-md text-[#c5a059] hover:text-red-400 flex items-center justify-center border border-white/10 transition-colors z-10"
                  title="Remove from saved"
                >
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bookmark
                  </span>
                </button>

                <div className="absolute bottom-3 left-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md text-[10px] uppercase tracking-wider font-medium text-[#c5a059] border border-white/10">
                    {dest.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-medium text-white group-hover:text-[#c5a059] transition-colors">
                      {dest.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-xs font-semibold text-[#c5a059]">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span>{dest.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/50 flex items-center mb-2 font-light">
                    <span className="material-symbols-outlined text-[14px] mr-1 text-[#c5a059]">
                      location_on
                    </span>
                    {dest.province} • {dest.altitude}
                  </p>
                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed font-light">
                    {dest.about}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-light">
                  <span className="text-white/40">
                    {dest.routeInfo.travelDuration} from {dest.routeInfo.fromCity}
                  </span>
                  <span className="text-[#c5a059] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};
