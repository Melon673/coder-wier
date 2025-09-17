export const dynamic = "force-dynamic";

export default async function sitemap() {
  try {
    const res = await fetch("https://devtechub.com/becms/page/sitemap", {
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) throw new Error("Failed to fetch sitemap");

    const data = await res.json();
    return data.links.map((item) => ({
      url: item.link,               // backend se direct link aa raha hai
      lastModified: new Date(),     // backend agar updatedAt de to usko use kar sakte ho
      changeFrequency: "weekly",    // optional
      priority: 0.7,                // optional
    }));
  } catch (err) {
    console.error("Sitemap fetch error:", err);
    return [];
  }
}
