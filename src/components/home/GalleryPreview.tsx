import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import SmartImage from "@/components/shared/SmartImage";
import FadeIn from "@/components/shared/FadeIn";
import { GALLERY_IMAGES } from "@/data/content";

export default function GalleryPreview() {
  const preview = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeIn>
            <SectionHeading eyebrow="A Closer Look" title="Step Inside Our Hostels" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <CTAButton href="/gallery" variant="secondary" icon={ArrowRight}>
              View Full Gallery
            </CTAButton>
          </FadeIn>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {preview.map((image, index) => (
            <FadeIn key={image.id} delay={index * 0.05}>
              <SmartImage src={image.src} alt={image.label} label={image.label} aspect="aspect-square" />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
