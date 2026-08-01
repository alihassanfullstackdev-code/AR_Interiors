import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutStatsSection } from './components/AboutStatsSection';
import { FeaturedShowcaseSection } from './components/FeaturedShowcaseSection';
import { ServicesSection } from './components/ServicesSection';
import { NewListingsSection } from './components/NewListingsSection';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { ListingDetailModal } from './components/ListingDetailModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ImagePreloader } from './components/ImagePreloader';
import { ListingItem } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [selectedListing, setSelectedListing] = useState<ListingItem | null>(null);

  const handleOpenContactWithService = (serviceName: string) => {
    setPrefilledService(serviceName);
    setIsContactOpen(true);
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#1c1a17] selection:bg-[#a88a58] selection:text-white font-sans antialiased">
      <ImagePreloader />
      {/* Navigation Bar */}
      <Navbar
        onOpenContact={() => {
          setPrefilledService('');
          setIsContactOpen(true);
        }}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onExploreClick={() => handleNavClick('featured')}
          onOpenContact={() => {
            setPrefilledService('');
            setIsContactOpen(true);
          }}
        />

        {/* 2. About & 4-Column Stats Section */}
        <AboutStatsSection />

        {/* 3. Featured Showcase Slider (Shaazz Studio / The Private Sanctuary + Hotspot Pin) */}
        <FeaturedShowcaseSection />

        {/* 4. Services Section (Residential, Commercial, Bespoke Furniture, etc.) */}
        <ServicesSection onOpenContactWithService={handleOpenContactWithService} />

        {/* 5. New Listings Section (Masonry Grid with Price & Details Modal) */}
        <NewListingsSection onSelectListing={(listing) => setSelectedListing(listing)} />
      </main>

      {/* Footer Section (Interactive ELORIA Letter Preview Effect) */}
      <FooterSection
        onNavClick={handleNavClick}
        onOpenContact={() => {
          setPrefilledService('');
          setIsContactOpen(true);
        }}
      />

      {/* Contact & Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledService={prefilledService}
      />

      {/* Listing Detail Inspection Modal */}
      <ListingDetailModal
        listing={selectedListing}
        onClose={() => setSelectedListing(null)}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton phoneNumber="+92 303 6009716" />
    </div>
  );
}

export default App;
