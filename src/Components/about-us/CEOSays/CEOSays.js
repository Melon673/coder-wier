
import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";
import ContactButton from "@/Components/NewComponents/Registration/ContactButtonBlue";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const CEOSays = ({ data, index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "CEOSays"}-${index}`;

  return (
    <Grid container id={id} className="Ceo" py={{ md: "4.2%", xs: "3.63rem" }} alignItems={"stretch"}
      justifyContent={'center'}>
      <Grid item md={5} xs={11.5} mb={"2%"}  >
        <Typography variant={data?.headingType?.title?.toLowerCase() || "h2"}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} >
          {data?.title || "No title found"}
        </Typography>
        <span className="CeoSays" dangerouslySetInnerHTML={{ __html: data.description }} mt={"1%"} />
    {data?.ctaText && data?.ctaLnik && (
  <Box
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      mt: { md: "4vw", xs: "1rem" },
    }}
  >
    <Link href={data.ctaLnik} passHref>
      <ContactButtonBlue label={data.ctaText} />
    </Link>
  </Box>
)}

      </Grid>
      <Grid item md={5} xs={11.5} mt={{ md: 0, xs: "2%" }} sx={{ display: { md: "flex", xs: "none" }, justifyContent: "flex-end" }}>
        <Box
          sx={{
            borderRadius: { md: "0.5vw", xs: "0.5rem" },
            width: { md: "70%", xs: "100%" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={
              data?.image ? `${imgLink}${data.image}` : "/assets/noimg.webp"
            }
            alt={data?.title || "Image"}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

      </Grid>
    </Grid >
  )
}

export default CEOSays;
