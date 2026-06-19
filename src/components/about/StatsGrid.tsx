import StatCard from "@/components/shared/StatCard";
import FadeIn from "@/components/shared/FadeIn";
import { STATS } from "@/data/content";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {STATS.map((stat, index) => (
        <FadeIn key={stat.label} delay={index * 0.06}>
          <StatCard {...stat} />
        </FadeIn>
      ))}
    </div>
  );
}
