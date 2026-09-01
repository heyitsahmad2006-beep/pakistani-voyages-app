/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Destination, Category, TabType } from './types';
import { DESTINATIONS } from './data/destinations';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { ExploreDashboard } from './components/ExploreDashboard';
import { DestinationDetail } from './components/DestinationDetail';
import { SavedTab } from './components/SavedTab';
import { TripsTab } from './components/TripsTab';
import { ProfileTab } from './components/ProfileTab';
import { LiveDirectionsModal } from './components/LiveDirectionsModal';
import { FilterModal } from './components/FilterModal';
import { QuickGuideDrawer } from './components/QuickGuideDrawer';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('explore');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Filter state for modal
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterProvince, setFilterProvince] = useState('');
  const [filterMinRating, setFilterMinRating] = useState(0);

  // Directions modal state
  const [directionsDestination, setDirectionsDestination] = useState<Destination | null>(null);
  const [isDirectionsModalOpen, setIsDirectionsModalOpen] = useState(false);

  // Drawer menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Saved destinations list (persisted in localStorage)
  const [savedDestinationIds, setSavedDestinationIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('pv_saved_destinations');
      return stored ? JSON.parse(stored) : ['naran-valley', 'hunza-valley'];
    } catch {
      return ['naran-valley', 'hunza-valley'];
    }
  });

  // Toast message state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('pv_saved_destinations', JSON.stringify(savedDestinationIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedDestinationIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const toggleSaveDestination = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const dest = DESTINATIONS.find((d) => d.id === id);
    const destName = dest ? dest.name : 'Destination';

    if (savedDestinationIds.includes(id)) {
      setSavedDestinationIds(savedDestinationIds.filter((item) => item !== id));
      showToast(`Removed ${destName} from saved`);
    } else {
      setSavedDestinationIds([...savedDestinationIds, id]);
      showToast(`Saved ${destName} to your wishlist`);
    }
  };

  const handleOpenLiveDirections = (dest: Destination) => {
    setDirectionsDestination(dest);
    setIsDirectionsModalOpen(true);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDashboard = () => {
    setSelectedDestination(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const savedDestinationsList = DESTINATIONS.filter((d) =>
    savedDestinationIds.includes(d.id)
  );

  // Filtered by province & rating
  const appliedDestinations = DESTINATIONS.filter((dest) => {
    const matchProvince = !filterProvince || dest.province === filterProvince;
    const matchRating = filterMinRating === 0 || dest.rating >= filterMinRating;
    return matchProvince && matchRating;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans antialiased relative selection:bg-[#c5a059]/30 selection:text-[#c5a059]">
      {/* Toast Alert Feedback */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#141414] border border-[#c5a059]/40 text-[#e0e0e0] px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-semibold animate-bounce">
          <span className="material-symbols-outlined text-[#c5a059] text-[18px]">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* If a destination is selected, display the exact Destination Detail view (Screen 2) */}
      {selectedDestination ? (
        <DestinationDetail
          destination={selectedDestination}
          onBack={handleBackToDashboard}
          isSaved={savedDestinationIds.includes(selectedDestination.id)}
          onToggleSave={toggleSaveDestination}
          onOpenLiveDirections={handleOpenLiveDirections}
        />
      ) : (
        <>
          {/* Main Top App Bar */}
          <Header
            activeTab={activeTab}
            setActiveTab={(tab) => {
              setActiveTab(tab);
              setSelectedDestination(null);
            }}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onOpenMenu={() => setIsMenuOpen(true)}
            onOpenProfile={() => {
              setActiveTab('profile');
              setSelectedDestination(null);
            }}
          />

          {/* Active Tab View */}
          {activeTab === 'explore' && (
            <ExploreDashboard
              destinations={appliedDestinations}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSelectDestination={handleSelectDestination}
              savedDestinationIds={savedDestinationIds}
              onToggleSave={toggleSaveDestination}
              onOpenFilter={() => setIsFilterModalOpen(true)}
              showAll={showAll}
              setShowAll={setShowAll}
            />
          )}

          {activeTab === 'saved' && (
            <SavedTab
              savedDestinations={savedDestinationsList}
              onSelectDestination={handleSelectDestination}
              onRemoveSave={toggleSaveDestination}
              onExploreMore={() => setActiveTab('explore')}
            />
          )}

          {activeTab === 'trips' && (
            <TripsTab
              destinations={DESTINATIONS}
              onSelectDestination={handleSelectDestination}
            />
          )}

          {activeTab === 'profile' && (
            <ProfileTab savedCount={savedDestinationIds.length} />
          )}

          {/* Bottom Nav Bar (Mobile Blueprint Execution) */}
          <BottomNavBar
            activeTab={activeTab}
            setActiveTab={(tab) => {
              setActiveTab(tab);
              setSelectedDestination(null);
            }}
            savedCount={savedDestinationIds.length}
          />
        </>
      )}

      {/* Live Directions & Highway Waypoints Modal */}
      <LiveDirectionsModal
        destination={directionsDestination}
        isOpen={isDirectionsModalOpen}
        onClose={() => setIsDirectionsModalOpen(false)}
      />

      {/* Filter Options Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedProvince={filterProvince}
        setSelectedProvince={setFilterProvince}
        minRating={filterMinRating}
        setMinRating={setFilterMinRating}
        onReset={() => {
          setSelectedCategory('All');
          setFilterProvince('');
          setFilterMinRating(0);
          setSearchQuery('');
          setIsFilterModalOpen(false);
        }}
      />

      {/* Side Quick Guide Drawer */}
      <QuickGuideDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
}
