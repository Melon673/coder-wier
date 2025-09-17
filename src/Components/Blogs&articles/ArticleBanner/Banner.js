
import BlogsBannerCSR from "@/utils/AboutPage/BlogsBannerCSR";
import { Breadcrumbs, Grid } from "@mui/material";
import Link from "next/link";

const BlogsBanner = ({ data, secondRoute }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;

  return (
    <Grid justifyContent={"center"} id="Banner"
      container
      sx={{py:{md:"10%",xs:"15vh"},
         bgcolor: 'black',
         backgroundImage: `url("${imgLink}${data?.image}")`,backgroundSize: "cover" , backgroundRepeat: "none" , backgroundPosition:  "center" ,
      }}
    >
      <Grid item md={2.5} alignContent={"center"}>
        <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{ color: "white" }}>
          <Link underline="hover" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href={'#'}>
            {data?.title || "Blog"}
          </Link>
        </Breadcrumbs>
      </Grid>
      <Grid item md={12} xs={12}/>
     <BlogsBannerCSR data={data}/>
    </Grid >
  );
};

export default BlogsBanner;
