import {
  Typography, Grid, Button, Avatar,
  Box
} from "@mui/material";
import Image from "next/image";
import ContactButtonWhite from "../Registration/ContactButtonWhite";
import Link from "next/link";

const HeroWelcomeSection = ({ data,index }) => {
  const id = `${data?.idForfrontendUse || "HeroWelcomeSection"}-${index}`;

  return (
    <Grid id={id} container p={{ md: "1vw", xs: '0.8rem' }} justifyContent={'center'} sx={{ alignItems: "center", }} >
      <Grid item xs={11.5} md={4.5}  >
        <Typography color='#25BB4F' my={"1vh"}>{data?.title}</Typography>
        <Typography variant="h2" >
          {data?.heading}
        </Typography>
        <Typography variant="body1" my={"1%"} sx={{ width: { md: "30vw", xs: "100%" } }}>
          {data?.description}
        </Typography>
    {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonWhite label={data.ctaText} />
                    </Link>
                    }
      </Grid>
      <Grid item xs={11.5} md={3.5} >
  
<Box
  sx={{
    width: '100%',
    height: 'auto',
    position: 'relative',
    borderRadius: '0.5rem', // mimics "rounded" Avatar
    overflow: 'hidden',     // ensures border radius clips image
  }}
>
  <Image
    src="https://firebasestorage.googleapis.com/v0/b/coders-wire.appspot.com/o/homeBanner.webp?alt=media&token=a636e945-d0b6-4984-8bc6-83e356561483"
    alt="Home Banner"
  style={{
    objectFit: "contain",
    width: "100%",
    height: "auto"
  }} 
    width={1600}  // approximate width
    height={700}  // approximate height

    priority
  />
</Box>
      </Grid>
    </Grid>
  );
};

export default HeroWelcomeSection;
