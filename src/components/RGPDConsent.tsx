import { Checkbox } from "@/components/ui/checkbox";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const RGPDConsent = () => {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted" role="group">
      <Checkbox
        checked
        disabled
        className="mt-1 shrink-0"
      />
      <span className="text-base text-muted-foreground leading-relaxed select-text">
        <Shield className="w-4 h-4 inline mr-1" />
        En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées pour me
        recontacter dans le cadre de ma demande, conformément à notre{" "}
        <Link
          to="/politique-de-confidentialite"
          className="underline hover:text-foreground"
          target="_blank"
        >
          politique de confidentialité
        </Link>
        . Vos données ne seront ni vendues ni partagées avec des tiers. Vous pouvez exercer vos droits
        d'accès, de rectification et de suppression à tout moment en nous contactant.
      </span>
    </div>
  );
};

export default RGPDConsent;
