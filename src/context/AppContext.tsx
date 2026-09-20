import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import type { Lang, Theme } from "../types";
import { I18N, type I18nShape } from "../data/i18n";
import { useStickyState } from "../hooks/useLocalStorage";

interface AppContextValue {
  lang: Lang;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
  t: I18nShape;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useStickyState<Lang>("didyoutryit_lang", "en");
  const [theme, setTheme] = useStickyState<Theme>("didyoutryit_theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      toggleLang: () => setLang(lang === "en" ? "ko" : "en"),
      theme,
      toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      t: I18N[lang],
    }),
    [lang, theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
