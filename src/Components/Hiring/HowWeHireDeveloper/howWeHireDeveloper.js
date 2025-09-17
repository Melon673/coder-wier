import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const HowWeHireDeveloper = ({ data ,index}) => {
      const id = `${data?.idForfrontendUse || "HowWeHireDeveloper"}-${index}`;

    return (
        <Grid container id={id} display={{ md: 'flex', xs: 'none' }} >
            <Grid item xs={12} bgcolor={"white"} textAlign={"center"} pt={10} >
                <Typography variant="h2">{data?.title}</Typography>
                <Typography variant="body1"  >{data?.description}</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <Grid container bgcolor={"white"} pt={10} px={"12%"}>
                    <Grid item md={4} mr={"-1%"} >
                        {data?.elements?.map((item, index) => (
                            <Grid container spacing={2} sx={{ mt: index == 0 ? "33vh" : index == 1 ? "29vh" : index == 2 ? "28vh" : index == 3 ? "28vh" : "" }} key={index}>
                                <Grid item md={12} textAlign={"right"} >
                                    <Typography variant="h3" color={"#0486ff"}>{item?.id}</Typography>
                                    <Typography variant="h3" > {item?.title} </Typography>
                                    <Typography variant="body1" > {item?.shortDescription} </Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={3.5} ml={"3%"} pb={5} >
                       <Box
  sx={{
    width: "20vw",
    height: "auto",
    position: "relative",
    borderRadius: "0.75rem", // simulate 'rounded'
    overflow: "hidden",       // to apply rounded corners
  }}
>
  <Image
    src="https://firebasestorage.googleapis.com/v0/b/coders-wire.appspot.com/o/hiring%2FGroup%20120673.jpg?alt=media&token=25d8ae75-2c0c-4ec7-887b-df683682baa6"
    alt="Hiring Image"
  style={{
    objectFit: "contain",
    width: "100%",
    height: "auto"
  }} 
    width={800}  // adjust as needed for aspect ratio
    height={600}

    priority
  />
</Box>
                    </Grid>
                    <Grid item md={4} ml={"-1%"}>
                        {data?.elements?.map((item, index) => (
                            <Grid container spacing={2} key={index}>
                                ``                            <Grid item md={12} sx={{ mt: index == 0 ? "13vh" : index == 1 ? "31vh" : index == 2 ? "30.5vh" : index == 3 ? "30.5vh" : index == 4 ? "30.5vh" : "" }} >
                                    <Typography variant="h3" color={"#0486ff"} > {item.id} </Typography>
                                    <Typography variant="h3" > {item?.title} </Typography>
                                    <Box   dangerouslySetInnerHTML={{
                            __html:item?.shortDescription
                        }}/>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default HowWeHireDeveloper;