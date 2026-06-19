"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Logo from "./Logo";
import { NAV_ITEMS } from "@/data/content";
import { HOSTELS } from "@/data/hostels";
import { SITE } from "@/data/site";
import { telLink, whatsappLink, mailLink } from "@/lib/utils";

// Scroll reveal animations
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function Footer() {
  return (
    <footer className="border-t-2 border-slate-100 bg-white overflow-hidden">
      {/* 
        whileInView triggers the animation only when the footer scrolls into the viewport.
        viewport={{ once: true }} ensures it only happens once.
      */}
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] md:gap-8 lg:py-24"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="pr-4">
            <Logo size="lg" />
            <p className="mt-6 max-w-sm text-[15.5px] leading-[1.8] text-slate-500">
              {SITE.description}
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading text-[13px] font-extrabold uppercase tracking-widest text-ink">
              Quick Links
            </h3>
            <ul className="mt-6 flex flex-col gap-3.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-primary-600"
                  >
                    {/* Flat UI slide effect on hover */}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Branches Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading text-[13px] font-extrabold uppercase tracking-widest text-ink">
              Our Branches
            </h3>
            <ul className="mt-6 flex flex-col gap-3.5">
              {HOSTELS.map((hostel) => (
                <li key={hostel.id}>
                  <Link
                    href={`/hostels#${hostel.id}`}
                    className="group inline-flex items-center text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-primary-600"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {hostel.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading text-[13px] font-extrabold uppercase tracking-widest text-ink">
              Get in Touch
            </h3>
            <ul className="mt-6 flex flex-col gap-4 text-[15px] font-medium text-slate-600">
              <li>
                <a
                  href={telLink(SITE.phone)}
                  className="group flex items-center gap-3 transition-colors duration-200 hover:text-primary-600"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-50 transition-colors duration-300 group-hover:bg-primary-50">
                    <Phone className="h-4 w-4 text-primary-600" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(SITE.whatsapp, SITE.enquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors duration-200 hover:text-primary-600"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-50 transition-colors duration-300 group-hover:bg-primary-50">
                    <MessageCircle className="h-4 w-4 text-primary-600" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={mailLink(SITE.email)}
                  className="group flex items-center gap-3 transition-colors duration-200 hover:text-primary-600"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-50 transition-colors duration-300 group-hover:bg-primary-50">
                    <Mail className="h-4 w-4 text-primary-600" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-50">
                  <MapPin className="h-4 w-4 text-primary-600" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="pt-1.5 leading-snug">
                  {SITE.city}, {SITE.region}
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </Container>

      {/* Flat Solid Bottom Bar */}
      <div className="border-t-2 border-slate-100 bg-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-8 text-[14px] font-medium text-slate-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Built for <span className="text-slate-600">Students.</span> Trusted by <span className="text-slate-600">Parents.</span>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}