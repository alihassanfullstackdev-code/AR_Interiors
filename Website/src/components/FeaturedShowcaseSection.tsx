import React, { useState } from 'react';
import { SHOWCASE_PROJECTS } from '../data/arInteriorData';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, MapPin, Tag, Info, X } from 'lucide-react';

export const FeaturedShowcaseSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHotspot, setShowHotspot] = useState(false);

  const activeProject = SHOWCASE_PROJECTS[currentIndex];

  const handleNext = () => {
    setShowHotspot(false);
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PROJECTS.length);
  };

  const handlePrev = () => {
    setShowHotspot(false);
    setCurrentIndex((prev) => (prev - 1 + SHOWCASE_PROJECTS.length) % SHOWCASE_PROJECTS.length);
  };

  return (
    <section id="featured" className="py-16 lg:py-24 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-4"
        >
          <span className="text-xs font-semibold tracking-widest text-[#a88a58] uppercase">
            (FEATURED WORK)
          </span>
          <span className="text-xs font-mono text-[#6e6a64]">
            0{currentIndex + 1} / 0{SHOWCASE_PROJECTS.length}
          </span>
        </motion.div>

        {/* Header Details */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-8"
        >
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1c1a17]/60 block mb-1">
              {activeProject.studioName}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#1c1a17]">
              {activeProject.title}
            </h2>
          </div>

          <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-6">
            <div className="text-left lg:text-right">
              <div className="flex items-center lg:justify-end gap-1.5 text-xs text-[#6e6a64] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#a88a58]" />
                <span>{activeProject.location}</span>
              </div>
              <div className="font-serif-luxury text-2xl font-normal text-[#1c1a17] mt-1">
                {activeProject.price}
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-[#1c1a17]/20 flex items-center justify-center hover:bg-[#1c1a17] hover:text-white transition-all duration-200 text-[#1c1a17]"
                aria-label="Previous Showcase Project"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-[#1c1a17]/20 flex items-center justify-center hover:bg-[#1c1a17] hover:text-white transition-all duration-200 text-[#1c1a17]"
                aria-label="Next Showcase Project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Interactive Showcase Canvas Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] bg-[#1e1c19] shadow-2xl border border-[#1c1a17]/10"
          >
            <img
              src={activeProject.imageUrl}
              alt={activeProject.title}
              className="w-full h-full object-cover"
            />

            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

            {/* Hotspot Pin ("Infinity View Concept") exact match to reference video */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <button
                onClick={() => setShowHotspot(!showHotspot)}
                className="relative group flex items-center justify-center focus:outline-none"
                aria-label="Toggle Hotspot Details"
              >
                {/* Pulse ring animation */}
                <span className="absolute w-12 h-12 rounded-full bg-white/30 animate-ping" />
                <span className="relative w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center border border-white text-[#1c1a17] hover:scale-110 transition-transform cursor-pointer">
                  <Info className="w-5 h-5 text-[#a88a58]" />
                </span>

                {/* Always-visible label tag beside pin */}
                <span className="ml-3 bg-[#1c1a17]/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium tracking-wide shadow-lg hidden sm:inline-block border border-white/20">
                  {activeProject.hotspotTitle}
                </span>
              </button>

              {/* Popover Card overlay on pin click */}
              <AnimatePresence>
                {showHotspot && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 w-72 sm:w-80 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-[#1c1a17]/15 z-30 text-[#1c1a17]"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#a88a58]">
                        Architectural Detail
                      </span>
                      <button
                        onClick={() => setShowHotspot(false)}
                        className="p-1 hover:bg-black/5 rounded-full"
                      >
                        <X className="w-4 h-4 text-[#6e6a64]" />
                      </button>
                    </div>

                    <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3">
                      <img
                        src={activeProject.hotspotImage}
                        alt={activeProject.hotspotTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="font-serif-luxury text-lg font-semibold text-[#1c1a17]">
                      {activeProject.hotspotTitle}
                    </h4>
                    <p className="text-xs text-[#6e6a64] mt-1 leading-relaxed">
                      {activeProject.hotspotDesc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Floating Info Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-white z-10">
              <div className="max-w-xl bg-[#1c1a17]/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10">
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                  {activeProject.description}
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-md text-[#1c1a17] px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                <Tag className="w-3.5 h-3.5 text-[#a88a58]" />
                <span>Featured Studio Concept</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
