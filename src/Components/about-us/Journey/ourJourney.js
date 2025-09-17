import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import stripHtml from "@/utils/stripHtml";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Journey = ({ data,index }) => {
    const id = `${data?.idForfrontendUse || "Our-journey"}-${index}`;

  const topPositions = [
    "11%", "20%", "29%", "38%", "46%", "56%", "64%", "73%", "81%", "90%"
  ];

  return (
    <>
      <Grid container id={id} justifyContent={"center"} py={{ md: "4.2%", xs: "3.63rem" }} sx={{ display: { md: 'flex', xs: 'none', } }}>
        <CommonComponents
          textAlign={'center'}
          variant={data?.headingType?.title?.toLowerCase()}
          title={data?.title} width={{ md: "80%", xs: "100%" }}
          description={stripHtml(data?.description)}
        />
        <Grid item md={10} xs={12} sx={{ position: "relative", my: "5%" }}>
          <Box sx={{ width: "auto", height: "auto", position: "relative" }}>
            <Image
              src="/Assets/Images/NewCompoents/Journey/Journey.png"
              alt="Journey Desktop"
              width={800} // replace with your actual width
              height={500} // replace with your actual height
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>
          {data.elements?.map((item, index) => (
            <Box key={index} sx={{ position: "absolute", top: index % 2 == 1 ? "81%" : "-30%", left: index === 0 ? "1%" : index === 1 ? "10%" : index === 2 ? "20%" : index === 3 ? "29%" : index === 4 ? "39%" : index === 5 ? "47.5%" : index === 6 ? "56%" : index === 7 ? "66%" : index === 8 ? "76%" : "86%", display: "flex", flexDirection: index % 2 == 1 ? "column" : "column-reverse" }}>
              <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}>{item.title}</Typography>
              <span key={index} sx={{ display: 'flex', alignItems: 'center', }} dangerouslySetInnerHTML={{ __html: item.shortDescription }} />
            </Box>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        id="Our-journey"
        justifyContent="center"
        py={{ md: "4.2%", xs: "3.63rem" }}
        sx={{ display: { md: 'none', xs: 'flex', sm: "none" }, position: "relative" }}
      >
        <Grid item xs={11.5} textAlign="center" mb="2%">
          <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}>
            {data?.title}
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: data?.description || "No description found",
            }}
          />
        </Grid>

        <Grid item xs={8}>
          <Box sx={{ width: "auto", height: "auto", position: "relative" }}>
            <Image
              src="/Assets/Images/NewCompoents/Journey/JourneyMobile.png"
              alt="Journey Mobile"
              width={800} // replace with your actual width
              height={500} // replace with your actual height
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        {data?.elements?.map((item, index) => {
          const isOdd = index % 2 === 1;
          const top = topPositions[index] || "90%";

          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: isOdd ? 'row-reverse' : 'row',
                justifyContent: 'space-between',
                width: "82%",
                position: "absolute",
                top,
                alignItems: "flex-end",
              }}
            >
              <Typography variant="h3" sx={{ minWidth: isOdd ? "30%" : "60%" }}>
                {item.title}
              </Typography>
              <span
                sx={{
                  minWidth: isOdd ? "70%" : "50%",
                  display: 'flex',
                  alignItems: 'center',
                }}
                dangerouslySetInnerHTML={{ __html: item.shortDescription }}
              />
            </Box>
          );
        })}
      </Grid>
    </>
  );
};
export default Journey;
