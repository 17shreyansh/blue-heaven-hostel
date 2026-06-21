import { CheckCircle2 } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import SmartImage from "@/components/shared/SmartImage";
import CTAButton from "@/components/shared/CTAButton";
import FadeIn from "@/components/shared/FadeIn";

const TRUST_POINTS = [
  "Verified entry and exit systems",
  "On-site staff, every day",
  "Transparent pricing, no hidden costs",
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SmartImage
              src="/about.jpeg"
              alt="Blue Heaven Hostel reception and common area"
              label="Common Area — Reception"
              aspect="aspect-[4/5]"
              className="w-full"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionHeading eyebrow="About Blue Heaven" title="A Trusted Name In Student Housing" />
            <p className="mt-6 text-[15px] leading-[1.8] text-slate-600">
              Blue Heaven Hostel has provided safe, well-managed accommodation for students in Greater
              Noida for over a decade. We operate multiple hostels across the city, each built around the
              same principles — security, cleanliness and genuine care for residents.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
              Every property is professionally managed, with on-site staff and consistent housekeeping
              standards. Parents choose us because they can see exactly how their child will live.
              Students choose us because it feels like home.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" strokeWidth={2} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <CTAButton href="/about" variant="secondary" className="mt-8">
              Learn More About Us
            </CTAButton>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
