"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Building2, Clock, ShieldCheck, MapPin } from "lucide-react";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";
import SmartImage from "@/components/shared/SmartImage";
import { SITE } from "@/data/site";
import { telLink, whatsappLink } from "@/lib/utils";

const TRUST_INDICATORS = [
  { icon: Building2, label: "Multiple Branches" },
  { icon: Clock, label: "24/7 Support" },
  { icon: ShieldCheck, label: "Secure Environment" },
];

// Clean, professional animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 260, damping: 24 } 
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-8 md:pt-16 lg:pt-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center py-8 lg:py-16" 
          >
            {/* Eyebrow Badge */}
            <motion.div variants={fadeInUp} className="mb-4 md:mb-6">
              <span className="inline-flex items-center gap-1.5 bg-primary-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white md:text-sm">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2.5} />
                Greater Noida
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp} 
              className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[68px] xl:text-7xl"
            >
              Premium Student{" "}
              <span className="text-primary-600">Living Redefined</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp} 
              className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg md:text-xl lg:max-w-xl"
            >
              Safe, comfortable hostels designed exclusively for students—built to give parents absolute peace of mind.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
              <CTAButton href="/hostels" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                Explore Hostels
              </CTAButton>
              <CTAButton href={telLink(SITE.phone)} variant="secondary" size="lg" icon={Phone} className="w-full bg-white hover:bg-slate-50 sm:w-auto">
                Call Now
              </CTAButton>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-6">
              <a
                href={whatsappLink(SITE.whatsapp, SITE.enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-primary-700 transition-colors duration-200 hover:text-primary-800 md:text-base"
              >
                <span className="flex h-9 w-9 items-center justify-center bg-primary-50 transition-colors group-hover:bg-primary-100">
                  <MessageCircle className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                </span>
                Message us on WhatsApp
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-10 grid grid-cols-1 gap-3 border-t border-slate-200 pt-8 sm:grid-cols-3 md:mt-12 md:pt-10"
            >
              {TRUST_INDICATORS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 rounded bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary-600">
                    <Icon className="h-5 w-5 text-white" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-ink md:text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.2 }}
            className="relative lg:py-0"
          >
            <div className="relative h-[400px] w-full sm:h-[500px] md:h-[600px] lg:h-full lg:min-h-[650px]">
              {/* Decorative background */}
              <div className="absolute right-0 top-8 h-[calc(100%-2rem)] w-[calc(100%-2rem)] bg-primary-600/5" aria-hidden="true" />
              
              {/* Image container */}
              <div className="absolute inset-0 overflow-hidden">
                <SmartImage
                  alt="Blue Heaven Hostel building exterior"
                  label="Hostel Building — Exterior"
                  aspect="aspect-[3/4]"
                  priority
                  objectPosition="object-top"
                  className="h-full w-full"
                  rounded="rounded-none"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}