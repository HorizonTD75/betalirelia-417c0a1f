import { createContext, useContext, useState, type ReactNode } from "react";
import { BookOpen, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHOICE_PHOTO_BRIEFS_ENABLED, DEFAULT_CHOICE_MODE, type ChoiceMode } from "@/content/choix-loupes/editorialMode";

const EditorialContext = createContext<ChoiceMode>(DEFAULT_CHOICE_MODE);
export const useChoiceMode = () => useContext(EditorialContext);

export default function ChoiceEditorialContext({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ChoiceMode>(DEFAULT_CHOICE_MODE);
  return <EditorialContext.Provider value={CHOICE_PHOTO_BRIEFS_ENABLED ? mode : "reading"}>
    {CHOICE_PHOTO_BRIEFS_ENABLED && <div className="choice-mode-bar border-b border-border bg-background">
      <div className="container max-w-6xl py-3 flex flex-wrap gap-2" role="group" aria-label="Mode d’affichage">
        <Button variant={mode === "photos" ? "default" : "outline"} aria-pressed={mode === "photos"} onClick={() => setMode("photos")}><Camera aria-hidden="true" />Préparer les photos</Button>
        <Button variant={mode === "reading" ? "default" : "outline"} aria-pressed={mode === "reading"} onClick={() => setMode("reading")}><BookOpen aria-hidden="true" />Vue visiteur</Button>
      </div>
    </div>}
    {children}
  </EditorialContext.Provider>;
}