"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import type { NavItem } from "@/types";
import { SITE } from "@/data/site";
import { telLink, whatsappLink } from "@/lib/utils";

interface MobileMenuProps {
  navItems: NavItem[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-ink"
      >
        <Menu className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <span className="font-heading text-lg font-extrabold text-ink">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-ink"
            >
              <X className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 overflow-y-auto px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-heading text-xl font-bold text-ink transition-colors duration-200 hover:text-primary-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 border-t border-line px-6 py-6">
            <a
              href={telLink(SITE.phone)}
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-primary-600 font-heading font-bold text-white"
            >
              <Phone className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
              Call Now
            </a>
            <a
              href={whatsappLink(SITE.whatsapp, SITE.enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-xl border border-line font-heading font-bold text-ink"
            >
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
