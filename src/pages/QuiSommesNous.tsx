import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Qui sommes-nous ? — LirElia, experts en basse vision"
        description="Découvrez l'équipe LirElia : un visiopraticien spécialisé en basse vision depuis 25 ans et un ingénieur passionné par les technologies d'assistance. Une approche humaine et concrète."
        canonicalPath="/qui-sommes-nous"
      />
      <Header />
      <main id="main-content">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
                Qui sommes-nous ?
              </h1>

              <div className="space-y-10 text-lg text-foreground leading-relaxed">

                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Deux expertises complémentaires au service de la basse vision
                  </h2>
                  <p className="mb-6">
                    LirElia est né de la rencontre de deux parcours et d'une conviction commune : face à la malvoyance, les personnes ont besoin d'un accompagnement à la fois humain, expérimenté et concret.
                  </p>
                  <p className="mb-6">
                    L'un des fondateurs est visiopraticien spécialisé en basse vision depuis plus de vingt-cinq ans. Depuis de nombreuses années, il accompagne des personnes atteintes de DMLA, de glaucome, de rétinopathie et d'autres pathologies visuelles. Son expérience de terrain lui a appris une chose essentielle : la malvoyance ne se résume jamais à un chiffre sur une ordonnance. Elle touche la lecture, les déplacements, les gestes du quotidien, l'autonomie et la confiance en soi.
                  </p>
                  <p>
                    À ses côtés, un ingénieur passionné par les nouvelles technologies apporte une expertise complémentaire. Il explore, analyse et évalue les aides électroniques, les systèmes d'agrandissement, les solutions de lecture et les outils numériques capables d'améliorer concrètement la vie des personnes déficientes visuelles.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Qui fait quoi chez LirElia ?
                  </h2>
                  <p className="mb-6">
                    Le visiopraticien apporte l'expérience du terrain : compréhension des besoins, regard pratique sur la basse vision, connaissance des difficultés du quotidien et accompagnement personnalisé.
                  </p>
                  <p className="mb-6">
                    L'ingénieur apporte la veille technologique : analyse des innovations, test des nouveaux outils, compréhension des usages et sélection des solutions réellement utiles.
                  </p>
                  <p>
                    Ensemble, ils croisent expérience humaine et innovation technique pour proposer des repères fiables, des conseils concrets et des solutions adaptées.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Une équipe et un réseau engagés
                  </h2>
                  <p className="mb-6">
                    Autour des fondateurs, LirElia s'appuie sur une équipe soudée composée de professionnels attentifs aux enjeux du handicap visuel, de spécialistes des technologies d'assistance et d'entrepreneurs engagés dans le domaine de la basse vision.
                  </p>
                  <p className="mb-4">
                    Cette dynamique collective permet de :
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 pl-2">
                    <li>suivre les innovations utiles ;</li>
                    <li>tester de nouveaux produits ;</li>
                    <li>évaluer leur intérêt réel dans la vie quotidienne ;</li>
                    <li>rester proche des besoins du terrain.</li>
                  </ul>
                  <p>
                    LirElia entretient également des relations solides avec des acteurs locaux, notamment des opticiens et optométristes, afin de garder une approche concrète, cohérente et connectée à la réalité des patients.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Une approche centrée sur la vie réelle
                  </h2>
                  <p className="mb-6">
                    LirElia n'a pas été conçu comme un simple catalogue d'aides visuelles ou de loupes électroniques. Le projet repose sur une idée plus large : aider les personnes malvoyantes à rester actrices de leur vie, en leur apportant des solutions utiles, compréhensibles et adaptées à leur quotidien. C'est aussi dans cet esprit qu'a été imaginé le Club LirElia : un espace d'échange destiné aux personnes malvoyantes, à leurs proches et à leurs aidants, pour partager des expériences, découvrir de nouvelles solutions et ne pas rester seuls face aux difficultés.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Une attention particulière aux proches aidants
                  </h2>
                  <p>
                    La malvoyance touche bien sûr la personne concernée, mais aussi son entourage. C'est pourquoi les fondateurs de LirElia accordent une place importante aux aidants et aux familles. Cette volonté de transmission se retrouve également dans les ouvrages déjà publiés autour de la DMLA et de l'accompagnement des proches, avec le même objectif : rendre l'information plus claire, plus rassurante et plus utile.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Notre ambition
                  </h2>
                  <p>
                    LirElia s'adresse aux personnes malvoyantes, à leurs proches et à tous ceux qui recherchent des repères fiables dans l'univers de la basse vision. Notre ambition est simple : proposer un accompagnement sérieux, accessible et profondément humain, à la croisée de l'expérience, de la technologie et de l'attention portée à chacun. LirElia, c'est la rencontre de l'expertise terrain, de l'innovation utile et d'une équipe engagée pour aider chacun à continuer à vivre pleinement malgré la baisse de vision.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuiSommesNous;
