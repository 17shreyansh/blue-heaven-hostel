import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import Accordion from "@/components/faq/Accordion";
import { FAQS } from "@/data/content";

export default function FAQSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <FadeIn delay={0.1} className="mt-12">
            <Accordion items={FAQS} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
