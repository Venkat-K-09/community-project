import { useState, useEffect } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Store, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useSeller } from "@/contexts/SellerContext";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { sellerCategories, registerSeller } from "@/lib/sellers";
import { workflowSteps } from "@/data/content";

export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: "Start Selling — Community Makers' Market" },
      { name: "description", content: "Create your seller account to manage your home-based business, add products, and connect with local buyers." },
      { property: "og:title", content: "Create Your Seller Account" },
      { property: "og:description", content: "Join our community of sellers. Create your profile and start showcasing your products." },
    ],
  }),
  component: SellPage,
});

function SellPage() {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  const { seller, refresh } = useSeller();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    businessName: "",
    category: sellerCategories[0].key,
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => window.scrollTo(0, 0), []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.fullName.trim().length < 2) e.fullName = "!";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "!";
    if (form.phone.trim().replace(/\D/g, "").length < 8) e.phone = "!";
    if (form.location.trim().length < 2) e.location = "!";
    if (form.businessName.trim().length < 2) e.businessName = "!";
    if (form.description.trim().length < 5) e.description = "!";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    registerSeller(form);
    refresh();
    toast.success(t("accountCreatedSuccess"));
    navigate({ to: "/seller-dashboard" });
  };

  // Already logged in as seller
  if (seller) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
        <h1 className="mt-4 text-2xl font-bold">
          {tr({ en: "You already have a seller account", te: "మీకు ఇప్పటికే విక్రేత ఖాతా ఉంది" })}
        </h1>
        <p className="mt-2 text-muted-foreground">{seller.businessName}</p>
        <Button className="mt-6" onClick={() => navigate({ to: "/seller-dashboard" })}>
          {t("goToDashboard")} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading titleKey="createSellerAccount" subKey="sellerRegSub" />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">

        {/* Left — how it works + auth info */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Store className="h-3.5 w-3.5 text-primary" /> {t("gettingStarted")}
          </span>

          <div className="mt-5 grid gap-3">
            {workflowSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <h4 className="text-sm font-semibold">{tr(s.title)}</h4>
                  <p className="text-xs text-muted-foreground">{tr(s.text)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Auth info banner */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-4"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-xl">🔐</span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {tr({ en: "Your Personal Seller Account", te: "మీ వ్యక్తిగత విక్రేత ఖాతా" })}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {tr({
                    en: "Filling this form creates your seller account. All products you add will be saved exclusively in your own dashboard — no one else can access or edit them.",
                    te: "ఈ ఫారమ్ నింపడం వల్ల మీ విక్రేత ఖాతా సృష్టించబడుతుంది. మీరు జోడించిన అన్ని ఉత్పత్తులు మీ స్వంత డాష్‌బోర్డ్‌లో మాత్రమే సేవ్ అవుతాయి.",
                  })}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — registration form (acts as seller authentication) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
        >
          {/* Form header */}
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero text-xl text-primary-foreground">
              🏪
            </span>
            <div>
              <h2 className="font-bold leading-tight">
                {tr({ en: "Create Your Seller Account", te: "మీ విక్రేత ఖాతాను సృష్టించండి" })}
              </h2>
              <p className="text-xs text-muted-foreground">
                {tr({ en: "Products you list will appear in your private dashboard", te: "మీరు జాబితా చేసిన ఉత్పత్తులు మీ డాష్‌బోర్డ్‌లో కనిపిస్తాయి" })}
              </p>
            </div>
          </div>

          <form onSubmit={submit} className="grid gap-4">
            <Field label={t("fullName")} err={errors.fullName}>
              <Input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("email")} err={errors.email}>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </Field>
              <Field label={t("phone")} err={errors.phone}>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </Field>
            </div>
            <Field label={t("location")} err={errors.location}>
              <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            </Field>
            <Field label={t("businessName")} err={errors.businessName}>
              <Input value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} />
            </Field>
            <div className="grid gap-1.5">
              <Label>{t("businessCategory")}</Label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              >
                {sellerCategories.map((c) => (
                  <option key={c.key} value={c.key}>{tr(c.label)}</option>
                ))}
              </select>
            </div>
            <Field label={t("businessDescription")} err={errors.description}>
              <Textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </Field>
            <Button type="submit" size="lg" className="mt-2 w-full">
              {t("createAccount")} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              {t("alreadyHasAccount")}{" "}
              <Link to="/seller-dashboard" className="font-medium text-primary hover:underline">
                {t("goToDashboard")}
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function Field({ label, err, children }: { label: string; err?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      <div className={err ? "[&_input]:border-destructive [&_textarea]:border-destructive" : ""}>{children}</div>
    </div>
  );
}
