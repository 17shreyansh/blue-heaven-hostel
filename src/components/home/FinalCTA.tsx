import { Phone, MessageCircle, MapPin } from "lucide-react";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";
import FadeIn from "@/components/shared/FadeIn";
import { SITE } from "@/data/site";
import { telLink, whatsappLink } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section className="bg-primary-900 py-20 md:py-24">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-heading text-[32px] font-extrabold leading-[1.15] tracking-tight text-white md:text-[44px]">
            Ready To Find Your New Home?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/75 md:text-lg">
            Call, message us on WhatsApp, or visit a branch in person — whichever is easiest for you.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href={telLink(SITE.phone)} variant="dark" size="lg" icon={Phone}>
              Call Now
            </CTAButton>
            <CTAButton
              href={whatsappLink(SITE.whatsapp, SITE.enquiryMessage)}
              variant="outlineDark"
              size="lg"
              icon={MessageCircle}
            >
              WhatsApp Now
            </CTAButton>
            <CTAButton href="/hostels" variant="outlineDark" size="lg" icon={MapPin}>
              Visit Hostel
            </CTAButton>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
