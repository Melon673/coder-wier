import { Avatar, Breadcrumbs, Grid, Link, Typography, Box } from "@mui/material";
import ContactFormCSR from "@/utils/ContactUSPage/ContactFormCSR";
import BreadcrumbServer from "@/Components/BreadCrumbs/BreadCrumbsServer";


const ContactForm = ({ data, index ,pageMeta}) => {
  const id = `${data?.idForfrontendUse || "ContactForm"}-${index}`;
console.log("pageTitless",pageMeta);

  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  return (
    <Grid id={id}
      bgcolor={"#F4FAFF"} 
      container columnGap={"2%"}
      justifyContent="center"
      py={{ md: "4.2%", xs: "3.63rem" }}
    >
      <Grid item md={4.8} xs={11.5}>
           <Box>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator=">"
            sx={{ color: "black" }}
          >
            <Link underline="hover" href="/">
              Home
            </Link>
            <Typography color="text.primary">
              {pageMeta?.title || "Page"}
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box my={"2%"}>
          <Typography
            variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}>
            {data.title}
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
          />
        </Box>

        <ContactFormCSR data={data} />
      </Grid>
      <Grid item md={5} xs={12} position={"relative"} sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}>
        <Avatar
          variant="square"
          src={`${imgLink}${data?.image || "/assets/noimg.webp"}`}
          sx={{
            width: { md: "50%", xs: "100%" },
            height: "100%",
          }}
        />
        {data?.elements?.map((item, index) => {
          const isEven = index % 2 === 0;
          const isTop = index === 0 || index === 1;
          const isWhiteBg = index === 0 || index === 3;

          return (
            <Box
              key={index}
              sx={{
                display: { md: "flex", xs: "none" },
                width: index === 2 ? "40%" : "30%",
                position: "absolute",
                top: index === 1 ? "4%" : isTop ? "14%" : "unset",
                bottom: index === 3 ? "4%" : !isTop ? "14%" : "unset",
                left: isEven ? 0 : "unset",
                right: !isEven ? 0 : "unset",
                justifyContent: "center",
                p: "1% 2%",
                alignItems: "center",
                columnGap: "2%", borderRadius: "0.45vw",
                bgcolor: isWhiteBg ? "white" : "#0486ff",
              }}
            >
              <Avatar
                alt={item.title}
                src={`${imgLink}${item?.image || "/assets/noimg.webp"}`}
                sx={{
                  width: "2.5vw",
                  height: "2.5vw",
                }}
              />
              <Typography
                variant={item?.headingType?.title?.toLowerCase()}
                className={isWhiteBg ? "blackColor" : "whiteColor"}
              >
                {item.title}
              </Typography>
            </Box>
          );
        })}


      </Grid>
    </Grid>
  );
};

export default ContactForm;
