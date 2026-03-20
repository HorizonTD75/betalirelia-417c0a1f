import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { ORGANIZATION_JSONLD, WEBSITE_JSONLD } from "@/lib/seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="LirElia – Basse Vision : Bilans, Aides Visuelles & Accompagnement"
        description="Accompagnement expert en basse vision, DMLA et glaucome. Retrouvez votre autonomie grâce à nos bilans fonctionnels et aides à la lecture à Paris."
        canonicalPath="/"
        jsonLd={[
          ORGANIZATION_JSONLD,
          WEBSITE_JSONLD,
          {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "LirElia",
            "description": "Accompagnement expert en basse vision, DMLA et glaucome. Bilans fonctionnels et aides à la lecture.",
            "medicalSpecialty": "Optometry",
            "knowsAbout": ["Basse vision", "DMLA", "Glaucome", "Aides à la lecture", "Bilans basse vision"]
          }
        ]}
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
