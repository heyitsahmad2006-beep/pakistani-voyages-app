import React, { useState, useEffect } from 'react';
import { Destination, WeatherDay } from '../types';
import { fetchLiveWeather } from '../services/api';

interface DestinationDetailProps {
  destination: Destination;
  onBack: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenLiveDirections: (destination: Destination) => void;
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  onBack,
  isSaved,
  onToggleSave,
  onOpenLiveDirections,
}) => {
  const [forecast, setForecast] = useState<WeatherDay[]>(destination.weatherForecast);
  const [isLiveWeather, setIsLiveWeather] = useState(false);
  const [selectedWeatherDay, setSelectedWeatherDay] = useState<WeatherDay | null>(
    destination.weatherForecast[0] || null
  );

  useEffect(() => {
    if (destination.latitude && destination.longitude) {
      fetchLiveWeather(destination.latitude, destination.longitude).then((liveData) => {
        if (liveData && liveData.length > 0) {
          setForecast(liveData);
          setSelectedWeatherDay(liveData[0]);
          setIsLiveWeather(true);
        }
      });
    }
  }, [destination]);

  return (
    <div className="bg-[#0a0a0a] text-[#e0e0e0] min-h-screen pb-36 animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full h-[442px] md:h-[530px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full transform scale-100 transition-transform duration-1000"
          style={{
            backgroundImage: `url('${destination.heroImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />

        {/* Top Floating Actions */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-30 max-w-7xl mx-auto">
          <button
            id="detail-back-btn"
            onClick={onBack}
            aria-label="Back to explore"
            className="w-11 h-11 rounded-full bg-[#0a0a0a]/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#141414] hover:text-[#c5a059] transition-all border border-white/10 shadow-lg active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              id="detail-bookmark-btn"
              onClick={() => onToggleSave(destination.id)}
              aria-label={isSaved ? 'Remove Bookmark' : 'Bookmark Destination'}
              className="w-11 h-11 rounded-full bg-[#0a0a0a]/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#141414] hover:text-[#c5a059] transition-all border border-white/10 shadow-lg active:scale-95 cursor-pointer"
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={{
                  fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0",
                  color: isSaved ? '#c5a059' : undefined,
                }}
              >
                {isSaved ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="px-6 -mt-10 relative z-20 max-w-5xl mx-auto space-y-10">
        {/* Header & Info */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#c5a059]/20">
              <span className="material-symbols-outlined text-[14px] mr-1.5">
                {destination.categoryIcon || 'landscape'}
              </span>
              {destination.categoryLabel}
            </span>

            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#111111] text-white/60 text-xs font-normal border border-white/5">
              <span className="material-symbols-outlined text-[14px] mr-1 text-[#c5a059]">
                star
              </span>
              {destination.rating.toFixed(1)} ({destination.reviewsCount.toLocaleString()}{' '}
              reviews)
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
            <h1 className="text-[36px] md:text-[48px] font-light text-white leading-tight tracking-tight">
              {destination.name}
            </h1>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
              {destination.province} • {destination.altitude}
            </span>
          </div>

          {/* About Card */}
          <div className="bg-[#111111] rounded-2xl p-6 shadow-md border border-white/5">
            <h2 className="text-[18px] font-light uppercase tracking-[0.1em] text-white mb-3 flex items-center justify-between">
              <span>About</span>
              <span className="text-[11px] font-normal text-white/50 bg-[#141414] px-3 py-1 rounded-full border border-white/5">
                Best: {destination.bestSeason}
              </span>
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed font-light">
              {destination.about}
            </p>
          </div>
        </section>

        {/* Extended Weather Forecast */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[18px] font-light uppercase tracking-[0.1em] text-white">
                  Extended Forecast
                </h2>
                {isLiveWeather && (
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live OpenMeteo
                  </span>
                )}
              </div>
              <p className="text-xs text-white/40">14-Day Alpine &amp; Regional Weather</p>
            </div>
            {selectedWeatherDay && (
              <span className="text-[11px] text-[#c5a059] bg-[#c5a059]/10 px-3 py-1 rounded-full border border-[#c5a059]/20">
                {selectedWeatherDay.condition} • {selectedWeatherDay.rainChance}% rain
              </span>
            )}
          </div>

          <div className="flex overflow-x-auto gap-3 pb-3 no-scrollbar -mx-6 px-6 snap-x">
            {forecast.map((w, index) => {
              const isSelected = selectedWeatherDay?.fullDate === w.fullDate;
              return (
                <div
                  key={`${w.day}-${index}`}
                  onClick={() => setSelectedWeatherDay(w)}
                  className={`flex-shrink-0 w-20 flex flex-col items-center justify-center p-3.5 rounded-xl border snap-start cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#141414] border-[#c5a059] ring-1 ring-[#c5a059]/40 scale-105'
                      : 'bg-[#111111] border-white/5 hover:border-[#c5a059]/40 hover:bg-[#141414]'
                  }`}
                >
                  <span className="text-xs font-medium text-white/50 mb-1.5">
                    {w.day}
                  </span>
                  <span className="material-symbols-outlined text-[#c5a059] text-[22px] mb-2">
                    {w.icon}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {w.tempMax}°
                  </span>
                  <span className="text-[11px] text-white/40 mt-0.5">
                    {w.tempMin}°
                  </span>
                </div>
              );
            })}
          </div>

          {/* Selected Weather Day Detail Pill */}
          {selectedWeatherDay && (
            <div className="bg-[#111111] p-4 rounded-xl border border-white/5 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c5a059] text-[18px]">
                  thermostat
                </span>
                <div>
                  <div className="text-white/40">High / Low</div>
                  <div className="font-medium text-white">
                    {selectedWeatherDay.tempMax}°C / {selectedWeatherDay.tempMin}°C
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c5a059] text-[18px]">
                  rainy
                </span>
                <div>
                  <div className="text-white/40">Precipitation</div>
                  <div className="font-medium text-white">
                    {selectedWeatherDay.rainChance}% Probability
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c5a059] text-[18px]">
                  air
                </span>
                <div>
                  <div className="text-white/40">Wind Speed</div>
                  <div className="font-medium text-white">
                    {selectedWeatherDay.windSpeedKm} km/h
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c5a059] text-[18px]">
                  humidity_percentage
                </span>
                <div>
                  <div className="text-white/40">Humidity</div>
                  <div className="font-medium text-white">
                    {selectedWeatherDay.humidity}%
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Route Info & Live Map */}
        <section className="space-y-4">
          <div className="flex justify-between items-baseline">
            <h2 className="text-[18px] font-light uppercase tracking-[0.1em] text-white">Route Info</h2>
            <span className="text-xs text-[#c5a059] font-medium">
              {destination.routeInfo.roadCondition}
            </span>
          </div>

          <div className="w-full h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl border border-white/5 relative bg-[#111111] group">
            <img
              src={destination.mapImage}
              alt={`${destination.name} Route Map`}
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-500 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-black/30 pointer-events-none" />

            {/* Top Road Badge */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <span className="bg-[#0a0a0a]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-normal text-white/80 border border-white/10">
                Recommended: {destination.routeInfo.recommendedVehicle}
              </span>
            </div>

            {/* Floating Route Info Pill at bottom of map */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl p-4 border border-white/10 flex justify-between items-center shadow-lg">
              <div>
                <span className="block text-xs text-white/40">
                  From {destination.routeInfo.fromCity}
                </span>
                <span className="block text-base font-medium text-white">
                  {destination.routeInfo.travelDuration}{' '}
                  <span className="text-xs text-white/40 font-normal">
                    ({destination.routeInfo.travelDistance})
                  </span>
                </span>
              </div>
              <button
                onClick={() => onOpenLiveDirections(destination)}
                className="w-10 h-10 rounded-full bg-[#c5a059] text-black hover:bg-[#d8b56f] flex items-center justify-center transition-colors cursor-pointer shadow-md"
                title="View Navigation Waypoints"
              >
                <span className="material-symbols-outlined text-[20px]">
                  directions_car
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Highlights & Must-See Sights */}
        {destination.highlights && destination.highlights.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-[18px] font-light uppercase tracking-[0.1em] text-white">
              Must-See Sights &amp; Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {destination.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#111111] rounded-xl border border-white/5 flex items-start gap-3"
                >
                  <span className="material-symbols-outlined text-[#c5a059] text-[18px] mt-0.5 flex-shrink-0">
                    check_circle
                  </span>
                  <span className="text-xs text-white/80 leading-relaxed font-light">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Local Cuisine & Travel Tips */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destination.localCuisine && (
            <div className="bg-[#111111] p-5 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c5a059] text-[18px]">
                  restaurant
                </span>
                <span>Famous Local Dishes</span>
              </h3>
              <ul className="space-y-2">
                {destination.localCuisine.map((dish, i) => (
                  <li key={i} className="text-xs text-white/60 flex items-center gap-2 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {destination.travelTips && (
            <div className="bg-[#111111] p-5 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c5a059] text-[18px]">
                  lightbulb
                </span>
                <span>Pro Traveler Tips</span>
              </h3>
              <ul className="space-y-2">
                {destination.travelTips.map((tip, i) => (
                  <li key={i} className="text-xs text-white/60 flex items-start gap-2 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent z-40 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <div className="max-w-5xl mx-auto">
          <button
            id="get-live-directions-btn"
            onClick={() => onOpenLiveDirections(destination)}
            className="w-full h-13 bg-[#c5a059] text-black rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 shadow-[0_8px_25px_rgba(197,160,89,0.25)] hover:bg-[#d8b56f] transition-all active:scale-[0.98] duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">navigation</span>
            <span>Get Live Directions</span>
          </button>
        </div>
      </div>
    </div>
  );
};
