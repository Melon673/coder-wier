import { Box, Grid,  Typography } from "@mui/material";

const AboutAuthor = ({ data, author,index }) => {
    const id = `${data?.idForfrontendUse || "AuthorBlog"}-${index}`;

  return (
      <Grid id={id}  my={{ md: "4.2%", xs: "3.63rem" }}
        container sx={{ justifyContent: "center", columnGap:"2%" }}>
        <Grid item md={7} xs={11.5}>
          <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}> {author?.title ||data?.title}</Typography>
          <Typography
            variant="body1"
           dangerouslySetInnerHTML={{
             __html: data.description,
           }}
          />
          {data?.elements?.map((item, index) => (
            <Box key={item.id || index} >
              <Typography variant="h3" >
                {item.title}
              </Typography>
              <span  
           dangerouslySetInnerHTML={{
             __html: item?.shortDescription||item?.description,
           }} />
            </Box>
          ))}
        </Grid>
        {/* {data?.elements?.map((item, index) => (
          <Grid key={index}
            item
            md={2} sx={{ alignItems: "flex-start" }}
            display={{ md: index === 0 ? "block" : "none", xs: "none" }}
          >
            <Grid container sx={{ position: "sticky", top: "12%", }}>
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
                    {data.AboveCardHeading || "not heading found"}
                  </Typography>
                  <Link href="/contact-us" passHref>
                    <Button
                      className="blueBackgroundButton"
                      sx={{
                        border: "2px solid white",
                        color: "white",
                        marginTop: "20px",
                      }}
                    >
                      Contact Us
                    </Button>
                  </Link>
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
                  {data.newsletterHeading || "not heading found"}
                </Typography>
                <Typography className="smallText" color={"white !important"}>
                  {data.newsletterpara || "not para found"}
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

                <Button
                  className="blueBackgroundButton"
                  sx={{
                    border: "2px solid white",
                    color: "white",
                    marginTop: "20px",
                  }}
                >
                  subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>))} */}
        <Grid item md={2.8} sx={{display:{md:"block",xs:"none"}}}>

        </Grid>

      </Grid>
  );
};

export default AboutAuthor;
