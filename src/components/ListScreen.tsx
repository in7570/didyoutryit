import { useMemo, useState } from "react";
import type { SortKey } from "../types";
import { useApp } from "../context/AppContext";
import { prompts } from "../data/prompts";
import PromptHero from "./PromptHero";
import PromptRow from "./PromptRow";

const SORT_KEYS: SortKey[] = ["popular", "hot", "new", "likes"];

function sortPrompts(sort: SortKey) {
  const list = [...prompts];
  if (sort === "new") {
    list.sort((a, b) => Number(b.trend === "new") - Number(a.trend === "new") || a.rank - b.rank);
  } else {
    list.sort((a, b) => a.rank - b.rank);
  }
  return list;
}

export default function ListScreen({ onOpen }: { onOpen: (id: number) => void }) {
  const { lang, t } = useApp();
  const [sort, setSort] = useState<SortKey>("popular");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState<string | null>(null);
  const [fading, setFading] = useState(false);

  const categories = useMemo(() => [...new Set(prompts.map((p) => p.category))], []);

  const list = useMemo(() => {
    let sorted = sortPrompts(sort);
    if (category) sorted = sorted.filter((p) => p.category === category);
    return sorted;
  }, [sort, category]);

  function changeSort(next: SortKey) {
    if (next === sort) return;
    setFading(true);
    setTimeout(() => {
      setSort(next);
      setFading(false);
    }, 150);
  }

  function changeCategory(next: string | null) {
    setFading(true);
    setTimeout(() => {
      setCategory(next);
      setFading(false);
    }, 150);
  }

  const [top, ...rest] = list;

  return (
    <section className="screen active">
      <div className="update-notice">
        <span className="dot" />
        <span>{t.updateNotice}</span>
      </div>
      <div className="tabs">
        {SORT_KEYS.map((key) => (
          <button
            key={key}
            className={`tab${sort === key ? " active" : ""}`}
            onClick={() => changeSort(key)}
          >
            {t.tabs[key]}
          </button>
        ))}
        <button
          className={`tab tab-cat-toggle${categoryOpen ? " active" : ""}`}
          onClick={() => setCategoryOpen((v) => !v)}
        >
          {t.catToggle}
        </button>
      </div>

      {categoryOpen && (
        <div className="category-row">
          <button className={`cat-pill${category === null ? " active" : ""}`} onClick={() => changeCategory(null)}>
            {t.allCategory}
          </button>
          {categories.map((c) => {
            const p = prompts.find((p) => p.category === c)!;
            const label = lang === "en" ? p.category_en : p.category;
            return (
              <button
                key={c}
                className={`cat-pill${category === c ? " active" : ""}`}
                onClick={() => changeCategory(c)}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      <div className="sort-caption">
        {t.sortCaptions[sort]} <span className="src">{t.sourceTag}</span>
      </div>

      <div className="list-content" style={{ opacity: fading ? 0 : 1 }}>
        {top && <PromptHero prompt={top} sort={sort} onOpen={onOpen} />}
        <div className="list">
          {rest.map((p, i) => (
            <PromptRow key={p.id} prompt={p} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
