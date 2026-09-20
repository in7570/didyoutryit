import { useMemo, useState } from "react";
import type { PromptSource, SortKey } from "../types";
import { useApp } from "../context/AppContext";
import { prompts } from "../data/prompts";
import PromptHero from "./PromptHero";
import PromptRow from "./PromptRow";

const SORT_KEYS: SortKey[] = ["popular", "hot", "new", "likes"];
const SOURCE_KEYS: PromptSource[] = ["reddit", "korea"];

function sortPrompts(sort: SortKey) {
  const list = [...prompts];
  if (sort === "new") {
    list.sort((a, b) => a.newRank - b.newRank);
  } else if (sort === "likes") {
    list.sort((a, b) => a.likeRank - b.likeRank);
  } else {
    // hot & popular both use the mentionCount-weighted popularity rank
    list.sort((a, b) => a.rank - b.rank);
  }
  return list;
}

export default function ListScreen({ onOpen }: { onOpen: (id: number) => void }) {
  const { lang, t } = useApp();
  const [sort, setSort] = useState<SortKey>("popular");
  const [filterOpen, setFilterOpen] = useState(false);
  const [category, setCategory] = useState<string | null>(null);
  const [source, setSource] = useState<PromptSource | null>(null);
  const [fading, setFading] = useState(false);

  const categories = useMemo(() => [...new Set(prompts.map((p) => p.category))], []);
  const filterActive = category !== null || source !== null;

  const list = useMemo(() => {
    let sorted = sortPrompts(sort);
    if (category) sorted = sorted.filter((p) => p.category === category);
    if (source) sorted = sorted.filter((p) => p.source === source);
    return sorted;
  }, [sort, category, source]);

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

  function changeSource(next: PromptSource | null) {
    setFading(true);
    setTimeout(() => {
      setSource(next);
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
      </div>

      <div className="sort-caption">{t.sortCaptions[sort]}</div>

      <div className="filter-toggle-row">
        <button
          className={`tab tab-filter-toggle${filterOpen || filterActive ? " active" : ""}`}
          onClick={() => setFilterOpen((v) => !v)}
        >
          {t.filterToggle}
        </button>
      </div>

      {filterOpen && (
        <div className="filter-panel">
          <div className="filter-group">
            <div className="filter-group-label">{t.categoryLabel}</div>
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
          </div>
          <div className="filter-group">
            <div className="filter-group-label">{t.sourceLabel}</div>
            <div className="category-row">
              <button className={`cat-pill${source === null ? " active" : ""}`} onClick={() => changeSource(null)}>
                {t.allSource}
              </button>
              {SOURCE_KEYS.map((s) => (
                <button
                  key={s}
                  className={`cat-pill${source === s ? " active" : ""}`}
                  onClick={() => changeSource(s)}
                >
                  {s === "reddit" ? t.sourceReddit : t.sourceKorea}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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
