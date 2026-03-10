import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComprendreBasseVision from "./pages/ComprendreBasseVision";
import MaladiesYeux from "./pages/MaladiesYeux";
import VivreBasseVision from "./pages/VivreBasseVision";
import Club from "./pages/Club";
import AidesLecture from "./pages/AidesLecture";
import LoupesVerre from "./pages/products/LoupesVerre";
import LoupesElectroniques from "./pages/products/LoupesElectroniques";
import Lampes from "./pages/products/Lampes";
import TeleAgrandisseurs from "./pages/products/TeleAgrandisseurs";
import ContactConseil from "./pages/ContactConseil";
import Bilans from "./pages/Bilans";
import BilanEssentiel from "./pages/bilans/BilanEssentiel";
import BilanExpert from "./pages/bilans/BilanExpert";
import BilanSuivi from "./pages/bilans/BilanSuivi";
import ContactBilan from "./pages/ContactBilan";
import Glaucome from "./pages/maladies/Glaucome";
import DMLA from "./pages/maladies/DMLA";
import Cataracte from "./pages/maladies/Cataracte";
import Nystagmus from "./pages/maladies/Nystagmus";
import BientotDisponible from "./pages/BientotDisponible";
import Visiopraticien from "./pages/Visiopraticien";
import LivreDmla from "./pages/LivreDmla";
import Aidants from "./pages/Aidants";
import LivreAidants from "./pages/LivreAidants";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CGV from "./pages/CGV";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comprendre-basse-vision" element={<ComprendreBasseVision />} />
          <Route path="/maladies-yeux" element={<MaladiesYeux />} />
          <Route path="/maladies-yeux/glaucome" element={<Glaucome />} />
          <Route path="/maladies-yeux/dmla" element={<DMLA />} />
          <Route path="/maladies-yeux/cataracte" element={<Cataracte />} />
          <Route path="/vivre-basse-vision" element={<VivreBasseVision />} />
          <Route path="/visiopraticien" element={<Visiopraticien />} />
          {/* New primary routes */}
          <Route path="/aides-lecture-bassevision" element={<AidesLecture />} />
          <Route path="/aides-lecture-bassevision/loupes-verre" element={<LoupesVerre />} />
          <Route path="/aides-lecture-bassevision/loupes-electroniques" element={<LoupesElectroniques />} />
          <Route path="/aides-lecture-bassevision/lampes" element={<Lampes />} />
          <Route path="/aides-lecture-bassevision/tele-agrandisseurs" element={<TeleAgrandisseurs />} />
          <Route path="/bilans-bassevision" element={<Bilans />} />
          <Route path="/bilans-bassevision/essentiel" element={<BilanEssentiel />} />
          <Route path="/bilans-bassevision/expert" element={<BilanExpert />} />
          <Route path="/bilans-bassevision/suivi" element={<BilanSuivi />} />
          <Route path="/bilans-bassevision/contact" element={<ContactBilan />} />
          {/* Redirects from old URLs */}
          <Route path="/aides-lecture" element={<Navigate to="/aides-lecture-bassevision" replace />} />
          <Route path="/aides-lecture/*" element={<Navigate to="/aides-lecture-bassevision" replace />} />
          <Route path="/bilans" element={<Navigate to="/bilans-bassevision" replace />} />
          <Route path="/bilans/*" element={<Navigate to="/bilans-bassevision" replace />} />
          <Route path="/contact-conseil" element={<ContactConseil />} />
          <Route path="/club" element={<Club />} />
          <Route path="/livre-dmla-votre-vie-ne-sarrete-pas" element={<LivreDmla />} />
          <Route path="/bientot-disponible" element={<BientotDisponible />} />
          <Route path="/aidants" element={<Aidants />} />
          <Route path="/livre-aider-proche-dmla" element={<LivreAidants />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cgv" element={<CGV />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
