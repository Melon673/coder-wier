
import ArticlesCSR from "@/utils/BlogsPage/ArticlesCSR";
import { Grid } from "@mui/material";

const Article = ({ data }) => {


  return (
    <Grid
      container
      sx={{ bgcolor: "#FFF" }}
      id="Featured Articles"
      pt={10}
      pb={"4%"}
      px={"6%"}
      justifyContent={"center"}
    >
      <ArticlesCSR data={data} />
    </Grid>
  );
};

export default Article;
