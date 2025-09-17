import stripHtml from "@/utils/stripHtml";
import { Avatar, Card, Grid, Typography } from "@mui/material";

const OurCoreDev = ({ data }) => {
  return (
    <>
      <Grid justifyItems={"center"}
        id={data?.heading} sx={{ display: { md: "flex", xs: "none" }, }}
        container
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Grid item md={12} xs={12} textAlign={"center"} mb={"2%"}>
          <Typography variant="h2">
            {data?.heiding}
          </Typography>
        </Grid>
        {data?.detail?.map((item, index) => (
          <Grid item md={3.5} className="maincontainer" key={index} sx={{ mb: '23%' }}>
            <Card className="front" sx={{ paddingTop: "3%" }}>
              <Avatar
                variant="square"
                src={item.logo}
                sx={{
                  margin: "auto",
                  width: "20%",
                  height: "auto",
                }}
              />
              <Typography variant="h2" textAlign={"center"} sx={{ width: "80%", margin: 'auto', pt: '10%' }}>{item.labelName}</Typography>
            </Card>
            <Card className="back" sx={{ padding: "2%", }}>
              <Avatar
                variant="square"
                src={item.logo}
                sx={{
                  margin: "auto", py: "5%",
                  width: "15%",
                  height: "auto",
                }}
              />
              <Typography variant="h3" sx={{ height: '8%', mb: "3%" }}>
                {item.labelName}
              </Typography>
              <Typography variant="body1" >{stripHtml(item.description)}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Mobile */}
      <Grid
        container
        justifyContent={"center"}
        textAlign={"center"} sx={{ display: { md: "none", xs: "flex" }, }}
      >
        <Grid item xs={11} textAlign={"center"} mb={"1.3rem"}>
          <Typography variant="h3" >
            Our Core Software Development Services
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default OurCoreDev;
