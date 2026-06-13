import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Wallet,
  Gauge,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Package,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { BusinessIdea } from "@/data/content";

export function BusinessIdeaModal({
  idea,
  open,
  onOpenChange,
}: {
  idea: BusinessIdea | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { t, tr } = useLang();
  if (!idea) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 pt-2">
            <span className="text-4xl">{idea.icon}</span>
            <div>
              <DialogTitle className="text-2xl">{tr(idea.title)}</DialogTitle>
              <p className="text-sm text-muted-foreground">{tr(idea.tagline)}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-3">
          <Stat icon={<Wallet className="h-4 w-4" />} label={t("startupCost")} value={tr(idea.cost)} />
          <Stat icon={<Gauge className="h-4 w-4" />} label={t("skillLevel")} value={tr(idea.skill)} />
          <Stat icon={<TrendingUp className="h-4 w-4" />} label={t("earningPotential")} value={tr(idea.earning)} />
        </div>

        <Section title={t("overview")}>
          <p className="text-sm text-muted-foreground">{tr(idea.overview)}</p>
        </Section>

        <Section title={t("requiredMaterials")}>
          <div className="flex flex-wrap gap-2">
            {idea.materials.map((m, i) => (
              <Badge key={i} variant="secondary" className="gap-1 font-normal">
                <Package className="h-3 w-3" /> {tr(m)}
              </Badge>
            ))}
          </div>
        </Section>

        <Section title={t("stepGuide")}>
          <ol className="space-y-2">
            {idea.steps.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-hero text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-muted-foreground">{tr(s)}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section title={t("pricingSuggestions")}>
          <p className="text-sm text-muted-foreground">{tr(idea.pricing)}</p>
        </Section>

        <Section title={t("marketingTips")}>
          <ul className="space-y-1.5">
            {idea.marketing.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {tr(m)}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t("expectedEarnings")}>
          <div className="rounded-xl bg-gradient-warm p-4 text-sm font-medium">{tr(idea.expected)}</div>
        </Section>

        <div className="grid gap-4 sm:grid-cols-2">
          <Section title={t("commonChallenges")}>
            <ul className="space-y-1.5">
              {idea.challenges.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {tr(c)}
                </li>
              ))}
            </ul>
          </Section>
          <Section title={t("successTips")}>
            <ul className="space-y-1.5">
              {idea.tips.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {tr(c)}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3 text-center">
      <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-primary">
        {icon}
      </div>
      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-xs font-semibold">{value}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-2">
      <h4 className="mb-2 font-semibold">{title}</h4>
      {children}
    </div>
  );
}
