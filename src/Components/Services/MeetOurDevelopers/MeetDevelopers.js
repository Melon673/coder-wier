import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import MeetDevelopersCSR from "@/utils/HiringPage/MeetDevelopersCSR";
import stripHtml from "@/utils/stripHtml";
import { Grid } from "@mui/material";

const MeetDevelopers = ({ data }) => {
    const id = `${data?.idForfrontendUse || "Meet-Developers"}-${index}`;

  return (
    <>
      <Grid id={id} my={"3%"}
        container
        justifyContent={"center"}>
        <CommonComponents
          textAlign={"center"}
          variant={data?.headingType?.title?.toLowerCase()}
          title={data?.title}
          description={stripHtml(data?.description)}
        />
        <MeetDevelopersCSR data={data} />
      </Grid>
    </>
  );
};
export default MeetDevelopers;
