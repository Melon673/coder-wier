
import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import SolutionWeOfferCSR from "@/utils/AboutPage/SolutionWeOfferCSR";
import stripHtml from "@/utils/stripHtml";
import { Grid, Typography } from "@mui/material";

const Solution = ({ data, index }) => {
  const id = `${data?.idForfrontendUse || "Solution-We-Offer"}-${index}`;

  return (
    <>
      <Grid container id={id} justifyContent="center" columnGap={"1%"} my={{ md: "4.2%", xs: "3.63rem" }}>

        <CommonComponents
          textAlign={'left'}
          variant={data?.headingType?.title?.toLowerCase()}
          title={data?.title}
          description={stripHtml(data?.description)}
        />
        <SolutionWeOfferCSR data={data} />
      </Grid>
    </>
  );
};
export default Solution;
