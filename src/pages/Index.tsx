import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/sections/HeroSection";
import PathwaysSection from "@/components/sections/PathwaysSection";
import AppointmentSection from "@/components/sections/AppointmentSection";
import SituationsSection from "@/components/sections/SituationsSection";
import BilansProduitsSection from "@/components/sections/BilansProduitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BooksSection from "@/components/sections/BooksSection";
import ClubSection from "@/components/sections/ClubSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="LirElia – Basse Vision : Bilans, Aides Visuelles & Accompagnement"
        description="LirElia vous accompagne dans la basse vision : bilans personnalisés, loupes, lampes, télé-agrandisseurs et conseils pour retrouver confort et autonomie au quotidien."
        canonical="https://seen-clearly-space.lovable.app/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LirElia",
          "url": "https://seen-clearly-space.lovable.app",
          "description": "Accompagnement basse vision : bilans, aides visuelles et conseils personnalisés.",
          "sameAs": [],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "French"
          }
        }}
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <PathwaysSection />
        <AppointmentSection />
        <SituationsSection />
        <BilansProduitsSection />
        <TestimonialsSection />
        <BooksSection />
        <ClubSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
