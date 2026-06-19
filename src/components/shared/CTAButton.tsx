import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "outlineDark";
type Size = "md" | "lg";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-heading font-bold transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-subtle",
  secondary: "border border-line text-ink hover:border-primary-600 hover:text-primary-700",
  dark: "bg-white text-primary-700 hover:bg-primary-50",
  outlineDark: "border border-white/30 text-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  className,
}: CTAButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {Icon && <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />}
        {children}
      </Link>
    );
  }

  const isExternalProtocol = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      target={isExternalProtocol ? "_blank" : undefined}
      rel={isExternalProtocol ? "noopener noreferrer" : undefined}
    >
      {Icon && <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />}
      {children}
    </a>
  );
}
