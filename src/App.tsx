import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comprendre-basse-vision" element={<ComprendreBasseVision />} />
          <Route path="/maladies-yeux" element={<MaladiesYeux />} />
          <Route path="/vivre-basse-vision" element={<VivreBasseVision />} />
          <Route path="/aides-lecture" element={<AidesLecture />} />
          <Route path="/aides-lecture/loupes-verre" element={<LoupesVerre />} />
          <Route path="/aides-lecture/loupes-electroniques" element={<LoupesElectroniques />} />
          <Route path="/aides-lecture/lampes" element={<Lampes />} />
          <Route path="/aides-lecture/tele-agrandisseurs" element={<TeleAgrandisseurs />} />
          <Route path="/contact-conseil" element={<ContactConseil />} />
          <Route path="/club" element={<Club />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
