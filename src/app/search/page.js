import SearchResults from "@/Components/SearchPage";

export default async function SearchPage({ searchParams }) {
  const query = (searchParams?.query || "").trim();
  let searchresults = [];

  if (query) {
    try {
      const res = await fetch(
        `https://devtechub.com/becms/page/search?query=${encodeURIComponent(query)}`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error("Failed to fetch search data");

      const data = await res.json();
      searchresults = Array.isArray(data?.content) ? data.content : [];
      console.log("Search Results (server):", searchresults.length);
    } catch (err) {
      console.error("Search Results Error:", err);
    }
  }

  return (
    <SearchResults
      query={query}
      searchresults={searchresults}
    />
  );
}
