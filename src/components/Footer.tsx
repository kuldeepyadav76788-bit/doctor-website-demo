import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { Sparkles, Phone, MessageSquare, MapPin, Clock, X, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config, callClinic, openWhatsApp } = useClinic();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pb-20 sm:pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 border-b border-slate-800/80 text-left">
          
          {/* Col 1: Clinic & Doctor */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-display font-bold text-sm text-white block">
                  {config.clinicName}
                </span>
                <span className="text-[11px] text-teal-300 font-medium block">
                  {config.dentistName} • {config.specialty}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Modern dental care and preventive oral health in {config.city}, Madhya Pradesh.
            </p>
          </div>

          {/* Col 2: Hours & Location */}
          <div className="space-y-2 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Location &amp; Timings
            </div>
            <div className="flex items-start gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
              <span>{config.address}, {config.city}, {config.state}</span>
            </div>
            <div className="flex items-start gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{config.timings}</span>
            </div>
          </div>

          {/* Col 3: Contact & Legal Links */}
          <div className="space-y-2 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Direct Contact
            </div>
            <button
              onClick={callClinic}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Phone: {config.phone}</span>
            </button>
            <button
              onClick={() => openWhatsApp()}
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>WhatsApp: {config.whatsapp}</span>
            </button>
            <div className="pt-1 flex items-center gap-3 text-[11px] text-slate-400">
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-teal-300 transition-colors underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-teal-300 transition-colors underline cursor-pointer"
              >
                Terms of Use
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Demo Note */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {config.clinicName}. All rights reserved.
          </div>
          <div className="text-teal-400/80 font-medium">
            Master Dentist Sales Demo Template • Gwalior, MP
          </div>
        </div>

      </div>

      {/* Modal for Privacy & Terms */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white text-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {modalType === 'privacy' ? (
              <div>
                <div className="flex items-center gap-2 text-teal-800 mb-2">
                  <Shield className="w-4 h-4" />
                  <h3 className="font-display text-lg font-bold">Privacy Policy</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <p>
                    {config.clinicName} respects patient confidentiality. Personal and contact details submitted via this website are used strictly for appointment scheduling and consultation coordination.
                  </p>
                  <p>
                    No patient phone numbers or dental records are sold, traded, or shared with third-party advertisers.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-teal-800 mb-2">
                  <Shield className="w-4 h-4" />
                  <h3 className="font-display text-lg font-bold">Terms of Use</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <p>
                    Website content is provided for general informational and appointment enquiry purposes only. It is not a substitute for clinical dental examination or diagnosis.
                  </p>
                  <p>
                    Appointment slots are subject to confirmation by the clinic reception team.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
