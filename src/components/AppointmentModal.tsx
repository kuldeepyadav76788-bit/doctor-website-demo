import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentFormData } from '../types';
import { X, Calendar, Clock, User, Phone, Send, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';

export const AppointmentModal: React.FC = () => {
  const { config, isModalOpen, closeAppointmentModal, selectedReason } = useClinic();

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    mobileNumber: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    reasonForVisit: selectedReason || 'General Dentistry',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedMsg, setGeneratedMsg] = useState('');

  useEffect(() => {
    if (selectedReason) {
      setFormData((prev) => ({ ...prev, reasonForVisit: selectedReason }));
    }
  }, [selectedReason]);

  useEffect(() => {
    if (isModalOpen) {
      setSubmitted(false);
      setErrors({});
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name';
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Please enter mobile number';
    } else if (formData.mobileNumber.replace(/[^0-9]/g, '').length < 8) {
      errs.mobileNumber = 'Please enter a valid phone number';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructMessage = () => {
    return `Hello ${config.dentistName}'s team at ${config.clinicName} (${config.city}),\n\nI would like to request a dental appointment:\n\n• Patient Name: ${formData.fullName.trim()}\n• Contact: ${formData.mobileNumber.trim()}\n• Preferred Date: ${formData.preferredDate}\n• Preferred Time: ${formData.preferredTime}\n• Reason for Visit: ${formData.reasonForVisit}\n\nPlease confirm availability. Thank you.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructMessage();
    setGeneratedMsg(message);
    setSubmitted(true);

    const cleanNumber = config.whatsapp.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(message);
    const waUrl = cleanNumber.length >= 10
      ? `https://wa.me/${cleanNumber}?text=${encoded}`
      : `https://wa.me/?text=${encoded}`;

    window.open(waUrl, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white px-5 py-4 flex items-center justify-between shrink-0">
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-white">
              Request Dental Appointment
            </h3>
            <p className="text-[11px] text-teal-200">
              {config.clinicName} • {config.city}
            </p>
          </div>
          <button
            onClick={closeAppointmentModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-2">
              <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-900 mb-1">
                Appointment Request Prepared
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mb-4 leading-relaxed">
                This demo form compiles your appointment details for WhatsApp. Reception will confirm your scheduled slot.
              </p>

              {/* Message preview */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-left text-xs font-mono whitespace-pre-wrap mb-4 text-slate-700 max-h-36 overflow-y-auto">
                {generatedMsg}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <button
                  onClick={() => {
                    const cleanNumber = config.whatsapp.replace(/[^0-9]/g, '');
                    const encoded = encodeURIComponent(generatedMsg);
                    const waUrl = cleanNumber.length >= 10
                      ? `https://wa.me/${cleanNumber}?text=${encoded}`
                      : `https://wa.me/?text=${encoded}`;
                    window.open(waUrl, '_blank');
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp</span>
                </button>

                <button
                  onClick={copyToClipboard}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>

                <button
                  onClick={closeAppointmentModal}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3.5 text-left">
              {/* Name */}
              <div>
                <label htmlFor="modal-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="modal-name"
                    type="text"
                    placeholder="Enter patient full name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm border ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-teal-600'
                    } outline-none`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.fullName}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="e.g. 98260XXXXX"
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, mobileNumber: e.target.value });
                      if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
                    }}
                    className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm border ${
                      errors.mobileNumber ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-teal-600'
                    } outline-none`}
                  />
                </div>
                {errors.mobileNumber && <p className="text-[11px] text-rose-500 mt-0.5">{errors.mobileNumber}</p>}
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="modal-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm border ${
                        errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-teal-600'
                      } outline-none`}
                    />
                  </div>
                  {errors.preferredDate && <p className="text-[11px] text-rose-500 mt-0.5">{errors.preferredDate}</p>}
                </div>

                <div>
                  <label htmlFor="modal-time" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="modal-time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:border-teal-600 outline-none bg-white"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10 AM – 1 PM)</option>
                      <option value="Evening (5:00 PM – 8:30 PM)">Evening (5 PM – 8:30 PM)</option>
                      <option value="Flexible / Any Slot">Flexible / Any Slot</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Reason for Visit */}
              <div>
                <label htmlFor="modal-reason" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Reason for Visit
                </label>
                <select
                  id="modal-reason"
                  value={formData.reasonForVisit}
                  onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:border-teal-600 outline-none bg-white"
                >
                  <option value="General Dentistry">General Dentistry / Routine Checkup</option>
                  <option value="Teeth Cleaning">Teeth Cleaning (Scaling)</option>
                  <option value="Dental Filling">Dental Filling / Cavity</option>
                  <option value="Root Canal Treatment">Root Canal Treatment (RCT)</option>
                  <option value="Dental Crowns">Dental Crowns &amp; Caps</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Orthodontic Consultation">Orthodontic Consultation (Braces / Aligners)</option>
                  <option value="Emergency Toothache">Severe Toothache / Emergency</option>
                </select>
              </div>

              {/* Submit Button: "Request Appointment" as specified */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-teal-200" />
                  <span>Request Appointment</span>
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2">
                  Front-end demo form • Sends pre-formatted booking request to reception.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
