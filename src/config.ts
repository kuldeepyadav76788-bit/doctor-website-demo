import { MasterDentistConfig } from './types';

/**
 * =======================================================================
 * MASTER DENTIST CLINIC CONFIGURATION (SALES DEMO TEMPLATE)
 * =======================================================================
 * Designed for presenting to dentists in Gwalior, Madhya Pradesh.
 * 
 * Changing this single data object updates the entire website:
 * dentistName, specialty, clinicName, doctorImage, clinicImages,
 * address, city, phone, whatsapp, timings, services, googleMapsUrl.
 * =======================================================================
 */

export const DEFAULT_CONFIG: MasterDentistConfig = {
  dentistName: "Dr. [Dentist Name]",
  specialty: "Consultant Dentist",
  clinicName: "[Clinic Name] Dental Clinic",
  heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  doctorImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  clinicImages: [
    {
      id: "img-1",
      title: "Clinic Reception & Lounge",
      caption: "Clean, comfortable waiting area for patients and families",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "img-2",
      title: "Modern Dental Operatory",
      caption: "Ergonomic treatment chair with digital intraoral diagnostics",
      imageUrl: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "img-3",
      title: "Sterilization & Diagnostics",
      caption: "Hospital-grade autoclaved instrument setup for every patient",
      imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    },
  ],
  address: "Main Road, Lashkar / City Centre",
  city: "Gwalior",
  state: "Madhya Pradesh",
  locality: "City Centre",
  phone: "+91 98765 XXXXX",
  whatsapp: "919876543210",
  timings: "Mon – Sat: 10:00 AM – 2:00 PM & 5:00 PM – 8:30 PM",
  googleMapsUrl: "https://maps.google.com/?q=Dental+Clinic+Gwalior",
  qualificationsPlaceholder: "BDS, MDS (Placeholder — to be updated)",
  councilRegPlaceholder: "State Dental Council Reg. (To be updated)",
  services: [
    {
      id: "general",
      name: "General Dentistry",
      shortDesc: "Routine oral checkups, digital X-rays and preventive dental care.",
      icon: "ShieldCheck",
    },
    {
      id: "cleaning",
      name: "Teeth Cleaning",
      shortDesc: "Gentle ultrasonic scaling & polishing to remove tartar and stains.",
      icon: "Sparkles",
    },
    {
      id: "filling",
      name: "Dental Filling",
      shortDesc: "Tooth-colored composite restorations for painless cavity repair.",
      icon: "Smile",
    },
    {
      id: "rct",
      name: "Root Canal Treatment",
      shortDesc: "Painless, modern tooth-saving therapy with rotary precision.",
      icon: "Zap",
    },
    {
      id: "crowns",
      name: "Dental Crowns",
      shortDesc: "High-strength zirconia and ceramic caps for chewing strength.",
      icon: "Layers",
    },
    {
      id: "whitening",
      name: "Teeth Whitening",
      shortDesc: "Safe, professional smile brightening for a radiant appearance.",
      icon: "Sun",
    },
    {
      id: "implants",
      name: "Dental Implants",
      shortDesc: "Permanent, natural-looking replacement for missing tooth roots.",
      icon: "Anchor",
    },
    {
      id: "ortho",
      name: "Orthodontic Consultation",
      shortDesc: "Invisible clear aligners & modern braces for crooked teeth.",
      icon: "Compass",
    },
  ],
};

export const GWALIOR_LOCALITIES = [
  "City Centre",
  "Lashkar",
  "Thatipur",
  "Morar",
  "Phoolbagh",
  "Padav",
  "Govindpuri",
  "Deen Dayal Nagar",
];

const STORAGE_KEY = "gwalior_master_dentist_demo_config_v3";

export function loadSavedConfig(): MasterDentistConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
    }
  } catch {
    // fallback
  }
  return DEFAULT_CONFIG;
}

export function saveConfig(config: MasterDentistConfig): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (err) {
    console.error("Failed to save config to localStorage", err);
  }
}

export function resetConfig(): MasterDentistConfig {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
  return DEFAULT_CONFIG;
}
