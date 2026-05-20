import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Auto-recover from stale lazy-loaded chunks after a new deploy.
// When a dynamic import fails (old hashed file no longer on server),
// reload the page once so the browser fetches the new bundle.
const RELOAD_KEY = "lirelia_chunk_reload";
function handleChunkError(message?: string) {
  if (!message) return;
  const isChunkError =
    /Importing a module script failed/i.test(message) ||
    /Failed to fetch dynamically imported module/i.test(message) ||
    /Loading chunk \d+ failed/i.test(message);
  if (!isChunkError) return;
  if (sessionStorage.getItem(RELOAD_KEY)) return;
  sessionStorage.setItem(RELOAD_KEY, "1");
  window.location.reload();
}
window.addEventListener("error", (e) => handleChunkError(e?.message));
window.addEventListener("unhandledrejection", (e) =>
  handleChunkError(e?.reason?.message || String(e?.reason || ""))
);
// Clear the guard once the app boots successfully.
setTimeout(() => sessionStorage.removeItem(RELOAD_KEY), 5000);

createRoot(document.getElementById("root")!).render(<App />);
