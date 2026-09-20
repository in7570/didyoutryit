import { useEffect, useState } from "react";
import Onboarding from "./components/Onboarding";
import Header from "./components/Header";
import ListScreen from "./components/ListScreen";
import DetailScreen from "./components/DetailScreen";
import { prompts } from "./data/prompts";

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    function onPopState(e: PopStateEvent) {
      setSelectedId(e.state?.promptId ?? null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function openDetail(id: number) {
    window.history.pushState({ promptId: id }, "");
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToList() {
    if (window.history.state?.promptId != null) {
      window.history.back();
    } else {
      setSelectedId(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const selectedPrompt = selectedId != null ? prompts.find((p) => p.id === selectedId) ?? null : null;

  return (
    <>
      <Onboarding />
      <Header />
      {selectedPrompt ? (
        <DetailScreen key={selectedPrompt.id} prompt={selectedPrompt} onBack={backToList} />
      ) : (
        <ListScreen onOpen={openDetail} />
      )}
    </>
  );
}
