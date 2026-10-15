export interface Realisation {
  slug: string;
  name: string;
  activity: string;
  baseline: string;
  year: string;
  duration: string;
  stack: string[];
  video: string;
  poster: string;
  need: { title: string; text: string }[];
  work: { title: string; text: string }[];
  results: { value: string; label: string; note?: string }[];
  quote: { text: string; author: string };
  timeline: { date: string; text: string }[];
}

export const realisations: Realisation[] = [
  {
    slug: "architea",
    name: "Architéa",
    activity: "Premier réseau national de contractants généraux",
    baseline: "Refonte d'urgence en 3 semaines, puis 3 sites en 3 ans.",
    year: "2023",
    duration: "3 semaines",
    stack: ["Astro", "Sanity", "Formulaires multi-agences", "SEO avec annmof"],
    video: "architea",
    poster: "/videos/architea-poster.jpg",
    need: [
      {
        title: "Lâchés en rase campagne",
        text: "Leur ancien prestataire les laisse tomber : sans reprise immédiate, la franchise perd sa présence en ligne en moins d'un mois. Urgence absolue.",
      },
      {
        title: "Une identité à garder",
        text: "Pas de rebranding from scratch : les éléments de design existants sont repris et adaptés. Il faut aller vite, sans tout casser.",
      },
      {
        title: "Un réseau, pas un site",
        text: "Des dizaines d'agences, chacune avec ses contacts : le site doit router chaque demande vers les bonnes personnes.",
      },
    ],
    work: [
      {
        title: "Refonte Symfony → Astro + Sanity",
        text: "Migration complète du site PHP vers une stack statique moderne, administrée via Sanity.",
      },
      {
        title: "Formulaires par agence",
        text: "Des formulaires de contact spécifiques pour chaque agence, avec redirection mail vers les personnes concernées.",
      },
      {
        title: "Design adapté",
        text: "Reprise et modernisation de l'identité existante, sans rupture pour les franchisés ni les clients.",
      },
      {
        title: "SEO avec annmof",
        text: "Stratégie de référencement et contenus optimisés avec notre partenaire <a href=\"https://annmof.fr\" target=\"_blank\" rel=\"noopener\">annmof</a>.",
      },
    ],
    results: [
      { value: "+278", label: "prises de contact en 2025 (+37 %)", note: "750 → 1028, spam et stages exclus" },
      { value: "27,88 €", label: "par lead qualifié", note: "marché immo France : 20 à 300 €" },
      { value: "69 592", label: "visites en 2025", note: "+3 588 vs 2024" },
    ],
    quote: {
      text: "Nous sommes extrêmement satisfaits d'avoir confié la refonte complète de notre site internet à l'agence huitquatre, qui a su répondre à nos besoins en un temps record, pour un résultat au delà de nos espérances. A travers une approche humaine et une démarche engagée, cette agence web nous accompagne, au quotidien, dans la performance technique, l'optimisation du design et l'expérience utilisateur de notre site internet, pour répondre à des enjeux d'acquisition d'envergure. Avantage considérable, cette agence comprend également une sphère SEO, experte en son domaine, qui nous accompagne de la mise en place de stratégies de référencement naturel à la rédaction de contenus optimisés, et nous permet d'atteindre, rapidement, nos objectifs de positionnement Google. Un grand merci également à Julien et Manon pour leur pédagogie et la qualité de leurs conseils dans le cadre d'échanges réguliers. Nous recommandons les yeux fermés",
      author: "Le Pôle Communication & Marketing Architéa France",
    },
    timeline: [
      { date: "2023", text: "Reprise d'architea.fr en 3 semaines" },
      { date: "2024", text: "archipharma.fr" },
      { date: "2025", text: "Site des franchisés franchise-architea.fr" },
    ],
  },
];

export interface PortfolioItem {
  slug: string;
  name: string;
  desc: string;
  stats: string[];
}

export const portfolio: PortfolioItem[] = [
  {
    slug: "architea",
    name: "Architéa",
    desc: "Réseau national de contractants généraux — direction artistique, CMS sur mesure, automatisations CRM et SEO",
    stats: ["70k+ visites/an", "27,88€/lead qualifié", "700+ pages"],
  },
  {
    slug: "laparentelle",
    name: "La Parent'elle",
    desc: "Lieu dédié à la femme et la famille — CMS sur mesure, réservation d'ateliers en ligne et rappels automatisés",
    stats: ["N°1 en local", "63% de clics sur son nom"],
  },
  {
    slug: "pilates",
    name: "Pilates nomade",
    desc: "Centre bien-être — réservation de cours en ligne et automatisations",
    stats: ["N°1 sur la région de Brive", "750+ visites / 6 mois"],
  },
  {
    slug: "steltis",
    name: "Steltis Avocats",
    desc: "Avocats fiscalistes — direction artistique, automatisations et SEO",
    stats: ["15 contacts qualifiés / mois"],
  },
  {
    slug: "tattoo",
    name: "Bastia Tattoo / Graphicaderme",
    desc: "Tatouage & piercing — galerie portfolio, RDV en ligne et suivi client automatisé",
    stats: ["N°1 en local", "~1200 visites Google"],
  },
  {
    slug: "velletaz",
    name: "Velletaz Groupe",
    desc: "Pépinières viticoles — refonte, automatisations commerciales et SEO",
    stats: ["187k impressions Google", "référence web reconnue sur la vigne"],
  },
];

export const featuredSlugs = ["architea", "tattoo", "velletaz"];
