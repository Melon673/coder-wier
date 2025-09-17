import { getalldata } from "@/api/page-data-api";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";
import { Suspense } from "react";
import Loading from "../Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
export async function generateMetadata( ) {
    const data = await getalldata("industries", "industries"); 
    return generatePageMetadata(data);
}

export default async function IndustriesPage() {
    const data = await getalldata("industries", "industries");

    if (!data) return <div>Error loading data. Please try again later.</div>;

    return (
        <>  
           
            <Suspense fallback={<Loading />}>
                <DynamicRenderer parts={["industries"]}
        pageMeta={{ title: data.title }} data={data?.sections} key={"industries"} />
            </Suspense>
        </>
    );
}

