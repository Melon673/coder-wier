import { getalldata } from "@/api/page-data-api";
import Loading from "@/app/Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";
import { Suspense } from "react";

// ✅ Pass Data as Param to Metadata
export async function generateMetadata({ params }) {
    const slug = params.industryDetails;
    const data = await getalldata(slug, "Industries"); 
    return generatePageMetadata(data);
}

export default async function SubIndustriesPg({ params }) {
    const slug = params.industryDetails;
    const data = await getalldata(slug, "Industries");

    if (!data) return <div>Error loading data. Please try again later.</div>;

    return (
        <>
           
            <Suspense fallback={<Loading />}>
                <DynamicRenderer parts={["industries", params.industryDetails]}
        pageMeta={{ slug: params.industryDetails, title: data.title }} data={data?.sections} key={slug} />
            </Suspense>
        </>
    );
}
