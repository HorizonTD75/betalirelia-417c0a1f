import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import SharedContactForm from "@/components/forms/SharedContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "À qui s'adresse ce formulaire ?",
    a: "Ce formulaire s'adresse aux personnes malvoyantes, à leurs proches aidants, et à toute personne qui cherche un premier conseil sur les aides visuelles, l'éclairage, les loupes, les télé-agrandisseurs ou l'intérêt d'un bilan basse vision.",
  },
  {
    q: "Puis-je faire la demande pour un proche ?",
    a: "Oui. Un aidant peut tout à fait remplir ce formulaire pour une personne malvoyante. Nous adapterons ensuite notre orientation à la situation réelle et aux besoins exprimés.",
  },
  {
    q: "Que se passe-t-il après l'envoi du formulaire ?",
    a: "Après réception de votre demande, nous vous recontactons rapidement afin d'échanger sur votre situation et de vous orienter de la façon la plus utile : conseil simple, bilan, aide technique, ou autre solution adaptée.",
  },
  {
    q: "Êtes-vous obligés de proposer un produit ou un bilan ?",
    a: "Non. Notre objectif est d'abord de vous guider de manière utile et honnête. Selon les cas, cela peut conduire vers un bilan, un produit, le Club LirElia, ou simplement vers un conseil ponctuel sans autre démarche.",
  },
];

const ContactConseil = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact conseil basse vision | LirElia"
        description="Décrivez votre besoin en quelques lignes : aide visuelle, éclairage, loupe, télé-agrandisseur ou bilan basse vision. Nous vous rappelons rapidement pour vous orienter."
        canonicalPath="/contact-conseil"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "ContactPage", "@id": "https://lirelia.fr/contact-conseil#webpage", url: "https://lirelia.fr/contact-conseil", name: "Contact conseil basse vision", description: "Page de contact LirElia pour un conseil sur les aides visuelles, l'éclairage, les loupes ou un bilan basse vision.", inLanguage: "fr-FR", isPartOf: { "@id": "https://lirelia.fr/#website" } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lirelia.fr/" },
            { "@type": "ListItem", position: 2, name: "Contact conseil", item: "https://lirelia.fr/contact-conseil" },
          ] },
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <header className="text-center mb-10">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Contact conseil basse vision
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Que votre demande concerne une aide visuelle, un éclairage adapté,
                  un bilan basse vision ou une difficulté du quotidien, nous cherchons
                  d'abord à vous guider de façon utile, simple et concrète.
                </p>
              </header>

              <SharedContactForm />

              <div className="mt-10 p-6 bg-background border border-border rounded-2xl">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Notre objectif premier est d'aider les personnes de façon concrète et honnête.
                  Selon votre situation, nous pourrons vous orienter vers un{" "}
                  <Link to="/bilans-bassevision" className="text-primary underline hover:no-underline">
                    bilan basse vision
                  </Link>
                  , vers une aide technique ou un produit adapté, vers le{" "}
                  <Link to="/club" className="text-primary underline hover:no-underline">
                    Club LirElia
                  </Link>
                  , ou simplement vous donner un premier conseil utile lorsqu'aucune
                  démarche supplémentaire n'est nécessaire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Questions fréquentes
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Liens internes */}
              <nav
                aria-label="Pour aller plus loin"
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/bilans-bassevision"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Découvrir les bilans basse vision
                </Link>
                <Link
                  to="/qui-sommes-nous"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  En savoir plus sur LirElia
                </Link>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactConseil;
