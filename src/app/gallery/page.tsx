import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { GALLERY_IMAGES } from "@/data/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A closer look at rooms, study spaces, dining areas and common areas across Blue Heaven Hostel branches.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 md:pt-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Gallery"
              title="A Closer Look Inside"
              description="Rooms, study spaces, dining areas and common areas — tap any photo to view it full screen."
            />
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <Container>
          <FadeIn>
            <GalleryGrid images={GALLERY_IMAGES} />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
