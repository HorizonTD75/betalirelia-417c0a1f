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
import { Send, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const topicOptions = [
  { value: "", label: "— Aucun sujet en particulier —" },
  { value: "loupe-classique", label: "Loupe classique en verre", category: "Loupes en verre" },
  { value: "loupe-eclairante", label: "Loupe éclairante", category: "Loupes en verre" },
  { value: "loupe-dome", label: "Loupe dôme (à poser)", category: "Loupes en verre" },
  { value: "loupe-electronique-portable", label: "Loupe électronique portable", category: "Loupes électroniques" },
  { value: "loupe-electronique-bureau", label: "Loupe électronique de bureau", category: "Loupes électroniques" },
  { value: "loupe-electronique-poche", label: "Loupe électronique de poche", category: "Loupes électroniques" },
  { value: "lampe-bureau-daylight", label: "Lampe de bureau daylight", category: "Lampes adaptées" },
  { value: "lampe-sur-pied", label: "Lampe sur pied orientable", category: "Lampes adaptées" },
  { value: "lampe-loupe", label: "Lampe-loupe combinée", category: "Lampes adaptées" },
  { value: "tele-agrandisseur-bureau", label: "Télé-agrandisseur de bureau", category: "Télé-agrandisseurs" },
  { value: "tele-agrandisseur-portable", label: "Télé-agrandisseur portable", category: "Télé-agrandisseurs" },
  { value: "tele-agrandisseur-tv", label: "Caméra de lecture TV", category: "Télé-agrandisseurs" },
  { value: "bilan-essentiel", label: "Bilan basse vision Essentiel", category: "Bilans basse vision" },
  { value: "bilan-expert", label: "Bilan basse vision Expert", category: "Bilans basse vision" },
  { value: "bilan-suivi", label: "Bilan de suivi basse vision", category: "Bilans basse vision" },
];

const categories = [...new Set(topicOptions.filter(o => o.category).map(o => o.category))];

const ContactConseil = () => {
  const [searchParams] = useSearchParams();
  const [interet, setInteret] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [sourceTag, setSourceTag] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const url = window.location.href;
    setSourceUrl(url);
    const pathname = window.location.pathname;
    const tag = "SRC_" + pathname.replace(/\//g, "_").replace(/^_/, "");
    setSourceTag(tag);

    const produit = searchParams.get("produit");
    if (produit) {
      const found = topicOptions.find(o => o.value === produit);
      if (found) setInteret(produit);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("brevo-upsert-contact", {
        body: {
          interet: interet || null,
          email,
          nom,
          telephone: telephone || null,
          message,
          source_url: sourceUrl,
          source_tag: sourceTag,
        },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Submit error:", err);
      const errorMessage = err instanceof Error ? err.message : "Erreur inconnue";
      toast({
        title: "Une erreur est survenue",
        description: errorMessage.startsWith("Adresse") || errorMessage.startsWith("Nom") || errorMessage.startsWith("Message")
          ? errorMessage
          : "Impossible d'envoyer votre demande. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Conseil personnalisé aide à la lecture | LirElia"
        description="Décrivez votre situation visuelle et recevez des recommandations personnalisées pour choisir l'aide à la lecture la plus adaptée à vos besoins."
        canonicalPath="/contact-conseil"
      />
      <Header />
      <main id="main-content">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Link
                to="/aides-lecture-bassevision"
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
                    <h1 className="font-serif text-3xl font-bold text-foreground">Merci !</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                      Nous revenons vers vous rapidement.
                    </p>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/aides-lecture-bassevision">
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
                      {/* Sujet d'intérêt */}
                      <div className="space-y-2">
                        <Label htmlFor="interet" className="text-lg font-semibold">
                          Sujet d'intérêt
                        </Label>
                        <select
                          id="interet"
                          value={interet}
                          onChange={(e) => setInteret(e.target.value)}
                          className="w-full px-4 py-3 text-lg border-2 border-input rounded-xl bg-background focus:border-primary focus:ring-4 focus:ring-ring/20 transition-all"
                        >
                          <option value="">— Aucun sujet en particulier —</option>
                          {categories.map(cat => (
                            <optgroup key={cat} label={cat}>
                              {topicOptions
                                .filter(o => o.category === cat)
                                .map(o => (
                                  <option key={o.value} value={o.value}>{o.label}</option>
                                ))}
                            </optgroup>
                          ))}
                        </select>
                        {interet && (
                          <p className="text-base text-accent font-medium">
                            ✓ Sujet sélectionné : {topicOptions.find(o => o.value === interet)?.label}
                          </p>
                        )}
                      </div>

                      {/* Nom + Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nom" className="text-lg font-semibold">Votre nom</Label>
                          <Input
                            type="text" id="nom" required value={nom}
                            onChange={(e) => setNom(e.target.value)} maxLength={100}
                            className="px-4 py-3 text-lg h-auto border-2 rounded-xl"
                            placeholder="Jean Dupont"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-lg font-semibold">Votre e-mail</Label>
                          <Input
                            type="email" id="email" required value={email}
                            onChange={(e) => setEmail(e.target.value)} maxLength={255}
                            className="px-4 py-3 text-lg h-auto border-2 rounded-xl"
                            placeholder="jean@exemple.fr"
                          />
                        </div>
                      </div>

                      {/* Téléphone */}
                      <div className="space-y-2">
                        <Label htmlFor="telephone" className="text-lg font-semibold">
                          Téléphone <span className="text-muted-foreground font-normal">(optionnel)</span>
                        </Label>
                        <Input
                          type="tel" id="telephone" value={telephone}
                          onChange={(e) => setTelephone(e.target.value)}
                          className="px-4 py-3 text-lg h-auto border-2 rounded-xl"
                          placeholder="01 56 77 88 99"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-lg font-semibold">Votre message</Label>
                        <Textarea
                          id="message" required rows={4} value={message}
                          onChange={(e) => setMessage(e.target.value)} maxLength={2000}
                          className="px-4 py-3 text-lg border-2 rounded-xl resize-none"
                          placeholder="Par exemple : Ma mère a été diagnostiquée DMLA il y a 3 mois. Elle n'arrive plus à lire son courrier…"
                        />
                      </div>

                      <input type="hidden" value={sourceUrl} readOnly />
                      <input type="hidden" value={sourceTag} readOnly />

                      <Button type="submit" variant="default" size="lg" className="w-full text-xl" disabled={loading}>
                        {loading ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours…</>
                        ) : (
                          <><Send className="w-5 h-5" /> Envoyer ma demande de conseil</>
                        )}
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
