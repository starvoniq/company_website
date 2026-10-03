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
    <div className="pt-32 pb-24 text-left bg-white min-h-screen bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] block mb-3">
            DIRECT ENGAGEMENT
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F4D] tracking-tight leading-[1.08] mb-4">
            Connect With StarVoniq.
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-normal">
            Have a project or technical challenge? Connect directly with our engineering and system architecture team in Nairobi or remotely worldwide.
          </p>
        </div>

        {/* 2-Column Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1F4D] mb-2">Direct Contact</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Phone & WhatsApp</span>
                  <a href="tel:+254712345678" className="text-[#0B1F4D] hover:text-[#2563EB] font-semibold text-sm transition-colors">
                    +254 712 345 678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">General Inquiries</span>
                  <a href="mailto:hello@starvoniq.com" className="text-[#0B1F4D] hover:text-[#2563EB] font-semibold text-sm transition-colors">
                    hello@starvoniq.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Headquarters</span>
                  <span className="text-[#0B1F4D] font-semibold text-sm">
                    Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50/40 border border-blue-200/70 shadow-sm">
              <h4 className="text-base font-bold text-[#0B1F4D] mb-2">Fast Turnaround Guarantee</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We respect your time. Every project inquiry receives an initial engineering evaluation and proposed technical roadmap within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] shadow-sm relative">
              {isSubmitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1F4D] mb-2">Thank You for Reaching Out!</h3>
                  <p className="text-slate-600 text-sm max-w-md">
                    Your inquiry has been routed to our technical leadership team. We will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#0B1F4D] mb-6">Send Us A Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1E293B] placeholder-slate-400 text-xs focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1E293B] placeholder-slate-400 text-xs focus:outline-none focus:border-[#2563EB] transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1E293B] placeholder-slate-400 text-xs focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Interested Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1E293B] text-xs focus:outline-none focus:border-[#2563EB] transition-colors"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Software Development">Software Development</option>
                        <option value="IoT & Embedded Systems">IoT & Embedded Systems</option>
                        <option value="Artificial Intelligence & Data">Artificial Intelligence & Data</option>
                        <option value="Security & Systems">Security & Systems</option>
                        <option value="Creative Technology">Creative Technology</option>
                        <option value="Video & Creative">Video & Creative</option>
                        <option value="Merchandise & Corporate Branding">Merchandise & Corporate Branding</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message / Project Description *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Give us an overview of your project requirements, goals, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1E293B] placeholder-slate-400 text-xs focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#0B1F4D]" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div id="faqs" className="max-w-4xl mx-auto pt-12 border-t border-[#E5E7EB]">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1F4D]">Got Questions? We Have Answers.</h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/50 transition-colors"
                >
                  <span className="text-sm font-bold text-[#0B1F4D]">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#2563EB] shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#E5E7EB] pt-4">
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
