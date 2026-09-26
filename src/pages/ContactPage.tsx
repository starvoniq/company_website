import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ChevronDown, Send } from 'lucide-react';
import { faqsData } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Web Development',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="pt-32 pb-24 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">
            LET'S CONNECT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Start Your Journey With StarVoniq.
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Have a project concept, need technical consulting, or looking to scale your engineering team? We’d love to hear from you.
          </p>
        </div>

        {/* 2-Column Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#0c101a] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Phone & WhatsApp</span>
                  <a href="tel:+254712345678" className="text-white hover:text-orange-400 font-semibold text-sm transition-colors">
                    +254 712 345 678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">General Inquiries</span>
                  <a href="mailto:hello@starvoniq.com" className="text-white hover:text-orange-400 font-semibold text-sm transition-colors">
                    hello@starvoniq.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Headquarters</span>
                  <span className="text-white font-semibold text-sm">
                    Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20">
              <h4 className="text-base font-bold text-white mb-2">Fast Turnaround Guarantee</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We respect your time. Every project inquiry receives an initial engineering evaluation and proposed technical roadmap within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c101a] border border-white/10 relative">
              {isSubmitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You for Reaching Out!</h3>
                  <p className="text-slate-400 text-sm max-w-md">
                    Your inquiry has been routed to our technical leadership team. We will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Us A Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Interested Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Software Development">Software Development</option>
                        <option value="IoT Solutions">IoT Solutions</option>
                        <option value="AI & ML Systems">AI & ML Systems</option>
                        <option value="Design & 3D">Design & 3D</option>
                        <option value="Video & Creative">Video & Creative</option>
                        <option value="Merchandise & Corporate Branding">Merchandise & Corporate Branding</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message / Project Description *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Give us an overview of your project requirements, goals, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div id="faqs" className="max-w-4xl mx-auto pt-12 border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-white">Got Questions? We Have Answers.</h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#0c101a] border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm font-bold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-orange-500 shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
