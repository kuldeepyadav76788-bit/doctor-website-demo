import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Star, ShieldAlert, Camera, Quote } from 'lucide-react';

export const ClinicGalleryAndReviews: React.FC = () => {
  const { config } = useClinic();

  const demoTestimonials = [
    {
      id: 1,
      treatment: "Teeth Cleaning & Checkup",
      author: "Patient (Gwalior)",
      text: "Demo testimonial — replace with verified patient feedback. Clean clinic environment, gentle doctor, and transparent consultation.",
    },
    {
      id: 2,
      treatment: "Root Canal Treatment",
      author: "Patient (Lashkar)",
      text: "Demo testimonial — replace with verified patient feedback. Modern equipment, virtually painless procedure, and helpful staff.",
    },
  ];

  return (
    <section id="clinic-gallery" className="py-10 sm:py-16 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* CLINIC VISUALS (2-3 Compact Images) */}
        <div className="mb-10 sm:mb-12">
          <div className="text-center max-w-xl mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[11px] font-semibold tracking-wide mb-1.5">
              <Camera className="w-3.5 h-3.5 text-teal-700" />
              <span>Clinic Gallery</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Clinic Atmosphere &amp; Equipment
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Clean, hygienic spaces equipped for patient comfort and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {config.clinicImages.slice(0, 3).map((img) => (
              <div
                key={img.id}
                className="group rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-white text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {img.title}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {img.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPACT REVIEWS (Max 2-3 Cards with Demo Transparency) */}
        <div className="pt-6 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[11px] font-semibold tracking-wide mb-1">
                <Quote className="w-3 h-3 text-teal-700" />
                <span>Patient Experiences</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
                Patient Feedback
              </h3>
            </div>

            {/* Ethical Demo Notice */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] text-slate-600">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Demo Content — Real Google reviews connect upon launch</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {demoTestimonials.map((rev) => (
              <div
                key={rev.id}
                className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      {rev.treatment}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed mb-3">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-700">{rev.author}</span>
                  <span className="italic text-[10px]">Replace with doctor's review</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
