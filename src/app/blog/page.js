import Newsletter from "@/Components/home/newsletter/newsletter";
import Allarticles from "@/Components/Blogs&articles/Articles/Allarticles";
import ServicesBanner from "@/Components/software-development-service/bennerServices/servicesBanner";
import { headers } from "next/headers";

export const revalidate = 3600;

export default async function Blogs() {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const fullUrl = `${protocol}://${host}/blogs`;

  const isBlogPage = fullUrl.includes("blog"); 
  let sections = [];
  let team = null;
  let pageTitle = "blog";

  try {
    const res = await fetch("https://devtechub.com/becms/page/articles?slug=blog", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const data = await res.json();
    sections = data?.content?.sections || [];
    team = data?.content?.team || null;
    pageTitle = data?.content?.title || pageTitle;
  } catch (err) {
    console.error("SSR Blog Page Error:", err);
  }

  const bannerSection = sections.find(
    (section) => section.idForfrontendUse === "Banner"
  );
  const SectionData = sections.filter(
    (section) => section.idForfrontendUse === "All-Articles"
  );
  const AuthorData = sections.filter(
    (section) => section.idForfrontendUse === "AuthorBlog"
  );

  return (
    <>
      {bannerSection && (
        <ServicesBanner
          isBlogPage={isBlogPage}
          data={bannerSection}
          team={team}
          parts={["blogs"]}
          pageMeta={{ title: pageTitle }}
        />
      )}

      {SectionData && <Allarticles data={SectionData} />}
      <Newsletter heading={"Subscribe our newsletter for newest updates"} />
    </>
  );
}
