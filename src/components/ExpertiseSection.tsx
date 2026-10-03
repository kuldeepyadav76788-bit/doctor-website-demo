import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Zap, 
  Layers, 
  Sun, 
  Anchor, 
  Compass, 
  ArrowRight 
} from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const { config, openAppointmentModal } = useClinic();

  // Helper to map icon names
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-700" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-700" />;
      case 'Smile': return <Smile className="w-5 h-5 text-teal-700" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-700" />;
      case 'Sun': return <Sun className="w-5 h-5 text-amber-600" />;
      case 'Anchor': return <Anchor className="w-5 h-5 text-sky-700" />;
      case 'Compass': return <Compass className="w-5 h-5 text-teal-700" />;
      default: return <Sparkles className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="services" className="py-10 sm:py-16 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[11px] font-semibold tracking-wide mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Dental Services</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-2">
            Our Dental Treatments
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Comprehensive, gentle dental care in {config.city}, Madhya Pradesh.
          </p>
        </div>

        {/* Compact Services Grid (6-8 services max) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 mb-8">
          {config.services.slice(0, 8).map((srv) => (
            <div
              key={srv.id}
              onClick={() => openAppointmentModal(srv.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openAppointmentModal(srv.name); }}
              className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-teal-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between cursor-pointer group text-left"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                  {renderIcon(srv.icon)}
                </div>
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1 group-hover:text-teal-800 transition-colors">
                  {srv.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.shortDesc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-teal-700">
                <span>Book visit</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE 3: Small Services / Equipment Visual Bar */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-36 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-200 shadow-2xs">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
              alt="Sterilized Dental Equipment & Instruments"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-center sm:text-left flex-grow">
            <div className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
              Sterilized Instruments &amp; Digital Diagnostics
            </div>
            <div className="text-xs text-slate-600">
              Every procedure is performed with hospital-grade autoclaved tools and low-radiation digital imaging for patient safety.
            </div>
          </div>
          <button
            onClick={() => openAppointmentModal()}
            className="shrink-0 px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            Consultation Form
          </button>
        </div>

      </div>
    </section>
  );
};
