import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ExpertQAServiceCSR from "@/utils/MainPage/ExpertQAServiceCSR";
import stripHtml from "@/utils/stripHtml";
const ExpertQAServicesTestingSimple = ({ data,index }) => {
  const id = `${data?.idForfrontendUse || "ExpertQAServicesTestingSimple"}-${index}`;

  return (
    <Grid container justifyContent={"center"}  id={id}
        py={{ md: "4.2%", xs: "3.63rem" }}
     >
      <Grid item md={10} xs={11.5} textAlign={"center"}>
        <Typography variant="h2">{data.heading}</Typography>
      </Grid>
      <Grid item md={103} xs={11.5} textAlign={"center"} py="1vh" px={{ md: "15vw", xs: "0vw" }}>
        <Typography variant="body1">{stripHtml(data.description)}</Typography>
      </Grid>
      <Grid item md={11} xs={11.5}>
        <Grid container justifyContent="center">
          {data.detail1?.map((item, index) => (
            <Grid item md={4} xs={11.5} key={index} my={{ md: "1vh", xs: "0.5vh" }} sx={{ display: { md: "block", xs: "none" } }}>
              <Box sx={{ borderTop: "0.15vw solid #000000" }}>
                <Typography variant="h3" mt={"2%"}>
                  {item.title}
                </Typography>
                {item.para?.map((subitem, subindex) => (
                  <Typography variant="body1" textAlign={"left"} key={subindex} my={"0.5vh"}>
                    {subitem}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
          <ExpertQAServiceCSR data={data} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExpertQAServicesTestingSimple;
