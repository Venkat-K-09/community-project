import { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { Info, MessageCircle, Eye } from "lucide-react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactFormModal } from "@/components/ContactFormModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getMarketProducts, getMarketCategories, type MarketProduct } from "@/lib/market";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — Community Makers' Market" },
      { name: "description", content: "Discover authentic products made by local creators and connect directly with sellers." },
      { property: "og:title", content: "Community Marketplace" },
      { property: "og:description", content: "Buy local. Contact sellers directly. No online payments." },
    ],
  }),
  component: MarketplacePage,
});

function MarketplacePage() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<MarketProduct | null>(null);

  useEffect(() => window.scrollTo(0, 0), []);

  const all = useMemo(() => getMarketProducts(lang), [lang]);
  const categories = useMemo(() => getMarketCategories(lang), [lang]);

  // Only show category chips that have products
  const visibleCats = useMemo(
    () => categories.filter((c) => all.some((p) => p.categoryKey === c.key)),
    [categories, all],
  );

  const filtered = useMemo(
    () => (cat === "all" ? all : all.filter((p) => p.categoryKey === cat)),
    [cat, all],
  );

  const contact = (p: MarketProduct) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <SectionHeading titleKey="marketTitle" subKey="marketSub" />

      <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-accent/60 px-4 py-3 text-center text-sm text-muted-foreground">
        <Info className="h-4 w-4 shrink-0 text-primary" /> {t("noPayments")}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <FilterChip active={cat === "all"} onClick={() => setCat("all")} label={t("allCategories")} />
        {visibleCats.map((c) => (
          <FilterChip key={c.key} active={cat === c.key} onClick={() => setCat(c.key)} label={c.label} />
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.05 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
          >
            {p.image ? (
              <img src={p.image} alt={p.name} className="h-44 w-full object-cover transition-transform group-hover:scale-105" />
            ) : (
              <div className="flex items-center justify-center bg-gradient-warm py-10 text-6xl transition-transform group-hover:scale-110">
                {p.emoji}
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <Badge variant="secondary" className="w-fit font-normal">{p.category}</Badge>
              <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{t("seller")}: {p.sellerName}</span>
                <span className="text-lg font-bold text-primary">{p.price}</span>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate({ to: "/product/$id", params: { id: p.id } })}
                >
                  <Eye className="mr-1 h-4 w-4" /> {t("viewDetails")}
                </Button>
                <Button className="w-full" onClick={() => contact(p)}>
                  <MessageCircle className="mr-1 h-4 w-4" /> {t("contactSeller")}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ContactFormModal
        open={open}
        onOpenChange={setOpen}
        subject={active?.name ?? ""}
        sellerId={active?.sellerId}
        productId={active?.id}
        defaultMessage={t("defaultInquiryMsg")}
      />
    </div>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:bg-accent"
      }`}
    >
      {label}
    </button>
  );
}
