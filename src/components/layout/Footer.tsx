import { Eye, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <span className="font-serif text-2xl font-bold">LirElia</span>
            </Link>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Expert en basse vision depuis 25 ans. Accompagnement, bilans et solutions adaptées.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Comprendre</h3>
            <ul className="space-y-3">
              <li><Link to="/comprendre-basse-vision" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Comprendre la basse vision</Link></li>
              <li><Link to="/maladies-yeux" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Les maladies des yeux</Link></li>
              <li><Link to="/vivre-basse-vision" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Vivre au quotidien</Link></li>
              <li><Link to="/#bilans" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Bilans personnalisés</Link></li>
              <li><Link to="/#club" className="text-lg text-primary-foreground/80 hover:text-secondary transition-colors">Club & Rencontres</Link></li>
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
            © 2026 LirElia. Tous droits réservés.
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
