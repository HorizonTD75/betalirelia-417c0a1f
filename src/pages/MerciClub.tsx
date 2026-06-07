import ThankYouPage from "@/components/ThankYouPage";

const MerciClub = () => (
  <ThankYouPage
    seoTitle="Inscription confirmée – Club LirElia"
    title="Merci, votre inscription au Club LirElia est confirmée"
    description="Votre inscription au Club LirElia a bien été enregistrée."
    message="Vous recevrez prochainement un e-mail avec les informations pour la prochaine session du Club LirElia."
    submessage="En attendant, n'hésitez pas à consulter la charte du Club pour découvrir nos valeurs."
    backLink="/club"
    backLabel="Retour au Club"
    canonicalPath="/merci-club"
  />
);

export default MerciClub;
