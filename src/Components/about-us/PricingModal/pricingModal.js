import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import PricingModalCSR from "@/utils/AboutPage/PricingModalCSR";
import stripHtml from "@/utils/stripHtml";
import { Grid, Typography } from "@mui/material";

const PricingModal = ({ data, index }) => {
  const id = `${data?.idForfrontendUse || "Our-Pricing-Modal"}-${index}`;

  return (
    <>
      <Grid
        id={id}
        container py={{ md: "4.2%", xs: "3.63rem" }}
        justifyContent={"center"} columnGap={"2%"}
      >
        <CommonComponents
          textAlign={'center'}
          variant={data?.headingType?.title?.toLowerCase()}
          title={data?.title}
          description={stripHtml(data?.description || data?.shortDescription) || "No description available"}
        />
        <PricingModalCSR data={data} />
      </Grid>

    </>
  );
};

export default PricingModal;
