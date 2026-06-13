import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Wallet, Gauge, TrendingUp, ArrowRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { BusinessIdeaModal } from "@/components/BusinessIdeaModal";
import { Button } from "@/components/ui/button";
import { businessIdeas, type BusinessIdea } from "@/data/content";

export const Route = createFileRoute("/business-ideas")({
  head: () => ({
    meta: [
      { title: "Business Ideas — Community Makers' Market" },
      { name: "description", content: "Explore proven home-based business ideas with startup costs, guides and earning potential." },
      { property: "og:title", content: "Business Ideas Hub" },
      { property: "og:description", content: "Curated home-based business ideas with step-by-step guides." },
    ],
  }),
  component: BusinessIdeasPage,
});

function BusinessIdeasPage() {
  const { t, tr } = useLang();
  const [active, setActive] = useState<BusinessIdea | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  const openIdea = (idea: BusinessIdea) => {
    setActive(idea);
    setOpen(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <SectionHeading titleKey="navIdeas" subKey="whySub" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {businessIdeas.map((idea, i) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 3) * 0.06 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
          >
            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-accent/40 to-muted/40">
              <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
                {idea.icon}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold">{tr(idea.title)}</h3>
              <p className="text-sm text-muted-foreground">{tr(idea.tagline)}</p>
              <div className="mt-4 space-y-2 text-sm">
                <Row icon={<Wallet className="h-4 w-4 text-primary" />} label={t("startupCost")} value={tr(idea.cost)} />
                <Row icon={<Gauge className="h-4 w-4 text-teal" />} label={t("skillLevel")} value={tr(idea.skill)} />
                <Row icon={<TrendingUp className="h-4 w-4 text-gold" />} label={t("earningPotential")} value={tr(idea.earning)} />
              </div>
              <Button className="mt-5 w-full" variant="outline" onClick={() => openIdea(idea)}>
                {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <BusinessIdeaModal idea={active} open={open} onOpenChange={setOpen} />
    </div>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-1.5 text-muted-foreground">{icon}{label}</span>
      <span className="text-right font-medium">{value}</span>
    </div>
  );
}
