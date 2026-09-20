import { useState } from "react";
import { useApp } from "../context/AppContext";
import { readLocalStorage, writeLocalStorage } from "../hooks/useLocalStorage";

export default function Onboarding() {
  const { lang, toggleLang, t } = useApp();
  const [dismissed, setDismissed] = useState(() => readLocalStorage("didyoutryit_onboarded") === "true");
  const [dontShow, setDontShow] = useState(false);

  if (dismissed) return null;

  function close() {
    if (dontShow) writeLocalStorage("didyoutryit_onboarded", "true");
    setDismissed(true);
  }

  return (
    <div className="onboard-overlay">
      <div className="onboard-card">
        <button className="onboard-lang-toggle" onClick={toggleLang}>
          {lang === "ko" ? "EN" : "KOR"}
        </button>
        <div className="onboard-title">{t.onboardTitle}</div>
        <div className="onboard-body">{t.onboardBody}</div>
        <label className="onboard-check-row">
          <input type="checkbox" checked={dontShow} onChange={(e) => setDontShow(e.target.checked)} />
          <span>{t.onboardCheck}</span>
        </label>
        <button className="onboard-start-btn" onClick={close}>
          {t.onboardStart}
        </button>
      </div>
    </div>
  );
}
