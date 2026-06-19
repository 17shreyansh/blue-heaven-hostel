import FadeIn from "@/components/shared/FadeIn";
import { VALUES } from "@/data/content";

export default function ValuesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {VALUES.map((value, index) => {
        const Icon = value.icon;
        return (
          <FadeIn key={value.title} delay={index * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-white p-8 shadow-subtle">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
                <Icon className="h-6 w-6 text-primary-600" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-ink">{value.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-slate-600">{value.description}</p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
