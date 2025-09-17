import { getalldata } from "@/api/page-data-api";
import { Suspense } from "react";
import Loading from "../Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";

export default async function HireRemoteDevelopers() {
    const data = await getalldata("hire-remote-developers", "Corporate");
    if (!data) return <div>Error loading data. Please try again later.</div>;

    return (
        <>
           
            <Suspense fallback={<Loading />}>
                <DynamicRenderer   parts={["hire-remote-developers"]}
pageMeta={{ slug: data.slug, title: data.title }} data={data?.sections}  />
            </Suspense>
        </>
    );
}

export async function generateMetadata() {
    const data = await getalldata("hire-remote-developers", "Corporate");
    return generatePageMetadata(data);
}
