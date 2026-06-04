import { useEffect } from "react";
import { motion } from "motion/react";
import { Target, Eye, Heart, Users, Sparkles, Building2 } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { impactStats, solutions } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Community Makers' Market" },
      { name: "description", content: "Our mission to empower local communities through entrepreneurship and skill development." },
      { property: "og:title", content: "About Community Makers' Market" },
      { property: "og:description", content: "Empowering local communities through entrepreneurship." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, tr } = useLang();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading titleKey="aboutTitle" subKey="footerAbout" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-gradient-warm p-8"
        >
          <Target className="h-10 w-10 text-primary" />
          <h3 className="mt-4 text-xl font-bold">{t("mission")}</h3>
          <p className="mt-2 text-muted-foreground">{t("missionText")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card p-8 shadow-soft"
        >
          <Eye className="h-10 w-10 text-teal" />
          <h3 className="mt-4 text-xl font-bold">{t("vision")}</h3>
          <p className="mt-2 text-muted-foreground">{t("visionText")}</p>
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {impactStats.map((s) => (
          <div key={s.key} className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
            <p className="text-3xl font-extrabold text-primary">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{t(s.key)}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold">{t("solutionsTitle")}</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.05 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <span className="text-2xl">{s.icon}</span>
              <h4 className="mt-2 font-semibold">{tr(s.title)}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{tr(s.text)}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-border bg-card p-8 text-center text-muted-foreground">
        {[
          { icon: <Users className="h-6 w-6" />, label: "NGOs" },
          { icon: <Heart className="h-6 w-6" />, label: "SHGs" },
          { icon: <Building2 className="h-6 w-6" />, label: "Secretariats" },
          { icon: <Sparkles className="h-6 w-6" />, label: "Communities" },
        ].map((x, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">{x.icon}</span>
            <span className="text-sm font-medium">{x.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
