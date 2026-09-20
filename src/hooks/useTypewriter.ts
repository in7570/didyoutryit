import { useEffect, useState } from "react";

/** Types out `text` one character at a time, like the original hero/detail title animation. */
export function useTypewriter(text: string, speedMs = 35): string {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    let cancelled = false;
    function step() {
      if (cancelled) return;
      if (i <= text.length) {
        setShown(text.slice(0, i));
        i++;
        setTimeout(step, speedMs);
      }
    }
    step();
    return () => {
      cancelled = true;
    };
  }, [text, speedMs]);

  return shown;
}
