# Osmo Supply - Resource Context (Code): Sticky Title Scroll Effect

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

<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"></script>

---

## HTML

```html
<section data-sticky-title="wrap" class="sticky-title-wrapper">
  <div class="sticky-title-container">
    <div class="sticky-title-inner">
      <h2 data-sticky-title="heading" class="sticky-title-el">
        Use this effect to really emphasize your message
      </h2>
      <h2 data-sticky-title="heading" class="sticky-title-el is--stacked">
        You can layer multiple headings on each other
      </h2>
      <h2 data-sticky-title="heading" class="sticky-title-el is--stacked">
        Add as many as you want, but I like the balance of 3
      </h2>
    </div>
  </div>
</section>
```

---

## CSS

```css
.sticky-title-wrapper {
  background-image: linear-gradient(#000, #777);
  width: 100%;
  height: 350vh;
  position: relative;
}

.sticky-title-container {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-left: 1.5em;
  padding-right: 1.5em;
  display: flex;
  position: sticky;
  top: 0;
}

.sticky-title-inner {
  text-align: center;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 60em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

.sticky-title-el {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 5em;
  font-weight: 500;
  line-height: 1;
}

.sticky-title-el.is--stacked {
  visibility: hidden;
  position: absolute;
}

@media screen and (max-width: 767px) {
  .sticky-title-el {
    font-size: 3.5em;
  }
}
```

---

## JavaScript

```js
gsap.registerPlugin(ScrollTrigger, SplitText)

function initStickyTitleScroll() {
  const wraps = document.querySelectorAll('[data-sticky-title="wrap"]')

  wraps.forEach((wrap) => {
    const headings = Array.from(
      wrap.querySelectorAll('[data-sticky-title="heading"]')
    )

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top 40%",
        end: "bottom bottom",
        scrub: true
      }
    })

    const revealDuration = 0.7,
      fadeOutDuration = 0.7,
      overlapOffset = 0.15

    headings.forEach((heading, index) => {
      // Save original heading content for screen readers
      heading.setAttribute("aria-label", heading.textContent)

      const split = new SplitText(heading, { type: "words,chars" })

      // Hide all the separate words from screenreader
      split.words.forEach((word) => word.setAttribute("aria-hidden", "true"))

      // Reset visibility on the 'stacked' headings
      gsap.set(heading, { visibility: "visible" })

      const headingTl = gsap.timeline()
      headingTl.from(split.chars, {
        autoAlpha: 0,
        stagger: { amount: revealDuration, from: "start" },
        duration: revealDuration
      })

      // Animate fade-out for every heading except the last one.
      if (index < headings.length - 1) {
        headingTl.to(split.chars, {
          autoAlpha: 0,
          stagger: { amount: fadeOutDuration, from: "end" },
          duration: fadeOutDuration
        })
      }

      // Overlap the start of fade-in of the new heading a little bit
      if (index === 0) {
        masterTl.add(headingTl)
      } else {
        masterTl.add(headingTl, `-=${overlapOffset}`)
      }
    })
  })
}

// Initialize Sticky Title Scroll Effect
document.addEventListener("DOMContentLoaded", () => {
  initStickyTitleScroll()
})
```

---

## Documentation for Resource

This creates a smooth, scroll-based text animation where multiple stacked headings are revealed sequentially. The headings animate in and out using GSAP’s ScrollTrigger and SplitText, emphasizing your content as users scroll.

### HTML Structure & Requirements

- **Wrapper Element:**Use an element with the attribute `data-sticky-title="wrap"`.Set its height to define the scrolling area (for example, `height: 300vh`; or any value you decide based on the number of headings).
- **Sticky Container:**Inside the wrapper, include a sticky container (e.g., <div class="sticky-title-container">).**Important:** Ensure that no parent element has overflow: hidden, as this is crucial for the sticky behavior to work properly.
- **Headings:**Add your headings with the attribute `data-sticky-title="heading"`.In CSS, the headings meant to stack are hidden (for example, using classes like `.is--stacked` which set `visibility: hidden` and `position: absolute`).This structure allows you to have as many headings as you want; just make sure you update the height of the wrapper accordingly.

### How It Works

- **Dynamic Setup:**The resource scans for all wrappers and their respective headings on the page.
- **SplitText & ARIA:**Each heading is split into words and characters using GSAP’s SplitText, while the full text is preserved in an `aria-label` for accessibility.The individual words are hidden from screen readers via `aria-hidden="true"`.
- **Animation Timeline:**A master timeline (per wrapper) handles the sequential animation.Each heading fades in first (revealing the characters in sequence) and, if it’s not the final heading, fades out (with characters disappearing in reverse order) before the next heading starts its reveal.A slight overlap can be implemented between fade-out and the next fade-in for a more dynamic transition.

### Useful Tip

For an extra smooth scroll effect, consider integrating [Lenis](https://www.osmo.supply/resource/lenis-smooth-scroll-setup)  for smooth scrolling.
