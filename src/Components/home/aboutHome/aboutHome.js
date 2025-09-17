import stripHtml from "@/utils/stripHtml";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { memo } from "react";

const AboutHome = ({ data ,index }) => {
      const id = `${data?.idForfrontendUse || "AboutHome"}-${index}`;

    const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
    return (
   
                <Grid sx={{ bgcolor: "#F4FAFF" }} id={id} container justifyContent={'center'} py={{md:"3%",xs:"2rem"}}>
                    <Grid item md={4.5} xs={11.5} textAlign={{md:"left",xs:'center'}}>
                        <Typography variant="h2" mb={"4%"} >
                            {data?.title}
                        </Typography>
                        <Avatar variant="rounded" src={`${imgLink}${data?.image || "/assets/noimg.webp"}`} 
                            sx={{
                                width: {md:"70%",xs:"auto"},
                                height: "auto"
                            }}
                        />
                    </Grid>
                    <Grid item md={5.5} xs={11.5}  >
                        <Typography variant="body1" >
                            {stripHtml(data?.description) }
                        </Typography>
                        <Grid container textAlign={{md:"left",xs:'center'}} columnGap={"2%"}>
                            {data?.elements?.map((cardData) =>
                                <Grid item md={5.8} xs={5.95} key={cardData?.title} my={{md:"1%",xs:"3%"}}>
                                    <Box sx={{display:'flex',justifyContent:{md:"left",xs:'center'}}}>
                                    <Avatar src={`${imgLink}${cardData?.image || "/assets/noimg.webp"}`} alt={cardData?.title} variant="square" sx={{width:{md:"5vw",xs:"3.5rem"},height:{md:'5vw',xs:"auto"},borderRadius:{md:"0.6vw",xs:"0.6rem"}}} />
                                    </Box><Typography variant="h3" my={"2%"}>
                                        {cardData?.title}
                                    </Typography>
                                    <Box   dangerouslySetInnerHTML={{
                            __html:cardData?.description||cardData?.shortDescription
                        }}/>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>

    )
}

export default memo(AboutHome);
