import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import bookDmla from "@/assets/livre-dmla-votre-vie.jpg";
import bookAidant from "@/assets/livre-aider-proche.jpg";
import { Link } from "react-router-dom";
import { getHeroSrcSet } from "@/lib/heroSrcSet";

const books = [
  {
    image: bookDmla,
    title: "DMLA – Votre vie ne s'arrête pas",
    subtitle: "Comprendre la DMLA, s’équiper, s’organiser… et garder le moral",
    description: "Ce livre accompagne les personnes atteintes de DMLA et leurs proches, avec des explications claires, des solutions concrètes et des témoignages inspirants.",
    link: "/livre-dmla-votre-vie-ne-sarrete-pas",
    width: 900,
    height: 1356,
  },
  {
    image: bookAidant,
    title: "DMLA – Aider un proche sans s'épuiser",
    subtitle: "Guide pratique des aidants pour comprendre la basse vision et préserver l’autonomie",
    description: "Destiné aux aidants familiaux et professionnels, ce livre vous apprend à soutenir sans étouffer et à préserver votre propre équilibre.",
    link: "/livre-aider-proche-dmla",
    width: 900,
    height: 1379,
  },
];

const BooksSection = () => {
  return (
    <section className="py-20 bg-muted" id="livres">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">25 ans d'expérience partagée</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Les livres de l'auteur sur la Basse Vision
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {books.map((book, index) => (
            <Card key={index} variant="elevated" className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-muted p-6 flex items-center justify-center">
                    {(() => {
                      const v = getHeroSrcSet(book.image);
                      return (
                        <img
                          src={v?.src ?? book.image}
                          srcSet={v?.srcSet}
                          sizes="(min-width: 768px) 160px, 40vw"
                          alt={`Couverture du livre « ${book.title} » de Thierry DUCROS`}
                          className="w-40 h-auto object-contain rounded-lg shadow-lg border border-border"
                          width={book.width}
                          height={book.height}
                          loading="lazy"
                          decoding="async"
                        />
                      );
                    })()}
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {book.title}
                    </h3>
                    <p className="text-lg text-secondary font-semibold mb-4">
                      {book.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {book.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={book.link || "/bientot-disponible"}>
                        Découvrir un extrait
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
