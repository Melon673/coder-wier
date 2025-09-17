
import { Suspense } from "react";
import Loading from "../Loader/loading";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { getalldata } from "@/api/page-data-api";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";


export async function generateMetadata( ) {
    const data = await getalldata("contact", "Corporate"); 
    return generatePageMetadata(data);
}

export default async function Contact() {
    const data = await getalldata("contact", "Corporate");

    if (!data) return <div>Error loading data. Please try again later.</div>;

    return (
        <>  
<Suspense fallback={<Loading />}>
  <DynamicRenderer
    data={data.sections}
parts={["contact"]}
        pageMeta={{ title: data.title }}    componentKey="contact"
  />
</Suspense>
        </>
    );
}

