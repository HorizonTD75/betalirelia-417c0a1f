import { Link } from "react-router-dom";

const RGPDConsent = () => {
  return (
    <p className="text-sm text-muted-foreground text-center">
      En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour traiter votre demande.{" "}
      <Link
        to="/politique-de-confidentialite"
        className="underline hover:text-foreground"
        target="_blank"
      >
        Politique de confidentialité
      </Link>
    </p>
  );
};

export default RGPDConsent;
