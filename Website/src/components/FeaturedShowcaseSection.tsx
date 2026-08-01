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
    <section id="featured" className="pt-10 lg:pt-16 pb-10 lg:pb-16 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-2"
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

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#1c1a17]">
              {activeProject.title}
            </h2>
          </div>

          <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-6">
            <div className="text-left lg:text-right">
              {/* Removed location and price tags as requested */}
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


          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
