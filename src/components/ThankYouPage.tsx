import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ThankYouPageProps {
  title: string;
  seoTitle: string;
  description: string;
  message: string;
  submessage?: string;
  backLink: string;
  backLabel: string;
  canonicalPath: string;
}

const ThankYouPage = ({
  title,
  seoTitle,
  description,
  message,
  submessage,
  backLink,
  backLabel,
  canonicalPath,
}: ThankYouPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title={seoTitle} description={description} canonicalPath={canonicalPath} />
      <Header />
      <main id="main-content" className="flex-1 py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card variant="highlighted" className="text-center py-12">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h1 className="font-serif text-3xl font-bold text-foreground">{title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  {message}
                </p>
                {submessage && (
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
                    {submessage}
                  </p>
                )}
                <Button variant="outline" size="lg" asChild>
                  <Link to={backLink}>
                    <ArrowLeft className="w-5 h-5" />
                    {backLabel}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
