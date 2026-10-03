import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Calendar, Phone, MessageSquare, MapPin, Sparkles, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { config, openAppointmentModal, callClinic, openWhatsApp } = useClinic();

  return (
    <section id="hero" className="relative pt-20 sm:pt-24 pb-8 sm:pb-14 bg-gradient-to-b from-teal-50/50 via-white to-slate-50/40 overflow-hidden">
      {/* Subtle dental micro-grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] [background-image:radial-gradient(#0f766e_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Demo Website & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-semibold tracking-wide mb-3">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
              <span>Demo Website • {config.city}, MP</span>
            </div>

            {/* Doctor & Clinic Identity Line */}
            <div className="mb-2">
              <div className="text-sm sm:text-base font-bold text-teal-800 tracking-wide">
                {config.dentistName}
              </div>
              <div className="text-xs font-medium text-slate-500">
                {config.specialty} • <span className="text-slate-800 font-semibold">{config.clinicName}</span>
              </div>
            </div>

            {/* Short Headline */}
            <h1 className="font-display text-2xl sm:text-4xl lg:text-4xl font-bold text-slate-950 tracking-tight leading-snug mb-3">
              Modern, comfortable dental care for you &amp; your family.
            </h1>

            {/* Short Supporting Text */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mb-5">
              Personalized dental checkups, painless root canals, teeth cleaning, and smile care in a clean, hygienic clinic in {config.city}, Madhya Pradesh.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto mb-3">
              <button
                onClick={() => openAppointmentModal()}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
                id="hero-book-btn"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={callClinic}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-semibold text-sm border border-slate-300 transition-all cursor-pointer"
                id="hero-call-btn"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call Now</span>
              </button>

              <button
                onClick={() => openWhatsApp()}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm border border-emerald-300 transition-all cursor-pointer"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Small Location Indicator */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{config.locality}, {config.city}, {config.state}</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-semibold">Open Mon – Sat</span>
            </div>
          </div>

          {/* DENTAL IMAGE COLUMN (Occupies ~35-45% mobile visual area, not huge) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-teal-400/20 to-sky-300/20 rounded-2xl blur-sm -z-10"></div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden p-2 sm:p-2.5">
                {/* Single high-quality dental clinic image */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={config.heroImage}
                    alt={`${config.clinicName} Modern Dental Operatory`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />

                  {/* Trust overlay badge */}
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md rounded-lg px-3 py-1.5 border border-slate-200 text-slate-900 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-teal-100 text-teal-800 flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[11px] font-bold text-slate-900 leading-tight">
                        Modern Clinic Care
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>5.0 Demo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
