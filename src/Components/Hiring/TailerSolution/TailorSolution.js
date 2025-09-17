import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";

const TailorSolution = ({ data,index }) => {
  const id = `${data?.idForfrontendUse || "Tailor Solution"}-${index}`;

  const isLongList = data?.cardData?.length > 4;
  const headingVariant = data?.headingType?.title?.toLowerCase();

  const iconStyle = {
    fontSize: { md: "2vw", xs: "1.5rem" },
    p: { md: "0.3vw", xs: "0.3rem" },
    bgcolor: "#0486FF",
    color: "#fff",
    borderRadius: "50%",
  };

  const cardWrapperStyle = {
    display: "flex",
    bgcolor: "#121E2A",
    border: "0.15rem solid transparent",
    p: "2%",
    borderRadius: { md: "0.5vw", xs: "0.5rem" },
    transition: "border 0.3s ease-in-out",
    "&:hover": {
      borderColor: "#0486FF",
      "& .whiteheading3, .whiteheading4": {
        borderBottom: "0.1rem solid #0486FF",
      },
    },
  };

  const highlightCardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: { md: "0.5vw", xs: 0 },
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    p: { md: "0.5vw", xs: "0.5rem" },
    width: { md: "50%", xs: "100%" },
    position: "relative",
  };

  const highlightCards = [
    {
      icon: <TrendingUpIcon sx={iconStyle} />,
      title: data?.CardTitle1,
      offsetTop: { md: "1%", xs: "1%" },
      offsetLeft: { md: "40%", xs: 0 },
    },
    {
      icon: <DoneIcon sx={iconStyle} />,
      title: data?.CardTitle2,
      offsetTop: {
        md: isLongList ? "105%" : "80%",
        xs: "123%",
      },
      offsetLeft: {
        md: "-10%",
        xs: "-0.3%",
      },
    },
  ];

  return (
    <Grid
      container
      justifyContent="center"
    py={{ md: "4.2%", xs: "3.63rem" }}
      id={id}
    >
      <CommonComponents
        textAlign="center"
        variant={headingVariant}
        title={data?.title}
        description={stripHtml(data?.description)}
      />

      {/* Main Feature Cards */}
      <Grid item md={6.7} xs={11.5} mt="0.5%">
        {data?.cardData?.map((item, index) => (
          <Box key={index} my="2%" sx={cardWrapperStyle}>
            <Typography variant="h1" color="#0486FF">{`0${index + 1}`}</Typography>
            <Box sx={{ ml: "1%" }}>
              <Typography
                variant="h3"
                color="#FFF"
                sx={{
                  border: "0.15vw solid transparent",
                  display: "inline-block",
                  pb: "0.5%",
                }}
              >
                {item?.title}
              </Typography>
              <Typography variant="body1" className="whiteColor" mt="0.4%">
                {stripHtml(item?.description)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Side Image and Highlight Cards */}
      <Grid item md={4} xs={11} pl={{ md: "4%", xs: 0 }} mt="1.7%">
        <Avatar
          variant="square"
          alt={data?.imageAltText || "Tailor Solution Image"}
          src="/Tailorsolution.png"
          sx={{
            width: { md: "23vw", xs: "92%" },
            height: { md: isLongList ? "74vh" : "auto", xs: "auto" },
            borderRadius: { md: "0.3vw", xs: 0 },
            mt: { md: 0, xs: "15%" },
            position: "absolute",
          }}
        />

        {highlightCards.map((card, index) => (
          <Card
            key={index}
            sx={{
              ...highlightCardStyle,
              mt: card.offsetTop,
              ml: card.offsetLeft,
            }}
          >
            {card.icon}
            <Box ml={{ md: "2%", xs: "3%" }}>
              <Typography variant={headingVariant} mb="0.5%">
                {card.title}
              </Typography>
              <Box
                dangerouslySetInnerHTML={{
                  __html: data?.CardDescription,
                }}
              />
            </Box>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default TailorSolution;
