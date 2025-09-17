import React from "react";
import { Grid, Typography } from "@mui/material";
import FindExpertCSR from "@/utils/HiringPage/FindExpertCSR";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";

const FindExpert = ({ data,index }) => {
   const id = `${data?.idForfrontendUse || "Find-Expert"}-${index}`;


  return (
    <Grid container justifyContent="center" id={id} alignItems={"flex-start"} my={{md:"3%",xs:"2rem"}}>
           <CommonComponents
  textAlign={"center" }  
  variant={data?.headingType?.title?.toLowerCase()}
  title={data?.title}
  description={stripHtml(data?.description)}
/>
      <FindExpertCSR data={data}  />
    </Grid>
  );
};

export default FindExpert;
