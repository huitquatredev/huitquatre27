export interface OfferIncluded {
  title: string
  desc: string
}

export interface OfferOption {
  name: string
  desc: string
  price: string
}

// Source unique : prix et contenus partagés entre la homepage et la page /offre
export const offer = {
  price: "1 990 €",
  installments: "4 × 497,50 € sans frais",
  included: [
    {
      title: "Rebranding",
      desc: "On part de votre existant qu'on améliore, ou on crée l'identité de zéro : logo, palette, typographies."
    },
    {
      title: "Design",
      desc: "Carrousel 3D, loader animé, micro-interactions : la finition de ce site, appliquée au vôtre. 3 allers-retours inclus."
    },
    {
      title: "Pages sans surcoût",
      desc: "Autant de pages que nécessaire, sans surcoût. Storyblok inclut 20 000 contenus sur le plan gratuit (tous ne sont pas des pages), largement de quoi voir venir."
    },
    {
      title: "SEO technique",
      desc: "Sémantique, performance ~100, sitemap. L'expertise et les bonnes pratiques viennent de notre partenaire <a href=\"https://annmof.fr\" target=\"_blank\" rel=\"noopener\">annmof</a>."
    },
    {
      title: "CMS Storyblok",
      desc: "Modifiez textes, photos et pages vous-même, sans coder."
    },
    {
      title: "Formulaire de contact",
      desc: "Inclus dans l'offre de base, branché et testé."
    },
    {
      title: "Formation 1:1",
      desc: "Visio personnalisée + guide en ligne accessible depuis votre site."
    },
    {
      title: "Hébergement + maintenance",
      desc: "Inclus, sans limite de durée. Zéro frais récurrents."
    },
    {
      title: "Support humain",
      desc: "1 an, par email ou téléphone. Nous avons confiance, nos sites fonctionnent bien."
    }
  ] as OfferIncluded[],
  options: [
    {
      name: "Bouton acheter",
      desc: "Paiement Stripe simple, sans panier. 1,5 % + 0,25 € par transaction pour Stripe.",
      price: "290 €"
    },
    {
      name: "E-commerce complet",
      desc: "Panier, stock, livraison, relances panier. Sans abonnement mensuel. 1,5 % + 0,25 € par transaction pour Stripe.",
      price: "1 190 €"
    },
    {
      name: "Multilingue",
      desc: "Votre site dans une autre langue.",
      price: "390 €"
    },
    {
      name: "Réservation en ligne",
      desc: "Planning, créneaux, rappels automatiques.",
      price: "490 €"
    },
    {
      name: "Fonctionnalité métier",
      desc: "Un besoin spécifique ? Parlons-en.",
      price: "Sur devis"
    }
  ] as OfferOption[]
}
