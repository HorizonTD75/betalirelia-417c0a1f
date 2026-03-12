import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShoppingCart, Check, Shield, Truck, Phone, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchProductByHandle, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const LoupeAmelie = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const { addItem, isLoading: cartLoading, getCheckoutUrl } = useCartStore();

  useEffect(() => {
    fetchProductByHandle("loupe-amelie")
      .then((p) => {
        setProduct(p);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main id="main-content" className="flex items-center justify-center py-32">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main id="main-content" className="container py-20 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Produit introuvable</h1>
          <p className="text-lg text-muted-foreground mb-8">Ce produit n'est pas disponible pour le moment.</p>
          <Button asChild>
            <Link to="/aides-lecture-bassevision/loupes-electroniques">
              <ArrowLeft className="w-5 h-5" />
              Retour aux loupes électroniques
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const { node } = product;
  const images = node.images.edges;
  const variants = node.variants.edges;
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const hasMultipleVariants = variants.length > 1 && !(variants.length === 1 && variants[0].node.title === "Default Title");
  const price = selectedVariant?.price;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success("Produit ajouté au panier", {
      description: node.title,
    });
  };

  const handleBuyNow = async () => {
    if (!selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    const checkoutUrl = useCartStore.getState().getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank");
    }
  };

  const formatPrice = (amount: string, currency: string) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency }).format(parseFloat(amount));

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Loupe Amélie — Loupe électronique de poche | LirElia"
        description="La loupe Amélie est une loupe électronique ultra-compacte avec 3 grossissements (3x, 6x, 9x). Idéale pour les personnes malvoyantes. Achetez en ligne sur LirElia."
        canonicalPath="/boutique/loupe-amelie"
      />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision" className="hover:text-primary transition-colors">Aides à la lecture</Link>
            <span>/</span>
            <Link to="/aides-lecture-bassevision/loupes-electroniques" className="hover:text-primary transition-colors">Loupes électroniques</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">{node.title}</span>
          </nav>
        </div>

        {/* Product section */}
        <section className="container pb-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image gallery */}
            <div>
              <div className="rounded-2xl overflow-hidden border-2 border-border bg-card mb-4">
                {images[selectedImage] ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || node.title}
                    className="w-full aspect-square object-contain bg-white"
                  />
                ) : (
                  <div className="w-full aspect-square bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Image non disponible</p>
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        i === selectedImage ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                      }`}
                      aria-label={`Voir image ${i + 1}`}
                    >
                      <img src={img.node.url} alt={img.node.altText || ""} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {node.title}
              </h1>

              {price && (
                <p className="text-3xl font-bold text-primary mb-6">
                  {formatPrice(price.amount, price.currencyCode)}
                </p>
              )}

              {node.description && (
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {node.description}
                </p>
              )}

              {/* Variant selector */}
              {hasMultipleVariants && node.options.length > 0 && (
                <div className="mb-6">
                  {node.options.map((option) => (
                    <div key={option.name} className="mb-4">
                      <label className="block text-lg font-bold text-foreground mb-2">{option.name}</label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value) => {
                          const variantIndex = variants.findIndex(
                            (v) => v.node.selectedOptions.some((o) => o.name === option.name && o.value === value)
                          );
                          const isSelected = selectedVariant?.selectedOptions.some(
                            (o) => o.name === option.name && o.value === value
                          );
                          return (
                            <button
                              key={value}
                              onClick={() => variantIndex >= 0 && setSelectedVariantIndex(variantIndex)}
                              className={`px-5 py-3 rounded-xl text-lg font-semibold border-2 transition-all ${
                                isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border bg-card text-foreground hover:border-primary/50"
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Availability */}
              {selectedVariant && (
                <div className="mb-6">
                  {selectedVariant.availableForSale ? (
                    <span className="inline-flex items-center gap-2 text-lg font-semibold text-accent">
                      <Check className="w-5 h-5" />
                      En stock
                    </span>
                  ) : (
                    <span className="text-lg font-semibold text-destructive">Rupture de stock</span>
                  )}
                </div>
              )}

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="default"
                  size="lg"
                  className="text-xl flex-1"
                  onClick={handleAddToCart}
                  disabled={cartLoading || !selectedVariant?.availableForSale}
                >
                  {cartLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingCart className="w-5 h-5" />}
                  Ajouter au panier
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-xl flex-1"
                  onClick={handleBuyNow}
                  disabled={cartLoading || !selectedVariant?.availableForSale}
                >
                  Acheter maintenant
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Reassurance block */}
              <div className="bg-muted rounded-2xl border-2 border-border p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Livraison soignée</p>
                    <p className="text-base text-muted-foreground">Expédition rapide et emballage protecteur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Paiement sécurisé</p>
                    <p className="text-base text-muted-foreground">Transaction protégée par Shopify</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Besoin d'aide ?</p>
                    <p className="text-base text-muted-foreground">
                      Appelez-nous au{" "}
                      <a href="tel:0768474235" className="text-primary font-semibold hover:underline">07 68 47 42 35</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long description */}
        {node.descriptionHtml && (
          <section className="py-16 bg-muted">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Description détaillée</h2>
                <div
                  className="prose prose-lg max-w-none text-foreground
                    prose-headings:font-serif prose-headings:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
                    prose-li:text-muted-foreground prose-li:text-lg
                    prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: node.descriptionHtml }}
                />
              </div>
            </div>
          </section>
        )}

        {/* Back CTA */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Besoin d'un conseil personnalisé ?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Chaque situation visuelle est unique. Contactez-nous pour un échange gratuit et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact-conseil?sujet=loupe-electronique">
                    Demander un conseil
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/aides-lecture-bassevision/loupes-electroniques">
                    <ArrowLeft className="w-5 h-5" />
                    Toutes les loupes électroniques
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoupeAmelie;
