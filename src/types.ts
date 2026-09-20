export type Lang = "ko" | "en";
export type Theme = "dark" | "light";
export type LlmId = "chatgpt" | "claude" | "gemini";
export type Trend = "up" | "down" | "same" | "new";
export type SortKey = "hot" | "new" | "popular" | "likes";
export type PromptSource = "reddit" | "korea";

export interface PromptSlot {
  key: string;
  label: string;
  label_en: string;
  placeholder: string;
  placeholder_en: string;
}

export interface Prompt {
  id: number;
  /** Popularity rank (1 = most popular) — mentionCount-weighted, drives 인기순/오늘의 HOT. */
  rank: number;
  /** Rank by raw community score/upvotes alone (1 = most liked) — drives 좋아요순. */
  likeRank: number;
  /** Rank by recency (1 = most recently posted) — drives 최신순. */
  newRank: number;
  trend: Trend;
  category: string;
  category_en: string;
  title: string;
  title_en: string;
  /** Where this prompt was sourced from — drives the source filter, not just a label. */
  source: PromptSource;
  recommend: LlmId[];
  needsPhoto: boolean;
  /** Prompt assumes a long chat history with the AI (e.g. "based on our conversations so far") — meaningless in a brand-new chat unless the user pastes/screenshots that history. */
  needsHistory: boolean;
  templateLang: Lang;
  template: string;
  /** Reference-only translation of `template` into the language opposite `templateLang`. Shown behind a toggle; never used for copy/deeplink output. */
  templateTranslated?: string;
  slots: PromptSlot[];
}

export interface LlmMeta {
  label: string;
  cls: "gpt" | "claude" | "gemini";
  deeplink: boolean;
}
