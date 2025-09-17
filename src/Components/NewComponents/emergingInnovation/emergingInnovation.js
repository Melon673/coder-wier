import { Grid } from "@mui/material";
import EmergingInnovationCSR from "@/utils/MainPage/EmergingInnovationCSR";

const EmergingInnovation = ({ data, index }) => {
  const id = `${(data?.idForfrontendUse || "EmergingInnovation").trim()}-${index}`;


  return (
    <Grid my={{ md: "4.2%", xs: "3.63rem" }}  alignItems={"center"} container justifyContent={"center"} id={id} >
      <EmergingInnovationCSR data={data} />
    </Grid>
  );
};

export default EmergingInnovation;
