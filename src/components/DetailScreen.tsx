import { useMemo, useState } from "react";
import type { LlmId, Prompt } from "../types";
import { useApp } from "../context/AppContext";
import { useTypewriter } from "../hooks/useTypewriter";
import { LLM_ORDER, LLM_META } from "../data/llmMeta";

const OPEN_APP_URLS: Record<string, string> = {
  claude: "https://claude.ai/new",
  gemini: "https://gemini.google.com/app",
};

type ButtonStatus = "idle" | "done" | "fail";

function buildPreview(prompt: Prompt, slotValues: Record<string, string>, lang: "ko" | "en", slotFallback: (label: string) => string) {
  let text = prompt.template;
  prompt.slots.forEach((s) => {
    const label = lang === "en" ? s.label_en : s.label;
    const val = slotValues[s.key] || slotFallback(label);
    text = text.split(`{{${s.key}}}`).join(val);
  });
  if (prompt.templateLang !== lang) {
    text += prompt.templateLang === "ko" ? "\n\n(영어로 답변해줘.)" : "\n\n(Please answer in Korean.)";
  }
  return text;
}

export default function DetailScreen({ prompt, onBack }: { prompt: Prompt; onBack: () => void }) {
  const { lang, t } = useApp();
  const [selectedModel, setSelectedModel] = useState<LlmId | null>(null);
  const [slotValues, setSlotValues] = useState<Record<string, string>>({});
  const [dlStatus, setDlStatus] = useState<ButtonStatus>("idle");
  const [copyStatus, setCopyStatus] = useState<ButtonStatus>("idle");
  const [showTranslation, setShowTranslation] = useState(false);

  const title = lang === "en" ? prompt.title_en : prompt.title;
  const category = lang === "en" ? prompt.category_en : prompt.category;
  const typedTitle = useTypewriter(title);

  const meta = selectedModel ? LLM_META[selectedModel] : null;

  const previewText = useMemo(() => {
    if (!prompt) return "";
    return buildPreview(prompt, slotValues, lang, t.slotFallback);
  }, [prompt, slotValues, lang, t]);

  function selectModel(m: LlmId) {
    setSelectedModel(m);
    setSlotValues({});
    setDlStatus("idle");
    setCopyStatus("idle");
  }

  function setSlot(key: string, value: string) {
    setSlotValues((prev) => ({ ...prev, [key]: value }));
  }

  function markDone() {
    setDlStatus("done");
    setTimeout(() => setDlStatus("idle"), 1800);
  }

  async function copyPreview() {
    try {
      await navigator.clipboard.writeText(previewText);
      setCopyStatus("done");
    } catch {
      setCopyStatus("fail");
    }
    setTimeout(() => setCopyStatus("idle"), 1800);
  }

  const deeplinkHref = `https://chatgpt.com/?q=${encodeURIComponent(previewText)}`;
  const openAppHref = selectedModel ? OPEN_APP_URLS[selectedModel] ?? OPEN_APP_URLS.claude : OPEN_APP_URLS.claude;

  const copyBtnLabel = copyStatus === "done" ? t.doneLabel : copyStatus === "fail" ? t.copyFail : t.copyBtn;

  const translationToggle = prompt.templateLang !== lang && prompt.templateTranslated && (
    <div className="translation-block">
      <button className="translation-toggle" onClick={() => setShowTranslation((v) => !v)}>
        {showTranslation ? t.hideTranslation : t.showTranslation}
      </button>
      {showTranslation && (
        <div className="translation-box">
          <div>{prompt.templateTranslated}</div>
          <div className="translation-note">{t.translationNote}</div>
        </div>
      )}
    </div>
  );

  return (
    <section className="screen active">
      <button className="back" onClick={onBack}>
        {t.back}
      </button>
      <div className="cat-tag">{category.toUpperCase()}</div>
      <h1>
        {typedTitle}
        <span className="cursor" />
      </h1>

      <div className="section-title">{t.modelQuestion}</div>
      <div className="model-picker">
        {LLM_ORDER.map((m) => {
          const isRec = prompt.recommend.includes(m);
          return (
            <div
              key={m}
              className={`model-opt${selectedModel === m ? " selected" : ""}`}
              onClick={() => selectModel(m)}
            >
              <div className="name">{LLM_META[m].label}</div>
              <div className="rec">{isRec ? t.recommended : ""}</div>
            </div>
          );
        })}
      </div>

      {meta?.deeplink && (
        <div className="flow-box active">
          <div className="section-title">{t.dlTitle(meta.label)}</div>
          {prompt.slots.map((s) => (
            <div className="slot-input" key={s.key}>
              <label>{lang === "en" ? s.label_en : s.label}</label>
              <input
                type="text"
                placeholder={lang === "en" ? s.placeholder_en : s.placeholder}
                value={slotValues[s.key] || ""}
                onChange={(e) => setSlot(s.key, e.target.value)}
              />
            </div>
          ))}
          {prompt.needsPhoto && <div className="photo-notice">{t.photoNotice}</div>}
          {translationToggle}
          <div className="preview-box">{previewText}</div>
          <div className="action-row">
            <a className="main-btn" href={deeplinkHref} target="_blank" rel="noopener" onClick={markDone}>
              <span>{dlStatus === "done" ? t.doneLabel : t.deeplinkBtn}</span>
            </a>
            <button className="ghost-btn" onClick={copyPreview}>
              {copyBtnLabel}
            </button>
          </div>
        </div>
      )}

      {meta && !meta.deeplink && (
        <div className="flow-box active">
          <div className="section-title">{t.cpTitle(meta.label)}</div>
          {prompt.slots.map((s) => (
            <div className="slot-input" key={s.key}>
              <label>{lang === "en" ? s.label_en : s.label}</label>
              <input
                type="text"
                placeholder={lang === "en" ? s.placeholder_en : s.placeholder}
                value={slotValues[s.key] || ""}
                onChange={(e) => setSlot(s.key, e.target.value)}
              />
            </div>
          ))}
          {prompt.needsPhoto && <div className="photo-notice">{t.photoNotice}</div>}
          {translationToggle}
          <div className="preview-box">{previewText}</div>
          <div className="action-row">
            <button className={`main-btn${copyStatus === "done" ? " copied" : ""}`} onClick={copyPreview}>
              {copyBtnLabel}
            </button>
            <a className="ghost-btn" href={openAppHref} target="_blank" rel="noopener">
              {t.openAppBtn}
            </a>
          </div>
        </div>
      )}

      <div className="disclaimer">{t.disclaimer}</div>
    </section>
  );
}
