import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const pages = ["", "/#about", "/#projects", "/#contact"];
  const now = new Date().toISOString();

  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8
  }));
}
