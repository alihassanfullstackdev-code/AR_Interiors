import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../data/arInteriorData';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContactWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactWithService }) => {
  const [selectedCategory, setSelectedCategory] = useState(SERVICE_CATEGORIES[0].id);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const activeCategory = SERVICE_CATEGORIES.find((cat) => cat.id === selectedCategory) || SERVICE_CATEGORIES[0];

  return (
    <section id="services" className="pt-10 lg:pt-16 pb-10 lg:pb-16 bg-[#f6f4f0]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Split Layout: Left Sticky Title & Categories, Right Accordion List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column: Headline & Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#1c1a17] leading-[1.1] mb-16 max-w-sm">
              Curate, Design & <br />
              Elevate with Aethel
            </h2>

            {/* Vertical Category Selection List */}
            <div className="flex flex-col gap-5 mb-16">
              {SERVICE_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setExpandedIndex(0);
                    }}
                    className={`text-left font-serif-luxury text-2xl transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#1c1a17]'
                        : 'text-[#1c1a17]/30 hover:text-[#1c1a17]/60'
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>


          </motion.div>

          {/* Right Column: Numbered Projects Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="divide-y divide-[#1c1a17]/10"
              >
                {activeCategory.projects.map((proj, idx) => {
                  const isExpanded = expandedIndex === idx;

                  return (
                    <div
                      key={idx}
                      className={`py-8 transition-colors duration-200 group ${idx === 0 ? 'pt-0 lg:pt-2' : ''}`}
                    >
                      <div
                        onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                        className="flex items-baseline gap-4 sm:gap-6 cursor-pointer mb-2"
                      >
                        <span className="font-serif text-lg sm:text-xl text-[#1c1a17]/40 w-6">
                          {proj.number}
                        </span>
                        <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#1c1a17] transition-colors">
                          {proj.title}
                        </h3>
                      </div>

                      {/* Accordion Expansion Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 pb-2 space-y-5">
                              <div className="w-full bg-[#1e1c19]">
                                <img
                                  src={proj.imageUrl}
                                  alt={proj.title}
                                  className="w-full aspect-[16/9] sm:aspect-[2/1] object-cover"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
