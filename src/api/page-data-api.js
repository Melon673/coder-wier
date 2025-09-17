
const fetchJSON = async (url, options = {}) => {
    const res = await fetch(url, {
        ...options,
        next: { revalidate: 3600 }, // 👈 static by default with ISR
    });

    if (!res.ok) throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
    const data = await res.json();
    return data?.content || {};
};

// Fetch with slug and categoryName
export const getalldata = async (slug, categoryName) => {
    if (!slug || !categoryName) {
        throw new Error("Both slug and categoryName are required");
    }

    const url = `https://devtechub.com/becms/page/page-data?slug=${slug}&categoryName=${categoryName}`;

    try {
        return await fetchJSON(url);
    } catch (error) {
        console.error("Error fetching data (with category):", error.message || error);
        return null;
    }
};

// Fetch with slug only (Case Study)
export const getDataBySlugOnly = async (slug) => {
    if (!slug) {
        throw new Error("Slug is required");
    }

    const url = `https://devtechub.com/becms/caseStudy/research-detail?slug=${slug}`;

    try {
        return await fetchJSON(url);
    } catch (error) {
        console.error("Error fetching data (by slug only):", error.message || error);
        return null;
    }
};

// Fetch blog by slug
export const getBlogBySlugOnly = async (slug) => {
    if (!slug) {
        throw new Error("Slug is required");
    }

    const url = `https://devtechub.com/becms/page/articles?slug=${slug}`;

    try {
        return await fetchJSON(url);
    } catch (error) {
        console.error("Error fetching blog data:", error.message || error);
        return null;
    }
};

