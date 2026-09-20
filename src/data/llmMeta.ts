import type { LlmId, LlmMeta } from "../types";

export const LLM_META: Record<LlmId, LlmMeta> = {
  chatgpt: { label: "ChatGPT", cls: "gpt", deeplink: true },
  claude: { label: "Claude", cls: "claude", deeplink: false },
  gemini: { label: "Gemini", cls: "gemini", deeplink: false },
};

export const LLM_ORDER: LlmId[] = ["chatgpt", "claude", "gemini"];
