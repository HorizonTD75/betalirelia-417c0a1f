import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, ArrowLeft, CheckCircle2 } from "lucide-react";

const productOptions = [
  { value: "", label: "— Aucun produit en particulier —" },
  // Loupes en verre
  { value: "loupe-classique", label: "Loupe classique en verre", category: "Loupes en verre" },
  { value: "loupe-eclairante", label: "Loupe éclairante", category: "Loupes en verre" },
  { value: "loupe-dome", label: "Loupe dôme (à poser)", category: "Loupes en verre" },
  // Loupes électroniques
  { value: "loupe-electronique-portable", label: "Loupe électronique portable", category: "Loupes électroniques" },
  { value: "loupe-electronique-bureau", label: "Loupe électronique de bureau", category: "Loupes électroniques" },
  { value: "loupe-electronique-poche", label: "Loupe électronique de poche", category: "Loupes électroniques" },
  // Lampes
  { value: "lampe-bureau-daylight", label: "Lampe de bureau daylight", category: "Lampes adaptées" },
  { value: "lampe-sur-pied", label: "Lampe sur pied orientable", category: "Lampes adaptées" },
  { value: "lampe-loupe", label: "Lampe-loupe combinée", category: "Lampes adaptées" },
  // Télé-agrandisseurs
  { value: "tele-agrandisseur-bureau", label: "Télé-agrandisseur de bureau", category: "Télé-agrandisseurs" },
  { value: "tele-agrandisseur-portable", label: "Télé-agrandisseur portable", category: "Télé-agrandisseurs" },
  { value: "tele-agrandisseur-tv", label: "Caméra de lecture TV", category: "Télé-agrandisseurs" },
];

const categories = [...new Set(productOptions.filter(o => o.category).map(o => o.category))];

const ContactConseil = () => {
  const [searchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const produit = searchParams.get("produit");
    if (produit) {
      const found = productOptions.find(o => o.value === produit);
      if (found) setSelectedProduct(produit);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Demander un conseil personnalisé — Aide à la lecture | LirElia"
        description="Décrivez votre situation visuelle et recevez des recommandations personnalisées pour choisir l'aide à la lecture la plus adaptée à vos besoins."
        canonical="https://seen-clearly-space.lovable.app/contact-conseil"
      />
      <Header />
      <main id="main-content">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Link
                to="/aides-lecture"
                className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour aux aides à la lecture
              </Link>

              {submitted ? (
                <Card variant="highlighted" className="text-center py-12">
                  <CardContent className="space-y-6">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h1 className="font-serif text-3xl font-bold text-foreground">
                      Merci pour votre message !
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                      Nous avons bien reçu votre demande. Nous vous répondrons par e-mail 
                      sous 24 à 48 heures avec nos recommandations personnalisées.
                    </p>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/aides-lecture">
                        <ArrowLeft className="w-5 h-5" />
                        Explorer les aides à la lecture
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card variant="highlighted" className="overflow-hidden">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="font-serif text-2xl md:text-3xl">
                      Demander un conseil personnalisé
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      Décrivez votre situation en quelques lignes. Nous vous répondons par e-mail 
                      avec nos recommandations adaptées à vos besoins visuels.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Produit sélectionné */}
                      <div className="space-y-2">
                        <Label htmlFor="produit" className="text-lg font-semibold">
                          Produit qui vous intéresse
                        </Label>
                        <select
                          id="produit"
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                          className="w-full px-4 py-3 text-lg border-2 border-input rounded-xl bg-background focus:border-primary focus:ring-4 focus:ring-ring/20 transition-all"
                        >
                          <option value="">— Aucun produit en particulier —</option>
                          {categories.map(cat => (
                            <optgroup key={cat} label={cat}>
                              {productOptions
                                .filter(o => o.category === cat)
                                .map(o => (
                                  <option key={o.value} value={o.value}>
                                    {o.label}
                                  </option>
                                ))}
                            </optgroup>
                          ))}
                        </select>
                        {selectedProduct && (
                          <p className="text-base text-accent font-medium">
                            ✓ Produit pré-sélectionné : {productOptions.find(o => o.value === selectedProduct)?.label}
                          </p>
                        )}
                      </div>

                      {/* Nom & Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-lg font-semibold">
                            Votre nom
                          </Label>
                          <Input
                            type="text"
                            id="name"
                            required
                            className="px-4 py-3 text-lg h-auto border-2 rounded-xl"
                            placeholder="Jean Dupont"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-lg font-semibold">
                            Votre e-mail
                          </Label>
                          <Input
                            type="email"
                            id="email"
                            required
                            className="px-4 py-3 text-lg h-auto border-2 rounded-xl"
                            placeholder="jean@exemple.fr"
                          />
                        </div>
                      </div>

                      {/* Téléphone optionnel */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-lg font-semibold">
                          Téléphone <span className="text-muted-foreground font-normal">(optionnel)</span>
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          className="px-4 py-3 text-lg h-auto border-2 rounded-xl"
                          placeholder="06 12 34 56 78"
                        />
                      </div>

                      {/* Situation */}
                      <div className="space-y-2">
                        <Label htmlFor="situation" className="text-lg font-semibold">
                          Décrivez brièvement votre situation
                        </Label>
                        <Textarea
                          id="situation"
                          required
                          rows={4}
                          className="px-4 py-3 text-lg border-2 rounded-xl resize-none"
                          placeholder="Par exemple : Ma mère a été diagnostiquée DMLA il y a 3 mois. Elle n'arrive plus à lire son courrier et aimerait retrouver un peu d'autonomie…"
                        />
                      </div>

                      <Button type="submit" variant="default" size="lg" className="w-full text-xl">
                        <Send className="w-5 h-5" />
                        Envoyer ma demande de conseil
                      </Button>

                      <p className="text-center text-muted-foreground italic text-base">
                        Astuce aidant : vous pouvez remplir ce formulaire à la place de votre proche, 
                        puis venir au bilan avec lui/elle.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactConseil;
