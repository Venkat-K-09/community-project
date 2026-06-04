import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";
import type { Lang } from "@/i18n/translations";

export function LanguageGate() {
  const { choose } = useLang();

  const options: { lang: Lang; label: string; native: string }[] = [
    { lang: "en", label: "English", native: "Aa" },
    { lang: "te", label: "తెలుగు", native: "అ" },
  ];

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-gradient-hero px-4">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:28px_28px]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass relative w-full max-w-md rounded-3xl p-8 text-center shadow-2xl"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-lg">
          <Globe className="h-8 w-8" />
        </div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          🌐 {ui.selectLanguage.en} / {ui.selectLanguage.te}
        </p>
        <h1 className="mt-2 text-2xl font-bold">
          {ui.chooseLanguage.en}
          <span className="block text-lg font-semibold text-muted-foreground">
            {ui.chooseLanguage.te}
          </span>
        </h1>

        <div className="mt-8 grid gap-4">
          {options.map((opt, i) => (
            <motion.button
              key={opt.lang}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => choose(opt.lang)}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition-colors hover:border-primary hover:bg-accent"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-warm text-xl font-bold text-primary">
                {opt.native}
              </span>
              <span className="text-lg font-semibold">{opt.label}</span>
              <span className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-1">
                →
              </span>
            </motion.button>
          ))}
        </div>

        <p className="mt-7 text-sm text-muted-foreground">{ui.gateTagline.en}</p>
        <p className="text-sm text-muted-foreground">{ui.gateTagline.te}</p>
      </motion.div>
    </div>
  );
}
