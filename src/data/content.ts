import {
  Wifi,
  Zap,
  Shirt,
  Brush,
  UtensilsCrossed,
  Lock,
  Camera,
  Car,
  BookOpen,
  Droplets,
  ShieldCheck,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import type {
  Facility,
  WhyChooseItem,
  Testimonial,
  FaqItem,
  StatItem,
  ValueItem,
  NavItem,
  GalleryImage,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Hostels", href: "/hostels" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FACILITIES: Facility[] = [
  { icon: Wifi, label: "WiFi", description: "High-speed internet through every floor" },
  { icon: Zap, label: "Power Backup", description: "Uninterrupted supply, round the clock" },
  { icon: Shirt, label: "Laundry", description: "Scheduled washing and folding service" },
  { icon: Brush, label: "Housekeeping", description: "Daily cleaning of rooms and common areas" },
  { icon: UtensilsCrossed, label: "Mess Facility", description: "Fixed, nutritious daily meals" },
  { icon: Lock, label: "Security", description: "Verified entry and exit for every resident" },
  { icon: Camera, label: "CCTV", description: "Monitored common areas and entry points" },
  { icon: Car, label: "Parking", description: "Dedicated space for bikes and vehicles" },
  { icon: BookOpen, label: "Study Environment", description: "Quiet hours and dedicated desks" },
  { icon: Droplets, label: "24/7 Water", description: "Uninterrupted hot and cold water supply" },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    icon: ShieldCheck,
    title: "Safe Living",
    description: "Verified entry systems, CCTV coverage and on-site staff at every property.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Every branch sits close to major colleges and universities in Greater Noida.",
  },
  {
    icon: Sparkles,
    title: "Clean Environment",
    description: "Daily housekeeping across rooms, washrooms and shared common areas.",
  },
  {
    icon: Users,
    title: "Student Community",
    description: "A settled, respectful community of residents across every hostel.",
  },
];

export const VALUES: ValueItem[] = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Every decision we make is weighed against one question: does this make residents safer?",
  },
  {
    icon: Sparkles,
    title: "Transparency",
    description: "Clear pricing and clear answers — no hidden costs, no vague policies.",
  },
  {
    icon: Users,
    title: "Respect For Students",
    description: "We treat every resident as an adult capable of managing their own life, within a safe structure.",
  },
  {
    icon: BookOpen,
    title: "Consistency",
    description: "The same standard of housekeeping, food and management across every branch, every day.",
  },
];

export const STATS: StatItem[] = [
  { label: "Hostel Branches", value: "5+" },
  { label: "Students Served", value: "1,500+" },
  { label: "Years of Experience", value: "10+" },
  { label: "Occupancy Rate", value: "95%+" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I was nervous about sending my daughter away for college. After visiting Blue Heaven Girls Hostel, I felt at ease — the warden and the CCTV setup gave me real confidence.",
    name: "Anita Sharma",
    role: "Parent",
    context: "Blue Heaven Girls Hostel",
  },
  {
    id: "t2",
    quote:
      "The rooms are quiet and well-maintained, which makes it easy to focus during exam season. Staff respond quickly whenever something needs attention.",
    name: "Rahul Verma",
    role: "Student",
    context: "Master Class Hostel",
  },
  {
    id: "t3",
    quote:
      "The management keeps us updated and always picks up the phone. That kind of communication matters a lot when your child lives far from home.",
    name: "Rajesh Gupta",
    role: "Parent",
    context: "White House Girls Hostel",
  },
  {
    id: "t4",
    quote:
      "I've stayed here for two years now. The food is consistent, the rooms are clean, and there's always someone around if you need help.",
    name: "Amit Patel",
    role: "Student",
    context: "Oxford House",
  },
  {
    id: "t5",
    quote:
      "It feels independent but still safe. Entry is monitored properly and the common areas are kept clean every day.",
    name: "Priya Desai",
    role: "Student",
    context: "White House Girls Hostel",
  },
  {
    id: "t6",
    quote:
      "We toured three hostels before choosing this one. The facilities were the most organised, and the staff answered every question honestly.",
    name: "Suresh Yadav",
    role: "Parent",
    context: "White House Boys Hostel",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "f1",
    question: "How do I book a room at Blue Heaven Hostel?",
    answer:
      "Call or message us on WhatsApp with the branch you're interested in. We'll schedule a visit, walk you through the room and facilities in person, and confirm your booking once you're ready.",
  },
  {
    id: "f2",
    question: "What is included in the monthly rent?",
    answer:
      "Rent covers your room, daily mess service, WiFi, housekeeping, power backup and water supply. There are no separate add-on charges for these essentials.",
  },
  {
    id: "f3",
    question: "Is the hostel safe for girls?",
    answer:
      "Our girls' branches have a dedicated women's staff team on-site, CCTV-monitored entry and common areas, and a logged entry-exit system. Visiting hours and guest policies are enforced consistently.",
  },
  {
    id: "f4",
    question: "What are the visiting hours for parents and guardians?",
    answer:
      "Parents and guardians are welcome any day between 10 AM and 7 PM. A short call ahead of your visit helps us make sure someone is available to show you around.",
  },
  {
    id: "f5",
    question: "Is there a security deposit?",
    answer:
      "Yes, a refundable security deposit is collected at the time of booking. It is returned in full when you vacate, subject to the standard condition check.",
  },
  {
    id: "f7",
    question: "Which colleges are nearby?",
    answer:
      "Our branches are spread across Knowledge Park and Alpha 1, within easy reach of institutions including Sharda University, Galgotias College, GL Bajaj, IILM, and NIET.",
  },
  {
    id: "f8",
    question: "Can I see a room before booking?",
    answer:
      "Yes — we encourage it. Call or WhatsApp us to schedule a visit to any branch at a time that works for you.",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "g1", category: "Rooms", label: "Shared Room Interior", aspect: "aspect-[4/5]", src: "/images/WhatsApp Image 2026-06-19 at 1.09.23 PM (10).jpeg" },
  { id: "g2", category: "Common Areas", label: "Common Lounge", aspect: "aspect-square", src: "/images/WhatsApp Image 2026-06-19 at 1.09.23 PM (11).jpeg" },
  { id: "g3", category: "Study Spaces", label: "Study Desk Setup", aspect: "aspect-[3/4]", src: "/images/WhatsApp Image 2026-06-19 at 1.09.23 PM (7).jpeg" },
  { id: "g4", category: "Dining", label: "Dining Hall", aspect: "aspect-[4/3]", src: "/images/WhatsApp Image 2026-06-19 at 1.11.11 PM (1).jpeg" },
  { id: "g5", category: "Exteriors", label: "Building Exterior", aspect: "aspect-[4/5]", src: "/images/WhatsApp Image 2026-06-19 at 1.11.11 PM (2).jpeg" },
  { id: "g6", category: "Rooms", label: "Single Room Interior", aspect: "aspect-square", src: "/images/WhatsApp Image 2026-06-19 at 1.11.12 PM (6).jpeg" },
  { id: "g7", category: "Common Areas", label: "Reception Area", aspect: "aspect-[3/4]", src: "/images/WhatsApp Image 2026-06-19 at 1.11.12 PM.jpeg" },
  { id: "g8", category: "Study Spaces", label: "Reading Corner", aspect: "aspect-[4/5]", src: "/images/WhatsApp Image 2026-06-19 at 1.16.06 PM (1).jpeg" },
  { id: "g9", category: "Dining", label: "Mess Counter", aspect: "aspect-square", src: "/images/WhatsApp Image 2026-06-19 at 1.16.08 PM (1).jpeg" },
  { id: "g10", category: "Rooms", label: "Room Washroom", aspect: "aspect-[4/3]", src: "/images/WhatsApp Image 2026-06-19 at 1.16.12 PM (1).jpeg" },
  { id: "g11", category: "Exteriors", label: "Entrance Gate", aspect: "aspect-[3/4]", src: "/images/WhatsApp Image 2026-06-19 at 11.15.54 AM.jpeg" },
  { id: "g12", category: "Common Areas", label: "Terrace Common Area", aspect: "aspect-[4/5]", src: "/images/WhatsApp Image 2026-06-19 at 11.15.55 AM (2).jpeg" },
];
