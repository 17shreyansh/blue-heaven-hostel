import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import SmartImage from "@/components/shared/SmartImage";
import FadeIn from "@/components/shared/FadeIn";
import StatsGrid from "@/components/about/StatsGrid";
import ValuesGrid from "@/components/about/ValuesGrid";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story, mission and values behind ${SITE.name} — a trusted name in student housing across ${SITE.city}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 md:pt-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="About Us"
              title="Built On Trust, Not Trends"
              description="A decade-long focus on one thing — making student housing genuinely safe and well-run."
            />
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <SmartImage
                alt="Blue Heaven Hostel building exterior"
                label="Hostel Building — Exterior"
                aspect="aspect-[4/5]"
                className="w-full"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.12em] text-primary-600">
                Our Story
              </span>
              <h2 className="font-heading text-[28px] font-extrabold leading-[1.2] tracking-tight text-ink md:text-[36px]">
                From One Hostel To A Trusted Network
              </h2>
              <p className="mt-6 text-[15px] leading-[1.8] text-slate-600">
                What started as a single hostel in Knowledge Park has grown, over more than a decade, into
                a network of five properties across Greater Noida. Growth came mostly through word of
                mouth — parents who valued how seriously we took safety, and students who stayed on
                because the day-to-day experience simply worked.
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
                Today, every Blue Heaven branch is run on the same principles: verified entry systems,
                consistent housekeeping, dependable food, and staff who are actually present and
                responsive. We&apos;ve kept the network deliberately manageable in size, so that standard
                never slips.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-2xl border border-line bg-white p-8 md:p-10">
                <h3 className="font-heading text-xl font-bold text-ink">Our Mission</h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
                  To provide students with safe, comfortable and well-managed accommodation that gives
                  them — and their families — genuine peace of mind.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="h-full rounded-2xl border border-line bg-white p-8 md:p-10">
                <h3 className="font-heading text-xl font-bold text-ink">Our Vision</h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
                  To be the most trusted name in student housing across Greater Noida, recognised for
                  consistency, transparency and care.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Core Values"
              title="What Guides Every Decision"
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-12">
            <ValuesGrid />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="By The Numbers"
              title="A Decade Of Consistency"
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-12">
            <StatsGrid />
          </div>
        </Container>
      </section>
    </>
  );
}
