import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Calendar, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

export const QuickActions: React.FC = () => {
  const { config, openAppointmentModal, callClinic, openWhatsApp } = useClinic();

  return (
    <section id="quick-actions" className="py-4 sm:py-5 bg-white border-y border-slate-200/90 shadow-2xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
          
          {/* Action 1: Book Appointment */}
          <button
            onClick={() => openAppointmentModal()}
            className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white transition-all shadow-xs cursor-pointer text-left"
            id="qa-book-btn"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/15 text-white flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-teal-200" />
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">Book Appointment</div>
                <div className="text-[11px] text-teal-100">Select date &amp; time</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-teal-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Action 2: Call Clinic */}
          <button
            onClick={callClinic}
            className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 transition-all shadow-2xs cursor-pointer text-left"
            id="qa-call-btn"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">Call Clinic</div>
                <div className="text-[11px] text-slate-500">{config.phone}</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
          </button>

          {/* Action 3: WhatsApp */}
          <button
            onClick={() => openWhatsApp()}
            className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-emerald-50/80 hover:bg-emerald-100/90 text-emerald-950 border border-emerald-200 transition-all shadow-2xs cursor-pointer text-left"
            id="qa-whatsapp-btn"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">WhatsApp</div>
                <div className="text-[11px] text-emerald-700">Quick chat &amp; queries</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </section>
  );
};
