import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";

const EngagementHome = ({ data,index }) => {
    const imgLink = process.env.NEXT_PUBLIC_IMG_LINK || "";
  const id = `${data?.idForfrontendUse || "EngagementHome"}-${index}`;

    return (
        <Grid
            container
            id={id}
            py={"3%"} spacing={2}
            alignItems="center"
            bgcolor="#121e2a"
            justifyContent="center"
        >
            <CommonComponents
                textAlign={"center"} className="whiteColor"
                variant={data?.headingType?.title?.toLowerCase()}
                title={data?.title}
                description={stripHtml(data?.description)}
            />
            {data?.elements?.map((item, index) => (
                <Grid
                    key={index}
                    id={item?.id}
                    item
                    xs={11.5}
                    md={2.5}
                    sx={{
                        display: { md: "flex", xs: "block" },alignItems:"center",
                        textAlign: { md: "left", xs: "center" },
                    }}
                    my="2%"
                >
                    <Box sx={{ display: "flex", justifyContent:"center",alignItems:"center" }}>
                     <Avatar
  variant="square"
  src={item?.image ? `${imgLink}${item.image}` : "/Assets/NOimg.webp"}
  alt={item?.imageAltText || "No image alt"}
  sx={{
    width: { md: "100%", xs: "10%" },
    height: { md: "100%", xs: "10%" },
    objectFit: "cover", 
  }}
/>
                    </Box>
                    <Box sx={{ ml: { md: "4%", xs: "0" }, mt: "2%" }}>
                        <Typography variant={item?.headingType?.title?.toLowerCase()} className="whiteColor">
                            {item?.title}
                        </Typography>
                        <Typography variant="body1" className="whiteColor">
                            {stripHtml(item?.subtitle)}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default EngagementHome;
