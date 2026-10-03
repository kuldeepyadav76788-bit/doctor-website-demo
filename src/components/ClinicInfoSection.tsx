import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { MapPin, Clock, Phone, MessageSquare, Navigation, ExternalLink } from 'lucide-react';

export const ClinicInfoSection: React.FC = () => {
  const { config, callClinic, openWhatsApp, getDirections } = useClinic();

  return (
    <section id="contact" className="py-10 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[11px] font-semibold tracking-wide mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            <span>Clinic Details</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Location, Hours &amp; Contact
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Easy access for patients across Gwalior, Madhya Pradesh.
          </p>
        </div>

        {/* Combined One Compact Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Left Column: Details */}
            <div className="space-y-4 text-left">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Clinic Address
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {config.clinicName}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {config.address}, {config.city}, {config.state}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Opening Hours
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                    {config.timings}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Sundays: By Prior Appointment
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-teal-700" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Phone</div>
                    <div className="text-xs font-semibold text-slate-800">{config.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">WhatsApp</div>
                    <div className="text-xs font-semibold text-slate-800">{config.whatsapp}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Map Placeholder / Directions */}
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col justify-between text-left h-full">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold text-slate-900">
                    Google Maps Navigation
                  </div>
                  <span className="text-[10px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-semibold">
                    {config.city}, MP
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Pinpoint landmark navigation to {config.clinicName}. Ground floor clinic access with convenient parking for two-wheelers and cars.
                </p>
              </div>

              {/* 3 Action Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <button
                  onClick={callClinic}
                  className="py-2.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer border border-slate-200"
                  id="contact-call-btn"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call</span>
                </button>

                <button
                  onClick={() => openWhatsApp()}
                  className="py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer border border-emerald-300"
                  id="contact-wa-btn"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={getDirections}
                  className="py-2.5 px-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-2xs"
                  id="contact-directions-btn"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-200" />
                  <span>Directions</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
