import Image from "next/image";
import { Image as PhotoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SmartImageProps {
  /** Real image path, e.g. "/images/hostels/master-class-1.jpg". Omit to render a labeled placeholder. */
  src?: string;
  alt: string;
  /** Caption shown inside the placeholder when no src is provided. Defaults to `alt`. */
  label?: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/3]". */
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: string;
  /** Object position for the image, e.g. "object-top", "object-center", "object-bottom" */
  objectPosition?: string;
}

export default function SmartImage({
  src,
  alt,
  label,
  aspect = "aspect-[4/3]",
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  rounded = "rounded-2xl",
  objectPosition = "object-center",
}: SmartImageProps) {
  return (
    <div className={cn("group relative overflow-hidden", aspect, rounded, className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover transition-transform duration-500 ease-premium group-hover:scale-105", objectPosition)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-line bg-surface px-4 text-center">
          <PhotoIcon className="h-6 w-6 text-slate-400" strokeWidth={1.5} aria-hidden="true" />
          <span className="text-xs font-medium text-slate-400">{label ?? alt}</span>
        </div>
      )}
    </div>
  );
}
