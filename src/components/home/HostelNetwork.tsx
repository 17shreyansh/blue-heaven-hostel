import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import FadeIn from "@/components/shared/FadeIn";
import HostelCard from "@/components/hostels/HostelCard";
import { HOSTELS } from "@/data/hostels";

export default function HostelNetwork() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Our Network"
            title="Five Branches, One Standard"
            description="Every Blue Heaven property is managed to the same standard of safety, cleanliness and care."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOSTELS.map((hostel, index) => (
            <FadeIn key={hostel.id} delay={index * 0.06}>
              <HostelCard hostel={hostel} variant="compact" />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton href="/hostels" variant="secondary" icon={ArrowRight}>
            View All Hostels
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
