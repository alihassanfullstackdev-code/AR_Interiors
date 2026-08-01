import React from 'react';
import { ListingItem } from '../types';
import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

interface ListingDetailModalProps {
  listing: ListingItem | null;
  onClose: () => void;
}

export const ListingDetailModal: React.FC<ListingDetailModalProps> = ({
  listing,
  onClose,
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
            {listing.category}
          </span>
          <span className="font-serif-luxury text-2xl font-bold text-[#1c1a17]">
            {listing.price}
          </span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#1c1a17] mb-2">
          {listing.title}
        </h2>



        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 bg-[#1e1c19] border border-[#1c1a17]/10 shadow-md">
          <img
            src={listing.imageUrl}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1c1a17] mb-2">
            Key Features & Materials:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1c1a17]/80">
            {(listing.features || [
              'Marble & Granite Countertops',
              'High Gloss UV & Tactile Sheets',
              'Warm LED Strip Lights',
              'Strong Solid Wood & MDF Board'
            ]).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a88a58] flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
