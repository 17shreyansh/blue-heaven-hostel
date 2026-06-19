import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function Logo({ size = "sm", className }: LogoProps) {
  const isLarge = size === "lg";
  return (
    <Link href="/" className={cn("group inline-flex items-center", className)} aria-label="Blue Heaven Hostel, home">
      <Image
        src="/logo.jpeg"
        alt="Blue Heaven Hostel"
        width={isLarge ? 120 : 80}
        height={isLarge ? 120 : 80}
        className={cn(
          "object-contain transition-transform duration-300 ease-premium group-hover:scale-105 mix-blend-multiply",
          isLarge ? "h-[120px] w-[120px]" : "h-20 w-20"
        )}
        priority
      />
    </Link>
  );
}
