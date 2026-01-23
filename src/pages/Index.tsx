import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
