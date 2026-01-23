import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Calendar, Eye } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Comprendre", href: "#comprendre" },
    { label: "Bilans", href: "#bilans" },
    { label: "Produits", href: "#produits" },
    { label: "Aidants", href: "#aidants" },
    { label: "Club", href: "#club" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b-2 border-border">
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-primary">LirElia</span>
              <span className="block text-sm text-muted-foreground">Basse Vision</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-lg font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:0123456789" className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80">
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">01 23 45 67 89</span>
            </a>
            <Button variant="secondary" size="default">
              <Calendar className="w-5 h-5" />
              Prendre RDV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t-2 border-border animate-slide-up" aria-label="Menu mobile">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-4 py-4 text-xl font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t-2 border-border mt-2">
                <Button variant="secondary" size="lg" className="w-full">
                  <Calendar className="w-5 h-5" />
                  Prendre RDV
                </Button>
              </li>
              <li>
                <a href="tel:0123456789" className="flex items-center justify-center gap-2 py-4 text-xl font-semibold text-primary">
                  <Phone className="w-6 h-6" />
                  01 23 45 67 89
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
