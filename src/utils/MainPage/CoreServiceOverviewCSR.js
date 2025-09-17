"use client";
import {
    Grid, Typography, Button, Box, FormControl, Select, MenuItem
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { useEmergingInnovationCSR } from "@/utils/MainPage/MainPageCSRFunctions";
import { useStyles } from "@/utils/MainPage/MainPgstyles";
import stripHtml from "../stripHtml";
import Link from "next/link";
import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";

const CoreServiceDetails = ({ data }) => {
    const styles = useStyles();
    const { activeTab, handleTabClick, pathName } = useEmergingInnovationCSR(data.elements);
    const ITEM_HEIGHT = 60;
    const activeIndex = data.elements.findIndex(item => item.title === activeTab);
    const Y_OFFSET = activeIndex * ITEM_HEIGHT * -1;
    return (
        <>
        

            {/* Mobile Dropdown */}
            <Grid item xs={11.5} sx={{ display: { md: "none", xs: "flex" } }}>
                <FormControl fullWidth variant="standard" margin="dense">
                    <Select
                        value={activeTab}
                        onChange={e => handleTabClick(e.target.value)}
                        IconComponent={ExpandMoreIcon}
                        className="m_port_dropdown"
                        sx={{
                            "& .MuiSelect-icon": styles.selectIcon,
                            "& .MuiSelect-icon.Mui-expanded": styles.expandedIcon,
                        }}
                        MenuProps={{ PaperProps: { sx: styles.menuPaper } }}
                    >
                        {data.elements.map((item, index) => (
                            <MenuItem
                                key={index}
                                value={item.title}
                                onClick={() => handleTabClick(item.title)}
                                className={activeTab === item.title ? "all_project_links_active" : "all_project_links"}
                            >
                                {item.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            {/* Main Layout */}
            <Grid container justifyContent="center" position="relative">
                {/* Sidebar Menu (Desktop) */}
                <Grid
                    item
                    md={3.4}
                    display={{ xs: "none", md: "block" }}
                    pl="2%"
                    py="2%"
                    sx={{
                        zIndex: 1,
                        backgroundColor: "#f5fbff",
                        backgroundImage: 'url("/Assets/Images/coreservice.svg")',
                        backgroundRepeat: "no-repeat",
                        backgroundPositionX: "center",
                        backgroundPositionY: `${Y_OFFSET}px`,
                        transition: "background-position 0.5s ease-in-out",
                    }}
                >
                    {data.elements.map((item, index) => {
                        const isActive = activeTab === item.title;
                        return (
                            <Box
                                key={index}
                                onClick={() => handleTabClick(item.title)}
                                sx={{
                                    height: `${ITEM_HEIGHT}px`,
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    backgroundColor: isActive ? "#0486ff" : "transparent",
                                    transition: "all 0.4s ease-in-out",
                                    marginRight: isActive ? "-1.5vw" : "0",
                                    paddingLeft: "1vw",
                                    py: "8%",
                                    "&:hover .title": {
                                        color: isActive ? "#fff" : "#0486ff",
                                    },
                                }}
                            >
                                <Typography
                                    className="title"
                                    variant="body1"
                                    sx={{
                                        fontSize: { md: "1.5vw", xs: "1.5rem" },
                                        fontWeight: 600,
                                        color: isActive ? "#fff" : "#000",
                                        width: "100%",
                                        transition: "color 0.2s ease-in-out",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        );
                    })}
                </Grid>

                <Grid item md={0.2}></Grid>
                {data.elements.map((item, index) => (
                    <Grid item md={6.4} sx={{ bgcolor: { md: "transparent", xs: "white" }, p: { md: "2% 0 0 0 ", xs: "1rem" } }} className="emergingInnovation" xs={11.5} key={index} display={activeTab === item.title ? "block" : "none"}>
                        <Typography variant={"body1"} fontWeight={"400 !important"} pt={{ md: "0.5vw", xs: "0.5rem" }}
                            ml={{ md: "1vw", xs: "0.6rem" }}

                            dangerouslySetInnerHTML={{
                                __html: item?.shortDescription || item?.description
                            }}
                        />
                        <Box sx={{ border: "2px solid #cde1ff", height: "98%", display: { md: "block", xs: "none" }, position: "absolute", width: "84%", top: "0", left: "10.5%", mt: "2%" }}></Box>
      {item?.ctaText && item?.ctaLnik && (
  <Box
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      mt: { md: "7.5vw", xs: "1rem" },
    }}
  >
    <Link href={item.ctaLnik} passHref>
      <ContactButtonBlue label={item.ctaText} />
    </Link>
  </Box>
)}

                
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default CoreServiceDetails;
