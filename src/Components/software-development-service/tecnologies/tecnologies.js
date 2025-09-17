import { Grid, Typography } from "@mui/material";
import TechWeWorkCSR from "@/utils/AboutPage/TechWeWorkCSR";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";

const TechWeWorkWith = ({ data ,index}) => {
  const id = `${data?.idForfrontendUse || "TechWeWorkWith"}-${index}`;

  return (
    <Grid sx={{ bgcolor: "#F4FAFF" }} id={id} py={{ md: "4.2%", xs: "3.63rem" }}
      container justifyContent={"center"}
    >
      <CommonComponents
        textAlign={"center"}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title} width={{ md: "60%", xs: "100%" }}
        description={stripHtml(data?.description)}
      />
      <TechWeWorkCSR data={data} />
    </Grid>
  );
};
export default TechWeWorkWith;
