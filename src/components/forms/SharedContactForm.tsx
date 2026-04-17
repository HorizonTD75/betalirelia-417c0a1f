import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useFormValidation } from "@/hooks/useFormValidation";
import RGPDConsent from "@/components/RGPDConsent";

const topicOptions = [
  { value: "", label: "— Aucun sujet en particulier —" },
  { value: "loupes-verre", label: "Loupes en verre" },
  { value: "loupes-electroniques", label: "Loupes électroniques" },
  { value: "tele-agrandisseurs", label: "Télé-agrandisseurs" },
  { value: "eclairage-basse-vision", label: "Éclairage basse vision" },
  { value: "aide-choix", label: "Aide pour choisir" },
  { value: "bilans", label: "Bilans" },
  { value: "autre", label: "Autres" },
];

const SharedContactForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [interet, setInteret] = useState("");
  const [loading, setLoading] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [sourceTag, setSourceTag] = useState("");

  const { toast } = useToast();

  useEffect(() => {
    const url = window.location.href;
    setSourceUrl(url);
    const pathname = window.location.pathname;
    const tag = "SRC_" + pathname.replace(/\//g, "_").replace(/^_/, "");
    setSourceTag(tag);

    const sujet = searchParams.get("sujet");
    const produit = searchParams.get("produit");
    const param = sujet || produit;
    if (param) {
      const found = topicOptions.find((o) => o.value === param);
      if (found) setInteret(param);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { errors, validateField, clearFieldError, validateAll } = useFormValidation();
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    if (!validateAll([
      { field: "email", value: email },
      { field: "telephone", value: telephone },
    ])) return;
    setLoading(true);

    try {
      const result = await supabase.functions.invoke("brevo-upsert-contact", {
        body: {
          interet: interet || null,
          email,
          nom,
          telephone: telephone || null,
          message,
          source_url: sourceUrl,
          source_tag: sourceTag,
          brevo_list_id: 14
        }
      });

      const { data, error } = result;

      let apiErrorMessage: string | null = null;
      if (error) {
        try {
          if ('context' in error && (error as any).context?.body) {
            const body = await new Response((error as any).context.body).json();
            apiErrorMessage = body?.error || null;
          }
        } catch { /* ignore */ }
      }
      if (!apiErrorMessage && data?.error) {
        apiErrorMessage = typeof data.error === "string" ? data.error : null;
      }

      if (apiErrorMessage) {
        const isPhoneDuplicate = apiErrorMessage.includes("numéro de téléphone");
        toast({
          title: isPhoneDuplicate ? "Numéro de téléphone déjà utilisé" : "Envoi impossible",
          description: apiErrorMessage,
          variant: "destructive",
        });
        return;
      }

      if (error) throw error;

      const emailId = crypto.randomUUID();
      const selectedTopic = topicOptions.find((o) => o.value === interet)?.label;
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          recipientEmail: email.trim(),
          idempotencyKey: `contact-confirm-${emailId}`,
          templateData: { name: nom.trim(), subject: selectedTopic || undefined },
        },
      });

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "admin-notification",
          recipientEmail: "bleuhorizon2018@gmail.com",
          idempotencyKey: `contact-admin-${emailId}`,
          templateData: {
            formType: "Contact Conseil",
            name: nom.trim(),
            email: email.trim(),
            phone: telephone.trim() || undefined,
            details: message,
          },
        },
      });

      navigate("/merci-contact");
    } catch (err: unknown) {
      console.error("Submit error:", err);
      toast({
        title: "Une erreur est survenue",
        description: "Impossible d'envoyer votre demande. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card variant="highlighted" className="overflow-hidden">
      <CardHeader className="text-center pb-2">
        <CardTitle className="font-serif text-2xl md:text-3xl">
          Demander un conseil personnalisé
        </CardTitle>
        <CardDescription className="text-lg leading-relaxed">
          Décrivez votre besoin en quelques lignes. Nous vous rappellerons rapidement
          pour échanger sur votre situation et vous orienter au mieux.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sujet d'intérêt */}
          <div className="space-y-2">
            <Label htmlFor="interet" className="text-lg font-semibold">
              Sujet de votre demande
            </Label>
            <select
              id="interet"
              value={interet}
              onChange={(e) => setInteret(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-input rounded-xl bg-background focus:border-primary focus:ring-4 focus:ring-ring/20 transition-all"
            >
              {topicOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Nom + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nom" className="text-lg font-semibold">Votre nom</Label>
              <Input
                type="text" id="nom" required value={nom}
                onChange={(e) => setNom(e.target.value)} maxLength={100}
                className="px-4 py-3 text-lg h-auto border-2 rounded-xl"
                placeholder="Jean Dupont"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg font-semibold">Votre e-mail</Label>
              <Input
                type="email" id="email" required value={email}
                onChange={(e) => { setEmail(e.target.value); clearFieldError("email"); }}
                onBlur={() => validateField("email", email)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`px-4 py-3 text-lg h-auto border-2 rounded-xl ${errors.email ? "border-destructive" : ""}`}
                placeholder="jean@exemple.fr"
              />
              {errors.email && <p id="email-error" className="text-sm text-destructive" role="alert">{errors.email}</p>}
            </div>
          </div>

          {/* Téléphone */}
          <div className="space-y-2">
            <Label htmlFor="telephone" className="text-lg font-semibold">
              Téléphone <span className="text-muted-foreground font-normal">(optionnel)</span>
            </Label>
            <Input
              type="tel" id="telephone" value={telephone}
              onChange={(e) => { setTelephone(e.target.value); clearFieldError("telephone"); }}
              onBlur={() => validateField("telephone", telephone)}
              aria-invalid={!!errors.telephone}
              aria-describedby={errors.telephone ? "telephone-error" : undefined}
              className={`px-4 py-3 text-lg h-auto border-2 rounded-xl ${errors.telephone ? "border-destructive" : ""}`}
              placeholder="06 12 34 56 78"
            />
            {errors.telephone && <p id="telephone-error" className="text-sm text-destructive" role="alert">{errors.telephone}</p>}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-lg font-semibold">Décrivez votre situation</Label>
            <Textarea
              id="message" required rows={4} value={message}
              onChange={(e) => setMessage(e.target.value)} maxLength={2000}
              className="px-4 py-3 text-lg border-2 rounded-xl resize-none"
              placeholder="Par exemple : Ma mère a été diagnostiquée DMLA il y a 3 mois. Elle n'arrive plus à lire son courrier…"
            />
          </div>

          <input type="hidden" value={sourceUrl} readOnly />
          <input type="hidden" value={sourceTag} readOnly />
          {/* Honeypot anti-spam */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          </div>

          <Button type="submit" variant="default" size="lg" className="w-full text-xl" disabled={loading}>
            {loading ?
              <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours…</> :
              <><Send className="w-5 h-5" /> Envoyer ma demande de conseil</>
            }
          </Button>
          <RGPDConsent />

          <p className="text-center text-muted-foreground italic text-base">
            Astuce aidant : vous pouvez remplir ce formulaire à la place de votre proche,
            puis venir au bilan avec lui/elle.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default SharedContactForm;
