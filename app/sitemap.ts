import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.jcled.co.th";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services/led-wedding`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/led-meeting`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/led-seminar`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/led-booth`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/led-rental-price-2025`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/p25-vs-p39-difference`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/wedding-led-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
