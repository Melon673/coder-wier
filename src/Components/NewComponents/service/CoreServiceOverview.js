
import CoreServiceDetails from "@/utils/MainPage/CoreServiceOverviewCSR";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ContactButtonBlue from "../Registration/ContactButtonBlue";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";

const CoreServiceOverview = ({ data,index}) => {
    const id = `${data?.idForfrontendUse || "DevLifeCycle-1"}-${index}`;

  return (
    <Grid id={id} sx={{
      position: "relative", backgroundColor: { xs: "#f5fbff", md: "#fff" }, position: "relative",
      backgroundImage: { md: "inherit", xs: 'url("/Assets/Images/coreservice.svg")' },
      backgroundRepeat: "no-repeat",
    }} container justifyContent={"center"} py={{ md: "4.2%", xs: "3.63rem" }}>

                      <CommonComponents
        textAlign="left"
        width={{ md: "40%", xs: "auto" }}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title} m={{md:0,xs:0}}
        description={stripHtml(data?.description)}
      />
      <CoreServiceDetails data={data} />
    </Grid>
  );
};

export default CoreServiceOverview;
