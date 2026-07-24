import React from 'react';
import { ListingItem } from '../types';
import { motion } from 'motion/react';
import { X, MapPin, Bed, Bath, Maximize2, Tag, Check, Calendar } from 'lucide-react';

interface ListingDetailModalProps {
  listing: ListingItem | null;
  onClose: () => void;
  onBookConsultation: (serviceName: string) => void;
}

export const ListingDetailModal: React.FC<ListingDetailModalProps> = ({
  listing,
  onClose,
  onBookConsultation,
}) => {
  if (!listing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#f5f2eb] rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-[#1c1a17]/15"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#1c1a17]/5 text-[#1c1a17] hover:bg-[#1c1a17] hover:text-white transition-all cursor-pointer"
          aria-label="Close Listing Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Tag & Price */}
        <div className="flex items-center justify-between gap-4 mb-2 pr-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#a88a58]">
            {listing.category} • Spatial Listing
          </span>
          <span className="font-serif-luxury text-2xl font-bold text-[#1c1a17]">
            {listing.price}
          </span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#1c1a17] mb-2">
          {listing.title}
        </h2>

        <div className="flex items-center gap-1.5 text-xs text-[#6e6a64] font-medium mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#a88a58]" />
          <span>{listing.location}</span>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 bg-[#1e1c19] border border-[#1c1a17]/10 shadow-md">
          <img
            src={listing.imageUrl}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-[#f9f7f2] border border-[#1c1a17]/10 mb-6 text-center">
          <div>
            <div className="text-xs text-[#6e6a64] uppercase font-semibold">Bedrooms</div>
            <div className="font-serif-luxury text-xl font-bold text-[#1c1a17] mt-0.5">
              {listing.specs.beds} Beds
            </div>
          </div>

          <div className="border-x border-[#1c1a17]/10">
            <div className="text-xs text-[#6e6a64] uppercase font-semibold">Bathrooms</div>
            <div className="font-serif-luxury text-xl font-bold text-[#1c1a17] mt-0.5">
              {listing.specs.baths} Baths
            </div>
          </div>

          <div>
            <div className="text-xs text-[#6e6a64] uppercase font-semibold">Area Size</div>
            <div className="font-serif-luxury text-xl font-bold text-[#1c1a17] mt-0.5">
              {listing.specs.sqft}
            </div>
          </div>
        </div>

        {/* Description & Materials */}
        <div className="space-y-4 text-sm text-[#6e6a64] leading-relaxed mb-8">
          <p>
            Designed with absolute precision by AR INTERIOR & DESIGN, this spatial concept emphasizes seamless transitions between natural daylight and warm tactile finishes.
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1c1a17] mb-2">
              Key Spatial Features & Finishes:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1c1a17]/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a88a58]" />
                Calacatta Viola Natural Stone
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a88a58]" />
                European Aged White Oak Joinery
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a88a58]" />
                Acoustic Concealed Lighting Layers
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a88a58]" />
                Bespoke Custom Furniture Package
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1c1a17]/10">
          <span className="text-xs text-[#6e6a64]">
            Available for immediate acquisition or spatial customization.
          </span>
          <button
            onClick={() => {
              onClose();
              onBookConsultation(listing.title);
            }}
            className="btn-pill-dark w-full sm:w-auto justify-center"
          >
            <Calendar className="w-4 h-4 mr-1" />
            <span>Schedule Private Viewing</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
