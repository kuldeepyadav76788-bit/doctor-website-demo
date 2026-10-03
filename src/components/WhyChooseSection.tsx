import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Sparkles, CalendarCheck, MapPin, HeartHandshake } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const { config } = useClinic();

  const benefits = [
    {
      icon: <Sparkles className="w-5 h-5 text-teal-700" />,
      title: "Modern Dental Care",
      desc: "Clean operatory, gentle techniques, and digital diagnostics focused on patient comfort.",
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-teal-700" />,
      title: "Easy Appointment Booking",
      desc: "Instant booking via direct phone call or WhatsApp with flexible morning and evening slots.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-teal-700" />,
      title: "Convenient Gwalior Location",
      desc: `Easily accessible clinic location in ${config.locality || 'City Centre'}, Gwalior with convenient parking.`,
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-teal-700" />,
      title: "Personalized Consultation",
      desc: "Individual attention, honest treatment explanations, and transparent care recommendations.",
    },
  ];

  return (
    <section id="why-choose" className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[11px] font-semibold tracking-wide mb-2">
            <span>Clinic Highlights</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-2">
            Why Choose {config.clinicName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A welcoming clinic experience designed around patient comfort and clear communication.
          </p>
        </div>

        {/* 4 Compact Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow text-left flex flex-col"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center mb-3 shrink-0">
                {b.icon}
              </div>
              <h3 className="font-display font-bold text-slate-900 text-sm mb-1">
                {b.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
