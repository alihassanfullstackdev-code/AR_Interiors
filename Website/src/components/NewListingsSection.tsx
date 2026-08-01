import React, { useState } from 'react';
import { LISTINGS_DATA } from '../data/arInteriorData';
import { ListingItem } from '../types';
import { motion } from 'motion/react';
import { ArrowUpRight, MapPin, Bed, Bath, Maximize2, Tag } from 'lucide-react';

interface NewListingsSectionProps {
  onSelectListing: (listing: ListingItem) => void;
}

export const NewListingsSection: React.FC<NewListingsSectionProps> = ({ onSelectListing }) => {
  const [activeFilter, setActiveFilter] = useState('Wardrobes');

  const categories = ['Wardrobes', 'Kitchens', 'Media Walls'];

  const filteredListings = activeFilter === 'All'
    ? LISTINGS_DATA
    : LISTINGS_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="listings" className="pt-10 pb-16 lg:pt-12 lg:pb-24 bg-[#f5f2eb] border-t border-[#1c1a17]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="text-xs font-semibold tracking-widest text-[#a88a58] uppercase">
            (NEW LISTINGS)
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12"
        >
          <div className="lg:col-span-8">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#1c1a17] leading-tight">
              Discover Newly Curated <span className="italic text-[#a88a58]">Luxury Interiors</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[#6e6a64] text-sm sm:text-base leading-relaxed">
              Available for private acquisition or spatial design customization across prime locations.
            </p>
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${activeFilter === category
                ? 'bg-[#1c1a17] text-[#f5f2eb]'
                : 'bg-[#1c1a17]/5 text-[#1c1a17]/70 hover:bg-[#1c1a17]/10'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry / Grid Layout matching video */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((listing, idx) => {
            return (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group cursor-pointer flex flex-col bg-[#f9f7f2] rounded-2xl overflow-hidden border border-[#1c1a17]/10 shadow-sm hover:shadow-xl transition-all duration-300`}
                onClick={() => onSelectListing(listing)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#1e1c19]">
                  <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.96]"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-[#1c1a17]/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-medium tracking-wide">
                    {listing.category}
                  </div>

                  {/* Price Tag */}
                  {listing.price && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#1c1a17] px-3 py-1 rounded-full text-xs font-bold tracking-tight shadow-md">
                      {listing.price}
                    </div>
                  )}


                </div>

                {/* Card Info Section */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>


                    <h3 className="font-serif-luxury text-2xl font-light text-[#1c1a17] group-hover:text-[#a88a58] transition-colors mb-4">
                      {listing.title}
                    </h3>
                  </div>

                  {/* Specs footer bar */}
                  {listing.specs && (
                    <div className="flex items-center justify-between pt-4 border-t border-[#1c1a17]/10 text-xs font-medium text-[#6e6a64]">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-[#1c1a17]/60" />
                        <span>{listing.specs.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-[#1c1a17]/60" />
                        <span>{listing.specs.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4 text-[#1c1a17]/60" />
                        <span>{listing.specs.sqft}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
