import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import QuickContactCards from "@/components/contact/QuickContactCards";
import ContactForm from "@/components/contact/ContactForm";
import BranchDirectory from "@/components/contact/BranchDirectory";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE.name} — call, WhatsApp, email or find directions to any of our branches in ${SITE.city}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 md:pt-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Contact"
              title="Let's Find You The Right Hostel"
              description="Reach out however is easiest — we usually respond fastest on WhatsApp."
            />
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <QuickContactCards />
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <FadeIn>
              <div className="rounded-2xl border border-line bg-white p-8 shadow-subtle md:p-10">
                <h2 className="font-heading text-2xl font-bold text-ink">Send An Enquiry</h2>
                <p className="mt-2 text-[15px] text-slate-600">
                  Tell us a bit about what you need and we&apos;ll get back to you.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-line bg-white p-8 shadow-subtle md:p-10">
                <h3 className="font-heading text-lg font-bold text-ink">Visiting Hours</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-slate-600">
                  Parents and guardians are welcome any day, 10 AM – 7 PM. A short call ahead helps us
                  make sure someone is free to show you around.
                </p>
                <div className="mt-6 border-t border-line pt-6">
                  <h3 className="font-heading text-lg font-bold text-ink">Prefer To Talk Directly?</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-slate-600">
                    Call or WhatsApp us any time — for most questions, it&apos;s the fastest way to get an
                    answer.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Our Branches" title="Visit A Branch Near You" />
          </FadeIn>
          <div className="mt-10">
            <BranchDirectory />
          </div>
        </Container>
      </section>
    </>
  );
}
