import PageComponentsId from "@/Components/common/Header/PageComponentsId";
import { SSR_COMPONENTS } from "./ssrComponents";
import { Fragment } from "react";

const ALL_COMPONENTS = {
  ...SSR_COMPONENTS,
};

const DynamicRenderer = ({ data,pageMeta,parts}) => {


  
  return (
    <>
      {data.map((section, index) => {
        const Component = ALL_COMPONENTS[section.idForfrontendUse];
        if (!Component) return null;
        return (
          <Fragment key={`${section.id}-${index}`}>
            <Component
              data={section} parts={parts}
              index={index} pageMeta={pageMeta}
              secondRoute={data.title}
            />
            {index === 1 && <PageComponentsId data={data} />}
          </Fragment>
        );
      })}
    </>
  );
};

export default DynamicRenderer;