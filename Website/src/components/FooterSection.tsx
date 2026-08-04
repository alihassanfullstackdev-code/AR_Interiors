import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface FooterSectionProps {
  onNavClick: (id: string) => void;
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavClick, onOpenContact }) => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  return (
    <footer className="bg-[#4a4641] text-[#f5f2eb] pt-20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Top Header Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-20">
          <div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#f5f2eb] leading-[1.1]">
              Beautiful Interior Design <br />
              Crafted for Your Home
            </h2>
          </div>


        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 text-sm">
          {/* Column 1: Socials */}
          <div>
            <ul className="space-y-4 text-white/80 font-medium text-xs">
              {[
                { name: 'Facebook', url: 'https://www.facebook.com/share/1L6DXoumr2/?mibextid=wwXIfr' },
                { name: 'Instagram', url: 'https://www.instagram.com/a.r_interior786?igsh=bmtua2k1bjlueHhn' },
                { name: 'YouTube', url: 'https://youtube.com/@woodworkinfo?si=UHpw8KKMbgpI8YZU' },
                { name: 'TikTok', url: 'https://www.tiktok.com/@woodwork.info?_r=1&_t=ZS-98b01wc96zV' }
              ].map((social) => (
                <li key={social.name} className="border-b border-white/10 pb-2 border-dashed">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between hover:text-white transition-colors group"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/80 font-medium text-xs">
              <li>
                <button onClick={() => onNavClick('featured')} className="hover:text-white transition-colors cursor-pointer">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-white transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-white transition-colors cursor-pointer">
                  Design Services
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Property Types */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-6">
              Property Types
            </h4>
            <ul className="space-y-4 text-white/80 font-medium text-xs">
              <li>Living Spaces</li>
              <li>Luxury Bedrooms</li>
              <li>Modular Kitchens</li>
              <li>Office Interiors</li>
            </ul>
          </div>

          {/* Column 4: Location & Call */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-6">
              Location
            </h4>
            <p className="text-white/80 font-medium text-xs leading-relaxed mb-6">
              Street Number 1, near HBL Bank University Road<br />Sargodha, Pakistan
            </p>
            <h4 className="text-xs font-semibold text-white mb-3">
              Call Us
            </h4>
            <div className="text-xs font-medium text-white/80">
              <a href="tel:+923036009716" className="hover:text-white transition-colors">
                +92 303 6009716
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="py-6 border-t border-white/20 border-dashed flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/70 font-medium">
          <div className="order-2 md:order-1">
            @2026 AR Interior & Design copyright. All right reserved
          </div>

          <div className="flex items-center gap-2 order-1 md:order-2">
            <span>Developed By:</span>
            <a 
              href="https://alihassan96.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-md transition-all duration-300 flex items-center gap-1 group"
            >
              ApexCodeZ Dynamics
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="flex items-center gap-2 order-3">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
