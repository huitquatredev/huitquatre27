# Osmo Supply - Resource Context (Code): Double Wipe Page Transition

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

<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.17/dist/lenis.css">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/@barba/core@2.10.3/dist/barba.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.17/dist/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/CustomEase.min.js"></script>

---

## HTML

```html
<div data-transition-wrap class="transition">
  <div class="transition__panels">
    <div data-transition-panel="1" class="transition__panel-1"></div>
    <div data-transition-panel="2" class="transition__panel-2"></div>
  </div>
</div>
```

---

## CSS

```css
.transition {
  z-index: 100;
  pointer-events: none;
  position: fixed;
  inset: 0;
  overflow: clip;
}

.transition__panels {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
}

.transition__panel-1 {
  background-color: #a6c1d1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;
}

.transition__panel-2 {
  background-color: #091521;
  background-image: linear-gradient(90deg, #1e3b4d, #091521);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;
}
```

---

## JavaScript

```js
// -----------------------------------------
// PAGE TRANSITIONS
// -----------------------------------------

function runPageOnceAnimation(next) {
  const tl = gsap.timeline()

  tl.call(
    () => {
      resetPage(next)
    },
    null,
    0
  )

  return tl
}

function runPageLeaveAnimation(current, next) {
  const transitionWrap = document.querySelector("[data-transition-wrap]")
  const transitionPanel1 = transitionWrap.querySelector(
    "[data-transition-panel='1']"
  )
  const transitionPanel2 = transitionWrap.querySelector(
    "[data-transition-panel='2']"
  )

  const tl = gsap.timeline({
    onComplete: () => {
      current.remove()
    }
  })

  if (reducedMotion) {
    // Immediate swap behavior if user prefers reduced motion
    return tl.set(current, { autoAlpha: 0 })
  }

  tl.set(
    next,
    {
      autoAlpha: 0
    },
    0
  )

  tl.fromTo(
    transitionPanel1,
    {
      yPercent: 0
    },
    {
      rotate: 0,
      yPercent: -100,
      duration: 0.6,
      ease: "power4.in"
    },
    0
  )

  tl.fromTo(
    transitionPanel2,
    {
      yPercent: 0
    },
    {
      rotate: 0,
      yPercent: -100,
      duration: 0.6,
      ease: "power4.in"
    },
    "< 0.25"
  )

  return tl
}

function runPageEnterAnimation(next) {
  const transitionWrap = document.querySelector("[data-transition-wrap]")
  const transitionPanel1 = transitionWrap.querySelector(
    "[data-transition-panel='1']"
  )
  const transitionPanel2 = transitionWrap.querySelector(
    "[data-transition-panel='2']"
  )

  const tl = gsap.timeline()

  if (reducedMotion) {
    // Immediate swap behavior if user prefers reduced motion
    tl.set(next, { autoAlpha: 1 })
    tl.add("pageReady")
    tl.call(resetPage, [next], "pageReady")
    return new Promise((resolve) => tl.call(resolve, null, "pageReady"))
  }

  tl.add("startEnter", 0.9)

  tl.set(
    next,
    {
      autoAlpha: 1
    },
    "startEnter"
  )

  tl.set(
    transitionPanel1,
    {
      yPercent: -200
    },
    "startEnter"
  )

  tl.to(
    transitionPanel2,
    {
      yPercent: -200,
      duration: 1.2,
      ease: "power4.out",
      overwrite: "auto"
    },
    "startEnter"
  )

  // Optional: Title Animation
  const title = next.querySelector("[data-transition-title]")
  if (title) {
    tl.from(
      title,
      {
        y: "20vh",
        duration: 1.2,
        ease: "power4.out"
      },
      "startEnter"
    )
  }

  tl.add("pageReady")
  tl.call(resetPage, [next], "pageReady")

  return new Promise((resolve) => {
    tl.call(resolve, null, "pageReady")
  })
}
```

---

## Documentation for Resource

**Navigation:** Inside or outside the container

**Transition div:** Yes, outside the container

`<body data-barba="wrapper">   <div data-transition-wrap>...</div>   <main data-barba="container">     <nav>...</nav>       <!-- page content here -->   </main> </body>`

### How to use

Copy the full code block from this page, and replace the `// PAGE TRANSITIONS` section in your boilerplate. This includes the transition functions and any helpers they need.

### Transition explained

Two panels slide upward in sequence to cover the screen, creating a layered wipe effect. Once the screen is covered, the first panel disappears and the second continues upward to reveal the new page underneath.

Both panels use `yPercent` to control their movement. During leave, they animate from `0` to `-100` with a `0.25` second offset between them, creating a staggered effect. During enter, the first panel is instantly moved to `-200`, while the second animates from `-100` to `-200` with a smooth `power4.out` ease.

The `startEnter` label at `0.9` seconds controls when the reveal begins. The new page is hidden with `autoAlpha: 0` during leave and made visible at `startEnter`, keeping the page swap hidden behind the panels. An optional title animation moves the new page’s title upward from `20vh` as the second panel reveals the content.

---

## Barba.js Boilerplate HTML

```html
<body data-barba="wrapper">
  <main data-barba="container">
    <section></section>
    <section></section>
    <section></section>
  </main>
</body>
```

---

## Barba.js Boilerplate JavaScript

```js
// -----------------------------------------
// OSMO PAGE TRANSITION BOILERPLATE
// -----------------------------------------

gsap.registerPlugin(CustomEase)

history.scrollRestoration = "manual"

let lenis = null
let nextPage = document
let onceFunctionsInitialized = false

const hasLenis = typeof window.Lenis !== "undefined"
const hasScrollTrigger = typeof window.ScrollTrigger !== "undefined"

const rmMQ = window.matchMedia("(prefers-reduced-motion: reduce)")
let reducedMotion = rmMQ.matches
rmMQ.addEventListener?.("change", (e) => (reducedMotion = e.matches))
rmMQ.addListener?.((e) => (reducedMotion = e.matches))

const has = (s) => !!nextPage.querySelector(s)

let staggerDefault = 0.05
let durationDefault = 0.6

CustomEase.create("osmo", "0.625, 0.05, 0, 1")
gsap.defaults({ ease: "osmo", duration: durationDefault })

// -----------------------------------------
// FUNCTION REGISTRY
// -----------------------------------------

function initOnceFunctions() {
  initLenis()
  if (onceFunctionsInitialized) return
  onceFunctionsInitialized = true

  // Runs once on first load
  // if (has('[data-something]')) initSomething();
}

function initBeforeEnterFunctions(next) {
  nextPage = next || document

  // Runs before the enter animation
  // if (has('[data-something]')) initSomething();
}

function initAfterEnterFunctions(next) {
  nextPage = next || document

  // Runs after enter animation completes
  // if (has('[data-something]')) initSomething();

  if (hasLenis) {
    lenis.resize()
  }

  if (hasScrollTrigger) {
    ScrollTrigger.refresh()
  }
}

// -----------------------------------------
// PAGE TRANSITIONS
// -----------------------------------------

function runPageOnceAnimation(next) {
  const tl = gsap.timeline()

  tl.call(
    () => {
      resetPage(next)
    },
    null,
    0
  )

  return tl
}

function runPageLeaveAnimation(current, next) {
  const tl = gsap.timeline({
    onComplete: () => {
      current.remove()
    }
  })

  if (reducedMotion) {
    // Immediate swap behavior if user prefers reduced motion
    return tl.set(current, { autoAlpha: 0 })
  }

  tl.to(current, { autoAlpha: 0, duration: 0.4 })

  return tl
}

function runPageEnterAnimation(next) {
  const tl = gsap.timeline()

  if (reducedMotion) {
    // Immediate swap behavior if user prefers reduced motion
    tl.set(next, { autoAlpha: 1 })
    tl.add("pageReady")
    tl.call(resetPage, [next], "pageReady")
    return new Promise((resolve) => tl.call(resolve, null, "pageReady"))
  }

  tl.add("startEnter", 0.6)

  tl.fromTo(
    next,
    {
      autoAlpha: 0
    },
    {
      autoAlpha: 1
    },
    "startEnter"
  )

  tl.add("pageReady")
  tl.call(resetPage, [next], "pageReady")

  return new Promise((resolve) => {
    tl.call(resolve, null, "pageReady")
  })
}

// -----------------------------------------
// BARBA HOOKS + INIT
// -----------------------------------------

barba.hooks.beforeEnter((data) => {
  // Position new container on top
  gsap.set(data.next.container, {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0
  })

  if (lenis && typeof lenis.stop === "function") {
    lenis.stop()
  }

  initBeforeEnterFunctions(data.next.container)
  applyThemeFrom(data.next.container)
})

barba.hooks.afterLeave(() => {
  if (hasScrollTrigger) {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }
})

barba.hooks.enter((data) => {
  initBarbaNavUpdate(data)
})

barba.hooks.afterEnter((data) => {
  // Run page functions
  initAfterEnterFunctions(data.next.container)

  // Settle
  if (hasLenis) {
    lenis.resize()
    lenis.start()
  }

  if (hasScrollTrigger) {
    ScrollTrigger.refresh()
  }
})

barba.init({
  debug: true, // Set to 'false' in production
  timeout: 7000,
  preventRunning: true,
  transitions: [
    {
      name: "default",
      sync: true,

      // First load
      async once(data) {
        initOnceFunctions()

        return runPageOnceAnimation(data.next.container)
      },

      // Current page leaves
      async leave(data) {
        return runPageLeaveAnimation(
          data.current.container,
          data.next.container
        )
      },

      // New page enters
      async enter(data) {
        return runPageEnterAnimation(data.next.container)
      }
    }
  ]
})

// -----------------------------------------
// GENERIC + HELPERS
// -----------------------------------------

const themeConfig = {
  light: {
    nav: "dark",
    transition: "light"
  },
  dark: {
    nav: "light",
    transition: "dark"
  }
}

function applyThemeFrom(container) {
  const pageTheme = container?.dataset?.pageTheme || "light"
  const config = themeConfig[pageTheme] || themeConfig.light

  document.body.dataset.pageTheme = pageTheme
  const transitionEl = document.querySelector("[data-theme-transition]")
  if (transitionEl) {
    transitionEl.dataset.themeTransition = config.transition
  }

  const nav = document.querySelector("[data-theme-nav]")
  if (nav) {
    nav.dataset.themeNav = config.nav
  }
}

function initLenis() {
  if (lenis) return // already created
  if (!hasLenis) return

  lenis = new Lenis({
    lerp: 0.165,
    wheelMultiplier: 1.25
  })

  if (hasScrollTrigger) {
    lenis.on("scroll", ScrollTrigger.update)
  }

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}

function resetPage(container) {
  window.scrollTo(0, 0)
  gsap.set(container, { clearProps: "position,top,left,right" })

  if (hasLenis) {
    lenis.resize()
    lenis.start()
  }
}

function debounceOnWidthChange(fn, ms) {
  let last = innerWidth,
    timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (innerWidth !== last) {
        last = innerWidth
        fn.apply(this, args)
      }
    }, ms)
  }
}

function initBarbaNavUpdate(data) {
  var tpl = document.createElement("template")
  tpl.innerHTML = data.next.html.trim()
  var nextNodes = tpl.content.querySelectorAll("[data-barba-update]")
  var currentNodes = document.querySelectorAll("nav [data-barba-update]")

  currentNodes.forEach(function (curr, index) {
    var next = nextNodes[index]
    if (!next) return

    // Aria-current sync
    var newStatus = next.getAttribute("aria-current")
    if (newStatus !== null) {
      curr.setAttribute("aria-current", newStatus)
    } else {
      curr.removeAttribute("aria-current")
    }

    // Class list sync
    var newClassList = next.getAttribute("class") || ""
    curr.setAttribute("class", newClassList)
  })
}

// -----------------------------------------
// YOUR FUNCTIONS GO BELOW HERE
// -----------------------------------------
```
