import { useEffect } from "react";
import { motion } from "motion/react";
import { Quote, TrendingUp } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { stories, womenPoints, youthPoints } from "@/data/content";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Community Makers' Market" },
      { name: "description", content: "Real stories of homemakers, students and self-help groups building income and confidence." },
      { property: "og:title", content: "Success Stories" },
      { property: "og:description", content: "Real people, real income, real change." },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  const { t, tr } = useLang();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <SectionHeading titleKey="storiesTitle" subKey="storiesSub" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {stories.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 2) * 0.1 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-warm text-3xl">
                {s.emoji}
              </span>
              <div>
                <p className="text-lg font-semibold">{tr(s.name)}</p>
                <p className="text-sm text-muted-foreground">{tr(s.role)}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{tr(s.story)}</p>
            <div className="mt-4 rounded-2xl bg-muted p-4">
              <Quote className="h-5 w-5 text-primary/50" />
              <p className="mt-1 text-sm italic">{tr(s.testimonial)}</p>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-hero px-3 py-1 text-sm font-semibold text-primary-foreground">
              <TrendingUp className="h-4 w-4" /> {tr(s.growth)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Women & Youth */}
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <Block title={t("womenTitle")} sub={t("womenSub")} points={womenPoints} tr={tr} />
        <Block title={t("youthTitle")} sub={t("youthSub")} points={youthPoints} tr={tr} />
      </div>
    </div>
  );
}

function Block({
  title,
  sub,
  points,
  tr,
}: {
  title: string;
  sub: string;
  points: { icon: string; title: { en: string; te: string }; text: { en: string; te: string } }[];
  tr: (o: { en: string; te: string }) => string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <h3 className="text-xl font-bold text-gradient">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{sub}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {points.map((p, i) => (
          <div key={i} className="rounded-2xl bg-muted p-4">
            <span className="text-2xl">{p.icon}</span>
            <h4 className="mt-2 text-sm font-semibold">{tr(p.title)}</h4>
            <p className="mt-1 text-xs text-muted-foreground">{tr(p.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
