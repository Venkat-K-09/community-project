import { useEffect } from "react";
import {
  createFileRoute,
  Link,
  useNavigate,
} from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Store,
  HeartHandshake,
  Quote,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import {
  challenges,
  solutions,
  impactStats,
  skills,
  stories,
  womenPoints,
  youthPoints,
  workflowSteps,
} from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Community Makers' Market — Support Local Talent" },
      {
        name: "description",
        content:
          "A bilingual community platform empowering homemakers, students, artists and self-help groups to turn their craft into a livelihood.",
      },
      { property: "og:title", content: "Community Makers' Market" },
      {
        property: "og:description",
        content: "Support Local Talent, Build a Stronger Community.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, tr } = useLang();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-hero opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-teal opacity-20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> {t("tagline")}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{t("brand")}</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-foreground/80">{t("heroSub")}</p>
            <p className="mt-3 max-w-xl text-muted-foreground">{t("heroDesc")}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => navigate({ to: "/business-ideas" })}>
                {t("exploreIdeas")} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: "/sell" })}
              >
                <Store className="mr-1 h-4 w-4" /> {t("startSelling")}
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {impactStats.slice(0, 3).map((s) => (
                <div key={s.key}>
                  <p className="text-2xl font-bold text-primary sm:text-3xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground">{t(s.key)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {["🕯️", "🥒", "🧵", "🎨", "🧶", "💍"].map((e, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className={`glass flex aspect-square items-center justify-center rounded-3xl text-5xl shadow-card ${
                    i % 2 ? "translate-y-6" : ""
                  }`}
                >
                  {e}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why this platform */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading titleKey="whyTitle" subKey="whySub" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">{t("challengesTitle")}</h3>
            <div className="mt-4 grid gap-3">
              {challenges.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm"
                >
                  <span className="text-xl">{c.icon}</span>
                  {tr(c.text)}
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{t("solutionsTitle")}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {solutions.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border bg-card p-4 shadow-soft"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <h4 className="mt-2 font-semibold">{tr(s.title)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{tr(s.text)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill center */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading titleKey="skillCenterTitle" subKey="skillCenterSub" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-background p-5 shadow-soft"
              >
                <span className="text-3xl">{s.icon}</span>
                <h4 className="mt-3 font-semibold">{tr(s.title)}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{tr(s.text)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Women & Youth */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <EmpowerBlock
            title={t("womenTitle")}
            sub={t("womenSub")}
            points={womenPoints}
            tr={tr}
            accent="bg-gradient-hero"
          />
          <EmpowerBlock
            title={t("youthTitle")}
            sub={t("youthSub")}
            points={youthPoints}
            tr={tr}
            accent="bg-gradient-teal"
          />
        </div>
      </section>

      {/* Featured stories */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading titleKey="storiesTitle" subKey="storiesSub" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {stories.slice(0, 2).map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-border bg-background p-6 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-warm text-2xl">
                    {s.emoji}
                  </span>
                  <div>
                    <p className="font-semibold">{tr(s.name)}</p>
                    <p className="text-xs text-muted-foreground">{tr(s.role)}</p>
                  </div>
                </div>
                <Quote className="mt-4 h-5 w-5 text-primary/40" />
                <p className="mt-1 text-sm text-muted-foreground">{tr(s.testimonial)}</p>
                <p className="mt-3 text-sm font-semibold text-primary">{tr(s.growth)}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/success-stories">
                {t("viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact dashboard */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="relative mx-auto max-w-7xl px-4 text-center text-primary-foreground sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("impactTitle")}</h2>
          <p className="mt-2 opacity-90">{t("impactSub")}</p>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {impactStats.map((s) => (
              <div key={s.key} className="glass rounded-2xl p-6">
                <p className="text-4xl font-extrabold">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm opacity-90">{t(s.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-gradient-warm p-10 text-center">
          <HeartHandshake className="h-10 w-10 text-primary" />
          <h2 className="text-2xl font-bold sm:text-3xl">{t("tagline")}</h2>
          <p className="max-w-xl text-muted-foreground">{t("heroDesc")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" onClick={() => navigate({ to: "/business-ideas" })}>
              {t("exploreIdeas")}
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate({ to: "/sell" })}>
              {t("startSelling")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function EmpowerBlock({
  title,
  sub,
  points,
  tr,
  accent,
}: {
  title: string;
  sub: string;
  points: { icon: string; title: { en: string; te: string }; text: { en: string; te: string } }[];
  tr: (o: { en: string; te: string }) => string;
  accent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-border bg-card p-6"
    >
      <div className={`inline-block rounded-xl ${accent} px-4 py-1.5 text-sm font-semibold text-primary-foreground`}>
        {title}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{sub}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {points.map((p, i) => (
          <div key={i} className="rounded-2xl bg-muted p-4">
            <span className="text-2xl">{p.icon}</span>
            <h4 className="mt-2 text-sm font-semibold">{tr(p.title)}</h4>
            <p className="mt-1 text-xs text-muted-foreground">{tr(p.text)}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
