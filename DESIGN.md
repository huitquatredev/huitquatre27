---
name: huitquatre
description: Le silence qui en dit long — lin papier, encre nuit verte, un seul signal olive. 4 blocs, h4 caché.
colors:
  accent:
    value: "#4E6600"
  accent-ink:
    value: "#4E6600"
  ink:
    value: "#24382E"
  paper:
    value: "#F7F3E8"
  secondary:
    value: "#F7F3E8"
  gray:
    value: "#595959"
  muted:
    value: "rgba(0,0,0,0.6)"
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
  bloc: "26px"
  sm: "6px"
spacing:
  container: "1200px"
  section: "clamp(4rem, 3rem + 5vw, 8rem)"
  xl: "clamp(2rem, 1.5rem + 2.5vw, 4rem)"
  md: "clamp(1rem, 0.8rem + 1vw, 1.5rem)"
  sm: "clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "1em"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
  button-inverted:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "rgba(0,0,0,0.03)"
    rounded: "{rounded.card}"
    padding: "clamp(1rem, 0.8rem + 1vw, 1.5rem)"
---

# Design System: huitquatre

## Overview

**Creative North Star: "Le silence qui en dit long."**

Le logo dit tout : 4 blocs pleins qui dessinent en creux un `h` et un `4` ouvert (le vide entre les blocs). Le plein construit, le vide signe. La DA applique ça partout : surface sage et maîtrisée, second niveau caché pour qui s'attarde.

**Key Characteristics:**
- Fond lin papier, encre nuit verte, un seul signal olive par écran.
- Titres monumentaux uppercase, beaucoup d'air — le vide est une matière.
- Sage en surface (panier à 1990€ oblige), impertinent en second niveau.
- Écolo ≠ moche : la finition (typo, photo réelle, micro-interactions) est la preuve.

## Logo — les 4 blocs

Géométrie `favicon.svg` : 2 grands horizontaux + 2 petits verticaux, ratio exact 2:1, coins arrondis ~26px, posés en diagonale inversée. Le vide central dessine `h` + `4` ouvert.

### Règles
- **Ne jamais montrer le plein sans faire deviner le vide.** Loader d'ouverture, favicon, footer : les blocs s'écartent ou s'inversent (lin/encre) pour révéler le `h4`.
- **Radius signature 26px** (`rounded.bloc`) : masques photo, pastilles logo, loader. Une photo détourée = un 5e bloc.
- **Contreformes ouvertes** : préférer les glyphes à `4`/`a`/`e` ouverts comme le `4` du logo. Space Grotesk convient, ne pas le remplacer par une géométrique fermée.

## Colors

Lin papier + nuit verte, signal olive parcimonieux. Fini le lime électrique sur noir (trop rave, pas crédible à 2000€).

### Primary
- **Encre nuit verte** (#24382E) : texte, boutons primaires, fonds forêt (hero vidéo, CTA final). Source unique dans `global.css` (`--color-primary`) : tout s'y réfère, les variantes translucides en `color-mix()`. Contraste lin/forêt ≥ 10:1.
- **Lin** (#F7F3E8) : fonds de page et texte sur encre. **Vin** (#823038) : accent chaud et surfaces, toujours avec du texte lin.
- **Olive signal** (#4E6600) : le seul accent. Prix, CTA fantôme, focus, 1 détail par écran. Passe sur blanc/lin (le lime n'y passait pas).

### Neutral
- **Gris** (#595959) : textes secondaires courants.
- **Atténué** (rgba(0,0,0,0.6)) : micro-textes et labels, plancher de lisibilité.
- **Lignes** : 12% noir (défaut), 8% imbrications, 22% fort. Surfaces : 3% / 6% noir.
- **Alerte** (#FF3333) : erreurs uniquement.

### Named Rules
**The Signal Rule.** L'olive signale une action, un prix ou un état — jamais une décoration. Un seul signal par écran.
**The Muted Floor Rule.** Aucun texte informatif sous rgba(0,0,0,0.6).

## Typography

**Display:** Space Grotesk — **Body:** Satoshi — **Label/Mono:** JetBrains Mono.

**Character:** display uppercase compacte (-0.03em), corps généreux 1.6, mono pour preuves, prix, labels, clins d'œil.

### Hierarchy
- **Display** (700, 2.5–5rem, 1.05) : titres, uppercase. 15vw max sur mobile hero.
- **Headline** (700, 2–3.5rem) : prix XXL, chiffres preuves.
- **Title** (700, 1.5–2.5rem, 1.1) : intertitres, noms projets.
- **Body** (400, 1–1.125rem, 1.6) : paragraphes, FAQ.
- **Label** (400, 0.75–0.875rem, uppercase + 0.1em) : eyebrows, index, second degré.

### Named Rules
**The Two-Beat Rule.** Titres en deux temps (« Votre site web. / L'esprit tranquille. »), second temps sans couleur criarde — le contraste vient de la casse et de l'air, pas du fluo.
**The Whisper Rule.** Le second degré vit en label mono petit, jamais dans le titre ni le prix.
**The huitquatre Rule.** Le nom « huitquatre » s'écrit toujours en minuscules, partout (titres, méta, corps, alt, loader), jamais en capitale ni en majuscule.

## Voice — 90/10

90% preuve sage (prix net, chiffres, délais), 10% clin d'œil caché (légende mono, `title=`, footer, 404, loader). Celui qui survole voit du sérieux, celui qui s'attarde voit l'impertinence. Jamais d'ironie dans le prix, le CTA ou l'offre.

Baseline : **« le silence qui en dit long. »** Toujours en minuscules, mono ou italique léger, jamais en display criée.

## Layout

Conteneur 1200px, gouttières clamp(1–2rem). Sections espacées de space-3xl — le vide est une matière, aucune section ne colle à sa voisine sauf rupture volontaire (CTA encre → footer lin). Grilles 3→1 colonnes (768px, hero 1024px).

## Elevation & Depth

Pas d'ombres, pas de halos lime. Profondeur par le papier : grain photographique global (opacité 0.035, voir `global.css`), scrims verts sur image (55%→transparent), cartes plates fond noir 3% + bordure 12%.

## Shapes

Pilules (2.5em) pour tout ce qui se clique ; cartes 12px (16px grands conteneurs) ; **blocs 26px** pour tout ce qui cite le logo ; 4–6px internes. Pas de coins carrés sauf pixels de transition (bruts, volontaires).

## Motion & Loader

**Loader « clé des 4 blocs » (1×/session, ~1,4s, CSS pur, 4 divs, transform uniquement) :**
1. 0.0s — fond lin, 4 blocs encre collés au centre.
2. 0.3s — les blocs s'écartent, le vide révèle `h4`.
3. 0.9s — mono petit : « le silence qui en dit long. »
4. 1.4s — dissolve vers hero, event `loaderComplete` (réutiliser `hq-loader-seen`).
- `prefers-reduced-motion` : logo fixe 0,4s. Watchdog 6s conservé. Pas de GSAP pour le loader.

**Général :** expo/power + sorties scrubbed ; **transitions de page : double wipe** (deux panneaux pleine page — argile devant, forêt en dégradé derrière — montent en cascade de 0,25s puis découvrent la page suivante). `prefers-reduced-motion` sur chaque animation.

## Media — écolo ≠ simpliste

- Photos/vidéos réelles de Piolenc (vignes), jamais de stock générique. La Pexels actuelle est un placeholder.
- Vidéo : `preload="none"` + poster local compressé, lecture au clic ou `canplay`. Prouver le 100 PageSpeed avec le hero lui-même.
- Images détourées sur fond uni, radius bloc 26px.

## Components

### Buttons (Osmo 052, double icône)
- **Primary :** fond encre, texte lin. Survol : icône glisse, focus olive 2px.
- **Secondary :** transparent, texte + bordure olive/encre.
- **Inverted :** fond vin, texte lin (sur fonds forêt).
- **Ghost :** lien souligné olive, sans pilule.

### Chips
- Pilule, bordure olive 50%, texte olive ; sélectionné : fond olive, texte lin. Désactivé à 40%.

### Cards / Containers
- 12px (16px grands), fond noir 3%, bordure 12% (5–8% imbrications), padding space-md→lg.

### Inputs / Fields
- Pilule 2.5em, fond blanc 70%, bordure noire 25%. Focus : bordure olive. Erreur : message alerte dessous ; désactivé à 50%.

### Navigation
- Pills verre-dépoli (blanc 80%, flou 12px, bordure noire 25%) : logo à gauche, menu à droite. Menu fullscreen lin, liens display noirs numérotés.

### Float badges (signature)
- Pastille verte (fond rgba(72,199,100,0.2), texte #48c764, 6px) scores ; rouge alertes. Toujours accolée au label.

## Do's and Don'ts

### Do:
- **Do** réserver l'olive à 1 signal par écran (Signal Rule).
- **Do** laisser respirer : air = luxe + écologie.
- **Do** cacher un second niveau par page (Whisper Rule).
- **Do** révéler le `h4` au moins une fois par visite (loader).
- **Do** respecter `prefers-reduced-motion` partout.

### Don't:
- **Don't** remettre du lime électrique, du fond noir massif, du halo fluo.
- **Don't** mettre de blague dans le prix, le CTA ou l'offre.
- **Don't** utiliser de photo/vidéo stock générique ou de vidéo externe lourde en hero.
- **Don't** utiliser d'ombres portées.
- **Don't** inventer une variante de bouton : primary, secondary, inverted, ghost, point.
