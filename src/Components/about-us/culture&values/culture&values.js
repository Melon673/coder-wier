import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import stripHtml from "@/utils/stripHtml";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
const CultureValues = ({ data, index }) => {
    const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
    const id = `${data?.idForfrontendUse || "Our-Culture-Values"}-${index}`;

    return (
        <Grid id={id} columnGap={"1%"} py={{ md: "3%", xs: "5%" }}
            container
            justifyContent="center"
 sx={{
    background: `linear-gradient(90deg, rgba(32,45,59,0.9051995798319328) 46%, rgba(32,45,59,0.9051995798319328) 46%), 
      url('${
        data?.image
          ? `${imgLink}${data.image}`
          : "/culturew and values.webp"
      }')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  }}       >     <CommonComponents
                textAlign={'center'} className={"whiteColor"}
                variant={data?.headingType?.title?.toLowerCase()}
                title={data?.title} width={{ md: "40%", xs: "100%" }}
                description={stripHtml(data?.description)}
            />
            {data?.elements?.map((card, index) =>
                <Grid item key={index} xs={11} md={3} textAlign={"center"} sx={{
                    mt: { md: "2%", xs: "4%" }, borderRadius: { md: "0.4vw", xs: "0.4rem" }, p: { md: "1%", xs: "3%" },
                    border: "2px solid #FFF",
                    boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.10)",
                }}>
                    <Box sx={{     bgcolor: "#0486FF",
                            borderRadius: "50%",
                            p: "2%", width: {md:"4vw",xs:"4rem"},height:{md:"4vw",xs:"4rem"},
                            margin: "auto",}}>

                    <Box
                        sx={{
                            width: "100%",height:"100%",display:"inline-block",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={`${imgLink}${card?.image || "/assets/noimg.webp"}`}
                            alt="hero"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </Box>
                    </Box>

                    <Typography variant="h3" className="whiteColor" mt={index === 1 ? "4%" : "5%"} mb={"2%"} >{card?.title || "no title available"}</Typography>
                    <Box className="whiteColor" dangerouslySetInnerHTML={{
                        __html: card?.description || card?.shortDescription || "No description found"
                    }} sx={{
                        "& *": {
                            color: "white !important"
                        }
                    }} />
                </Grid>
            )}

        </Grid >
    );
};

export default CultureValues;