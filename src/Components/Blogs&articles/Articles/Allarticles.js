import { Box, Grid, Typography } from "@mui/material";
import AllArticlesCSR from "@/utils/BlogsPage/AllArticlesCSR";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";
const Allarticles = ({ data,index }) => {
    const id = `${data?.idForfrontendUse || "All-Articles"}-${index}`;

    const sections = Array.isArray(data) ? data : [data]; // Ensure it's always an array

  return (
    <Box id={id} >
       {sections.map((section, index) => (
        <Grid
          key={section?.id || index}
          container
          columnGap={"1%"}
          justifyContent="center"
          py={{ md: "3%", xs: "2rem" }}
          id={section?.idForfrontendUse || "All-Articles"}
        >
    <CommonComponents
        textAlign="center"
        width={{ md: "60%", xs: "auto" }}
        variant={section?.headingType?.title?.toLowerCase()}
        title={section?.title}
        description={stripHtml(section?.description)}
      />
   {Array.isArray(section?.industries) && section.industries.length > 0 && (
            <AllArticlesCSR data={section} />
          )}        </Grid>
      ))}   </Box>
  );
};

export default Allarticles;
