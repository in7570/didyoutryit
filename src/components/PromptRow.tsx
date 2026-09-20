import type { Prompt, Trend } from "../types";
import { useApp } from "../context/AppContext";
import { useInView } from "../hooks/useInView";
import { LLM_META } from "../data/llmMeta";

const TREND_MARK: Record<Trend, string> = { up: "▲", down: "▼", same: "—", new: "NEW" };

export default function PromptRow({
  prompt,
  index,
  onOpen,
}: {
  prompt: Prompt;
  index: number;
  onOpen: (id: number) => void;
}) {
  const { lang } = useApp();
  const { ref, inView } = useInView<HTMLDivElement>();
  const title = lang === "en" ? prompt.title_en : prompt.title;

  return (
    <div
      ref={ref}
      className={`row${inView ? " in-view" : ""}`}
      onClick={() => onOpen(prompt.id)}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="rank-num">{String(index + 2).padStart(2, "0")}</div>
      <div className="row-body">
        <div className="row-title">{title}</div>
        <div className="llm-badges">
          {prompt.recommend.map((m) => (
            <span key={m} className={`llm-badge ${LLM_META[m].cls}`}>
              {LLM_META[m].label}
            </span>
          ))}
        </div>
      </div>
      <div className={`trend ${prompt.trend}`}>{TREND_MARK[prompt.trend]}</div>
    </div>
  );
}
