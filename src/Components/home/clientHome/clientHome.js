
import ContactButtonWhite from "@/Components/NewComponents/Registration/ContactButtonWhite";
import stripHtml from "@/utils/stripHtml";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ClientHome = ({ data,index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "Client-Home"}-${index}`;

  const headingVariant = data?.headingType?.title?.toLowerCase() || "h2";
  const sectionTitle = data?.title;
  const sectionDescription = stripHtml(data?.description);

  return (
    <>
      <Box
        id={id}
        textAlign="center"
        mt={{ md: "4.2%", xs: "3.63rem" }}
        sx={{ width: { md: "50%", xs: "96%" }, m: "auto" }}
      >
        <Typography variant={headingVariant}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}>{sectionTitle}</Typography>
        <Typography variant="body1" mt={"1%"}>
          {sectionDescription}
        </Typography>
      </Box>

      {data?.elements?.map((item, index) => {
        const itemHeadingVariant = item?.headingType?.title?.toLowerCase() || "h4";
        const itemDescription = stripHtml(item?.shortDescription);
        const imageSrc = item?.image ? `${imgLink}${item.image}` : "/assets/noimg.webp";

        return (
          <Grid
            container
            key={index}
            justifyContent="center"
            alignItems="center"
            sx={{flexDirection:{md:"row",xs:"column",sm:"row"},
              bgcolor: "#0486FF",
              width: { md: "70%", xs: "95%" },
   margin:{md: "2% auto 2.2% auto ",xs: "1rem auto 3.63rem auto "},
              p: "1%",
              borderRadius: { md: "0.5vw", xs: "0.5rem" },
            }}
          >
            <Grid item md={6} xs={12} sm={6} sx={{ p: { xs: "2%", md: 0 } }}>
              <Typography variant={itemHeadingVariant} className="whiteColor" my={2}>
                {sectionTitle}
              </Typography>
              <Typography variant="body1" className="whiteColor" my={"2%"}>
                {itemDescription}
              </Typography>
       <Box sx={{mt:"8%"}}>
            {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonWhite label={data.ctaText} />
                    </Link>
                    }
       </Box>

            </Grid>

            <Grid item md={6} sm={6} xs={12} sx={{ display: "flex", justifyContent: "flex-end", }}>
          <Box
  sx={{
    width: { md: "65%", xs: "100%" },
    aspectRatio: "16 / 9", // optional: maintain a responsive ratio
    position: "relative",
    borderRadius: "0.4rem", // optional: if you want rounded corners
    overflow: "hidden",     // required for borderRadius + objectFit
  }}
>
  <Image
    src={imageSrc || "/Assets/NOimg.webp"}
    alt={item?.imageAltText || "Client Image"}
    fill
    style={{ objectFit: "cover" }}
  />
</Box>

            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default ClientHome;
