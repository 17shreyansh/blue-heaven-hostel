import type { Hostel } from "@/types";

/**
 * Placeholder branch data. Addresses, phone numbers and distances are
 * representative, not verified — replace every field marked below with the
 * real details for each property before this site goes live.
 */
export const HOSTELS: Hostel[] = [
  {
    id: "master-class",
    name: "Master Class Hostel",
    gender: "Boys",
    tagline: "Quiet floors, built for focus",
    description:
      "A premium boys' hostel with quiet study floors and consistent daily housekeeping, built for the discipline exam season demands.",
    longDescription:
      "Master Class Hostel was designed around one idea — that a student's room should help them concentrate, not distract them. Floors are kept quiet after study hours, common areas are cleaned daily, and every resident gets a dedicated study desk. It's a straightforward, well-run property for students who want their accommodation to simply work.",
    area: "Knowledge Park III, Greater Noida",
    addressLine: "Knowledge Park III, Greater Noida, Uttar Pradesh 201310", // TODO: replace with verified address
    nearby: "5 minutes from Galgotias University",
    phone: "+91 9971170830",
    whatsapp: "+91 9971170830",
    mapsQuery: "Master Class Hostel, Knowledge Park III, Greater Noida",
    highlightFacility: "Dedicated Study Floor",
    imageLabel: "Master Class Hostel — Exterior",
  },
  {
    id: "nalanda-heaven",
    name: "Nalanda Heaven Girls Hostel",
    gender: "Girls",
    tagline: "Secure, supervised, comfortable",
    description:
      "A secure girls' hostel with round-the-clock women staff, verified entry systems and a calm residential environment.",
    longDescription:
      "Nalanda Heaven was built with parents in mind as much as students. A women warden is on-site at all times, entry and exit are logged, and the building is monitored throughout. Beyond the security measures, it's simply a comfortable place to live — clean common rooms, reliable food, and a community of residents who look out for each other.",
    area: "Knowledge Park II, Greater Noida",
    addressLine: "Knowledge Park II, Greater Noida, Uttar Pradesh 201306", // TODO: replace with verified address
    nearby: "Walking distance from Sharda University",
    phone: "+91 9870392381",
    whatsapp: "+91 9870392381",
    mapsQuery: "Nalanda Heaven Girls Hostel, Knowledge Park II, Greater Noida",
    highlightFacility: "Women Warden On-Site",
    imageLabel: "Nalanda Heaven Girls Hostel — Exterior",
  },
  {
    id: "blue-heaven",
    name: "Blue Heaven Hostel",
    gender: "Boys",
    tagline: "Our flagship property",
    description:
      "Our original boys' hostel and the foundation of the Blue Heaven network, known for a strong, settled resident community.",
    longDescription:
      "This is where Blue Heaven started, and it's still run with the same attention as the day it opened. Many residents stay on for the full length of their course, which says more about day-to-day life here than any brochure could. Expect dependable food, responsive staff and a community of long-term residents.",
    area: "Knowledge Park I, Greater Noida",
    addressLine: "Knowledge Park I, Greater Noida, Uttar Pradesh 201306", // TODO: replace with verified address
    nearby: "10 minutes from Gautam Buddha University",
    phone: "+91 9870392381",
    whatsapp: "+91 9870392381",
    mapsQuery: "Blue Heaven Hostel, Knowledge Park I, Greater Noida",
    highlightFacility: "Indoor Recreation Room",
    imageLabel: "Blue Heaven Hostel — Exterior",
  },
  {
    id: "white-house-girls",
    name: "White House Girls Hostel",
    gender: "Girls",
    tagline: "Modern, calm, well-supervised",
    description:
      "A modern girls' hostel offering a calm, well-supervised living environment close to college campuses.",
    longDescription:
      "White House Girls Hostel pairs a modern interior with the same supervision standard across the Blue Heaven network — biometric entry, daily housekeeping and a dedicated women's staff team. It's a calm, well-organised building in a quiet residential pocket, close enough to campus for an easy commute.",
    area: "Alpha 1, Greater Noida",
    addressLine: "Alpha 1, Greater Noida, Uttar Pradesh 201310", // TODO: replace with verified address
    nearby: "Close to Pari Chowk",
    phone: "+91 8448408213",
    whatsapp: "+91 8448408213",
    mapsQuery: "White House Girls Hostel, Alpha 1, Greater Noida",
    highlightFacility: "Biometric Entry System",
    imageLabel: "White House Girls Hostel — Exterior",
  },
  {
    id: "white-house-boys",
    name: "White House Boys Hostel",
    gender: "Boys",
    tagline: "Sister property, same standard",
    description:
      "Sister property to White House Girls Hostel, built to the same standard of management and daily upkeep.",
    longDescription:
      "Run by the same on-ground team as its sister property nearby, White House Boys Hostel holds to the same standards — daily housekeeping, dependable mess service and quick-response staff. A common recreation lounge gives residents a proper place to unwind between classes.",
    area: "Alpha 1, Greater Noida",
    addressLine: "Alpha 1, Greater Noida, Uttar Pradesh 201310", // TODO: replace with verified address
    nearby: "Close to Pari Chowk",
    phone: "+91 7303304438",
    whatsapp: "+91 7303304438",
    mapsQuery: "White House Boys Hostel, Alpha 1, Greater Noida",
    highlightFacility: "Common Recreation Lounge",
    imageLabel: "White House Boys Hostel — Exterior",
  },
];

export function getHostelById(id: string): Hostel | undefined {
  return HOSTELS.find((hostel) => hostel.id === id);
}
