import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import stripHtml from "@/utils/stripHtml";
import Image from "next/image";

const AuthorBanner = ({ data,index }) => {
    const id = `${data?.idForfrontendUse || "AuthorBanner"}-${index}`;

  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  return (
    <Box id={id} sx={{ bgcolor: "#f4faff", }} py={{ md: "4.2%", xs: "3.63rem" }} >

      <Box sx={{ display: { md: "flex", xs: "block" }, alignItems: "center", m: "auto", columnGap: "2%" }}
        width={{ md: "84%", xs: "96%" }}>
          <Avatar
            src={`${imgLink}${data?.image}`}
            alt="Avatar Image"
            sx={{             width: { md: "20%", xs: "5rem" },
            height: { md: "100%", xs: "5rem" },
            borderRadius: "50%",
            border: "2px solid #0486ff", }}
          />
        <Box>
          <Typography  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} variant={data?.headingType?.title?.toLowerCase()}>
            {data?.title}
          </Typography>
          <Typography className="blueColor" variant="body1" my={"1%"}>
            {data?.subTitle}
          </Typography>
          <Typography
            variant="body1" mb={"1%"}>
            {stripHtml(data.description)}
          </Typography>

          <Button>
            <Image
              src={`${imgLink}${data?.icon1}`}
              alt="facebook"
              width={24}
              height={24}
              style={{ objectFit: "contain" }}
            />
          </Button>
          <Button>
            <Image
              src={`${imgLink}${data?.icon2}`}
              alt="twitter"
              width={24}
              height={24}
              style={{ objectFit: "contain" }}
            />
          </Button>
          <Button>
            <Image
              src={`${imgLink}${data?.icon3}`}
              alt="instagram"
              width={24}
              height={24}
              style={{ objectFit: "contain" }}
            />
          </Button>
          <Button>
            <Image
              src={`${imgLink}${data?.icon4}`}
              alt="linkedin"
              width={24}
              height={24}
              style={{ objectFit: "contain" }}
            />
          </Button>
        </Box>

      </Box>
    </Box>

  );
};

export default AuthorBanner;
