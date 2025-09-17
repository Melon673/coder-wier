
import { getalldata } from "@/api/page-data-api";
import Loading from "@/app/Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import LoadingClient from "@/utils/BlogsPage/BlogsLoadingClient";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";
import { Suspense } from "react";
import { notFound } from "next/navigation";

// SSG for dynamic route
export async function generateStaticParams() {
  try {
    const url = `https://devtechub.com/becms/page/all-page-routes`; // 👈 make sure this returns [{ slug, categoryName }]
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    return (data?.content || []).map((item) => ({
      categoryName: item.categoryName,
      serviceDetailsSlug: item.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export const dynamicParams = true; // fallback for new slugs
export const revalidate = 60;

export default async function SubServicePg({ params }) {
  const { categoryName, serviceDetailsSlug } = params;
  const data = await getalldata(serviceDetailsSlug, categoryName);

  if (!data) return notFound();

  return (
    <>
      <LoadingClient />
      <Suspense fallback={<Loading />}>
        <DynamicRenderer      key={`${categoryName}-${serviceDetailsSlug}`} // ✅ unique
          pageMeta={{ slug: serviceDetailsSlug, title: data.title }}
          parts={["services", categoryName, serviceDetailsSlug]} data={data?.sections} />
      </Suspense>
    </>
  );
}

export async function generateMetadata({ params }) {
  const data = await getalldata(params.serviceDetailsSlug, params.categoryName);
  return generatePageMetadata(data);
}
