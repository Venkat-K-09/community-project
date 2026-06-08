import { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { Search, BadgeCheck, Gift, FileText } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { schemes, sectionImages } from "@/data/content";

export const Route = createFileRoute("/schemes")({
  head: () => ({
    meta: [
      { title: "Government Schemes — Community Makers' Market" },
      { name: "description", content: "Searchable government support schemes for women, SHGs, youth and small businesses." },
      { property: "og:title", content: "Government Schemes" },
      { property: "og:description", content: "Find funding and support programs you qualify for." },
    ],
  }),
  component: SchemesPage,
});

function SchemesPage() {
  const { t, tr } = useLang();
  const [q, setQ] = useState("");

  useEffect(() => window.scrollTo(0, 0), []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return schemes;
    return schemes.filter((s) =>
      [s.name, s.eligibility, s.benefits].some((f) =>
        tr(f).toLowerCase().includes(query),
      ),
    );
  }, [q, tr]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <SectionHeading titleKey="schemesTitle" subKey="schemesSub" />

      <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-soft">
        <img
          src={sectionImages.schemes}
          alt="Community development and entrepreneurship support"
          loading="lazy"
          className="h-56 w-full object-cover sm:h-72"
        />
      </div>

      <div className="relative mx-auto mt-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("searchSchemes")}
          className="pl-9"
        />
      </div>

      <div className="mt-10 grid gap-5">
        {filtered.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 4) * 0.05 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft"
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
                🏛️
              </span>
              {tr(s.name)}
            </h3>
            <Accordion type="single" collapsible className="mt-2">
              <AccordionItem value="details" className="border-none">
                <AccordionTrigger className="py-2 text-sm font-medium text-primary hover:no-underline">
                  {t("learnMore")}
                </AccordionTrigger>
                <AccordionContent className="grid gap-3 pt-2">
                  <Detail icon={<BadgeCheck className="h-4 w-4 text-teal" />} label={t("eligibility")} value={tr(s.eligibility)} />
                  <Detail icon={<Gift className="h-4 w-4 text-gold" />} label={t("benefits")} value={tr(s.benefits)} />
                  <Detail icon={<FileText className="h-4 w-4 text-primary" />} label={t("applicationInfo")} value={tr(s.application)} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-muted p-3">
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {icon} {label}
      </p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}
