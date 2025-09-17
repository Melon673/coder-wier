"use client";
import {  SpeedDial, SpeedDialAction, Typography } from "@mui/material";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { ServiceBannerCSR } from "../ServicePage/ServicesCSRFunctions";

const ScrollCSR = ({data}) => {
    const { selectedHeading, setSelectedHeading } = ServiceBannerCSR()
    const scrollToEll = (id) => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      };
  return (
    <>
       < SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                direction="left"
            >
                {data?.map((item, index) =>
                    <SpeedDialAction
                        sx={{
                            width: "6vw",
                            height: "6vh",
                            borderRadius: "1vh !important",
                            py: "5vh",
                            backgroundColor: selectedHeading === item ? "#0486ff" : "",
                            "&:hover": {
                                backgroundColor: "lightgray",
                            }
                        }}
                        onClick={() => { scrollToEll(item); setSelectedHeading(item) }}
                        key={index}
                        icon={
                            <Typography variant="caption" fontSize={10} color={"black"}>
                                {item}
                            </Typography>
                        }
                    />
                )}
            </SpeedDial >
    </>
  )
}

export default ScrollCSR
