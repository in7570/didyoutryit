import { useApp } from "../context/AppContext";

export default function Header() {
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();

  return (
    <header>
      <div className="logo">{t.brand}</div>
      <div className="header-right">
        <button className="icon-btn" onClick={toggleLang}>
          {lang === "en" ? "KOR" : "EN"}
        </button>
        <button className="icon-btn" onClick={toggleTheme}>
          {theme === "light" ? t.themeLight : t.themeDark}
        </button>
      </div>
    </header>
  );
}
