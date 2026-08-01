import React, { useState, useEffect, useRef } from 'react';
import { STATS_DATA } from '../data/arInteriorData';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Award, X } from 'lucide-react';

// Interfaces for structured data
interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Expertise {
  id: number;
  category: string;
  items: string;
}

const EXPERTISE_LIST: Expertise[] = [
  {
    id: 1,
    category: 'Residential',
    items: 'Luxury Kitchens, Wardrobes, Modern Media Walls & Interior Decoration',
  },
  {
    id: 2,
    category: 'Commercial',
    items: 'Executive Offices & Shop Interiors',
  },
];

const FEATURES_LIST: Feature[] = [
  {
    id: 1,
    title: '3D to Reality',
    description: 'Turnkey execution from initial design to final setup.',
  },
  {
    id: 2,
    title: 'Flawless Finish',
    description: 'High-grade materials with precision craftsmanship.',
  },
  {
    id: 3,
    title: 'Clear Pricing',
    description: 'Premium quality with zero hidden costs.',
  },
  {
    id: 4,
    title: 'On-Time Delivery',
    description: 'Strictly committed to project timelines.',
  },
];

const CounterNumber: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * value);
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={containerRef} className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-light text-[#1c1a17] tracking-tight">
      {count}{suffix}
    </div>
  );
};

export const AboutStatsSection: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  return (
    <section id="about" className="pt-20 lg:pt-32 pb-10 lg:pb-16 bg-[#f6f4f0]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Top About Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 flex flex-col gap-10"
          >
            <span className="font-serif text-[#1c1a17] tracking-widest uppercase">
              ABOUT US
            </span>
            <img
              src="/about-left.png"
              alt="Dining Table"
              className="w-full sm:w-[80%] aspect-square object-cover rounded-2xl lg:rounded-3xl shadow-xl border border-[#1c1a17]/10"
            />
          </motion.div>

          {/* Middle Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 flex flex-col pt-2 md:pt-14"
          >
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-light text-[#1c1a17] leading-[1.1] mb-6">
              Timeless Interiors<br />Elevated Living
            </h2>
            <p className="text-[#6e6a64] text-sm sm:text-base leading-relaxed mb-10 max-w-[420px]">
              Specializing in luxury interiors, we transform spaces into refined living experiences. Every project is thoughtfully designed.
            </p>
            <div className="flex items-center gap-2">
              <button onClick={() => setIsStoryModalOpen(true)} className="bg-[#4a4641] text-white hover:bg-[#33302d] px-6 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer">
                More About Us
              </button>
              <button onClick={() => setIsStoryModalOpen(true)} className="bg-[#4a4641] text-white hover:bg-[#33302d] w-12 h-[46px] rounded-md flex items-center justify-center transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 flex justify-end"
          >
            <img
              src="/about-right.jpg"
              alt="Kitchen Interiors"
              className="w-full aspect-[3/4] object-cover object-center rounded-2xl lg:rounded-3xl shadow-xl border border-[#1c1a17]/10"
            />
          </motion.div>
        </div>

        {/* 4-Column Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => {
            let shortWord = stat.label.split(' ').pop(); // Gets 'Clients', 'Projects'
            if (stat.id === 'years') {
              shortWord = 'Years Experience';
            }

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#efebe2] p-8 flex flex-col"
              >
                <div className="flex items-end gap-3 mb-6 pb-6 border-b border-[#e2ddd1]">
                  <div className="flex items-baseline">
                    <CounterNumber value={stat.targetValue} suffix="" />
                    <span className="font-serif-luxury text-2xl lg:text-3xl text-[#1c1a17] ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="flex items-baseline pb-1">
                    <span className="text-xs font-semibold text-[#1c1a17] tracking-wide mb-1">
                      {shortWord}
                    </span>
                  </div>
                </div>
                <div className="text-xs font-medium text-[#6e6a64]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Our Story Modal */}
      <AnimatePresence>
        {isStoryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#f6f4f0] text-[#1c1a17] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white rounded-full text-[#1c1a17] hover:bg-gray-100 transition-colors z-10 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="py-12 px-6 md:px-12 font-sans space-y-12">
                {/* Header Section */}
                <div className="text-center space-y-3">
                  <span className="text-[#a88a58] font-semibold uppercase tracking-wider text-sm">
                    Our Story
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif-luxury text-[#1c1a17]">AR Interiors & Design</h2>
                  <p className="text-[#6e6a64] text-lg max-w-2xl mx-auto">
                    Luxury Interior Solutions in Punjab & Nearby Regions
                  </p>
                </div>

                {/* Intro & Founder */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#1c1a17]/10 shadow-sm">
                  <p className="text-[#6e6a64] text-base md:text-lg leading-relaxed">
                    Founded by <span className="text-[#a88a58] font-semibold">Abdur Rehman</span>,{' '}
                    <span className="font-semibold text-[#1c1a17]">AR Interiors & Design</span> is an interior design team that builds high-end, well-designed spaces. Backed by{' '}
                    <span className="text-[#1c1a17] font-semibold">12+ years of experience</span> and{' '}
                    <span className="text-[#1c1a17] font-semibold">1,200+ completed projects</span>, we turn complex design ideas into seamless reality.
                  </p>
                </div>

                {/* Expertise Grid */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-[#1c1a17]">Our Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {EXPERTISE_LIST.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white p-5 rounded-xl border border-[#1c1a17]/10 shadow-sm"
                      >
                        <h4 className="text-[#a88a58] font-semibold mb-2">{item.category}</h4>
                        <p className="text-[#6e6a64] text-sm">{item.items}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us Grid */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-[#1c1a17]">Why Work With Us?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {FEATURES_LIST.map((feature) => (
                      <div
                        key={feature.id}
                        className="bg-white p-4 rounded-xl border border-[#1c1a17]/10 shadow-sm"
                      >
                        <h4 className="font-semibold text-[#1c1a17] mb-1">{feature.title}</h4>
                        <p className="text-[#6e6a64] text-xs">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-center pt-4">
                  <a
                    href="https://wa.me/923036009716?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsStoryModalOpen(false)}
                    className="inline-block bg-[#4a4641] hover:bg-[#33302d] text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow-lg"
                  >
                    Get a Free Consultation
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
