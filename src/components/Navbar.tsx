import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { Menu, X, Calendar, Phone, MessageSquare, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { config, openWhatsApp, callClinic, openAppointmentModal } = useClinic();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/90 py-2 sm:py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Clinic Brand & Doctor Identity */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 sm:gap-2.5 text-left group focus:outline-none cursor-pointer"
            aria-label="Scroll to top"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center shadow-2xs group-hover:bg-teal-800 transition-colors">
              <Sparkles className="w-4 h-4 text-teal-200" />
            </div>
            <div>
              <span className="block font-display font-bold text-sm sm:text-base text-slate-950 tracking-tight leading-tight group-hover:text-teal-800 transition-colors">
                {config.clinicName}
              </span>
              <span className="block text-[11px] font-semibold text-teal-700">
                {config.dentistName} • {config.city}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-600">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('why-choose')}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollTo('clinic-gallery')}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Gallery &amp; Reviews
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={callClinic}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-all cursor-pointer"
              title="Call Clinic"
            >
              <Phone className="w-3 h-3 text-teal-700" />
              <span>Call</span>
            </button>

            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-all cursor-pointer"
              title="WhatsApp enquiry"
            >
              <MessageSquare className="w-3 h-3 text-emerald-600" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => openAppointmentModal()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-2xs transition-all cursor-pointer"
            >
              <Calendar className="w-3 h-3 text-teal-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Right Controls: Book Button + Hamburger */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={() => openAppointmentModal()}
              className="px-2.5 py-1 text-xs font-bold text-white bg-teal-700 rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 shadow-md">
          <div className="px-4 py-3 space-y-1 text-left text-xs font-semibold text-slate-800">
            <button
              onClick={() => scrollTo('hero')}
              className="w-full text-left py-2 px-2 rounded-lg hover:bg-teal-50 hover:text-teal-800"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="w-full text-left py-2 px-2 rounded-lg hover:bg-teal-50 hover:text-teal-800"
            >
              About {config.dentistName}
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="w-full text-left py-2 px-2 rounded-lg hover:bg-teal-50 hover:text-teal-800"
            >
              Dental Services &amp; Treatments
            </button>
            <button
              onClick={() => scrollTo('why-choose')}
              className="w-full text-left py-2 px-2 rounded-lg hover:bg-teal-50 hover:text-teal-800"
            >
              Why Choose Our Clinic
            </button>
            <button
              onClick={() => scrollTo('clinic-gallery')}
              className="w-full text-left py-2 px-2 rounded-lg hover:bg-teal-50 hover:text-teal-800"
            >
              Clinic Gallery &amp; Reviews
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full text-left py-2 px-2 rounded-lg hover:bg-teal-50 hover:text-teal-800"
            >
              Location, Hours &amp; Contact
            </button>

            {/* Mobile CTAs in dropdown */}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAppointmentModal();
                }}
                className="w-full py-2.5 rounded-lg bg-teal-700 text-white font-semibold flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-200" />
                <span>Book Appointment Online</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full py-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Reception</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
