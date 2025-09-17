import { getalldata } from "@/api/page-data-api";
import Loading from "@/app/Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";
import { Suspense } from "react";
import { notFound } from "next/navigation";

export const revalidate = 60;

// export async function generateStaticParams() {
//   try {
//     const url = `https://devtechub.com/becms/page/all-categories`; // e.g. ["Virtual-Staging", "Declutter", ...]
//     const res = await fetch(url, { next: { revalidate: 3600 } });
//     const data = await res.json();

//     return (data?.categories || []).map((cat) => ({
//       categoryName: cat,
//     }));
//   } catch (err) {
//     console.error("Category SSG error:", err);
//     return [];
//   }
// }

export default async function ServiceCatPg({ params }) {
    const slug = params.categoryName;

  const data = await getalldata(slug, "services");

  if (!data) return notFound();

  return (
    <Suspense fallback={<Loading />}>
      <DynamicRenderer parts={["services",slug]}
        pageMeta={{ slug: slug, title: data.title }} data={data?.sections} key={slug} />
    </Suspense>
  );
}

export async function generateMetadata({ params }) {
  const data = await getalldata(params.categoryName, "services");
  return generatePageMetadata(data);
}
