import { offer } from "./offre";

export interface FaqItem {
  q: string;
  a: string;
}

// Source unique : homepage (teaser), page /faq (tout), page /offre (prix)
export const generalFaq: FaqItem[] = [
  {
    q: "Le site m'appartient-il vraiment ?",
    a: "Oui, par construction : tout est créé <strong>directement sur vos comptes</strong> — votre GitHub, votre Storyblok, votre registrar, votre hébergeur. <strong>Rien n'a besoin de vous être remis</strong>, et il n'y a aucun départ à organiser : c'est chez vous dès le premier jour.",
  },
  {
    q: "Y a-t-il des frais récurrents ?",
    a: "Non. <strong>1 990 € en une fois</strong>, ou 4 × 497,50 € sans frais. Hébergement et maintenance inclus, <strong>sans limite de durée</strong>. Deux limites à connaître, sans langue de bois : la bande passante de l'hébergeur est de <strong>100 Go/mois</strong> — de l'ordre du <strong>million de visites mensuelles</strong> pour un site de cette légèreté — et Storyblok inclut <strong>20 000 contenus</strong>. Si votre succès dépasse ça, tout scale facilement — prévenez-nous, on sera ravis de vous aider à basculer. Seul le nom de domaine reste à votre charge.",
  },
  {
    q: "Puis-je modifier mon site moi-même ?",
    a: "Oui, <strong>sans coder</strong> : vous <strong>créez de nouvelles pages</strong> ET modifiez celles qui existent — réorganisez les blocs, ajoutez ou supprimez des sections, changez textes et photos. Formation en visio et <strong>guide sur-mesure</strong> écrit pour votre site (pas une doc générique) inclus pour partir autonome.",
  },
  {
    q: "En combien de temps mon site est-il en ligne ?",
    a: "<strong>30 jours</strong> dès la mise en route : comptes créés ensemble, 3 semaines de design et développement avec <strong>3 allers-retours</strong>, puis formation, audits et lancement.",
  },
  {
    q: "Et si je veux changer de prestataire ?",
    a: "C'est simple : tout étant <strong>déjà sur vos comptes</strong>, il suffit d'y inviter quelqu'un d'autre. <strong>Pas de migration</strong>, pas de rachat, pas de pénalité — ni de prise d'otage possible.",
  },
  {
    q: "Pourquoi pas WordPress ?",
    a: "Mises à jour, failles de sécurité, conflits de plugins, frais récurrents : WordPress demande un entretien permanent. Un site statique supprime ces problèmes à la racine — <strong>rien à pirater, rien à mettre à jour</strong>.",
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: "Le SEO technique est inclus : chargement <strong>quasi instantané</strong>, structure propre, sitemap, <strong>balises schema</strong> automatiques pour les besoins courants — et sur-mesure pour les besoins spécifiques. C'est la base saine sur laquelle votre contenu peut se classer.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Vous êtes suivi : <strong>support pendant 1 an</strong>, hébergement et maintenance inclus. Et grâce au CMS, le quotidien (textes, photos, pages) se fait <strong>sans nous</strong>.",
  },
];

export const prixFaq: FaqItem[] = [
  {
    q: "Pourquoi un prix fixe et pas un devis ?",
    a: "Parce que la prestation est cadrée : rebranding, design, 30 jours, formation. Le <strong>prix fixe</strong> supprime la négociation et les mauvaises surprises, des deux côtés. Au-delà du cadre, les <strong>options</strong> et le <strong>sur-mesure</strong> prennent le relais.",
  },
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: `Oui : ${offer.price} en une fois, ou <strong>${offer.installments}</strong>. Sans organisme de crédit.`,
  },
  {
    q: "Y a-t-il vraiment zéro frais récurrents ?",
    a: "Oui pour tout ce qui nous concerne : <strong>hébergement, maintenance</strong> (il n'y en a pas sur du statique). Restent à votre charge : le <strong>nom de domaine</strong> (~15 €/an) et les limites généreuses de l'offre — bande passante jusqu'à <strong>100 Go/mois</strong> (de l'ordre du million de visites mensuelles pour un site de cette légèreté), <strong>20 000 contenus</strong> Storyblok. Au-delà, on fait évoluer l'architecture ensemble.",
  },
  {
    q: "Et si mon projet ne rentre pas dans l'offre ?",
    a: "Les <strong>options</strong> couvrent l'essentiel (e-commerce, multilingue, réservation). Pour le reste — fonctionnalité métier spécifique, cas tordu — écrivez-nous : <strong>devis sur-mesure</strong>, même exigence.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "<strong>Support humain pendant 1 an</strong>, par email ou téléphone. Et le quotidien (textes, photos, pages) se fait <strong>sans nous</strong>, grâce au CMS et à votre formation.",
  },
];
