import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { FACILITIES } from "@/data/content";

export default function Facilities() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Facilities"
            title="Everything You Need, Included"
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {FACILITIES.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <FadeIn key={facility.label} delay={index * 0.04}>
                <div className="flex flex-col items-center gap-3 px-2 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface">
                    <Icon className="h-7 w-7 text-primary-600" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-heading text-[15px] font-bold text-ink">{facility.label}</span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
