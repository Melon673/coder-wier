import Newsletter from "@/Components/home/newsletter/newsletter";
import BlogInnerBanner from "@/Components/BlogInner/BannerData/BlogInnerBanner";
import BlogsInnerDetail from "@/Components/BlogInner/blogDetails/blogDetails";

const getCaseStudyData = async (slug) => {
  try {
    const res = await fetch(
      `https://devtechub.com/becms/caseStudy/research-detail?slug=${slug}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return {
      sections: data?.content?.sections || [],
      team: data?.content?.team || null,
      title: data?.content?.title || "",
    };
  } catch (error) {
    console.error("API Error:", error);
    return { sections: [], team: null, title: "" };
  }
};

export default async function CaseStudyDetailPage({ params }) {
  const slug = params?.casestudydetail || "";
  const { sections, team ,title} = await getCaseStudyData(slug);

  const bannerSection = sections?.find(
    (section) => section.idForfrontendUse === "Hiring-Banner"
  );
  const sectionData = sections?.filter(
    (section) => section.idForfrontendUse === "casestudy_content"
  );
  const authorData = sections?.filter(
    (section) => section.idForfrontendUse === "AuthorBlog"
  );

  return (
    <>
      {bannerSection && <BlogInnerBanner parts={["case-studies",slug]}
        pageMeta={{ title: title }} data={bannerSection} team={team} />}
      <BlogsInnerDetail data={sectionData} author={authorData} />
      <Newsletter />
    </>
  );
}
