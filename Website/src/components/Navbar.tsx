import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, PhoneCall, Compass, MapPin, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'featured', label: 'Featured Showcase' },
    { id: 'services', label: 'Design Services' },
    { id: 'listings', label: 'New Listings' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#f5f2eb]/90 backdrop-blur-md shadow-sm py-4 border-b border-[#1c1a17]/10'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Left: Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-3 text-sm font-medium tracking-wide transition-colors ${scrolled ? 'text-[#1c1a17]' : 'text-white hover:text-white/80'
              } cursor-pointer group`}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
            <span className="hidden sm:inline">{menuOpen ? 'Close' : 'Menu'}</span>
          </button>

          {/* Center: Brand Serif Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className={`flex items-center gap-2 cursor-pointer transition-colors ${scrolled ? 'text-[#1c1a17]' : 'text-white hover:text-white/80'
              }`}
          >
            <span className="font-serif-luxury text-xl sm:text-2xl font-light tracking-[0.25em] uppercase mt-1">
              AR INTERIOR & DESIGN
            </span>
          </button>

          {/* Right: Contact Us Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenContact}
              className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer ${scrolled
                ? 'bg-[#1c1a17] text-white hover:bg-[#1c1a17]/90'
                : 'bg-white text-[#1c1a17] hover:bg-[#f5f2eb]'
                }`}
            >
              Contact Us
            </button>
            <button
              onClick={onOpenContact}
              className={`w-9 h-9 sm:w-[42px] sm:h-[42px] rounded flex items-center justify-center transition-all shadow-sm cursor-pointer ${scrolled
                ? 'bg-[#1c1a17] text-white hover:bg-[#1c1a17]/90'
                : 'bg-white text-[#1c1a17] hover:bg-[#f5f2eb]'
                }`}
              aria-label="Contact Us Arrow"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Expandable Luxury Menu Drawer / Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[76px] z-40 bg-[#f5f2eb]/98 backdrop-blur-2xl border-b border-[#1c1a17]/15 p-6 sm:p-10 shadow-2xl"
          >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-0 sm:px-4">
              <div className="md:col-span-7">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#a88a58] block mb-4">
                  Context
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {navItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left py-2.5 px-4 rounded-xl text-base sm:text-lg font-serif-luxury transition-all flex items-center justify-between cursor-pointer ${activeSection === item.id
                        ? 'bg-[#1c1a17] text-[#f5f2eb] pl-6'
                        : 'text-[#1c1a17] hover:bg-[#1c1a17]/5'
                        }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className={`w-4 h-4 ${activeSection === item.id ? 'text-[#a88a58]' : 'opacity-40'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 bg-[#1e1c19] text-[#f5f2eb] p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#a88a58]">
                    Private Consultation
                  </span>
                  <h4 className="font-serif-luxury text-xl font-light text-white mt-1">
                    AR Interior & Design
                  </h4>
                  <p className="text-xs text-white/70 mt-2 leading-relaxed">
                    Street Number 1, near HBL Bank University Road, Sargodha
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-white/80">
                    <span className="block font-medium">Contact Number</span>
                    <span className="text-white/60">0303 6009716</span>
                  </div>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenContact();
                    }}
                    className="btn-pill-outline text-white border-white/30 hover:border-white text-xs py-2 px-4 cursor-pointer"
                  >
                    Book Tour
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
