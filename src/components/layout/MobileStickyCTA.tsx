import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";
import { telLink, whatsappLink } from "@/lib/utils";

export default function MobileStickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={telLink(SITE.phone)}
        className="flex flex-1 items-center justify-center gap-2 py-4 font-heading text-[15px] font-bold text-ink"
      >
        <Phone className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
        Call Now
      </a>
      <div className="w-px bg-line" aria-hidden="true" />
      <a
        href={whatsappLink(SITE.whatsapp, SITE.enquiryMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-primary-600 py-4 font-heading text-[15px] font-bold text-white"
      >
        <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
