"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Container from "@/components/shared/Container";
import { NAV_ITEMS } from "@/data/content";
import { SITE } from "@/data/site";
import { telLink, whatsappLink } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to trigger a sleek, flat header shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      // Strictly solid colors. Transitions padding and border based on scroll state.
      className={`fixed left-0 right-0 top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled ? "border-b-2 border-slate-100 py-1" : "border-b-2 border-transparent py-3"
      }`}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-4 py-2 font-heading text-[14px] font-bold uppercase tracking-wide text-ink transition-colors duration-200 hover:text-primary-700"
            >
              {item.label}
              {/* Flat animated underline effect on hover */}
              <span className="absolute bottom-0 left-4 right-4 h-[3px] origin-left scale-x-0 bg-primary-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop Call-to-Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={telLink(SITE.phone)}
            className="flex h-12 items-center gap-2.5 rounded-lg bg-white px-6 text-sm font-bold text-ink shadow-sm transition-colors duration-200 hover:bg-slate-50"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={2.5} aria-hidden="true" />
            Call Now
          </a>
          
          <a
            href={whatsappLink(SITE.whatsapp, SITE.enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center gap-2.5 rounded-lg bg-primary-600 px-6 text-sm font-bold text-white transition-colors duration-200 hover:bg-primary-700"
          >
            <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.5} aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu navItems={NAV_ITEMS} />
      </Container>
    </motion.header>
  );
}