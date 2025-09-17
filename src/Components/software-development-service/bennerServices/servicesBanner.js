import {  Box, Breadcrumbs, Grid, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import stripHtml from "@/utils/stripHtml";
import Registration from "@/Components/NewComponents/Registration/Registration";
import Image from "next/image";
import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";
import BreadcrumbServer from "@/Components/BreadCrumbs/BreadCrumbsServer";

const ServicesBanner = ({ data,parts,pageMeta, index,isBlogPage }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const hasForm = data?.haveForm === true;
  const id = `${data?.idForfrontendUse || "Service-Banner"}-${index}`;
  const heading = data?.headingType?.title?.toLowerCase() || "h1";
  const title = data?.title;
  const description = stripHtml(data?.description);

  const renderBreadcrumbs = () => (
    <Box sx={{ display: "flex", justifyContent: { md: !hasForm ? isBlogPage?"left":"center" : "left" } }}>
           <Box>
      <BreadcrumbServer parts={parts} pageMeta={pageMeta}
      />
        </Box>
    </Box>
  );

  const renderContent = (withForm = false) => (
    <>
      {renderBreadcrumbs()}
      <Typography variant={heading} className="whiteColor" width={{ md: "80%", xs: "100%" }} m={isBlogPage?"1% 0":"auto"}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}>
        {title}
      </Typography>
      {data?.subTitle && 
      <Typography variant="body1" className="blueColor" width={{ md: "40%", xs: "100%" }} m={withForm ? 0 : "1% auto"}>
        {data?.subTitle}
      </Typography>}
      <Typography variant="body1" className="whiteColor" sx={{ width: { md: withForm ? "80%" :isBlogPage?"60%  ": "40%", xs: "auto" }, m: withForm ? 0 :isBlogPage?0: "auto" }}>
        {description}
      </Typography>
          {data?.ctaLnik && data?.ctaText && 
      <Box sx={{ mt: "5%" }}>
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonBlue label={data.ctaText} />
                    </Link>
      </Box>
                    }
    </>
  );

  return (
    <Box id={id} >
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        sx={{
          py: isBlogPage?"8%":"10%",
          textAlign: hasForm ===true ? "left" :isBlogPage?"left": "center",
          backgroundImage: `url("${imgLink}${data?.image}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          bgcolor: data?.image ? "transparent" : "black",
          display: { md: hasForm ===true ? "none" : "flex", xs: "flex" },
        }}
      >
        <Grid item xs={11.5} md={hasForm ===true? 5.5 : 10}>
          <Box sx={{ display: "flex", justifyContent: { md: hasForm ===true ? "left" : isBlogPage?"left":"center" }, flexDirection: "column" }}>
            {renderContent(false)}
          </Box>
        </Grid>
      </Grid>

      {/* Form + Banner image */}
      {hasForm===true && (
        <Box position="relative" pt="1%">
      
          <Box sx={{ width: { md: "84%", xs: "95%" }, m: "auto",mb:"1%", display: { md: "block", xs: "none" } }}>
            {renderBreadcrumbs()}
            
            <Typography variant={heading}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} width={{ md: "60%", xs: "auto" }}>
              {title}
            </Typography>
            <Typography variant="body1" my="0.5%" className="blueColor">
              {data.subTitle}
            </Typography>
            <Typography variant="body1" sx={{ width: { md: "60%", xs: "100%" } }}>
              {description}
            </Typography>
          </Box>

          {/* Banner image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { md: "30vw", xs: "auto" },
              mt: "1%",
              display: { md: "block", xs: "none" },
            }}
          >
            <Image
              src={data?.image ? `${imgLink}${data.image}` : "/assets/noimg.webp"}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Registration Form */}
          <Box
            sx={{
              position: "absolute",
              top: { md: "4%", xs: "20%" },
              right: { md: "8%", xs: 0 },
              width: { md: "25%", xs: "90%" },
              m: { md: 0, xs: "3% auto" },
              display: { md: "block", xs: "none" },
            }}
          >
            <Registration />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ServicesBanner;
