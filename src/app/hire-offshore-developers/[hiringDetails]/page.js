import { getalldata } from "@/api/page-data-api";
import Loading from "@/app/Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";
import { Suspense } from "react";

// ✅ Pass Data as Param to Metadata
export async function generateMetadata({ params }) {
    const data = await getalldata(params.hiringDetails, "hire-offshore-developers"); 
    return generatePageMetadata(data);
}

export default async function DotNet({ params }) {
    const data = await getalldata(params.hiringDetails, "hire-offshore-developers");

    if (!data) return <div>Error loading data. Please try again later.</div>;

    return (
        <>
           
            <Suspense fallback={<Loading />}>
                <DynamicRenderer parts={["hire-offshore-developers", params.hiringDetails]}
        pageMeta={{ slug: params.hiringDetails, title: data.title }} data={data?.sections}  key={params.hiringDetails} />
            </Suspense>
        </>
    );
}

