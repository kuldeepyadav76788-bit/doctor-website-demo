import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { GWALIOR_LOCALITIES } from '../config';
import { Sliders, RotateCcw, Check, ChevronUp, ChevronDown, Eye, Sparkles } from 'lucide-react';

export const DemoToolbar: React.FC = () => {
  const { config, updateConfig, resetToDefault, isCustomized } = useClinic();
  const [isOpen, setIsOpen] = useState(false);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const [localForm, setLocalForm] = useState(config);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig(localForm);
    setAppliedSuccess(true);
    setTimeout(() => setAppliedSuccess(false), 2000);
  };

  const handleReset = () => {
    resetToDefault();
    setLocalForm(config);
  };

  const applyPreset = (presetType: 'implant' | 'ortho' | 'general') => {
    let preset = { ...localForm };
    if (presetType === 'implant') {
      preset = {
        ...preset,
        dentistName: "Dr. Alok Saxena",
        specialty: "Dental Surgeon & Implantologist",
        clinicName: "Apex Dental & Implant Centre",
        address: "Near Jayendraganj, Lashkar",
        locality: "Lashkar",
      };
    } else if (presetType === 'ortho') {
      preset = {
        ...preset,
        dentistName: "Dr. Neha Agarwal",
        specialty: "Orthodontist & Aligner Specialist",
        clinicName: "ClearSmile Dental & Aligners",
        address: "Patel Nagar, Near City Centre",
        locality: "City Centre",
      };
    } else {
      preset = {
        ...preset,
        dentistName: "Dr. [Dentist Name]",
        specialty: "Consultant Dentist",
        clinicName: "[Clinic Name] Dental Clinic",
        address: "Main Road, Lashkar / City Centre",
        locality: "City Centre",
      };
    }
    setLocalForm(preset);
    updateConfig(preset);
    setAppliedSuccess(true);
    setTimeout(() => setAppliedSuccess(false), 2000);
  };

  return (
    <div className="relative z-50">
      {/* Floating Demo Pill at bottom-left */}
      <div className="fixed bottom-18 md:bottom-6 left-4 z-40">
        <button
          onClick={() => {
            setLocalForm(config);
            setIsOpen(!isOpen);
          }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 hover:bg-slate-900 text-teal-300 text-xs font-semibold shadow-lg border border-teal-500/30 backdrop-blur-md cursor-pointer transition-all hover:scale-105"
          title="Customize demo details live"
        >
          <Sliders className="w-3.5 h-3.5 text-teal-400" />
          <span>Demo Customizer</span>
          {isCustomized && (
            <span className="w-2 h-2 rounded-full bg-emerald-400" title="Customized"></span>
          )}
          {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 max-h-[88vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                    Master Dentist Demo Config
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Personalize live for dentists in Gwalior
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg text-xs"
              >
                Close
              </button>
            </div>

            {/* Presets */}
            <div className="mb-3">
              <span className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                1-Click Presets:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => applyPreset('general')}
                  className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium"
                >
                  Template Default
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('implant')}
                  className="px-2 py-1 rounded bg-teal-50 hover:bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200"
                >
                  Implantologist (Lashkar)
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('ortho')}
                  className="px-2 py-1 rounded bg-sky-50 hover:bg-sky-100 text-sky-800 text-[11px] font-medium border border-sky-200"
                >
                  Aligners (City Centre)
                </button>
              </div>
            </div>

            <form onSubmit={handleSave} className="space-y-2.5 text-left text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-slate-700 mb-0.5">Dentist Name</label>
                  <input
                    type="text"
                    value={localForm.dentistName}
                    onChange={(e) => setLocalForm({ ...localForm, dentistName: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-teal-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-0.5">Clinic Name</label>
                  <input
                    type="text"
                    value={localForm.clinicName}
                    onChange={(e) => setLocalForm({ ...localForm, clinicName: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-teal-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-0.5">Specialty</label>
                  <input
                    type="text"
                    value={localForm.specialty}
                    onChange={(e) => setLocalForm({ ...localForm, specialty: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-teal-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-0.5">Gwalior Locality</label>
                  <select
                    value={localForm.locality}
                    onChange={(e) => setLocalForm({ ...localForm, locality: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-teal-500 outline-none bg-white"
                  >
                    {GWALIOR_LOCALITIES.map((loc, i) => (
                      <option key={i} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-0.5">Phone Number</label>
                  <input
                    type="text"
                    value={localForm.phone}
                    onChange={(e) => setLocalForm({ ...localForm, phone: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-teal-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-0.5">WhatsApp Number</label>
                  <input
                    type="text"
                    value={localForm.whatsapp}
                    onChange={(e) => setLocalForm({ ...localForm, whatsapp: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-teal-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-0.5">Address</label>
                <input
                  type="text"
                  value={localForm.address}
                  onChange={(e) => setLocalForm({ ...localForm, address: e.target.value })}
                  className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-0.5">Clinic Timings</label>
                <input
                  type="text"
                  value={localForm.timings}
                  onChange={(e) => setLocalForm({ ...localForm, timings: e.target.value })}
                  className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-teal-500 outline-none"
                />
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 text-xs cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-medium text-xs cursor-pointer"
                  >
                    {appliedSuccess ? <Check className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    <span>{appliedSuccess ? 'Applied!' : 'Apply Preview'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
