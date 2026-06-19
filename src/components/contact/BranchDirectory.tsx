import { MapPin, Phone } from "lucide-react";
import { HOSTELS } from "@/data/hostels";
import { telLink, mapsSearchLink } from "@/lib/utils";
import FadeIn from "@/components/shared/FadeIn";

export default function BranchDirectory() {
  return (
    <div className="flex flex-col divide-y divide-line border-y border-line">
      {HOSTELS.map((hostel, index) => (
        <FadeIn key={hostel.id} delay={index * 0.04}>
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-heading text-base font-bold text-ink">{hostel.name}</h3>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4 shrink-0 text-primary-600" strokeWidth={2} aria-hidden="true" />
                {hostel.area}
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <a
                href={mapsSearchLink(hostel.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center rounded-xl border border-line px-4 text-sm font-bold text-ink transition-colors duration-200 hover:border-primary-600 hover:text-primary-700"
              >
                Directions
              </a>
              <a
                href={telLink(hostel.phone)}
                className="flex h-10 items-center gap-2 rounded-xl bg-primary-600 px-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-primary-700"
              >
                <Phone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                Call
              </a>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
