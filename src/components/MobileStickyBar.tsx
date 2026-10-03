import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const { callClinic, openWhatsApp, openAppointmentModal } = useClinic();

  return (
    <div
      id="mobile-sticky-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 shadow-lg safe-area-bottom"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call */}
        <button
          onClick={callClinic}
          className="flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 text-xs font-bold transition-colors border border-slate-200 cursor-pointer"
          aria-label="Call clinic"
        >
          <Phone className="w-3.5 h-3.5 text-teal-700" />
          <span>Call</span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => openWhatsApp()}
          className="flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl bg-emerald-50 active:bg-emerald-100 text-emerald-900 text-xs font-bold transition-colors border border-emerald-300 cursor-pointer"
          aria-label="WhatsApp clinic"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </button>

        {/* Book Appointment */}
        <button
          onClick={() => openAppointmentModal()}
          className="flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl bg-teal-700 active:bg-teal-900 text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
          aria-label="Book appointment"
        >
          <Calendar className="w-3.5 h-3.5 text-teal-200" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};
