import Newsletter from "@/Components/home/newsletter/newsletter";
import BlogInnerBanner from "@/Components/BlogInner/BannerData/BlogInnerBanner";
import BlogsInnerDetail from "@/Components/BlogInner/blogDetails/blogDetails";

const getBlogData = async (slug) => {
  try {
    const res = await fetch(
      `https://devtechub.com/becms/blog/article-detail?slug=${slug}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return {
      sections: data?.content?.sections || [],
      team: data?.content?.team || null,
      title: data?.content?.title || "Blog Detail",
    };
  } catch (error) {
    console.error("API Error:", error);
    return { sections: [], team: null, title: "Blog Detail" };
  }
};

export default async function BlogInnerCSR({ params }) {
  const slug = params?.blogDetail || "";
  const { sections, team, title } = await getBlogData(slug);

  const bannerSection = sections?.find(
    (section) => section.idForfrontendUse === "Hiring-Banner"
  );
  const SectionData = sections?.filter(
    (section) => section.idForfrontendUse === "content-section"
  );
  const AuthorData = sections?.filter(
    (section) => section.idForfrontendUse === "AuthorBlog"
  );

  return (
    <>
      {bannerSection && (
        <BlogInnerBanner
          data={bannerSection}
          team={team}
          parts={["blogs", slug]}
          pageMeta={{ title:title }}
        />
      )}

      <BlogsInnerDetail data={SectionData} author={AuthorData} />
      <Newsletter />
    </>
  );
}
