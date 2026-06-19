import { Phone, MessageCircle, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE } from "@/data/site";
import { telLink, whatsappLink, mailLink } from "@/lib/utils";
import FadeIn from "@/components/shared/FadeIn";

interface ContactCard {
  icon: LucideIcon;
  title: string;
  detail: string;
  href: string;
  external?: boolean;
}

const CARDS: ContactCard[] = [
  { icon: Phone, title: "Call Us", detail: SITE.phone, href: telLink(SITE.phone) },
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    detail: "Usually replies within minutes",
    href: whatsappLink(SITE.whatsapp, SITE.enquiryMessage),
    external: true,
  },
  { icon: Mail, title: "Email Us", detail: SITE.email, href: mailLink(SITE.email) },
];

export default function QuickContactCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {CARDS.map((card, index) => {
        const Icon = card.icon;
        return (
          <FadeIn key={card.title} delay={index * 0.06}>
            <a
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="block h-full rounded-2xl border border-line bg-white p-8 text-center shadow-subtle transition-shadow duration-300 ease-premium hover:shadow-card-hover"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
                <Icon className="h-6 w-6 text-primary-600" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.detail}</p>
            </a>
          </FadeIn>
        );
      })}
    </div>
  );
}
