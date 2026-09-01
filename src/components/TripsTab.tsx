import React, { useState } from 'react';
import { Destination } from '../types';

interface TripsTabProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
}

interface PrebuiltTrip {
  id: string;
  title: string;
  duration: string;
  destinationsCount: number;
  highlightStop: string;
  estimatedCostPkr: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging Expedition';
  itinerary: { day: string; title: string; desc: string }[];
}

const PREBUILT_TRIPS: PrebuiltTrip[] = [
  {
    id: 'trip-kaghan-hunza',
    title: 'Grand Karakoram & Kaghan Expedition',
    duration: '7 Days / 6 Nights',
    destinationsCount: 4,
    highlightStop: 'Naran Valley, Saif-ul-Malook, Karimabad & Attabad Lake',
    estimatedCostPkr: 'Rs. 75,000 - 120,000',
    difficulty: 'Moderate',
    itinerary: [
      { day: 'Day 1', title: 'Islamabad to Naran', desc: 'Hazara Motorway through Balakot to Naran Valley riverside.' },
      { day: 'Day 2', title: 'Saif-ul-Malook & Babusar Pass', desc: '4x4 jeep to Lake Saif-ul-Malook, cross Babusar Pass (4,173m) to Chilas.' },
      { day: 'Day 3', title: 'Chilas to Karimabad Hunza', desc: 'Drive KKH past 3 Mountain Ranges junction, sunset at Baltit Fort.' },
      { day: 'Day 4', title: 'Attabad Lake & Passu Cones', desc: 'Boating on turquoise Attabad Lake and crossing Hussaini suspension bridge.' },
      { day: 'Day 5', title: 'Khunjerab Pass Border', desc: 'Drive to Pak-China border at 4,693m and return to Gilgit.' },
      { day: 'Day 6', title: 'Gilgit to Besham / Abbottabad', desc: 'Scenic return journey down the Indus Highway.' },
      { day: 'Day 7', title: 'Return to Islamabad', desc: 'Arrival at Islamabad airport with souvenir shopping.' }
    ]
  },
  {
    id: 'trip-lahore-heritage',
    title: 'Walled City & Mughal Heritage Weekend',
    duration: '3 Days / 2 Nights',
    destinationsCount: 3,
    highlightStop: 'Badshahi Mosque, Lahore Fort & Food Street',
    estimatedCostPkr: 'Rs. 25,000 - 45,000',
    difficulty: 'Easy',
    itinerary: [
      { day: 'Day 1', title: 'Walled City & Badshahi Mosque', desc: 'Explore the grand courtyard of Badshahi Mosque, Shahi Hammam, and Haveli dinner.' },
      { day: 'Day 2', title: 'Lahore Fort & Shalimar Gardens', desc: 'Sheesh Mahal mirror palace and UNESCO Shalimar terraced water gardens.' },
      { day: 'Day 3', title: 'Anarkali & Wagah Border Ceremony', desc: 'Historic shopping at Anarkali bazaar and evening flag-lowering parade.' }
    ]
  }
];

export const TripsTab: React.FC<TripsTabProps> = ({ destinations, onSelectDestination }) => {
  const [selectedTrip, setSelectedTrip] = useState<PrebuiltTrip | null>(PREBUILT_TRIPS[0]);
  const [activeTab, setActiveTab] = useState<'curated' | 'custom'>('curated');
  
  // Custom trip builder state
  const [customDays, setCustomDays] = useState(5);
  const [travelersCount, setTravelersCount] = useState(2);
  const [selectedDestinationIds, setSelectedDestinationIds] = useState<string[]>(['naran-valley', 'hunza-valley']);

  const toggleSelectDest = (id: string) => {
    if (selectedDestinationIds.includes(id)) {
      setSelectedDestinationIds(selectedDestinationIds.filter((d) => d !== id));
    } else {
      setSelectedDestinationIds([...selectedDestinationIds, id]);
    }
  };

  const estimatedBudget = (customDays * 9500 * travelersCount).toLocaleString();

  return (
    <main className="pt-24 md:pt-32 px-6 max-w-7xl mx-auto pb-32 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#c5a059]/20">
            <span className="material-symbols-outlined text-[14px]">travel_explore</span>
            <span>Trip Planner</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-light text-white leading-tight">
            Pakistan Journeys
          </h2>
          <p className="text-xs text-white/50 uppercase tracking-wider">
            Curated road trips, alpine expeditions, and custom itinerary planning.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#111111] p-1 rounded-full border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('curated')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'curated'
                ? 'bg-[#c5a059] text-black shadow'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Curated Expeditions
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'custom'
                ? 'bg-[#c5a059] text-black shadow'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Custom Builder
          </button>
        </div>
      </div>

      {activeTab === 'curated' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Trip Cards List */}
          <div className="lg:col-span-5 space-y-4">
            {PREBUILT_TRIPS.map((trip) => {
              const isSelected = selectedTrip?.id === trip.id;
              return (
                <div
                  key={trip.id}
                  onClick={() => setSelectedTrip(trip)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#141414] border-[#c5a059] ring-1 ring-[#c5a059]/30 shadow-lg'
                      : 'bg-[#111111] border-white/5 hover:border-[#c5a059]/40'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-wider border border-[#c5a059]/20">
                      {trip.duration}
                    </span>
                    <span className="text-[11px] font-normal text-white/50">
                      {trip.difficulty}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-white mb-1">
                    {trip.title}
                  </h3>
                  <p className="text-xs text-white/60 mb-3 leading-relaxed font-light">
                    {trip.highlightStop}
                  </p>
                  <div className="flex justify-between items-center text-xs pt-3 border-t border-white/5 font-light">
                    <span className="text-white/40">Estimated Budget</span>
                    <span className="font-semibold text-[#c5a059]">
                      {trip.estimatedCostPkr}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trip Details Viewer */}
          {selectedTrip && (
            <div className="lg:col-span-7 bg-[#111111] rounded-2xl border border-white/5 p-6 md:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.2em]">
                    {selectedTrip.duration}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs text-white/50">{selectedTrip.difficulty}</span>
                </div>
                <h3 className="text-2xl font-light text-white mb-2">
                  {selectedTrip.title}
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {selectedTrip.highlightStop}
                </p>
              </div>

              {/* Day by day timeline */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em]">
                  Day-by-Day Itinerary
                </h4>
                <div className="space-y-3.5 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                  {selectedTrip.itinerary.map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#c5a059] -translate-x-1/2 border border-[#0a0a0a]" />
                      <div className="text-[11px] font-semibold text-[#c5a059]">{item.day}</div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <p className="text-xs text-white/60 mt-0.5 font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick packing items checklist */}
              <div className="p-4 bg-[#141414] rounded-xl border border-white/5 space-y-2">
                <h5 className="text-xs font-medium text-white flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#c5a059] text-[16px]">
                    inventory
                  </span>
                  <span>Northern Trip Packing Checklist</span>
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/60 font-light">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#c5a059]">check</span>
                    <span>Warm fleece &amp; windbreaker</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#c5a059]">check</span>
                    <span>Trekking boots &amp; thick socks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#c5a059]">check</span>
                    <span>Power bank &amp; offline maps</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#c5a059]">check</span>
                    <span>Cash PKR (limited ATMs)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Custom Trip Builder */
        <div className="bg-[#111111] rounded-2xl border border-white/5 p-6 md:p-8 max-w-3xl mx-auto space-y-6">
          <h3 className="text-xl font-light text-white uppercase tracking-wider">
            Custom Pakistan Itinerary Builder
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] block mb-2">
                Trip Duration (Days): {customDays}
              </label>
              <input
                type="range"
                min={2}
                max={14}
                value={customDays}
                onChange={(e) => setCustomDays(Number(e.target.value))}
                className="w-full accent-[#c5a059]"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] block mb-2">
                Travelers: {travelersCount}
              </label>
              <div className="flex gap-2">
                {[1, 2, 4, 6].map((num) => (
                  <button
                    key={num}
                    onClick={() => setTravelersCount(num)}
                    className={`flex-1 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                      travelersCount === num
                        ? 'bg-[#c5a059] text-black border-[#c5a059]'
                        : 'bg-[#141414] text-white/60 border-white/5 hover:bg-[#1a1a1a]'
                    }`}
                  >
                    {num} {num === 1 ? 'Solo' : 'Pers'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] block mb-2">
              Select Destinations to Include ({selectedDestinationIds.length})
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {destinations.map((d) => {
                const isSelected = selectedDestinationIds.includes(d.id);
                return (
                  <button
                    key={d.id}
                    onClick={() => toggleSelectDest(d.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#c5a059]/15 border-[#c5a059] text-white'
                        : 'bg-[#141414] border-white/5 text-white/60 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-medium">{d.name}</div>
                    <div className="text-[10px] text-white/40">{d.province}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Summary Box */}
          <div className="p-5 bg-[#141414] rounded-xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-white/50 block">
                Estimated Trip Budget ({customDays} Days • {travelersCount} Travelers)
              </span>
              <span className="text-2xl font-light text-[#c5a059]">
                Rs. {estimatedBudget} PKR
              </span>
            </div>
            <button
              onClick={() => {
                const firstDest = destinations.find((d) => selectedDestinationIds.includes(d.id));
                if (firstDest) onSelectDestination(firstDest);
              }}
              className="py-2.5 px-6 bg-[#c5a059] hover:bg-[#d8b56f] text-black font-bold rounded-full text-xs uppercase tracking-[0.15em] transition-colors cursor-pointer shadow-md"
            >
              Generate Itinerary Route
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
