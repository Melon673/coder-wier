
import { getalldata } from "@/api/page-data-api";
import { Suspense } from "react";
import Loading from "../Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";

export const revalidate = 60;
export const dynamic = "force-static"; // fully static

export default async function ServicePg() {
  const data = await getalldata("services", "Corporate");
  if (!data) return <div>Error loading data. Please try again later.</div>;

  return (
    <Suspense fallback={<Loading />}>
      <DynamicRenderer parts={["services"]}
        pageMeta={{  title: data.title }} data={data?.sections} />
    </Suspense>
  );
}

export async function generateMetadata() {
  const data = await getalldata("services", "Corporate");
  return generatePageMetadata(data);
}
