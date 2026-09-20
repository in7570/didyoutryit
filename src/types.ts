export type Lang = "ko" | "en";
export type Theme = "dark" | "light";
export type LlmId = "chatgpt" | "claude" | "gemini";
export type Trend = "up" | "down" | "same" | "new";
export type SortKey = "hot" | "new" | "popular" | "likes";

export interface PromptSlot {
  key: string;
  label: string;
  label_en: string;
  placeholder: string;
  placeholder_en: string;
}

export interface Prompt {
  id: number;
  rank: number;
  trend: Trend;
  category: string;
  category_en: string;
  title: string;
  title_en: string;
  recommend: LlmId[];
  needsPhoto: boolean;
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
