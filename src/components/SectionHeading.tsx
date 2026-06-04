import { motion } from "motion/react";
import { useLang } from "@/i18n/LanguageContext";
import type { UiKey } from "@/i18n/translations";

export function SectionHeading({
  titleKey,
  subKey,
  title,
  sub,
  align = "center",
}: {
  titleKey?: UiKey;
  subKey?: UiKey;
  title?: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const { t } = useLang();
  const heading = title ?? (titleKey ? t(titleKey) : "");
  const subheading = sub ?? (subKey ? t(subKey) : "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
      {subheading && (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{subheading}</p>
      )}
      <div
        className={`mt-5 h-1 w-20 rounded-full bg-gradient-hero ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
