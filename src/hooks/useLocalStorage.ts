import { useState } from "react";

export function readLocalStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeLocalStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage unavailable (private mode, etc.) — ignore
  }
}

export function useStickyState<T extends string>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => (readLocalStorage(key) as T) || fallback);

  const update = (next: T) => {
    setValue(next);
    writeLocalStorage(key, next);
  };

  return [value, update] as const;
}
