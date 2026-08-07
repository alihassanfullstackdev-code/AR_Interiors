
import React from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onOpenContact }) => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[100dvh] min-h-[500px] w-full overflow-hidden">
      {/* Main Hero Visual Full Screen */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-[#1a1815]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      </motion.div>

      {/* Hero Content Overlay */}
      <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-end pt-32 sm:pt-40 pb-10 sm:pb-16">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] sm:leading-[1.05] tracking-tight mb-4 sm:mb-6"
          >
            Beautiful Interiors <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>For Your Dream Home
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/80 text-sm sm:text-base lg:text-lg max-w-xl font-light leading-relaxed mb-8 sm:mb-10"
          >
            We make modern kitchens, spacious wardrobes, and beautiful TV walls for homes across Pakistan.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center items-start gap-5 sm:gap-6"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={onExploreClick}
                className="bg-white text-[#1c1a17] hover:bg-[#f5f2eb] px-5 sm:px-6 py-3 sm:py-3.5 rounded-md text-sm font-semibold tracking-wide transition-colors shadow-lg cursor-pointer"
              >
                Explore Designs
              </button>
              <button
                onClick={onExploreClick}
                className="bg-white text-[#1c1a17] hover:bg-[#f5f2eb] w-11 h-[44px] sm:w-12 sm:h-[50px] rounded-md flex items-center justify-center transition-colors shadow-lg cursor-pointer"
                aria-label="Explore Designs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={onOpenContact}
              className="text-white hover:text-white/80 text-sm font-medium tracking-wide transition-colors cursor-pointer border-b border-white pb-0.5 mt-2 sm:mt-0"
            >
              Book a Private Tour
            </button>
          </motion.div>
        </div>

        {/* Bottom Right Scroll Down Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute bottom-6 right-5 sm:bottom-12 sm:right-12 hidden sm:block"
        >
          <button
            onClick={scrollToAbout}
            aria-label="Scroll to About Section"
            className="w-10 h-10 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#1c1a17] transition-all duration-300 cursor-pointer group"
          >
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
