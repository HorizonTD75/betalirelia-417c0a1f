import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, BookOpen, Instagram, Facebook, Twitter } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "La Basse Vision", href: "#comprendre" },
    { label: "Bilan et accompagnement", href: "#bilans" },
    { label: "Produits et sports", href: "#produits" },
    { label: "Luduits sports", href: "#sports" },
    { label: "Les livres", href: "#livres" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-secondary py-2">
        <div className="container flex items-center justify-between text-sm">
          <span className="text-secondary-foreground font-medium">
            Antony / Palaiseau - Accompagnement basse vision (patients & aidants)
          </span>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-secondary py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-primary">Lirelia</span>
                <span className="block text-sm text-secondary-foreground font-medium">Lire et Voir Autrement</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-base font-semibold text-secondary-foreground hover:text-primary hover:bg-secondary-foreground/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Club link + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <a
                href="#club"
                className="hidden md:flex px-4 py-2 text-base font-semibold text-secondary-foreground hover:text-primary transition-colors"
              >
                Le club
              </a>
              
              <button
                className="xl:hidden p-3 rounded-lg hover:bg-secondary-foreground/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isMenuOpen ? <X className="w-7 h-7 text-secondary-foreground" /> : <Menu className="w-7 h-7 text-secondary-foreground" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="xl:hidden py-6 border-t border-secondary-foreground/20 mt-4 animate-slide-up" aria-label="Menu mobile">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-4 text-xl font-semibold text-secondary-foreground hover:text-primary hover:bg-secondary-foreground/5 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-4 border-t border-secondary-foreground/20 mt-2">
                  <a href="#club" className="block px-4 py-4 text-xl font-semibold text-primary">
                    Le club
                  </a>
                </li>
                <li>
                  <a href="tel:0123456789" className="flex items-center gap-2 px-4 py-4 text-xl font-semibold text-secondary-foreground">
                    <Phone className="w-6 h-6" />
                    01 23 45 67 89
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>

      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
    </header>
  );
};

export default Header;