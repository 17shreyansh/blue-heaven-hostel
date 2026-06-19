import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HOSTELS } from "@/data/hostels";
import { SITE } from "@/data/site";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import Badge from "@/components/shared/Badge";
import CTAButton from "@/components/shared/CTAButton";
import { telLink, whatsappLink, mapsSearchLink } from "@/lib/utils";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { FACILITIES } from "@/data/content";
import ImageSlider from "@/components/hostels/ImageSlider";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return HOSTELS.map((hostel) => ({
    id: hostel.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hostel = HOSTELS.find((h) => h.id === id);

  if (!hostel) {
    return {
      title: "Hostel Not Found",
    };
  }

  return {
    title: `${hostel.name} | ${SITE.name}`,
    description: hostel.description,
  };
}

export default async function HostelDetailPage({ params }: Props) {
  const { id } = await params;
  const hostel = HOSTELS.find((h) => h.id === id);

  if (!hostel) {
    notFound();
  }

  // Get images from the public directory
  let images: string[] = [];
  if (hostel.folderName) {
    const publicDir = path.join(process.cwd(), "public");
    const hostelImagesDir = path.join(publicDir, hostel.folderName);
    
    try {
      if (fs.existsSync(hostelImagesDir)) {
        const files = fs.readdirSync(hostelImagesDir);
        images = files
          .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
          .map((file) => `/${hostel.folderName}/${file}`);
      }
    } catch (error) {
      console.error(`Error reading images for ${hostel.name}:`, error);
    }
  }

  const heroImage = images.length > 0 ? images[0] : null;

  return (
    <>
      {/* Hero Slider Section */}
      <section className="pt-24 pb-8 md:pt-32">
        <Container>
          <FadeIn>
            <ImageSlider images={images} altPrefix={hostel.name} />
          </FadeIn>
        </Container>
      </section>

      {/* Header Info Section */}
      <section className="bg-white pb-10">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-line pb-8">
              <div className="max-w-3xl">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge tone="neutral">{hostel.gender}</Badge>
                  <Badge tone="primary">{hostel.area}</Badge>
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {hostel.name}
                </h1>
                <p className="mt-4 text-lg text-slate-600 md:text-xl leading-relaxed">
                  {hostel.tagline}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <CTAButton href={mapsSearchLink(hostel.mapsQuery)} variant="primary" icon={MapPin}>
                  Directions
                </CTAButton>
                <CTAButton href={telLink(hostel.phone)} variant="secondary" icon={Phone}>
                  Call Us
                </CTAButton>
                <CTAButton
                  href={whatsappLink(hostel.whatsapp, `Hi, I'd like to know more about ${hostel.name}.`)}
                  variant="secondary"
                  icon={MessageCircle}
                >
                  WhatsApp
                </CTAButton>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Content Section */}
      <section className="bg-white pb-16 md:pb-24 pt-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <FadeIn>
                <SectionHeading
                  eyebrow="About the Hostel"
                  title="Your home away from home"
                  description={hostel.longDescription}
                  align="left"
                />
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border border-line bg-slate-50 p-8 shadow-subtle">
                  <h3 className="font-heading text-xl font-bold text-ink mb-4">Location Details</h3>
                  <div className="flex items-start gap-3 text-slate-600 mb-4">
                    <MapPin className="h-5 w-5 shrink-0 text-primary-600 mt-0.5" />
                    <p className="leading-relaxed">{hostel.addressLine}</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 border border-line">
                    <p className="text-sm font-medium text-slate-900">Nearby:</p>
                    <p className="text-sm text-slate-600 mt-1">{hostel.nearby}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl border border-line bg-white p-8 shadow-subtle">
                  <h3 className="font-heading text-xl font-bold text-ink mb-6">Facilities Included</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                        <span className="text-sm font-bold">✨</span>
                      </div>
                      <span className="font-medium text-slate-900">{hostel.highlightFacility}</span>
                    </li>
                    {FACILITIES.map((facility) => {
                      const Icon = facility.icon;
                      return (
                        <li key={facility.label} className="flex items-center gap-3 text-slate-600">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span>{facility.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      {images.length > 0 && (
        <section className="bg-slate-50 py-16 md:py-24">
          <Container>
            <FadeIn>
              <SectionHeading
                eyebrow="Gallery"
                title="A Closer Look"
                description="Browse through the images to get a feel for the rooms, common areas, and facilities."
                align="center"
              />
              
              <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((src, index) => (
                  <div key={index} className="break-inside-avoid overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                    <img
                      src={src}
                      alt={`${hostel.name} Gallery Image ${index + 1}`}
                      className="w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </Container>
        </section>
      )}
    </>
  );
}
