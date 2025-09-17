import { Grid, Typography } from "@mui/material";
import DiscussCSR from "@/utils/ContactUSPage/DiscussCSR";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";


const Discuss = ({ data,index }) => {
      const id = `${data?.idForfrontendUse || "Discussion"}-${index}`;

    return (
        <>
            <Grid container justifyContent={"center"} columnGap={{md:"1%",xs:0}}  my={{ md: "4.2%", xs: "3.63rem" }} id={id}>
                        <CommonComponents
 textAlign={{ md: 'left', xs: 'center' }}
  variant={data?.headingType?.title?.toLowerCase()}
  title={data?.title} 
  description={stripHtml(data?.description)}
/>
        <DiscussCSR data={data} />
            </Grid>
        </>
    )
}
export default Discuss;