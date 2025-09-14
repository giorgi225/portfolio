import { projects } from "@/data/data";

import type { MetadataRoute } from "next";

const SITE_URL = "https://shalamberidze-gigi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const projectUrls = projects.map((p) => ({
        url: `${SITE_URL}/projects/${p.slug}`,
        lastModified: new Date(), // optionally, use real last update if available
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...projectUrls,
    ];
}