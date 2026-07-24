import React, { useState } from 'react';
import { ARTICLES_DATA } from '../data/arInteriorData';
import { ArticleItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Calendar, Tag, X } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="articles" className="py-16 lg:py-24 bg-[#f9f7f2] border-t border-[#1c1a17]/10">
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
            (ARTICLES & INSIGHTS)
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#1c1a17] leading-tight max-w-4xl">
            Luxury interior spaces crafted with <span className="italic text-[#a88a58]">elegance, precision</span>, and architectural balance.
          </h2>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedArticle(article)}
            >
              <div>
                {/* Article Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1e1c19] mb-5 border border-[#1c1a17]/10 shadow-sm">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1c1a17] text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs font-medium text-[#6e6a64] mb-2">
                  <Calendar className="w-3.5 h-3.5 text-[#a88a58]" />
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif-luxury text-2xl font-light text-[#1c1a17] group-hover:text-[#a88a58] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#6e6a64] text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1c1a17] group-hover:text-[#a88a58] transition-colors">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Modal Viewer */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#f5f2eb] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-[#1c1a17]/15"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#1c1a17]/5 text-[#1c1a17] hover:bg-[#1c1a17] hover:text-white transition-all"
                aria-label="Close Article Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-semibold text-[#a88a58] uppercase tracking-widest">
                  {selectedArticle.category} • {selectedArticle.date}
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#1c1a17] mt-2">
                  {selectedArticle.title}
                </h3>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 bg-[#1e1c19]">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose text-[#6e6a64] text-base leading-relaxed space-y-4">
                <p>{selectedArticle.description}</p>
                <p>
                  Interior architecture is not simply about filling a room with objects; it is the discipline of choreographing natural light, proportion, spatial transitions, and organic material finishes.
                </p>
                <p>
                  At AR Interior & Design, every architectural plan begins with an in-depth study of daylight patterns and human circulation, ensuring the resulting sanctuary feels both expansive and deeply comforting.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1c1a17]/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-pill-dark"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
