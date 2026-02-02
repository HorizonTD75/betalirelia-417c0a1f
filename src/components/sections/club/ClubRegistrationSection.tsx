import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Shield } from "lucide-react";

const profiles = [
  { value: "patient", label: "Personne concernée" },
  { value: "aidant", label: "Aidant" },
  { value: "pro", label: "Professionnel" },
];

const sessions = [
  { value: "monthly", label: "Session mensuelle gratuite" },
  { value: "weekly-info", label: "Être informé du futur hebdo" },
];

const themes = [
  { id: "voyage", label: "Voyage" },
  { id: "tech", label: "Tech & IA" },
  { id: "livres", label: "Livres" },
  { id: "musiques", label: "Musiques" },
];

const ClubRegistrationSection = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    email: "",
    profile: "",
    session: "monthly",
    themes: [] as string[],
    needZoomHelp: false,
  });

  const handleThemeToggle = (themeId: string) => {
    setFormData(prev => ({
      ...prev,
      themes: prev.themes.includes(themeId)
        ? prev.themes.filter(t => t !== themeId)
        : [...prev.themes, themeId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-background" id="registration">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Card variant="elevated" className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center">
                  <UserPlus className="w-7 h-7" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-primary-foreground">
                    Rejoindre le Club LirElia
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80 text-lg">
                    Inscription gratuite, sans engagement
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="prenom" className="text-lg font-semibold">
                      Prénom
                    </Label>
                    <Input
                      id="prenom"
                      type="text"
                      placeholder="Votre prénom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      className="h-14 text-lg"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 text-lg"
                      required
                    />
                  </div>
                </div>

                {/* Profile Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Je suis</Label>
                  <RadioGroup
                    value={formData.profile}
                    onValueChange={(value) => setFormData({ ...formData, profile: value })}
                    className="grid sm:grid-cols-3 gap-4"
                  >
                    {profiles.map((profile) => (
                      <label
                        key={profile.value}
                        className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.profile === profile.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value={profile.value} id={profile.value} />
                        <span className="font-semibold">{profile.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Session Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Je souhaite</Label>
                  <RadioGroup
                    value={formData.session}
                    onValueChange={(value) => setFormData({ ...formData, session: value })}
                    className="space-y-3"
                  >
                    {sessions.map((session) => (
                      <label
                        key={session.value}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.session === session.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value={session.value} id={session.value} />
                        <span className="font-semibold">{session.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Theme Preferences */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Thèmes préférés (optionnel)</Label>
                  <div className="flex flex-wrap gap-3">
                    {themes.map((theme) => (
                      <label
                        key={theme.id}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.themes.includes(theme.id)
                            ? "border-secondary bg-secondary/10"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        <Checkbox
                          checked={formData.themes.includes(theme.id)}
                          onCheckedChange={() => handleThemeToggle(theme.id)}
                        />
                        <span className="font-semibold">{theme.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Zoom Help */}
                <div className="space-y-4">
                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.needZoomHelp
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <Checkbox
                      checked={formData.needZoomHelp}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, needZoomHelp: checked as boolean })
                      }
                    />
                    <div>
                      <span className="font-semibold block">Besoin d'aide pour Zoom ?</span>
                      <span className="text-muted-foreground text-sm">
                        On peut vous accompagner pour la première connexion
                      </span>
                    </div>
                  </label>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="secondary" size="lg" className="w-full">
                  <UserPlus className="w-6 h-6" />
                  Je m'inscris
                </Button>

                {/* Trust Message */}
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Shield className="w-5 h-5" />
                  <span>Pas de spam. Vous pouvez vous désinscrire à tout moment.</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClubRegistrationSection;
