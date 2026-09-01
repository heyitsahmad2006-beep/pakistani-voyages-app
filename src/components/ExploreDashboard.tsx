import React from 'react';
import { Destination, Category } from '../types';
import { CATEGORIES } from '../data/destinations';

interface ExploreDashboardProps {
  destinations: Destination[];
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectDestination: (dest: Destination) => void;
  savedDestinationIds: string[];
  onToggleSave: (id: string, e?: React.MouseEvent) => void;
  onOpenFilter: () => void;
  showAll: boolean;
  setShowAll: (show: boolean) => void;
}

export const ExploreDashboard: React.FC<ExploreDashboardProps> = ({
  destinations,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onSelectDestination,
  savedDestinationIds,
  onToggleSave,
  onOpenFilter,
  showAll,
  setShowAll,
}) => {
  // Filter destinations based on category and search query
  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory =
      selectedCategory === 'All' || dest.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.about.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredList = showAll
    ? filteredDestinations
    : filteredDestinations.filter((d) => d.featured || filteredDestinations.length <= 3);

  // Find specific key cards if available
  const naran = destinations.find((d) => d.id === 'naran-valley') || destinations[0];
  const badshahi = destinations.find((d) => d.id === 'badshahi-mosque') || destinations[1];
  const hunza = destinations.find((d) => d.id === 'hunza-valley') || destinations[2];

  return (
    <main className="pt-20 md:pt-28 px-6 max-w-7xl mx-auto pb-32">
      {/* Search Section (Mobile Focus) */}
      <section className="mb-8 md:hidden">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-[#c5a059] text-[20px]">
              search
            </span>
          </div>
          <input
            id="mobile-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Where to in Pakistan?"
            className="block w-full pl-11 pr-12 py-3 bg-[#111111] border border-white/10 rounded-full text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#c5a059] focus:border-[#c5a059] transition-colors shadow-sm"
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <button
              id="mobile-filter-tune-btn"
              onClick={onOpenFilter}
              className="p-2 text-white/40 hover:text-[#c5a059] transition-colors cursor-pointer"
              aria-label="Filter Options"
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>
      </section>

      {/* Greeting Section matching exact Elegant Dark typography */}
      <section className="mb-6 md:mb-8">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="h-[1px] w-8 bg-[#c5a059]"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-semibold">
            Voyages &amp; Expeditions
          </span>
        </div>
        <h2 className="text-[44px] md:text-[56px] font-light text-white leading-[1.08] tracking-[-0.02em] mb-3">
          Discover<br />
          <span className="font-serif italic text-[#c5a059]">Pakistan.</span>
        </h2>
        <p className="text-[15px] md:text-[17px] text-white/60 max-w-lg leading-relaxed font-light">
          Uncover heritage sanctuaries, majestic mountain peaks, and timeless Northern valleys.
        </p>
      </section>

      {/* Categories Row */}
      <section className="mb-10 -mx-6 px-6 overflow-x-auto hide-scrollbar">
        <div className="flex space-x-2.5 pb-2 w-max">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                id={`category-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/50 shadow-sm'
                    : 'bg-[#111111] text-white/40 border border-white/5 hover:border-[#c5a059]/30 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured Destinations Section (Bento Grid) */}
      <section className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="text-[18px] md:text-[20px] font-light uppercase tracking-[0.1em] text-white">
              {searchQuery
                ? `Search Results (${filteredDestinations.length})`
                : selectedCategory === 'All'
                ? 'Featured Destinations'
                : `${selectedCategory} (${filteredDestinations.length})`}
            </h3>
            {searchQuery && (
              <p className="text-xs text-white/40 mt-0.5">
                Showing results for &ldquo;{searchQuery}&rdquo;
              </p>
            )}
          </div>
          <button
            id="see-all-toggle-btn"
            onClick={() => setShowAll(!showAll)}
            className="text-[#c5a059] text-xs uppercase tracking-[0.15em] font-semibold hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>{showAll ? 'Show Featured' : 'See all'}</span>
            <span className="material-symbols-outlined text-[16px]">
              {showAll ? 'expand_less' : 'arrow_forward'}
            </span>
          </button>
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="p-12 text-center bg-[#111111] rounded-2xl border border-white/5">
            <span className="material-symbols-outlined text-4xl text-[#c5a059] mb-3">
              travel_explore
            </span>
            <h4 className="text-lg font-light text-white mb-1">
              No destinations found
            </h4>
            <p className="text-xs text-white/50 max-w-md mx-auto mb-4">
              We couldn&apos;t find any destination matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 bg-[#c5a059] text-black font-bold rounded-full text-xs uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        ) : !searchQuery && selectedCategory === 'All' && !showAll ? (
          /* Exact default Bento Grid with Elegant Dark styling */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {/* 1. Naran Card (Large Span) */}
            <article
              id="card-destination-naran"
              onClick={() => onSelectDestination(naran)}
              className="md:col-span-8 group cursor-pointer h-80 md:h-[340px] rounded-2xl overflow-hidden relative shadow-2xl border border-white/5 transition-all duration-300 hover:border-[#c5a059]/40"
            >
              <img
                alt={naran.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={naran.thumbnailImage}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/25 to-transparent pointer-events-none" />

              {/* Bookmark quick button */}
              <button
                onClick={(e) => onToggleSave(naran.id, e)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0a0a0a]/70 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-[#c5a059] border border-white/10 z-10 transition-colors"
                title={savedDestinationIds.includes(naran.id) ? 'Remove bookmark' : 'Bookmark'}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{
                    fontVariationSettings: savedDestinationIds.includes(naran.id)
                      ? "'FILL' 1"
                      : "'FILL' 0",
                    color: savedDestinationIds.includes(naran.id) ? '#c5a059' : undefined,
                  }}
                >
                  bookmark
                </span>
              </button>

              <div className="absolute bottom-0 left-0 p-6 md:p-7 w-full flex justify-between items-end">
                <div>
                  <div className="flex items-center space-x-1.5 mb-1.5">
                    <span
                      className="material-symbols-outlined text-[#c5a059] text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-white text-xs font-semibold">
                      {naran.rating.toFixed(1)}
                    </span>
                  </div>
                  <h4 className="text-[28px] md:text-[32px] font-light text-white leading-tight drop-shadow-sm">
                    {naran.name}
                  </h4>
                  <p className="text-white/60 text-xs flex items-center mt-1">
                    <span className="material-symbols-outlined text-[15px] mr-1 text-[#c5a059]">
                      location_on
                    </span>
                    {naran.province}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDestination(naran);
                  }}
                  className="w-11 h-11 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[#c5a059] hover:border-[#c5a059]/40 transition-all hover:scale-110 duration-200 cursor-pointer shadow-lg"
                  aria-label="View Naran Valley Details"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </article>

            {/* 2. Badshahi Mosque Card */}
            <article
              id="card-destination-badshahi"
              onClick={() => onSelectDestination(badshahi)}
              className="md:col-span-4 group cursor-pointer h-80 md:h-[340px] rounded-2xl overflow-hidden relative shadow-2xl border border-white/5 transition-all duration-300 hover:border-[#c5a059]/40"
            >
              <img
                alt={badshahi.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={badshahi.thumbnailImage}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/30 to-transparent pointer-events-none" />

              {/* Bookmark button */}
              <button
                onClick={(e) => onToggleSave(badshahi.id, e)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0a0a0a]/70 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-[#c5a059] border border-white/10 z-10 transition-colors"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{
                    fontVariationSettings: savedDestinationIds.includes(badshahi.id)
                      ? "'FILL' 1"
                      : "'FILL' 0",
                    color: savedDestinationIds.includes(badshahi.id) ? '#c5a059' : undefined,
                  }}
                >
                  bookmark
                </span>
              </button>

              <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                <div>
                  <div className="flex items-center space-x-1.5 mb-1.5">
                    <span
                      className="material-symbols-outlined text-[#c5a059] text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-white text-xs font-semibold">
                      {badshahi.rating.toFixed(1)}
                    </span>
                  </div>
                  <h4 className="text-[22px] md:text-[24px] font-light text-white leading-snug">
                    {badshahi.name}
                  </h4>
                  <p className="text-white/60 text-xs flex items-center mt-0.5">
                    <span className="material-symbols-outlined text-[15px] mr-1 text-[#c5a059]">
                      location_on
                    </span>
                    Lahore
                  </p>
                </div>
              </div>
            </article>

            {/* 3. Hunza Card (Full Width Span) */}
            <article
              id="card-destination-hunza"
              onClick={() => onSelectDestination(hunza)}
              className="md:col-span-12 group cursor-pointer h-72 md:h-80 rounded-2xl overflow-hidden relative shadow-2xl border border-white/5 transition-all duration-300 hover:border-[#c5a059]/40"
            >
              <img
                alt={hunza.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={hunza.thumbnailImage}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-transparent to-transparent pointer-events-none" />

              {/* Bookmark button */}
              <button
                onClick={(e) => onToggleSave(hunza.id, e)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0a0a0a]/70 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-[#c5a059] border border-white/10 z-10 transition-colors"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{
                    fontVariationSettings: savedDestinationIds.includes(hunza.id)
                      ? "'FILL' 1"
                      : "'FILL' 0",
                    color: savedDestinationIds.includes(hunza.id) ? '#c5a059' : undefined,
                  }}
                >
                  bookmark
                </span>
              </button>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-center">
                <div>
                  <div className="flex items-center space-x-1.5 mb-1.5">
                    <span
                      className="material-symbols-outlined text-[#c5a059] text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-white text-xs font-semibold">
                      {hunza.rating.toFixed(1)}
                    </span>
                  </div>
                  <h4 className="text-[28px] md:text-[34px] font-light text-white leading-tight">
                    {hunza.name}
                  </h4>
                  <p className="text-white/60 text-xs mt-1 max-w-md hidden md:block">
                    Experience the majestic peaks and vibrant culture of the north.
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDestination(hunza);
                  }}
                  className="bg-[#c5a059] text-black px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#d8b56f] transition-all flex items-center space-x-2 cursor-pointer shadow-lg active:scale-95"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </article>
          </div>
        ) : (
          /* Grid for filtered search results or extended destination catalogue */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest) => {
              const isSaved = savedDestinationIds.includes(dest.id);
              return (
                <article
                  key={dest.id}
                  id={`card-dest-${dest.id}`}
                  onClick={() => onSelectDestination(dest)}
                  className="group cursor-pointer h-80 rounded-2xl overflow-hidden relative shadow-2xl border border-white/5 transition-all duration-300 hover:border-[#c5a059]/40"
                >
                  <img
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={dest.thumbnailImage}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/30 to-transparent pointer-events-none" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-[#c5a059] border border-[#c5a059]/20">
                      {dest.categoryLabel}
                    </span>
                    <button
                      onClick={(e) => onToggleSave(dest.id, e)}
                      className="w-8 h-8 rounded-full bg-[#0a0a0a]/70 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-[#c5a059] border border-white/10 transition-colors"
                    >
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{
                          fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0",
                          color: isSaved ? '#c5a059' : undefined,
                        }}
                      >
                        bookmark
                      </span>
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end">
                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        <span
                          className="material-symbols-outlined text-[#c5a059] text-[15px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span className="text-white text-xs font-semibold">
                          {dest.rating.toFixed(1)}
                        </span>
                        <span className="text-white/40 text-[11px]">
                          ({dest.reviewsCount.toLocaleString()})
                        </span>
                      </div>
                      <h4 className="text-[19px] font-light text-white leading-tight">
                        {dest.name}
                      </h4>
                      <p className="text-white/50 text-xs flex items-center mt-1">
                        <span className="material-symbols-outlined text-[14px] mr-1 text-[#c5a059]">
                          location_on
                        </span>
                        {dest.province}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDestination(dest);
                      }}
                      className="w-9 h-9 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[#c5a059] hover:border-[#c5a059]/40 transition-all hover:scale-110"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Discover Highlights Quick Banner */}
      <section className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 border border-[#c5a059]/20">
            <span className="material-symbols-outlined text-[14px]">public</span>
            <span>Traveler Fact</span>
          </div>
          <h3 className="text-xl md:text-2xl font-light text-white mb-2">
            The Land of the Highest Peaks &amp; Ancient Civilizations
          </h3>
          <p className="text-xs text-white/50 leading-relaxed mb-4">
            Pakistan is home to 5 of the world&apos;s 14 peaks above 8,000 meters, over 7,000 glaciers outside the polar regions, and 5,000-year-old Indus Valley heritage sites.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-normal text-white/80">
            <div className="flex items-center gap-1.5 bg-[#141414] px-3 py-1.5 rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-[#c5a059] text-[15px]">mountain</span>
              <span>K2 (8,611 m)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#141414] px-3 py-1.5 rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-[#c5a059] text-[15px]">alt_route</span>
              <span>Karakoram Highway (KKH)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#141414] px-3 py-1.5 rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-[#c5a059] text-[15px]">water_drop</span>
              <span>7,253 Glaciers</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
