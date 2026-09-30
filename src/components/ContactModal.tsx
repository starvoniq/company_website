import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'web-dev',
}) => {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '$5k - $15k',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const services = [
    { id: 'web-dev', label: 'Web Development' },
    { id: 'software-dev', label: 'Software Development' },
    { id: 'iot-solutions', label: 'IoT & Embedded Systems' },
    { id: 'ai-ml', label: 'Artificial Intelligence & Data' },
    { id: 'security-systems', label: 'Security & Systems' },
    { id: 'design-3d', label: 'Creative Technology' },
    { id: 'video-creative', label: 'Video & Creative' },
    { id: 'merchandise-branding', label: 'Merchandise & Branding' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-left">
        
        {/* Subtle glow corner */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-[#0B1F4D] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F4D] mb-2">Message Sent Successfully!</h3>
            <p className="text-slate-600 text-sm max-w-sm">
              Thank you for reaching out to StarVoniq. Our engineering and branding team will review your project and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F4D] tracking-tight">
                Let's Build Something Great.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tell us about your project vision, timeline, and goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Required Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`text-xs py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedService === s.id
                          ? 'bg-blue-50 border-[#2563EB] text-[#2563EB] font-bold'
                          : 'bg-[#F8FAFC] border-[#E5E7EB] text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two Column Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Alex Kimani"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#1E293B] placeholder-slate-400 text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#1E293B] placeholder-slate-400 text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#1E293B] placeholder-slate-400 text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#1E293B] text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
                  >
                    <option value="<$5k">&lt; $5,000</option>
                    <option value="$5k - $15k">$5,000 - $15,000</option>
                    <option value="$15k - $50k">$15,000 - $50,000</option>
                    <option value="$50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Project Details *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your project, objectives, technical requirements, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#1E293B] placeholder-slate-400 text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-[#0B1F4D]" />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
