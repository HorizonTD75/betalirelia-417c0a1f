import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Check, X, AlertTriangle, Info, Sparkles, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/products/ray-ban-meta-marron.jpg";

const CANONICAL = "/boutique/ray-ban-meta";

const apports = [
  "Lire une étiquette ou un prix en magasin",
  "Comprendre un texte court (affiche, menu, notice)",
  "Se faire lire quelques lignes d'un courrier",
  "Identifier un objet ou un produit du quotidien",
  "Demander une description de la scène devant soi",
  "Appeler, dicter ou demander une information à la voix",
  "Obtenir une aide mains libres sans sortir le smartphone",
];

const usages = [
  {
    usage: "Lire une étiquette",
    interet: "Très utile en ponctuel",
    vigilance: "Bon cadrage et bonne lumière nécessaires",
  },
  {
    usage: "Lire un courrier court",
    interet: "Possible si le texte est net",
    vigilance: "Peu adapté aux longs documents",
  },
  {
    usage: "Décrire une scène",
    interet: "Peut aider à comprendre l'environnement",
    vigilance: "Réponse de l'IA à vérifier",
  },
  {
    usage: "Identifier un objet",
    interet: "Utile à domicile ou en magasin",
    vigilance: "Résultat variable selon l'objet",
  },
  {
    usage: "Lire longtemps",
    interet: "Usage limité",
    vigilance: "Préférer une aide dédiée (loupe électronique, téléagrandisseur)",
  },
];

const limites = [
  "Nécessite un smartphone compatible iOS ou Android",
  "Nécessite l'application Meta AI et un compte utilisateur",
  "Certaines fonctions dépendent du pays, de la langue et des mises à jour",
  "Les fonctions d'intelligence artificielle nécessitent souvent une connexion Internet",
  "Il faut être à l'aise avec les commandes vocales",
  "Il faut orienter correctement la tête vers le texte ou l'objet",
  "Ce n'est pas un dispositif médical basse vision",
];

const pourQui = [
  "Personnes atteintes de DMLA qui veulent une aide vocale ponctuelle",
  "Personnes malvoyantes en difficulté avec les petits textes",
  "Personnes qui souhaitent compléter une loupe électronique ou un téléagrandisseur",
  "Aidants qui cherchent une solution simple à tester",
  "Utilisateurs à l'aise avec un smartphone et les commandes vocales",
  "Personnes qui veulent une aide discrète et non médicalisée",
];

const pasPrioritaire = [
  "Personne peu à l'aise avec les applications mobiles",
  "Besoin principal de lecture longue (livre, dossier)",
  "Besoin d'un grossissement visuel direct",
  "Refus de créer un compte en ligne",
  "Absence de connexion Internet fiable",
  "Besoin d'un dispositif médical validé en basse vision",
];

const RayBanMeta = () => {

export default RayBanMeta;
