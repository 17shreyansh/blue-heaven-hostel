import { Home } from "lucide-react";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-white py-20">
      <Container className="text-center">
        <span className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-primary-600">
          404
        </span>
        <h1 className="mt-4 font-heading text-3xl font-extrabold text-ink md:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-slate-600">
          The page you&apos;re looking for may have moved. Head back home or explore our hostels.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTAButton href="/" icon={Home}>
            Back To Home
          </CTAButton>
          <CTAButton href="/hostels" variant="secondary">
            View Hostels
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
