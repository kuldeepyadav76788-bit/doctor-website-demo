import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { config, openAppointmentModal } = useClinic();

  const areasOfCare = [
    "Preventive Checkups & Cleaning",
    "Painless Root Canal Therapy",
    "Crowns & Missing Teeth Replacement",
    "Cosmetic Smile Brightening",
    "Gentle Family & Kids Dentistry",
    "Emergency Toothache Relief",
  ];

  return (
    <section id="about" className="py-10 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* IMAGE 2: Dentist Consultation / Dental Care Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 relative">
                  <img
                    src={config.doctorImage}
                    alt={`${config.dentistName} - ${config.specialty}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 backdrop-blur-xs text-white p-2 rounded-lg text-center">
                    <div className="text-xs font-bold leading-tight">{config.dentistName}</div>
                    <div className="text-[10px] text-teal-300 font-medium">{config.specialty}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DOCTOR DETAILS COLUMN */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[11px] font-semibold tracking-wide mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
              <span>About the Dentist</span>
            </div>

            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950 mb-1.5">
              {config.dentistName}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-teal-700 mb-3">
              {config.specialty} • {config.clinicName}
            </p>

            {/* Short introduction */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Providing patient-focused dental care in Gwalior with a commitment to gentle techniques, modern sterilization, and saving natural teeth wherever possible.
            </p>

            {/* Areas of Dental Care */}
            <div className="w-full mb-4">
              <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                Areas of Dental Care:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {areasOfCare.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <div className="w-3.5 h-3.5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear placeholder note */}
            <p className="text-[11px] text-slate-400 italic mb-4">
              (Credentials, BDS/MDS degrees &amp; Council registration details will be displayed here upon confirmation.)
            </p>

            {/* CTA */}
            <button
              onClick={() => openAppointmentModal()}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs shadow-xs transition-all cursor-pointer"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-200" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
