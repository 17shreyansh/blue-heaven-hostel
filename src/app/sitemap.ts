import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/hostels", "/gallery", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${SITE.url}${route}${route ? "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
