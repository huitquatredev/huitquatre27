---
name: huitquatre
description: Atelier Suisse à l'accent Acide — noir massif, lime électrique, prix affichés.
colors:
  accent:
    value: "#D4FF00"
  ink:
    value: "#000000"
  paper:
    value: "#FFFFFF"
  gray:
    value: "#777777"
  muted:
    value: "rgba(255,255,255,0.6)"
  alert:
    value: "#FF3333"
typography:
  display:
    fontFamily: "'Space Grotesk', 'Satoshi', sans-serif"
    fontSize: "clamp(2.5rem, 1.8rem + 3.5vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Space Grotesk', 'Satoshi', sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.05
  title:
    fontFamily: "'Space Grotesk', 'Satoshi', sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "'Satoshi', -apple-system, sans-serif"
    fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)"
    fontWeight: 400
rounded:
  pill: "2.5em"
  card: "12px"
  card-lg: "16px"
  sm: "6px"
spacing:
  container: "1200px"
  section: "clamp(4rem, 3rem + 5vw, 8rem)"
  xl: "clamp(2rem, 1.5rem + 2.5vw, 4rem)"
  md: "clamp(1rem, 0.8rem + 1vw, 1.5rem)"
  sm: "clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1em"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
  button-inverted:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "rgba(255,255,255,0.03)"
    rounded: "{rounded.card}"
    padding: "clamp(1rem, 0.8rem + 1vw, 1.5rem)"
---

# Design System: huitquatre

## Overview

**Creative North Star: "Atelier Suisse"**

Une grille suisse rigoureuse tendue sur un fond noir massif, percutée d'un lime électrique. La typographie fait la hiérarchie, l'accent ne décore jamais : il signale. Le ton est électrique et vif, les composants tactiles — tout invite au clic, rien ne ressemble à un template corporate (l'anti-référence absolue).

**Key Characteristics:**
- Noir dominant, lime parcimonieux mais franc.
- Titres monumentaux uppercase, filets de texte aérés en dessous.
- Boutons pilule à double icône animée (système Osmo).
- Cartes plates, halos lumineux, zéro ombre portée.

## Colors

Noir atelier piqué d'un acide électrique ; les gris ne chuchotent jamais en dessous du lisible.

### Primary
- **Acide** (#D4FF00) : actions, prix, états actifs, pixels de transition, logomark. Jamais en fond sauf rupture volontaire (section CTA finale).

### Neutral
- **Noir atelier** (#000000) : fond de page et de toutes les sections.
- **Blanc** (#FFFFFF) : texte courant et titres.
- **Gris franc** (#777777) : textes secondaires de taille courante (contraste ~4.6:1, seuil AA tenu).
- **Blanc atténué** (rgba(255,255,255,0.6)) : micro-textes et labels techniques, plancher de lisibilité.

### Named Rules
**The Signal Rule.** L'Acide signale une action, un prix ou un état — jamais une décoration. S'il est partout, il ne signale plus rien.
**The Muted Floor Rule.** Aucun texte informatif sous rgba(255,255,255,0.6) ; en dessous, c'est du décor, pas du contenu.

## Typography

**Display Font:** Space Grotesk (avec Satoshi)
**Body Font:** Satoshi (avec -apple-system, Segoe UI)
**Label/Mono Font:** JetBrains Mono (avec Fira Code)

**Character:** La display cogne en capitales compactes (chasse -0.03em) ; le corps respire en Satoshi généreux ; la mono chiffre les preuves, prix et scores.

### Hierarchy
- **Display** (700, clamp(2.5rem, 1.8rem + 3.5vw, 5rem), 1.05) : titres de sections, uppercase. Retombe à text-2xl sur mobile.
- **Headline** (700, clamp(2rem, 1.5rem + 2.5vw, 3.5rem), 1.05) : prix XXL, chiffres preuves.
- **Title** (700, clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem), 1.1) : intertitres de blocs, noms de projets portfolio.
- **Body** (400, clamp(1rem, 0.9rem + 0.5vw, 1.125rem), 1.6) : paragraphes, réponses FAQ.
- **Label** (400, clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem), uppercase + chasse 0.1em) : eyebrows, index, compteurs, unités.

### Named Rules
**The Two-Beat Rule.** Les titres claquent en deux temps (« Votre site web. / L'esprit tranquille. »), le second en Acide.

## Layout

Conteneur 1200px centré, gouttières clamp(1rem, 0.5rem + 2.5vw, 2rem). Sections espacées de space-3xl, aucune section ne colle à sa voisine sauf rupture volontaire (CTA lime → footer noir). Grilles 3 colonnes desktop → 1 colonne mobile (point de bascule 768px, hero 1024px). Scènes 3D centrées max 700–1000px.

## Elevation & Depth

Pas d'ombres portées : la profondeur vient de halos lumineux utilitaires (radial lime 10–18% + flou 50px derrière les scènes) qui guident l'œil vers le point d'action. Les cartes restent plates (fond blanc 3%, bordure blanche 8%).

### Named Rules
**The Halo Rule.** Un halo = un point focal (fenêtre hero, scène chaos, follower portfolio). Jamais de halo décoratif sans contenu.

## Shapes

Pilules (2.5em) pour tout ce qui se clique ; cartes 12px (16px pour les grands conteneurs) ; 4–6px pour les éléments internes (badges, pastilles, champs). Pastilles et dots en 50%. Pas de coins carrés sauf les pixels de transition (volontairement bruts).

## Components

### Buttons
- **Shape:** pilule (2.5em), hauteur 2.75em (3.25em en large).
- **Primary:** fond Acide, texte noir ; au survol, l'icône glisse (double wrap default/hover, easings Osmo).
- **Hover / Focus:** animation d'icône + `outline` Acide 2px au focus-visible.
- **Secondary:** fond transparent, texte et bordure Acide. **Inverted:** fond noir, texte Acide (réservé aux fonds Acide).

### Chips
- **Style:** pilule, bordure Acide 50%, texte Acide ; sélectionné : fond Acide plein, texte noir.
- **State:** toggle visuel immédiat (portfolio options, chat) ; désactivé à 40% d'opacité.

### Cards / Containers
- **Corner Style:** 12px (16px grands conteneurs).
- **Background:** blanc 3%.
- **Shadow Strategy:** aucune (voir Elevation).
- **Border:** blanc 8% ; 5% pour les surfaces imbriquées.
- **Internal Padding:** space-md à space-lg.

### Inputs / Fields
- **Style:** pilule 2.5em, fond noir 40%, bordure blanche 15%.
- **Focus:** bordure Acide.
- **Error / Disabled:** message rouge alerte sous le champ ; désactivé à 50%.

### Navigation
- Pills fixes verre-dépoli (noir 80%, flou 12px, bordure blanche 40%, 2px) : logo à gauche, menu à droite. Menu fullscreen : panneau blanc, liens display 4em noirs numérotés, détails en bas. Mobile : identique, liens 2.75em.

### Float badges (signature)
- Pastille verte (fond rgba(72,199,100,0.2), texte #48c764, radius 6px) pour les scores ; rouge (#FF3333) pour les alertes. Toujours accolée au label, jamais seule.

## Do's and Don'ts

### Do:
- **Do** réserver l'Acide aux actions, prix et états (The Signal Rule).
- **Do** garder les micro-textes au-dessus du plancher atténué (The Muted Floor Rule).
- **Do** animer en expo/power avec sorties scrubbed ; pixel et steps uniquement pour le langage transition.
- **Do** respecter `prefers-reduced-motion` sur chaque animation (bascule instantanée).

### Don't:
- **Don't** mettre de dégradé bleu, de photo stock souriante ou de section générique (anti-référence corporate template).
- **Don't** utiliser d'ombres portées — halos seulement.
- **Don't** descendre les bordures de cartes sous blanc 8% (5% réservé aux imbrications).
- **Don't** inventer une variante de bouton : primary, secondary, inverted, point.
