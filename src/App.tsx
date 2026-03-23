import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCartSync } from "@/hooks/useCartSync";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsentWrapper from "./components/CookieConsentWrapper";
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
import RetinitePigmentaire from "./pages/maladies/RetinitePigmentaire";
import RetinopathieDiabetique from "./pages/maladies/RetinopathieDiabetique";
import Myopie from "./pages/maladies/Myopie";
import Hypermetropie from "./pages/maladies/Hypermetropie";
import Astigmatisme from "./pages/maladies/Astigmatisme";
import Presbytie from "./pages/maladies/Presbytie";
import BientotDisponible from "./pages/BientotDisponible";
import Visiopraticien from "./pages/Visiopraticien";
import LivreDmla from "./pages/LivreDmla";
import Aidants from "./pages/Aidants";
import LivreAidants from "./pages/LivreAidants";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CGV from "./pages/CGV";
import CharteClub from "./pages/CharteClub";
import VisitesDomicile from "./pages/bilans/VisitesDomicile";
import LoupeAmelie from "./pages/products/LoupeAmelie";
import QuiSommesNous from "./pages/QuiSommesNous";
import MaladiesHereditaires from "./pages/maladies/MaladiesHereditaires";
import RetinitePigmentaireHereditaire from "./pages/maladies/hereditaires/RetinitePigmentaire";
import MaladieDeLeber from "./pages/maladies/hereditaires/MaladieDeLeber";
import MaladieDeStargardt from "./pages/maladies/hereditaires/MaladieDeStargardt";
import AchromatopsieHereditaire from "./pages/maladies/hereditaires/Achromatopsie";
import SyndromeUsher from "./pages/maladies/hereditaires/SyndromeUsher";
import Aniridie from "./pages/maladies/hereditaires/Aniridie";
import PolitiqueCookies from "./pages/PolitiqueCookies";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comprendre-basse-vision" element={<ComprendreBasseVision />} />
          <Route path="/maladies-yeux" element={<MaladiesYeux />} />
          <Route path="/maladies-yeux/glaucome" element={<Glaucome />} />
          <Route path="/maladies-yeux/dmla" element={<DMLA />} />
          <Route path="/maladies-yeux/cataracte" element={<Cataracte />} />
          <Route path="/maladies-yeux/nystagmus" element={<Nystagmus />} />
          <Route path="/maladies-yeux/retinite-pigmentaire" element={<RetinitePigmentaire />} />
          <Route path="/maladies-yeux/retinopathie-diabetique" element={<RetinopathieDiabetique />} />
          <Route path="/maladies-yeux/myopie" element={<Myopie />} />
          <Route path="/maladies-yeux/hypermetropie" element={<Hypermetropie />} />
          <Route path="/maladies-yeux/astigmatisme" element={<Astigmatisme />} />
          <Route path="/maladies-yeux/presbytie" element={<Presbytie />} />
          <Route path="/maladies-yeux/maladies-hereditaires" element={<MaladiesHereditaires />} />
          <Route path="/maladies-yeux/maladies-hereditaires/retinite-pigmentaire" element={<RetinitePigmentaireHereditaire />} />
          <Route path="/maladies-yeux/maladies-hereditaires/maladie-de-leber" element={<MaladieDeLeber />} />
          <Route path="/maladies-yeux/maladies-hereditaires/maladie-de-stargardt" element={<MaladieDeStargardt />} />
          <Route path="/maladies-yeux/maladies-hereditaires/achromatopsie" element={<AchromatopsieHereditaire />} />
          <Route path="/maladies-yeux/maladies-hereditaires/syndrome-usher" element={<SyndromeUsher />} />
          <Route path="/maladies-yeux/maladies-hereditaires/aniridie" element={<Aniridie />} />
          <Route path="/vivre-basse-vision" element={<VivreBasseVision />} />
          <Route path="/visiopraticien" element={<Visiopraticien />} />
          {/* New primary routes */}
          <Route path="/aides-lecture-bassevision" element={<AidesLecture />} />
          <Route path="/aides-lecture-bassevision/loupes-verre" element={<LoupesVerre />} />
          <Route path="/aides-lecture-bassevision/loupes-electroniques" element={<LoupesElectroniques />} />
          <Route path="/aides-lecture-bassevision/lampes" element={<Lampes />} />
          <Route path="/aides-lecture-bassevision/tele-agrandisseurs" element={<TeleAgrandisseurs />} />
          <Route path="/boutique/loupe-amelie" element={<LoupeAmelie />} />
          <Route path="/bilans-bassevision" element={<Bilans />} />
          <Route path="/bilans-bassevision/essentiel" element={<BilanEssentiel />} />
          <Route path="/bilans-bassevision/expert" element={<BilanExpert />} />
          <Route path="/bilans-bassevision/suivi" element={<BilanSuivi />} />
          <Route path="/bilans-bassevision/visites-domicile" element={<VisitesDomicile />} />
          <Route path="/rdv-bilan" element={<ContactBilan />} />
          {/* Redirect old contact URL */}
          <Route path="/bilans-bassevision/contact" element={<Navigate to="/rdv-bilan" replace />} />
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
          <Route path="/charte-club-lirelia" element={<CharteClub />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/politique-cookies" element={<PolitiqueCookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsentWrapper />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
