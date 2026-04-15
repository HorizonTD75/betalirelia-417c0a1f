import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import SharedContactForm from "@/components/forms/SharedContactForm";

const ContactConseil = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Conseil personnalisé basse vision gratuit | LirElia"
        description="Besoin d'aide pour choisir une loupe, une lampe ou un télé-agrandisseur ? Décrivez votre situation et recevez un conseil personnalisé gratuit sous 48 h."
        canonicalPath="/contact-conseil"
      />
      <Header />
      <main id="main-content">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Zone de contact
              </h1>
              <SharedContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactConseil;
