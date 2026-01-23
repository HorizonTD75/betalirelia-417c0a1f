import { BookOpen, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-secondary-foreground" />
              </div>
              <span className="font-serif text-2xl font-bold">Lirelia</span>
            </a>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              Expert en basse vision depuis 25 ans. Accompagnement, bilans et solutions adaptées.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#comprendre" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Comprendre la basse vision</a></li>
              <li><a href="#bilans" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Bilans personnalisés</a></li>
              <li><a href="#produits" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Matériels adaptés</a></li>
              <li><a href="#aidants" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Espace aidants</a></li>
              <li><a href="#club" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Club & Rencontres</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <span className="text-lg text-primary-foreground/80">4 rue Léon Blum<br />91120 Palaiseau</span>
              </li>
              <li>
                <a href="tel:0123456789" className="flex items-center gap-3 text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                  01 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@lirelia.fr" className="flex items-center gap-3 text-lg text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Mail className="w-6 h-6 text-secondary" />
                  contact@lirelia.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Informations</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">À propos</a></li>
              <li><a href="#" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">CGV</a></li>
              <li><a href="#" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg text-primary-foreground/60">
            © 2026 Lirelia. Tous droits réservés.
          </p>
          <p className="text-lg text-primary-foreground/60">
            Site accessible selon les normes WCAG 2.1
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;