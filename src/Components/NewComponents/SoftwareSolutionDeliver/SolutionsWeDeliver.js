import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import SolutionsWeDeliverCSR from "@/utils/MainPage/SolutionsWeDeliverCSR";
import stripHtml from "@/utils/stripHtml";
import { Grid, } from "@mui/material";


const SolutionsWeDeliver = ({ data,index }) => {
    const id = `${data?.idForfrontendUse || "SolutionsWeDeliver"}-${index}`;

  return (
    <>
      <Grid id={id}
        container textAlign={"left"}
        justifyContent="center"
        sx={{
          background: "#fff"
          // background: "#3F3C39"
        }} py={{ md: "4.2%", xs: "3.63rem" }}
      >
        <CommonComponents
          textAlign={{ md: "left", xs: "center" }}
          variant={data?.headingType?.title?.toLowerCase()}
          title={data?.title} width={{ md: "60%", xs: "100%" }} m={"0"}
          description={stripHtml(data?.description)}
        />
        <SolutionsWeDeliverCSR data={data} />
      </Grid>
    </>

  );
};

export default SolutionsWeDeliver;
