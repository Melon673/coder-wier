export function generatePageMetadata(data) {
    return {
        title: data?.title || "No title Provided",
        description: data?.description || "No Description Provided",
        canonical: data?.canonicalLink || "No Canonical Link Provided",
        openGraph: {
            title: data?.meteFields?.find(field => field.key === "og:title")?.value || data?.title,
            description: data?.description || "No Description Provided",
            url: data?.canonicalLink || "No Canonical Link Provided",
            images: [{ url: "https://coderwire.com/default-image.jpg" }],
        },
    };
}
