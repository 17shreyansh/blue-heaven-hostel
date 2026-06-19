import type { LucideIcon } from "lucide-react";

export type Gender = "Boys" | "Girls";

export interface Hostel {
  id: string;
  name: string;
  gender: Gender;
  tagline: string;
  description: string;
  longDescription: string;
  area: string;
  addressLine: string;
  nearby: string;
  phone: string;
  whatsapp: string;
  mapsQuery: string;
  highlightFacility: string;
  imageLabel: string;
}

export interface Facility {
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: "Parent" | "Student";
  context: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: string;
  category: "Rooms" | "Dining" | "Study Spaces" | "Common Areas" | "Exteriors";
  label: string;
  aspect: string;
}
