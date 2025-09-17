import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";
import ContactButton from "@/Components/NewComponents/Registration/ContactButtonBlue";
import stripHtml from "@/utils/stripHtml";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";

const BlogauthorDetail = ({ data }) => {

  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset ,&:hover fieldset,&.Mui-focused fieldset": {
        borderColor: "rgba(243, 243, 243, 0.16)",
        borderRadius: "0.9375rem",
      },
    },
    background: "rgba(243, 243, 243, 0.16)",
    borderRadius: "0.9375rem",
    border: "1px solid rgba(243, 243, 243, 0.16)",
    color: "white",
    marginTop: "30px",
  };
  return (
    <Grid id="about-author"
      container
      bgcolor={"white"}
      justifyContent={"center !important"}
      pt={10}
      pb={10}
    >
      <Grid item md={6} xs={10}>
        <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} mb={2.5}>
          {data.title}
        </Typography>
        <Typography variant="body1"  >
          {stripHtml(data?.description)}
        </Typography>

      </Grid>

      <Grid
        item
        md={2.5}
        pt={"2vh"}
        pl={"4vh"}
        ml={"10vw"}
        display={{ md: "block", xs: "none" }}
      >
        <Grid container>
          <Box
            mr={125}
            sx={{
              background: "white",
              border: "2px solid #A4D3FF",
              padding: "10px",
            }}
          >
            <Grid
              item
              bgcolor={"#0486FF"}
              sx={{ padding: "40px", width: " 18.5vw" }}
            >
              <Typography variant="h3" color={"white"}>
                {data.title}
              </Typography>
              {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonBlue label={data.ctaText} />
                    </Link>
                    }
            </Grid>
          </Box>
        </Grid>
        <Grid
          container
          mt={5}
          sx={{
            background: "white",
            border: "2px solid #A4D3FF",
            padding: "10px",
            width: "19.8vw",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{ bgcolor: "#0486FF", padding: "35px", width: "19.4vw" }}
          >
            <Typography variant="h3" color={"white"}>
              {data.newsletterHeading}
            </Typography>
            <Typography className="smallText" color={"white !important"}>
              {data.newsletterpara}
            </Typography>
            <TextField
              type="email"
              placeholder="Type Your Email Here"
              variant="outlined"
              fullWidth
              sx={{
                ...textFieldStyle,
                "& input::placeholder": {
                  color: "white",
                },
              }}
              InputProps={{
                style: { color: "white" },
              }}
            />

                                         {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonBlue label={data.ctaText} />
                    </Link>
                    }

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogauthorDetail;
