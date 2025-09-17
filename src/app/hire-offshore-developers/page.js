// app/hiring/page.js
import { getalldata } from "@/api/page-data-api";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";

export const dynamic = "force-static"; 

export async function generateMetadata() {
  const data = await getalldata("hire-offshore-developers", "Corporate");
  return generatePageMetadata(data);
}

export default async function Hiring() {
  const data = await getalldata("hire-offshore-developers", "Corporate");

  if (!data) {
    return <div>Error loading static content. Please try again later.</div>;
  }

  return <DynamicRenderer 
       parts={["hire-offshore-developers"]}
  pageMeta={{ slug: data.slug, title: data.title }}
 data={data.sections || []} />;
}
