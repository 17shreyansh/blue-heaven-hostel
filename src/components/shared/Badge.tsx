import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "primary" | "neutral";
}

export default function Badge({ children, className, tone = "primary" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tone === "primary"
          ? "bg-primary-50 text-primary-700"
          : "border border-line bg-surface text-slate-600",
        className
      )}
    >
      {children}
    </span>
  );
}
