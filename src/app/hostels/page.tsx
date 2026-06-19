import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import HostelCard from "@/components/hostels/HostelCard";
import { HOSTELS } from "@/data/hostels";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Hostels",
  description: `Explore all ${HOSTELS.length} Blue Heaven Hostel branches across ${SITE.city} — facilities, location and direct contact for each property.`,
};

export default function HostelsPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 md:pt-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Our Hostels"
              title="Five Branches Across Greater Noida"
              description="Every property below is managed to the same standard. Browse the details, then call, message us on WhatsApp, or get directions directly."
            />
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {HOSTELS.map((hostel, index) => (
              <FadeIn key={hostel.id} delay={index * 0.05}>
                <HostelCard hostel={hostel} variant="full" />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
