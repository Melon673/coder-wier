import { Suspense } from "react";
import Loading from "../Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { getalldata } from "@/api/page-data-api";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";


export async function generateMetadata( ) {
    const data = await getalldata("about", "Corporate"); 
    return generatePageMetadata(data);
}

export default async function About() {
    const data = await getalldata("about", "Corporate");

    if (!data) return <div>Error loading data. Please try again later.</div>;

    return (
        <>  
           
            <Suspense fallback={<Loading />}>
                <DynamicRenderer parts={["about"]}
        pageMeta={{ title: data.title }}  data={data?.sections} key={"about"} />
            </Suspense>
        </>
    );
}

