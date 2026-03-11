import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import headerBg from "@/assets/header-bg.jpg";
import logoLirelia from "@/assets/logo-lirelia.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
  { label: "Comprendre la basse vision", href: "/comprendre-basse-vision" },
  { label: "Vivre avec la basse vision", href: "/vivre-basse-vision" },
  { label: "Bilans visuels", href: "/bilans-bassevision" },
  { label: "Aides à la lecture", href: "/aides-lecture-bassevision" },
  { label: "Contact", href: "/contact-conseil" }];


  return (
    <header className="sticky top-0 z-50 border-b-2 border-border relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={headerBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true" />

        <div className="absolute inset-0 bg-card/85 backdrop-blur-sm" />
      </div>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      
      <div className="container relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img src={logoLirelia} alt="Logo LirElia" className="w-20 h-20 object-contain" />
            <div className="whitespace-nowrap">
              <span className="font-serif text-2xl font-bold text-primary">LirElia</span>
              <span className="block text-sm text-muted-foreground">Basse Vision</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 ml-8" aria-label="Navigation principale">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-base font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors  mx-[10px] px-0 text-left">

                {link.label}
              </a>
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex flex-col items-center gap-1 ml-4">
            <Button variant="secondary" size="default" asChild>
              <Link to="/club">
                <Users className="w-5 h-5" />
                Le Club
              </Link>
            </Button>
            <a href="tel:0768474235" className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80">
              <Phone className="w-4 h-4" />
              <span>07 68 47 42 35</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>

            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
        <nav className="lg:hidden py-6 border-t-2 border-border animate-slide-up" aria-label="Menu mobile">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) =>
            <li key={link.href}>
                  <a
                href={link.href}
                className="block px-4 py-4 text-xl font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}>

                    {link.label}
                  </a>
                </li>
            )}
              <li className="pt-4 border-t-2 border-border mt-2">
                <Button variant="secondary" size="lg" className="w-full">
                  <Calendar className="w-5 h-5" />
                  Prendre RDV
                </Button>
              </li>
              <li>
                <a href="tel:0768474235" className="flex items-center justify-center gap-2 py-4 text-xl font-semibold text-primary">
                  <Phone className="w-6 h-6" />
                  07 68 47 42 35
                </a>
              </li>
            </ul>
          </nav>
        }
      </div>
    </header>);

};

export default Header;