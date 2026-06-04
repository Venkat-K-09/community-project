import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ui, type Lang, type Bi, type UiKey } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  hasChosen: boolean;
  choose: (l: Lang) => void;
  t: (key: UiKey) => string;
  tr: (obj: Bi) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "cmm-lang";
const CHOSEN_KEY = "cmm-lang-chosen";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [hasChosen, setHasChosen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    const chosen = localStorage.getItem(CHOSEN_KEY);
    if (stored === "en" || stored === "te") setLangState(stored);
    if (chosen === "true") setHasChosen(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  const choose = (l: Lang) => {
    setLang(l);
    setHasChosen(true);
    localStorage.setItem(CHOSEN_KEY, "true");
  };

  const t = (key: UiKey) => ui[key][lang];
  const tr = (obj: Bi) => obj[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, hasChosen, choose, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
