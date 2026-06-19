import { MapPin, Phone, MessageCircle } from "lucide-react";
import SmartImage from "@/components/shared/SmartImage";
import Badge from "@/components/shared/Badge";
import CTAButton from "@/components/shared/CTAButton";
import { FACILITIES } from "@/data/content";
import type { Hostel } from "@/types";
import { telLink, whatsappLink, mapsSearchLink } from "@/lib/utils";

interface HostelCardProps {
  hostel: Hostel;
  variant?: "compact" | "full";
}

export default function HostelCard({ hostel, variant = "full" }: HostelCardProps) {
  const isFull = variant === "full";

  return (
    <article
      id={isFull ? hostel.id : undefined}
      className="group scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-white shadow-subtle transition-shadow duration-300 ease-premium hover:shadow-card-hover"
    >
      <div className="overflow-hidden">
        <SmartImage
          alt={hostel.imageLabel}
          label={hostel.imageLabel}
          aspect={isFull ? "aspect-[16/10]" : "aspect-[4/3]"}
          rounded="rounded-none"
          className="transition-transform duration-500 ease-premium group-hover:scale-105"
        />
      </div>

      <div className={isFull ? "p-8" : "p-6"}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-bold text-ink">{hostel.name}</h3>
          <Badge tone="neutral">{hostel.gender}</Badge>
        </div>
        <p className="mt-1 text-sm font-medium text-primary-600">{hostel.area}</p>

        <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
          {isFull ? hostel.longDescription : hostel.description}
        </p>

        {isFull && (
          <>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>{hostel.highlightFacility}</Badge>
              {FACILITIES.map((facility) => (
                <Badge key={facility.label} tone="neutral">
                  {facility.label}
                </Badge>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              {hostel.nearby}
            </p>
          </>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <CTAButton href={mapsSearchLink(hostel.mapsQuery)} variant="secondary" icon={MapPin}>
            Get Directions
          </CTAButton>
          <CTAButton href={telLink(hostel.phone)} variant="primary" icon={Phone}>
            Call
          </CTAButton>
          {isFull && (
            <CTAButton
              href={whatsappLink(hostel.whatsapp, `Hi, I'd like to know more about ${hostel.name}.`)}
              variant="secondary"
              icon={MessageCircle}
            >
              WhatsApp
            </CTAButton>
          )}
        </div>
      </div>
    </article>
  );
}
