import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, PhoneCall, Mail, MapPin, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // IMPORTANT: Replace with your actual Gmail address
    const targetEmail = "rameezasmat786@gmail.com";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Inquiry from AR Interior & Design",
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="bg-[#f5f2eb] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#1c1a17]/15 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#1c1a17]/5 text-[#1c1a17] hover:bg-[#1c1a17] hover:text-white transition-all cursor-pointer"
          aria-label="Close Contact Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#a88a58] text-white flex items-center justify-center mb-4 shadow-lg">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-3xl font-light text-[#1c1a17] mb-2">
              Inquiry Received
            </h3>
            <p className="text-[#6e6a64] text-sm leading-relaxed max-w-md mb-6">
              Thank you for reaching out to AR Interior & Design. Our team will contact you as soon as possible.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-pill-dark"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#a88a58] uppercase tracking-widest block mb-1">
                (PRIVATE CONSULTATION)
              </span>
              <h3 className="font-serif-luxury text-3xl font-light text-[#1c1a17]">
                Connect with AR Interior & Design
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1c1a17]/80 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Your Name"
                  className="w-full bg-white/80 border border-[#1c1a17]/15 rounded-xl py-3 px-4 text-sm text-[#1c1a17] focus:outline-none focus:border-[#a88a58]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1c1a17]/80 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full bg-white/80 border border-[#1c1a17]/15 rounded-xl py-3 px-4 text-sm text-[#1c1a17] focus:outline-none focus:border-[#a88a58]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1c1a17]/80 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your Phone Number"
                    className="w-full bg-white/80 border border-[#1c1a17]/15 rounded-xl py-3 px-4 text-sm text-[#1c1a17] focus:outline-none focus:border-[#a88a58]"
                  />
                </div>
              </div>



              <div>
                <label className="block text-xs font-semibold text-[#1c1a17]/80 uppercase tracking-wider mb-1">
                  Project Description
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your address and details about your project..."
                  className="w-full bg-white/80 border border-[#1c1a17]/15 rounded-xl py-3 px-4 text-sm text-[#1c1a17] focus:outline-none focus:border-[#a88a58]"
                />
              </div>

              <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className="w-full btn-pill-dark justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4 mr-1" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry Request'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
