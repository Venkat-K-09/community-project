import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import type { UiKey } from "@/i18n/translations";

const links: { to: string; key: UiKey }[] = [
  { to: "/", key: "navHome" },
  { to: "/business-ideas", key: "navIdeas" },
  { to: "/marketplace", key: "navMarket" },
  { to: "/success-stories", key: "navStories" },
  { to: "/schemes", key: "navSchemes" },
  { to: "/about", key: "navAbout" },
  { to: "/contact", key: "navContact" },
];

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="hidden text-lg sm:inline">{t("brand")}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {t(l.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold">
            {(["en", "te"] as const).map((lng) => (
              <button
                key={lng}
                onClick={() => setLang(lng)}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === lng
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lng === "en" ? "EN" : "తె"}
              </button>
            ))}
          </div>

          <button
            onClick={toggle}
            aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-accent"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            <div className="grid gap-1 px-4 py-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-accent text-accent-foreground" }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {t(l.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
