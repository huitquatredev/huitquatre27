export interface Realisation {
  slug: string;
  name: string;
  activity: string;
  baseline: string;
  year: string;
  duration?: string;
  stack: string[];
  video?: string;
  poster?: string;
  need: { title: string; text: string }[];
  work: { title: string; text: string }[];
  results: { value: string; label: string; note?: string }[];
  quote?: { text: string; author: string };
  followup?: { title: string; text: string };
  timeline: { date: string; text: string }[];
}

export const realisations: Realisation[] = [
  {
    slug: "architea",
    name: "Architéa",
    activity: "Premier réseau national de contractants généraux",
    baseline: "Refonte en urgence : 3 semaines pour remettre le réseau en ligne, puis 3 sites en 3 ans.",
    year: "2023",
    duration: "3 semaines",
    stack: ["Astro", "Sanity", "Formulaires multi-agences", "SEO avec annmof"],
    video: "architea",
    poster: "/videos/architea-poster.jpg",
    need: [
      {
        title: "Lâchés en rase campagne",
        text: "Leur ancien prestataire s'arrête du jour au lendemain. Sans nouveau site en un mois, le réseau disparaît des recherches Google.",
      },
      {
        title: "Une identité à garder",
        text: "Les couleurs, les formes et les repères des clients sont déjà là. On les reprend pour que personne ne soit perdu, sans repartir de zéro.",
      },
      {
        title: "Un réseau, pas un site",
        text: "Des dizaines d'agences, chacune avec ses contacts. Chaque demande doit arriver directement à la bonne personne, sans passer par un standard.",
      },
    ],
    work: [
      {
        title: "Refonte Symfony → Astro + Sanity",
        text: "Le site PHP est reconstruit en statique et administré depuis Sanity. Plus léger, plus rapide, sans serveur à maintenir.",
      },
      {
        title: "Formulaires par agence",
        text: "Chaque agence a son propre formulaire, et chaque message part directement à la bonne boîte mail.",
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
      { value: "+278", label: "prises de contact en 2025 (+37 %)", note: "750 → 1028, spam et stages exclus" },
      { value: "27,88 €", label: "par lead qualifié, un ROI au-dessus du marché", note: "marché immo France : 20 à 300 €" },
      { value: "69 592", label: "visites en 2025", note: "+3 588 vs 2024" },
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
  {
    slug: "tattoo",
    name: "Bastia Tattoo / Graphicaderme",
    activity: "Deux salons de tatouage et de piercing — Orange et Bastia",
    baseline: "Deux villes, un seul site, et 179 visuels à faire tenir sans perdre en vitesse.",
    year: "2026",
    duration: "5 mois",
    stack: ["Astro", "Storyblok", "Vercel", "Resend", "Galerie filtrable", "Schema.org"],
    video: "tattoo",
    poster: "/videos/tattoo-poster.jpg",
    need: [
      {
        title: "Deux salons, une seule façon de se montrer",
        text: "Graphicaderme à Orange, Bastia Tattoo à la Citadelle : deux adresses, une seule équipe, une même exigence. Le site devait porter les deux sans les confondre, ni noyer l'un dans l'autre.",
      },
      {
        title: "Un portfolio photo, pas un poids mort",
        text: "Tatouage et piercing se choisissent sur une image. Le portfolio devait montrer beaucoup, en grand et parfois en vidéo, tout en restant rapide à charger. La performance faisait partie du brief.",
      },
      {
        title: "Être trouvé quand on cherche un tatoueur",
        text: "Pour les deux salons, la recherche Google est un canal d'acquisition majeur. Le référencement devait être pensé dès la création, avec notre partenaire <a href=\"https://annmof.fr\" target=\"_blank\" rel=\"noopener\">annmof</a>.",
      },
    ],
    work: [
      {
        title: "Galerie filtrable, 179 visuels",
        text: "Trois filtres par catégorie, aperçu vidéo au survol. Le visiteur trouve le style qui lui ressemble avant d'écrire — et le piercing ne finit plus dans la même case que le tatouage.",
      },
      {
        title: "Avis, questions et accès",
        text: "Carrousel d'avis clients, questions fréquentes imbriquées, plan d'accès et agenda : l'essentiel des demandes courantes est traité sans un seul appel.",
      },
      {
        title: "Référencement par ville",
        text: "Données structurées Schema.org sur chaque page, sitemap et balises canoniques : chaque salon est indexable séparément, avec ses propres données locales. Le tout travaillé avec <a href=\"https://annmof.fr\" target=\"_blank\" rel=\"noopener\">annmof</a>.",
      },
    ],
    results: [
      { value: "4,7/5", label: "sur plus de 235 avis Google", note: "salon d'Orange" },
      { value: "5/5", label: "sur 35 avis Google", note: "salon de Bastia" },
      { value: "179", label: "visuels filtrables en galerie", note: "84 / 61 / 34 par catégorie" },
    ],
    timeline: [
      { date: "2026", text: "Un nouveau salon rejoint les deux premiers" },
      { date: "À venir", text: "Projets SEO avec annmof" },
    ],
  },
  {
    slug: "velletaz",
    name: "Velletaz Groupe",
    activity: "Pépinières viticoles — 4 agences régionales, 2 sites de production",
    baseline: "Un catalogue de 83 cépages à rendre vendable, sans perdre une seule des 251 URLs d'un site WordPress de quinze ans.",
    year: "2024",
    duration: "depuis novembre 2024",
    stack: ["Astro", "Sanity", "Netlify", "Brevo", "4 langues", "Image CDN"],
    video: "velletaz",
    poster: "/videos/velletaz-poster.jpg",
    need: [
      {
        title: "Quarante ans de catalogue à rendre accessible",
        text: "Quatre agences, deux sites de production, des cépages, des porte-greffes, des raisins de table : tout était au catalogue papier, rien n'était commandable en ligne. « Mon site WordPress a 15 ans, mon référencement est nul. Qu'est-ce que je fais pour changer ça ? » Réponse : une refonte complète, car les performances du site plombaient son SEO.",
      },
      {
        title: "Un site à ne pas casser",
        text: "Le WordPress tournait depuis quinze ans, avec une autorité installée et des URL indexées. Refondre ne voulait pas dire repartir de zéro : le référencement existait, il devait survivre.",
      },
      {
        title: "Parler à un professionnel comme à un particulier",
        text: "Le même catalogue ne s'adresse pas de la même façon à un viticulteur et à un jardinier. Le formulaire devait poser les bonnes questions et envoyer la demande à la bonne personne.",
      },
    ],
    work: [
      {
        title: "83 fiches produits, éditoriales",
        text: "Cépages, porte-greffes, raisins de table : chaque référence a sa page, gérée en CMS, avec ses caractéristiques techniques. Le catalogue vit dans Sanity, le site est statique.",
      },
      {
        title: "251 redirections reprises",
        text: "Chaque URL de l'ancien WordPress a été redirigée vers sa nouvelle adresse. Le référencement construit pendant quinze ans a été transmis, pas reconstruit.",
      },
      {
        title: "Une calculette de plants",
        text: "Un outil pratique : combien de plants pour ma surface. Le calcul se fait sur le site, sans échange commercial préalable.",
      },
      {
        title: "Un site multilingue, deux publics",
        text: "Français, anglais, italien, espagnol : un même contenu, décliné sur les quatre marchés. Chaque version est signalée à Google pour éviter qu'elle soit perçue comme du contenu dupliqué.",
      },
    ],
    results: [
      { value: "187k", label: "impressions Google", note: "référence reconnue sur la vigne" },
      { value: "83", label: "fiches produits au catalogue", note: "cépages, porte-greffes, raisins de table" },
      { value: "4", label: "langues en ligne", note: "FR, EN, IT, ES" },
    ],
    timeline: [
      { date: "2024", text: "Refonte complète du site" },
      { date: "2025", text: "Calculette interactive" },
      { date: "2026", text: "Nouveau formulaire, plus complet, pour répondre à l'évolution des contacts par le site" },
    ],
  },
  {
    slug: "laparentelle",
    name: "La Parent'elle",
    activity: "Lieu dédié à la femme et à la famille — bien-être, parentalité, sport",
    baseline: "Dix-sept activités, seize professionnel·les, et une réservation assez souple pour ne perdre aucune séance.",
    year: "2026",
    duration: "2 semaines",
    stack: ["Astro", "Storyblok", "Supabase", "Vercel", "Resend", "Invites calendrier (.ics)"],
    video: "laparentelle",
    poster: "/videos/laparentelle-poster.jpg",
    need: [
      {
        title: "Un lieu qui ouvre ses portes",
        text: "Mazan, au pied du Ventoux : un espace pluridisciplinaire pour la femme et la famille. Pilates, yoga doux, massage Kobido, porte-bébé, bébé-signe, premiers secours, pleurs et sommeil. Tout devait être réservable, tout devait être expliqué.",
      },
      {
        title: "Réserver la bonne séance, avec la bonne personne",
        text: "Un massage Kobido n'est pas un cours de hatha, et un accompagnement périnatal n'est pas un atelier sommeil. Avec dix-sept activités et seize professionnel·les, les façons de réserver sont nombreuses. Il fallait un système assez souple pour tout absorber, et assez simple pour tourner sans quelqu'un derrière l'écran 24 h/24.",
      },
      {
        title: "Un imprévu, ça arrive",
        text: "Un rendez-vous de bébé, ça se décale. Sans annulation possible, les créneaux se perdaient et le planning des praticiens se remplissait de vides.",
      },
    ],
    work: [
      {
        title: "Réservation en ligne, simple à configurer",
        text: "Une fiche par praticien, et chaque séance est reliée à cette fiche : mail, téléphone et informations suivent sans réglage supplémentaire. Une seule source de vérité, rien à ressaisir. Deux emails partent automatiquement, un pour le praticien, un pour le client, avec l'invitation calendrier en pièce jointe.",
      },
      {
        title: "Annulation par lien, sans appel",
        text: "Chaque réservation reçoit un lien d'annulation, valable jusqu'à 24 h avant le rendez-vous. Le créneau est libéré automatiquement, sans échange par téléphone.",
      },
      {
        title: "Un planning lisible, pas un tableur",
        text: "Planning mensuel filtré par type d'activité, fiches de professionnels avec leurs prochaines séances, catalogue des 17 activités. Trouver une séance compatible se fait en trois clics.",
      },
      {
        title: "Référencement et performance",
        text: "Données structurées Organization, Event, Person, FAQPage et BreadcrumbList, sitemap et robots sur mesure, images Storyblok converties en WebP. Score PageSpeed de 99 sur mobile, sans serveur à l'arrivée.",
      },
    ],
    results: [
      { value: "63%", label: "des clics depuis Google sur le nom de la marque", note: "N°1 en local" },
      { value: "99", label: "de score PageSpeed sur mobile", note: "100 % statique, 0 serveur à l'arrivée" },
      { value: "90", label: "séances réservables en ligne", note: "17 activités, 16 professionnelles" },
    ],
    timeline: [
      { date: "2026", text: "Après son expérience sur La Parent'elle, Cécile Paulin, directrice du lieu, nous confie la refonte de son site personnel." },
    ],
  },
  {
    slug: "pilates",
    name: "Pilates nomade",
    activity: "Studio de Pilates et accompagnements psycho-corporels — Brive-la-Gaillarde",
    baseline: "Un branding tout neuf, une facture de 4 000 € pour mettre son site WordPress à jour. Elle a préféré nous appeler.",
    year: "2026",
    duration: "7 mois",
    stack: ["Astro", "Storyblok", "Vercel", "Resend", "B-Sport", "Avis Google automatisés"],
    video: "pilates",
    poster: "/videos/pilates-poster.jpg",
    need: [
      {
        title: "Un site qui ne suivait plus",
        text: "Quatre ans de WordPress, des pages dispersées, des images trop lourdes et des chemins qui ne menaient plus nulle part. La remise à niveau ne pouvait pas être un simple rafraîchissement.",
      },
      {
        title: "Les avis étaient sur Google, pas sur le site",
        text: "42 avis, 5 sur 5 — et autant de preuves qui restaient sur une autre plateforme, sans jamais arriver chez le client. Les afficher sur le site, c'était déjà un argument.",
      },
      {
        title: "Un planning qui change tout le temps",
        text: "Cours en studio, stages et retraites, accompagnements individuels, un programme vidéo : des offres très différentes, et un planning qui bouge. La réservation devait suivre, sans saisie manuelle.",
      },
    ],
    work: [
      {
        title: "Réservation branchée sur l'outil métier",
        text: "Le planning affiche le niveau et l'état de chaque cours ; la réservation part vers le backoffice B-Sport et déclenche l'email de confirmation. Aucun créneau ne double, aucune saisie à la main.",
      },
      {
        title: "Avis Google récupérés automatiquement",
        text: "Les avis de la fiche Google sont récupérés par API, mis en cache 30 jours et affichés en carrousel, avec leurs photos. Une preuve qui se met à jour sans intervention.",
      },
      {
        title: "37 redirections depuis WordPress",
        text: "Toutes les anciennes URL — articles, pages WP, fichiers wp-content — ont été redirigées. Les liens partagés et le référencement sont restés valides.",
      },
      {
        title: "Contenu éditorial et pages de tarifs",
        text: "Blog, stages et retraites, therapy holistique, Accompagnements individuels, programme vidéo, trois grilles tarifaires et CGV en PDF. Un site de service complet, en statique.",
      },
    ],
    results: [
      { value: "5/5", label: "sur 42 avis Google", note: "10 avis affichés automatiquement" },
      { value: "750+", label: "visites en 6 mois", note: "N°1 sur la région de Brive" },
      { value: "37", label: "redirections reprises depuis WordPress" },
    ],
    quote: {
      text: "Un très grand merci à Julien et Manon pour leur accompagnement vers mon nouveau site web ! Très disponibles et sérieux j'ai été ravie de faire appel à eux et mon nouveau site est vraiment parfait !",
      author: "Judith Mounal — fondatrice, Pilates nomade",
    },
    timeline: [],
  },
  {
    slug: "steltis",
    name: "Steltis Avocats",
    activity: "Avocats fiscalistes — Lyon, entreprises et particuliers",
    baseline: "Un cabinet qui s'installe : un site clair, un référencement local, et une porte d'entrée pour les questions fiscales.",
    year: "2024",
    duration: "",
    stack: ["Astro", "Sanity", "Netlify", "SEO local", "Formulaire RGPD"],
    video: "steltis",
    poster: "/videos/steltis-poster.jpg",
    need: [
      {
        title: "Une activité nouvelle, une image à poser",
        text: "Un cabinet d'avocats fiscalistes qui s'installe à Lyon : la question n'est pas de refaire un site, mais de poser les premières pierres — identité, structure, contenus.",
      },
      {
        title: "Deux publics, une même expertise",
        text: "L'entreprise et le particulier n'ont ni les mêmes questions ni les mêmes mots. Il fallait un site qui parle aux deux sans exclure l'un ou l'autre.",
      },
      {
        title: "Des clients qui regardent sous le capot",
        text: "Les clients d'un cabinet fiscaliste sont très à l'aise avec le web, et repèrent vite un site approximatif. Pour poser la confiance, il fallait un site irréprochable.",
      },
      {
        title: "Être trouvable, localement",
        text: "Pour un cabinet, la recherche se fait à l'échelle d'une ville. Le référencement local n'était pas une option : c'était le canal.",
      },
    ],
    work: [
      {
        title: "19 blocs éditables en CMS",
        text: "Hero, services, valeurs, FAQ, blog, témoignages : autant de composants que le cabinet peut faire évoluer seul, sans qu'une ligne de code soit nécessaire.",
      },
      {
        title: "Blog avec filtres et scroll infini",
        text: "Des articles classés par catégorie, chargés à la demande. Un cabinet fiscaliste vit de ses publications : elles sont au cœur du site, pas dans un coin oublié.",
      },
      {
        title: "Formulaire et mentions RGPD",
        text: "Formulaire de contact affiché, mentions de traitement des données modifiables depuis le CMS. La conformité se règle dans l'outil, pas dans un fichier oublié.",
      },
      {
        title: "En-têtes de sécurité et balises",
        text: "HSTS, X-Frame-Options, snif MIME, sitemap, robots et balises canoniques. Un site de confiance commence par des fondations propres.",
      },
    ],
    results: [
      { value: "15", label: "contacts qualifiés par mois", note: "entreprises et particuliers" },
      { value: "19", label: "blocs éditables en CMS" },
      { value: "100%", label: "statique, déployé sur Netlify" },
    ],
    timeline: [
      { date: "2023", text: "Direction artistique et gabarits" },
      { date: "2024", text: "Mise en ligne et premiers contenus" },
      { date: "2025", text: "SEO local et prises de contact qualifiées" },
    ],
  },
];

export interface PortfolioItem {
  slug: string;
  name: string;
  desc: string;
  stats: string[];
  year?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    slug: "architea",
    name: "Architéa",
    desc: "Réseau national de contractants généraux — direction artistique, CMS sur mesure, automatisations CRM et SEO",
    stats: ["70k+ visites/an", "27,88 €/lead qualifié", "700+ pages"],
    year: "2023",
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
