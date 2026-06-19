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
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Founder Profile */}
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="mx-auto max-w-sm lg:max-w-none">
                  <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-line/50">
                    <SmartImage
                      src="/Captain V.S Chauhan.PNG"
                      alt="Captain V.S Chauhan"
                      label="Captain V.S Chauhan"
                      aspect="aspect-[4/5]"
                      className="w-full object-cover"
                      objectPosition="object-top"
                    />
                  </div>
                  <div className="mt-8 text-center lg:text-left">
                    <h3 className="font-heading text-2xl font-bold text-ink">Captain V.S Chauhan</h3>
                    <p className="mt-1.5 text-[15px] font-bold tracking-wide text-primary-600 uppercase">Founder & Director</p>
                    
                    <ul className="mt-6 flex flex-col gap-3 text-sm font-medium text-slate-700 lg:text-left text-left mx-auto max-w-xs lg:mx-0">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600"></span>
                        <span>Retired from the Indian Army</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600"></span>
                        <span>34 Years of Administration Experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600"></span>
                        <span>Established Blue Heaven Hostel in 2012</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600"></span>
                        <span>14+ Years running premium student housing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Story & Biography */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <span className="mb-3 block text-sm font-bold uppercase tracking-[0.12em] text-primary-600">
                  Leadership & Vision
                </span>
                <h2 className="font-heading text-[28px] font-extrabold leading-[1.2] tracking-tight text-ink md:text-[36px]">
                  Discipline Meets Hospitality
                </h2>
                
                <div className="prose prose-slate mt-8 max-w-none text-[16px] leading-[1.8] text-slate-600">
                  <p>
                    Blue Heaven Hostels operates differently from most student accommodations, and that difference stems directly from our founder, Captain V.S Chauhan. Following a distinguished career in the Indian Army, Captain Chauhan transitioned into civilian administration, bringing with him 34 years of uncompromising standards regarding discipline, security, and operational efficiency.
                  </p>
                  
                  <p className="mt-6">
                    In 2012, noticing a gap in genuinely secure and well-managed housing for students in Greater Noida, he established the first Blue Heaven Hostel. His military background deeply influenced the operational blueprint of the property — from stringent entry logs and round-the-clock surveillance to meticulous daily housekeeping and reliable mess services. 
                  </p>

                  <div className="my-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-6 italic text-slate-700">
                    "When parents leave their children in a new city, they are entrusting us with their most precious responsibility. Our job isn't just to provide a bed; it is to create a secure, disciplined environment where students can focus entirely on their future."
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-ink mt-8 mb-4">From One Hostel To A Trusted Network</h3>
                  
                  <p>
                    What started as a single hostel in Knowledge Park has organically grown into a respected network of five properties. This growth was never driven by aggressive marketing, but rather by word of mouth from parents who valued our rigorous safety protocols, and students who appreciated a living space that simply worked without daily friction.
                  </p>
                  
                  <p className="mt-6">
                    Today, every Blue Heaven branch runs on Captain Chauhan's original principles. We have deliberately kept our network manageable in size to ensure that our standard of care, supervision, and daily upkeep never slips. When you choose Blue Heaven, you are choosing a property managed with military precision and a parent's care.
                  </p>
                </div>
              </FadeIn>
            </div>
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
