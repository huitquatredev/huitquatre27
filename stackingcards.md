# Osmo Supply - Resource Context (Code): Stacking Cards 3D (CSS)

## Instructions for AI

You are receiving a production-ready resource from Osmo Supply. This resource has been professionally built, tested, and works exactly as intended. Follow these rules strictly:

### Rules

1. **Do not modify, refactor, or "improve" any code unless the user explicitly asks you to.**
2. **Do not suggest structural changes, optimizations, or alternative approaches unprompted.**
3. **Do not remove, rename, or restructure any `data-` attributes.** They are used for DOM targeting in JavaScript and are essential to how this resource works.
4. **Respect the animation approach used.** Animations may be CSS-based, JavaScript-based (typically GSAP), or a combination. Do not convert between approaches unless the user asks.
5. **Wait for the user to tell you what they want.** Your only job is to understand the code and respond to specific requests.

### Response format

After reading everything below, respond with:

- A one-sentence summary of what this resource does.
- Then ask the user these questions to understand what they need:

1. **Are you integrating this into an existing project, and if so, what stack?**
2. **Do you want to adjust any visual styling?**
3. **Do you want to modify any animation behavior?**
4. **Do you need to adapt the markup to fit your structure?**
5. **Or is there something else entirely you'd like to do with this resource?**

Wait for the user to respond before writing any code. Do not assume what they need.

---

## Dependencies (External Scripts)

No external scripts are used in this resource.

---

## HTML

```html
<section class="demo-section">
  <div class="card-stack">
    <div class="card-stack__item">
      <div class="card-stack__item-inner">
        <div class="card-stack__item-top">
          <h2 class="card-stack__item-h">Here's a sticky card</h2>
          <p class="card-stack__item-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div class="card-stack__item-bottom"></div>
      </div>
    </div>
    <div class="card-stack__item is--2">
      <div class="card-stack__item-inner">
        <div class="card-stack__item-top">
          <h2 class="card-stack__item-h">Here's a sticky card</h2>
          <p class="card-stack__item-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div class="card-stack__item-bottom"></div>
      </div>
    </div>
    <div class="card-stack__item is--3">
      <div class="card-stack__item-inner">
        <div class="card-stack__item-top">
          <h2 class="card-stack__item-h">Here's a sticky card</h2>
          <p class="card-stack__item-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div class="card-stack__item-bottom"></div>
      </div>
    </div>
    <div class="card-stack__item is--4">
      <div class="card-stack__item-inner">
        <div class="card-stack__item-top">
          <h2 class="card-stack__item-h">Here's a sticky card</h2>
          <p class="card-stack__item-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div class="card-stack__item-bottom"></div>
      </div>
    </div>
    <div class="card-stack__item is--5">
      <div class="card-stack__item-inner">
        <div class="card-stack__item-top">
          <h2 class="card-stack__item-h">Here's a sticky card</h2>
          <p class="card-stack__item-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div class="card-stack__item-bottom"></div>
      </div>
    </div>
  </div>
</section>
```

---

## CSS

```css
.demo-section {
  justify-content: center;
  padding: 10svh 2em;
  display: flex;
}

.card-stack {
  --stack-row: 100svh;
  --stack-top: 10svh;
  --stack-card-height: calc(var(--stack-row) - 2 * var(--stack-top));
  view-timeline-name: --card-stack;
  grid-auto-rows: var(--stack-row);
  width: 100%;
  max-width: 60em;
  display: grid;
  position: relative;
}

.card-stack__item {
  transform-origin: 50% 100%;
  color: #2b1a12;
  top: var(--stack-top);
  height: var(--stack-card-height);
  background-color: #e8c4b8;
  border-radius: 2em;
  padding: 3em;
  position: sticky;
  overflow: hidden;
}

.card-stack__item.is--2 {
  color: #1d2212;
  background-color: #dde3c0;
}

.card-stack__item.is--3 {
  color: #121a24;
  background-color: #c9d6e8;
}

.card-stack__item.is--4 {
  color: #241c0c;
  background-color: #e6d3a3;
}

.card-stack__item.is--5 {
  color: #1c1224;
  background-color: #d8c7e8;
}

.card-stack__item-inner {
  grid-column-gap: 4em;
  grid-row-gap: 4em;
  flex-flow: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  display: flex;
}

.card-stack__item-top {
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  place-items: end start;
  display: grid;
}

.card-stack__item-h {
  letter-spacing: -0.02em;
  max-width: 5.5em;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Haffer, Arial, sans-serif;
  font-size: 3em;
  font-weight: 500;
  line-height: 0.9;
}

.card-stack__item-p {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1em;
  line-height: 1.3;
}

.card-stack__item-bottom {
  background-color: #00000017;
  border-radius: 1.25em;
  flex: 1;
  width: 100%;
}

.card-stack__item:nth-child(1) {
  --stack-i: 1;
}
.card-stack__item:nth-child(2) {
  --stack-i: 2;
}
.card-stack__item:nth-child(3) {
  --stack-i: 3;
}
.card-stack__item:nth-child(4) {
  --stack-i: 4;
}
.card-stack__item:nth-child(5) {
  --stack-i: 5;
}

@supports (width: calc(sibling-index() * 1px)) {
  .card-stack__item {
    --stack-i: sibling-index();
  }
}

@supports (animation-timeline: view()) {
  .card-stack__item {
    animation: card-stack-away linear forwards;
    animation-timeline: --card-stack;
    animation-range: exit-crossing
      calc(var(--stack-i, 1) * var(--stack-row) - 100svh) exit-crossing
      calc(var(--stack-i, 1) * var(--stack-row) - var(--stack-top));
  }

  .card-stack__item:last-of-type {
    animation: none;
  }
}

@keyframes card-stack-away {
  to {
    transform: perspective(60em) rotateX(25deg) scale(0.85);
    filter: brightness(0.45);
  }
}

@media (prefers-reduced-motion: reduce) {
  .card-stack__item {
    animation: none;
  }
}

@media screen and (max-width: 767px) {
  .card-stack__item-top {
    grid-template-columns: 1fr;
  }

  .card-stack__item-inner {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
  }

  .card-stack__item {
    padding: 2em;
  }
}
```

---

## JavaScript

```js
No JavaScript provided for this resource.
```

---

## Documentation for Resource

A stack of sticky cards. Each card pins near the top of the viewport, and as the next card scrolls up over it, the covered card tips backwards and dims. The whole effect runs on CSS scroll-driven animations, so there is no JavaScript involved. Scrolling back up plays everything in reverse, because scroll position is the 'playhead'.

### How it works

The container is one grid where every card sits in a row of `--stack-row` height, and each card is `position: sticky`. Because the cards are direct children of the tall container, a pinned card stays pinned until the container itself ends, which is what lets later cards move over earlier ones.

A pinned card stops moving, so it cannot measure its own progress. Instead the container broadcasts its journey through the viewport with `view-timeline-name: --card-stack`, and every card animates against that shared timeline through `animation-timeline: --card-stack`.

Each card then plays its animation during its own 'slice' of that journey, set with `animation-range`. The slice is computed from the card's index: it starts exactly when the next card enters the bottom of the viewport and ends when that card pins.

### Custom properties

All tuning happens on the `.card-stack` container:

`--stack-row: 100svh; --stack-top: 10svh; --stack-card-height: calc(var(--stack-row) - 2 * var(--stack-top));`

`--stack-row` is the scroll distance each card gets, which sets the pacing. Larger values give every card a longer moment on screen before the next one arrives.

`--stack-top` is the offset the cards pin at. The card height is derived from these two, so each card always keeps equal space above and below. Override `--stack-card-height` with a fixed value if you want a different balance.

The animation range is built from these same properties, so the timing stays in sync automatically when you change them.

### The animation

Everything a covered card does lives in one keyframe block:

`@keyframes card-stack-away {   to {     transform: perspective(60em) rotateX(25deg) scale(0.85);     filter: brightness(0.45);   } }`

This is the place to make the effect your own. The angle sets how far the card tips, the scale how much it shrinks, and the brightness how much it fades into the background. A smaller `perspective()` value exaggerates the 3D depth, a larger one flattens it. The cards hinge at their bottom edge through `transform-origin: 50% 100%`, so the top edge falls away in the same direction you scroll.

Keep the timing function `linear`. In a scroll-driven animation the easing is your own scrolling, and a curve here would make the cards feel disconnected from the scrollbar. `forwards` keeps covered cards in their end state instead of snapping back.

### Card index

Each card needs to know its position in the stack, which is assigned with `:nth-child` rules. Browsers that support the newer `sibling-index()` function switch to it automatically through a feature query. If you need more than 5 cards, extend the `:nth-child` list with the same pattern.

### The last card

The top card is never covered, so `:last-of-type` removes its animation and it leaves the stack untouched. Once it pins, the whole stack scrolls off together shortly after.

### Browser support

Scroll-driven animations run in Chrome, Edge and Safari 26 or newer. All animation code sits inside `@supports (animation-timeline: view())`, so browsers without support skip it entirely and get a regular sticky card stack: same layout, but no tilt. Without that guard the animation would run as a normal time-based animation with no duration and every card would render in its finished tipped state, so keep the wrapper if you restructure the CSS.

### Reduced motion

Visitors with reduced motion enabled get the static sticky stack without the tilt.
