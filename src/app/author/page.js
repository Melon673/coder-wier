import { Suspense } from "react";
import Loading from "../Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { getalldata } from "@/api/page-data-api";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";


export async function generateMetadata( ) {
    const data = await getalldata("Authors", "Authors"); 
    return generatePageMetadata(data);
}

export default async function About() {
    const data = await getalldata("Authors", "Authors");

    if (!data) return <div>Error loading data. Please try again later.</div>;

    return (
        <>  
           
            <Suspense fallback={<Loading />}>
                <DynamicRenderer parts={["author"]}
        pageMeta={{ title: data.title }}  data={data?.sections} key={"Authors"} />
            </Suspense>
        </>
    );
}

