/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ClinicProvider } from './context/ClinicContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickActions } from './components/QuickActions';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ClinicGalleryAndReviews } from './components/ClinicGalleryAndReviews';
import { ClinicInfoSection } from './components/ClinicInfoSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BackToTop } from './components/BackToTop';
import { DemoToolbar } from './components/DemoToolbar';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  return (
    <ClinicProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col antialiased selection:bg-teal-700 selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content - Compact 6-7 Sections */}
        <main className="flex-grow">
          {/* Section 1: Hero Screen (High-Impact, Mobile-First, Image ~35-45%) */}
          <HeroSection />

          {/* Section 2: Quick Action Bar ([Book Appointment] [Call Clinic] [WhatsApp]) */}
          <QuickActions />

          {/* Section 3: About the Dentist (Compact, Dignified & Transparent) */}
          <AboutSection />

          {/* Section 4: Compact Services (8 Services Max + Small Equipment Visual) */}
          <ExpertiseSection />

          {/* Section 5: Why Choose This Clinic (4 Focused Benefits) */}
          <WhyChooseSection />

          {/* Section 6: Clinic Visuals (3 Images) + Transparent Patient Feedback */}
          <ClinicGalleryAndReviews />

          {/* Section 7: Location + Hours + Contact (Combined Compact Section) */}
          <ClinicInfoSection />

          {/* Closing Final CTA */}
          <FinalCTASection />
        </main>

        {/* Compact Footer */}
        <Footer />

        {/* Mobile-First Sticky Action Bar ([Call] [WhatsApp] [Book]) */}
        <MobileStickyBar />

        {/* Smooth Back to Top */}
        <BackToTop />

        {/* Master Sales Demo Customizer Drawer for Live Pitching */}
        <DemoToolbar />

        {/* Front-End Appointment Request Modal */}
        <AppointmentModal />
      </div>
    </ClinicProvider>
  );
}
