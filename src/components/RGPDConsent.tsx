import { Checkbox } from "@/components/ui/checkbox";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface RGPDConsentProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
}

const RGPDConsent = ({ checked, onCheckedChange, id = "rgpd" }: RGPDConsentProps) => {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(c) => onCheckedChange(c === true)}
        className="mt-1"
      />
      <label htmlFor={id} className="text-base text-muted-foreground cursor-pointer leading-relaxed">
        <Shield className="w-4 h-4 inline mr-1" />
        En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées pour me
        recontacter dans le cadre de ma demande, conformément à notre{" "}
        <Link to="/politique-de-confidentialite" className="underline hover:text-foreground" target="_blank">
          politique de confidentialité
        </Link>
        . Vos données ne seront ni vendues ni partagées avec des tiers. Vous pouvez exercer vos droits
        d'accès, de rectification et de suppression à tout moment en nous contactant.
      </label>
    </div>
  );
};

export default RGPDConsent;
