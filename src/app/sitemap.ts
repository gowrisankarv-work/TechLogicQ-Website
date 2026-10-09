import type { MetadataRoute } from "next";
import { products } from "@/data/content";
import { navLinks, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const navEntries: MetadataRoute.Sitemap = navLinks.map((link) => ({
    url: new URL(link.href, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: link.href === "/careers" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: new URL(`/products/${product.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalEntries: MetadataRoute.Sitemap = ["/privacy", "/terms"].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...navEntries, ...productEntries, ...legalEntries];
}
