import React, { useState, useEffect, useRef } from 'react';
import { STATS_DATA } from '../data/arInteriorData';
import { motion } from 'motion/react';
import { CheckCircle2, Award } from 'lucide-react';

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
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#f6f4f0]">
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
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
              alt="Dining Table"
              className="w-full sm:w-[80%] aspect-square object-cover"
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
              <button className="bg-[#4a4641] text-white hover:bg-[#33302d] px-6 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer">
                More About Us
              </button>
              <button className="bg-[#4a4641] text-white hover:bg-[#33302d] w-12 h-[46px] rounded-md flex items-center justify-center transition-colors cursor-pointer">
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
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
              alt="Kitchen Interiors"
              className="w-full aspect-[3/4] object-cover object-center"
            />
          </motion.div>
        </div>

        {/* 4-Column Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => {
            const shortWord = stat.label.split(' ').pop(); // Gets 'Experience', 'Clients', 'Projects'
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
                  <CounterNumber value={stat.targetValue} suffix="" />
                  <div className="flex items-baseline gap-1.5 pb-1">
                    <span className="font-serif-luxury text-2xl lg:text-3xl text-[#1c1a17]">{stat.suffix}</span>
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
    </section>
  );
};
