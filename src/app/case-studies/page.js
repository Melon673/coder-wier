// src/app/case-studies/page.js
import ServicesBanner from "@/Components/software-development-service/bennerServices/servicesBanner";
import Allarticles from "@/Components/Blogs&articles/Articles/Allarticles";
import { headers } from "next/headers";

export const revalidate = 3600; // optional, for SSG revalidation

export default async function CaseStudies() {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const fullUrl = `${protocol}://${host}/case-studies`;
  const isBlogPage = fullUrl.includes("case-studies");

  let sections = [];
  let team = null;
  let pageTitle = "Case Studies"; // fallback title

  try {
    const res = await fetch(
      "https://devtechub.com/becms/page/research?slug=case-studies",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    sections = data?.content?.sections || [];
    team = data?.content?.team || null;
    pageTitle = data?.content?.title || pageTitle; // ✅ safe title
  } catch (error) {
    console.error("Error fetching case studies:", error);
  }

  const bannerSection = sections.find(
    (section) => section.idForfrontendUse === "Banner"
  );

  const sectionData = sections.filter(
    (section) => section.idForfrontendUse === "Case-Studies-Listing"
  );

  return (
    <>
      {bannerSection && (
        <ServicesBanner
          parts={["case-studies"]} // breadcrumb parts
          pageMeta={{ title: pageTitle }} // ✅ title safely passed
          isBlogPage={isBlogPage}
          data={bannerSection}
          team={team}
        />
      )}

      {sectionData.length > 0 && <Allarticles data={sectionData} />}
    </>
  );
}
