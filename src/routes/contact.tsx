import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Loader2, Facebook, Instagram, Youtube } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { saveInquiry } from "@/lib/inquiries";
import { faqs, sectionImages } from "@/data/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Community Makers' Market" },
      { name: "description", content: "Get in touch for questions, partnerships and support." },
      { property: "og:title", content: "Contact Us" },
      { property: "og:description", content: "Questions, partnerships or support — we're here to help." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, tr } = useLang();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => window.scrollTo(0, 0), []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "!";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "!";
    if (form.phone.trim().replace(/\D/g, "").length < 8) e.phone = "!";
    if (form.message.trim().length < 5) e.message = "!";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      saveInquiry({ ...form, subject: "General Contact" });
      setLoading(false);
      toast.success(t("contactReceived"));
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 900);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading titleKey="contactTitle" subKey="contactSub" />

      <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-soft">
        <img
          src={sectionImages.contact}
          alt="Community collaboration and connection"
          loading="lazy"
          className="h-56 w-full object-cover sm:h-72"
        />
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
        >
          <div className="grid gap-1.5">
            <Label htmlFor="name">{t("yourName")}</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={errors.name ? "border-destructive" : ""} />
          </div>
          <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="email">{t("email")}</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={errors.email ? "border-destructive" : ""} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={errors.phone ? "border-destructive" : ""} />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="message">{t("message")}</Label>
            <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={errors.message ? "border-destructive" : ""} />
          </div>
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? t("sending") : t("send")}
          </Button>
        </motion.form>

        <div className="grid gap-6">
          <div className="grid gap-3">
            <ContactRow icon={<Mail className="h-5 w-5" />} label={t("email")} value="hello@makersmarket.org" />
            <ContactRow icon={<Phone className="h-5 w-5" />} label={t("phone")} value="+91 98765 43210" />
            <ContactRow icon={<MapPin className="h-5 w-5" />} label={t("contactInfo")} value="Andhra Pradesh & Telangana" />
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-semibold">{t("followUs")}</h3>
            <div className="mt-3 flex gap-2">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading titleKey="faqTitle" />
        <div className="mx-auto mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="grid gap-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{tr(f.q)}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{tr(f.a)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
