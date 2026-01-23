import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PathwaysSection from "@/components/sections/PathwaysSection";
import BilansProduitsSection from "@/components/sections/BilansProduitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BooksSection from "@/components/sections/BooksSection";
import ClubSection from "@/components/sections/ClubSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <HeroSection />
        <PathwaysSection />
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