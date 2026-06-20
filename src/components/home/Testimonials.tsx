import { Quote } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Trusted By Families"
            title="Trusted By Students And Parents"
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.05}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-subtle">
                <Quote className="h-6 w-6 text-primary-300" strokeWidth={2} aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-[1.7] text-slate-700">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <span className="block font-heading text-sm font-bold text-ink">
                    {testimonial.name}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
