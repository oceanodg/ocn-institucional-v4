import type { MetadataRoute } from "next";
import { churches } from "~/data/churches";
import { publishedPagePaths } from "~/data/seo";
import { absoluteUrl } from "~/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...publishedPagePaths,
    ...churches.map(({ id }) => `/igrejas/${id}`),
  ];

  return paths.sort().map((path) => ({ url: absoluteUrl(path) }));
}
