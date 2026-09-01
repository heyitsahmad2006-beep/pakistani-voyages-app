import React, { useState, useEffect } from 'react';
import { Destination } from '../types';
import { fetchRouteInfo } from '../services/api';

interface LiveDirectionsModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LiveDirectionsModal: React.FC<LiveDirectionsModalProps> = ({
  destination,
  isOpen,
  onClose,
}) => {
  const [selectedOrigin, setSelectedOrigin] = useState<'Islamabad' | 'Lahore' | 'Peshawar'>('Islamabad');
  const [copied, setCopied] = useState(false);
  const [googleMapsUrl, setGoogleMapsUrl] = useState<string>('');

  useEffect(() => {
    if (destination) {
      fetchRouteInfo(
        destination.name,
        selectedOrigin,
        destination.latitude,
        destination.longitude
      ).then((res) => {
        if (res && res.googleMapsUrl) {
          setGoogleMapsUrl(res.googleMapsUrl);
        } else {
          setGoogleMapsUrl(
            `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
              selectedOrigin + ', Pakistan'
            )}&destination=${encodeURIComponent(destination.name + ', Pakistan')}`
          );
        }
      });
    }
  }, [destination, selectedOrigin]);

  if (!isOpen || !destination) return null;

  const handleCopyRoute = () => {
    const text = `Route to ${destination.name} from ${selectedOrigin}:
Total Distance: ${destination.routeInfo.travelDistance} (~${destination.routeInfo.travelDuration})
Road: ${destination.routeInfo.roadCondition}
Waypoints:
${destination.routeInfo.waypoints.map((w, i) => `${i + 1}. ${w.name} (${w.distanceFromStart}) - ${w.highlightNote}`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0e0e0e] border border-white/10 rounded-t-3xl md:rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#111111]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center border border-[#c5a059]/20">
              <span className="material-symbols-outlined text-[20px]">navigation</span>
            </div>
            <div>
              <h3 className="text-base font-light tracking-[0.05em] uppercase text-white">
                Live Route &amp; Directions
              </h3>
              <p className="text-xs text-white/50">
                To {destination.name} • {destination.province}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors border border-white/5"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Origin selector */}
          <div>
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] block mb-2">
              Departure Starting Point
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Islamabad', 'Lahore', 'Peshawar'] as const).map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedOrigin(city)}
                  className={`py-2 px-3 rounded-full text-xs font-medium transition-colors cursor-pointer border ${
                    selectedOrigin === city
                      ? 'bg-[#c5a059] text-black border-[#c5a059]'
                      : 'bg-[#141414] text-white/70 border-white/5 hover:bg-[#1a1a1a]'
                  }`}
                >
                  From {city}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Route Summary Card */}
          <div className="p-4 rounded-xl bg-[#111111] border border-white/5 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-white/40">Total Time</div>
              <div className="text-base font-semibold text-[#c5a059] mt-0.5">
                {selectedOrigin === 'Lahore'
                  ? `${parseInt(destination.routeInfo.travelDuration) + 4}h 30m`
                  : selectedOrigin === 'Peshawar'
                  ? `${parseInt(destination.routeInfo.travelDuration) + 1}h 00m`
                  : destination.routeInfo.travelDuration}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-white/40">Distance</div>
              <div className="text-base font-semibold text-white mt-0.5">
                {selectedOrigin === 'Lahore'
                  ? '660 km'
                  : selectedOrigin === 'Peshawar'
                  ? '320 km'
                  : destination.routeInfo.travelDistance}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-white/40">Road Type</div>
              <div className="text-xs font-medium text-[#c5a059] mt-1">
                {destination.routeInfo.roadCondition}
              </div>
            </div>
          </div>

          {/* Route Overview Description */}
          <div className="p-4 bg-[#111111] rounded-xl border border-white/5">
            <h4 className="text-[11px] font-bold text-[#c5a059] uppercase tracking-[0.15em] mb-1.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">alt_route</span>
              <span>Recommended Highway Track</span>
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              {destination.routeInfo.routeSummary}
            </p>
          </div>

          {/* Turn-by-Turn Waypoints Timeline */}
          <div>
            <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] mb-3">
              Turn-by-Turn Waypoints &amp; Altitude
            </h4>
            <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
              {destination.routeInfo.waypoints.map((wp, idx) => (
                <div key={idx} className="relative pl-8 flex flex-col gap-1">
                  <div
                    className={`absolute left-1.5 top-1.5 w-3 h-3 rounded-full -translate-x-1/2 border ${
                      idx === 0
                        ? 'bg-[#c5a059] border-[#c5a059]'
                        : idx === destination.routeInfo.waypoints.length - 1
                        ? 'bg-white border-white'
                        : 'bg-[#0e0e0e] border-[#c5a059]'
                    }`}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">
                      {wp.name}
                    </span>
                    <span className="text-[10px] font-normal text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded-full border border-[#c5a059]/20">
                      {wp.distanceFromStart} • {wp.timeFromStart}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 font-light">{wp.highlightNote}</p>
                  <div className="flex items-center gap-3 text-[11px] text-white/40 mt-0.5">
                    {wp.elevationMeters && (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">altitude</span>
                        {wp.elevationMeters} m
                      </span>
                    )}
                    {wp.fuelStation && (
                      <span className="flex items-center gap-1 text-[#c5a059]">
                        <span className="material-symbols-outlined text-[13px]">local_gas_station</span>
                        Fuel Available
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency & Highway Helpline */}
          <div className="p-4 bg-[#111111] rounded-xl border border-white/5">
            <h4 className="text-xs font-medium text-white mb-2.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c5a059] text-[16px]">call</span>
              <span>Emergency Travel Helplines (Pakistan)</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-[#141414] rounded-lg border border-white/5">
                <span className="text-white/40 block text-[10px]">Motorway Police (NH&amp;MP)</span>
                <span className="font-semibold text-[#c5a059]">Dial 130</span>
              </div>
              <div className="p-2.5 bg-[#141414] rounded-lg border border-white/5">
                <span className="text-white/40 block text-[10px]">Rescue Emergency</span>
                <span className="font-semibold text-[#c5a059]">Dial 1122</span>
              </div>
              <div className="p-2.5 bg-[#141414] rounded-lg border border-white/5">
                <span className="text-white/40 block text-[10px]">KPK Tourism Police</span>
                <span className="font-semibold text-[#c5a059]">Dial 1422</span>
              </div>
              <div className="p-2.5 bg-[#141414] rounded-lg border border-white/5">
                <span className="text-white/40 block text-[10px]">Gilgit-Baltistan Tourism</span>
                <span className="font-semibold text-[#c5a059]">05811-920159</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#111111] border-t border-white/5 flex gap-3">
          <button
            onClick={handleCopyRoute}
            className="flex-1 py-3 bg-[#161616] hover:bg-[#1f1f1f] text-white rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Copied' : 'Copy Route'}</span>
          </button>
          <button
            onClick={() => {
              const url = googleMapsUrl || `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(selectedOrigin + ', Pakistan')}&destination=${encodeURIComponent(destination.name + ', Pakistan')}`;
              window.open(url, '_blank');
            }}
            className="flex-1 py-3 bg-[#c5a059] hover:bg-[#d8b56f] text-black rounded-full text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">map</span>
            <span>Open in Maps</span>
          </button>
        </div>
      </div>
    </div>
  );
};
