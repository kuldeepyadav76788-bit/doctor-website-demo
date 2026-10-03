export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  icon: string;
}

export interface ClinicImageItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  treatment: string;
  rating: number;
  text: string;
  isDemo: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface MasterDentistConfig {
  dentistName: string;
  specialty: string;
  clinicName: string;
  doctorImage: string;
  heroImage: string;
  clinicImages: ClinicImageItem[];
  address: string;
  city: string;
  state: string;
  locality: string;
  phone: string;
  whatsapp: string;
  timings: string;
  services: ServiceItem[];
  googleMapsUrl: string;
  qualificationsPlaceholder?: string;
  councilRegPlaceholder?: string;
}

export interface AppointmentFormData {
  fullName: string;
  mobileNumber: string;
  preferredDate: string;
  preferredTime: string;
  reasonForVisit: string;
  message?: string;
}
