import type { Prompt, SortKey } from "../types";
import { useApp } from "../context/AppContext";
import { useTypewriter } from "../hooks/useTypewriter";
import { LLM_META } from "../data/llmMeta";

export default function PromptHero({
  prompt,
  sort,
  onOpen,
}: {
  prompt: Prompt;
  sort: SortKey;
  onOpen: (id: number) => void;
}) {
  const { lang, t } = useApp();
  const title = lang === "en" ? prompt.title_en : prompt.title;
  const category = lang === "en" ? prompt.category_en : prompt.category;
  const typed = useTypewriter(title);

  return (
    <div className="hero" onClick={() => onOpen(prompt.id)}>
      <div className="hero-rank">01</div>
      <div className="hero-info">
        <div className="hero-label">
          {sort === "hot" ? t.heroToday : "#1"} · {category}
        </div>
        <div className="hero-title">
          {typed}
          <span className="cursor" />
        </div>
        <div className="hero-tagline">
          {prompt.recommend.map((m) => (
            <span key={m} className={`llm-badge ${LLM_META[m].cls}`}>
              {LLM_META[m].label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
