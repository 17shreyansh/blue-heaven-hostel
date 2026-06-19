import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { WHY_CHOOSE_US } from "@/data/content";

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Why Choose Blue Heaven" title="Built Around Trust" />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white p-8 shadow-subtle">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
                    <Icon className="h-6 w-6 text-primary-600" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-slate-600">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
