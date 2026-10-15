import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/siteMetadata";
import { projects } from "@/lib/siteContent";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/work",
    "/services",
    "/about",
    "/start-project",
    ...projects.map((p) => `/work/${p.slug}`),
    ...projects.map((p) => `/demo/${p.slug}`),
    "/mindful-eating",
    "/mindful-eating/privacy",
    "/mindful-eating/terms",
    "/mindful-eating/support",
    "/mindful-eating/support-development",
  ].map((path) => ({ url: `${siteOrigin}${path}` }));
}
