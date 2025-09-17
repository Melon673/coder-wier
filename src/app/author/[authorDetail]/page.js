
import { Suspense } from "react";
import DynamicRenderer from "@/utils/AllComponnets/allComponents";
import { getalldata } from "@/api/page-data-api";
import { generatePageMetadata } from "@/utils/MetaDataSEO/metadata";
import Loading from "@/app/Loader/loading";


export async function generateMetadata( {params}) {
    const data = await getalldata( params.authorDetail,"author");
    return generatePageMetadata(data);
}

export default async function AuthorDetail({params}) {
    const data = await getalldata( params.authorDetail,"author");
    
    if (!data) return <div>Error loading data. Please try again later.</div>;

    return (
        <>  
<Suspense fallback={<Loading />}>
  <DynamicRenderer
    data={data.sections}
parts={["author",params.authorDetail]}
        pageMeta={{ title: data.title }}    componentKey="author"
  />
</Suspense>
        </>
    );
}

