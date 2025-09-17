import NewsletterCSR from "@/utils/MainPage/NewsletterCSR";
import { Grid } from "@mui/material";

const Newsletter = ({data,index}) => {
    const id = `${data?.idForfrontendUse || "Newsletter"}-${index}`;

  return (
    <>
      <Grid
        container justifyContent={"center"}
        id={id}   py={{md:"4.2%",xs:"3.63rem"}}
        sx={{
        
          backgroundImage:
            "url(/BG-Newsletter.webp)",
          backgroundSize: { md: "100% 100% ", xs: "100% 100%" },
          backgroundRepeat: { md: "none", xs: "no-repeat" },
          backgroundPosition: { md: "center center", xs: "center" },
          textAlign: "center",
        }}
      >
        <NewsletterCSR  data={data}/>
      </Grid>
    </>
  );
};

export default Newsletter;
