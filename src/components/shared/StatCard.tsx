import type { StatItem } from "@/types";

export default function StatCard({ label, value }: StatItem) {
  return (
    <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-subtle">
      <div className="font-heading text-4xl font-extrabold text-primary-600 md:text-5xl">{value}</div>
      <div className="mt-2 text-sm font-medium text-slate-600">{label}</div>
    </div>
  );
}
