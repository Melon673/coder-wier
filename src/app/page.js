

import { getalldata } from "@/api/page-data-api";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";
import { Suspense } from "react";
import Loading from "./Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";


export async function generateMetadata( ) {
    const data = await getalldata("home", "Landing Page"); 
    return generatePageMetadata(data);
}

export default async function About() {
    const data = await getalldata("home", "Landing Page");
    if (!data) return <div>Error loading data. Please try again later.</div>;

    return (
        <>  
           
            <Suspense fallback={<Loading />}>
                <DynamicRenderer data={data?.sections}  key={"home"} />
            </Suspense>
        </>
    );
}

