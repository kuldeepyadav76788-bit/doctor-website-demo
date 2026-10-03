import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Calendar, MessageSquare, Sparkles } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const { config, openAppointmentModal, openWhatsApp } = useClinic();

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white relative overflow-hidden">
      {/* Decorative ambient dental glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-teal-300 text-[11px] font-semibold uppercase tracking-wider mb-3 border border-white/10">
          <Sparkles className="w-3 h-3" />
          <span>{config.clinicName} • {config.city}</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
          Ready to book your dental consultation?
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
          Schedule your routine checkup, teeth cleaning, or dental consultation with {config.dentistName}.
        </p>

        {/* Buttons: [Book Appointment] [WhatsApp Clinic] */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <button
            onClick={() => openAppointmentModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            id="final-book-btn"
          >
            <Calendar className="w-4 h-4 text-teal-200" />
            <span>Book Appointment</span>
          </button>

          <button
            onClick={() => openWhatsApp()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            id="final-wa-btn"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Clinic</span>
          </button>
        </div>
      </div>
    </section>
  );
};
