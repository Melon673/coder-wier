import stripHtml from "@/utils/stripHtml";
import { Grid, Typography } from "@mui/material";

const BankingInfo = ({ data }) => {
  return (
    <>
      <Grid
        container
        bgcolor={"#FFF"}
        my={{md:"4.2%",xs:"3.63rem"}}
        justifyContent="center"
        id="Banking-info"
      >
        <Grid item xs={12} md={8} textAlign="center">
          <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} mb={"1%"}>
            {stripHtml(data?.title)}
          </Typography>
          <Typography variant="body1">
            {stripHtml(data?.description)}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        bgcolor={"#FFF"}
        p={{ md: "2%", xs: "2%" }}
        justifyContent="center"
      >
        {data?.elements?.map((item, index) => (
          <Grid
            item
            md={3.5}
            xs={12}
            mt={{ md: 10, xs: 5 }}
            key={index}
            bgcolor={"#F4FAFF"}
          >
            <Typography variant={item?.headingType?.title?.toLowerCase()||"h3"} my={5} mx={8}>
              {stripHtml(item?.title)}
            </Typography>
            <span
               dangerouslySetInnerHTML={{
                            __html:item?.description || item?.shortDescription
                        }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BankingInfo;
