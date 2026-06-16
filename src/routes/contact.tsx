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
import { faqs, sectionImages } from "@/data/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Community Makers' Market" },
      { name: "description", content: "Get in touch for questions, partnerships and support." },
      { property: "og:title", content: "Contact Us" },
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
            <Input id="name" name="name" required />
          </div>
          <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="email">{t("email")}</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="message">{t("message")}</Label>
            <Textarea id="message" name="message" rows={5} required />
          </div>
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? t("sending") : t("send")}
          </Button>
        </motion.form>

        <div className="grid gap-6">
          <div className="grid gap-3">
            <ContactRow icon={<Mail className="h-5 w-5" />} label={t("email")} value="hello@makersmarket.org" />
            <ContactRow icon={<Phone className="h-5 w-5" />} label={t("phone")} value="+91 74164 03722" />
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
