import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { UiKey } from "@/i18n/translations";

const quickLinks: { to: string; key: UiKey }[] = [
  { to: "/business-ideas", key: "navIdeas" },
  { to: "/marketplace", key: "navMarket" },
  { to: "/success-stories", key: "navStories" },
  { to: "/schemes", key: "navSchemes" },
];

const resourceLinks: { to: string; key: UiKey }[] = [
  { to: "/business-ideas", key: "skillCenterTitle" },
  { to: "/success-stories", key: "womenTitle" },
  { to: "/success-stories", key: "youthTitle" },
  { to: "/about", key: "navAbout" },
];

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </span>
            {t("brand")}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{t("footerAbout")}</p>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">{t("quickLinks")}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.key}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">{t("resources")}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {resourceLinks.map((l, i) => (
              <li key={i}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">{t("contactInfo")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> hello@makersmarket.org
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Andhra Pradesh & Telangana
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} {t("brand")}. {t("rights")}</p>
          <p>{t("builtFor")}</p>
        </div>
      </div>
    </footer>
  );
}
