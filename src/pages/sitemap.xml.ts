import type { APIRoute } from "astro"
import { realisations } from "../data/realisations"

// Pages noindex et page 404 : hors sitemap.
const excluded = new Set(["/design", "/404"])

const staticPaths = Object.keys(import.meta.glob("./**/*.astro"))
  .map((file) => file.replace(/^\.\//, "/").replace(/(\/index)?\.astro$/, ""))
  .filter((path) => !path.includes("[") && !excluded.has(path))

const paths = [
  ...staticPaths,
  ...realisations.map((project) => `/realisations/${project.slug}`),
].sort()

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://www.huitquatre.fr")
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`)
    .join("\n")

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  )
}
