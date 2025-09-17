"use client";
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { useStyles } from "./MainPgstyles";
import Image from "next/image";

const TechnologiesCSR = ({ data }) => {
  const styles = useStyles();
  const technologyCategories = data?.sectionTechnologyCategories || [];
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;

  const [selected, setSelected] = useState(technologyCategories[0]?.techStackCategory?.title || "");

  const handleSelectedTechnology = (value) => {
    setSelected(value);
  };

  const filteredTechnologies = technologyCategories.find(
    (item) => item.techStackCategory.title === selected
  )?.techStackCategory.technologies || [];

  return (
    <>
      {/* Desktop Buttons */}
      <Grid item md={10} mt="3vh" sx={{ display: { md: "block", xs: "none" } }}>
        <Grid container justifyContent="center" spacing={1}>
          {technologyCategories.map((item) => {
            const title = item.techStackCategory.title;
            const isSelected = selected === title;
            return (
              <Grid item md={technologyCategories.length>=4?2.8:2} key={title} sx={{ display: "flex" }}>
                <Button
                  sx={{
                    borderRadius: "0.3vw",
                    ...styles.button,
                    border: isSelected ? "0.15vw solid #0486ff" : styles.button.border,
                    color: isSelected ? "#0486ff" : styles.button.color,
                    textTransform: "none",
                    width: "100%",
                  }}
                  onClick={() => handleSelectedTechnology(title)}
                >
                  {title}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      {/* Mobile Dropdown */}
      <Grid item xs={11.5} sx={{ display: { md: "none", xs: "flex" } }}>
        <FormControl fullWidth variant="standard" margin="dense">
          <Select
            className="m_port_dropdown"
            value={selected}
            onChange={(e) => handleSelectedTechnology(e.target.value)}
            IconComponent={ExpandMoreIcon}
            sx={{
              "& .MuiSelect-icon": styles.selectIcon,
              "& .MuiSelect-icon.Mui-expanded": styles.expandedIcon,
            }}
            MenuProps={{ PaperProps: { sx: styles.menuPaper } }}
          >
            {technologyCategories.map((item) => (
              <MenuItem
                key={item.techStackCategory.title}
                value={item.techStackCategory.title}
                className={
                  selected === item.techStackCategory.title
                    ? "all_project_links_active"
                    : "all_project_links"
                }
              >
                {item.techStackCategory.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Technology Logos */}
      <Grid item md={10} xs={11} mb="4vh" sx={{ height: { md: "auto", xs: "30vh" } }}>
        <Grid
          container
          sx={{ gap: { md: "1vw", xs: 0 }, mt: "2vh" }}
          justifyContent={{ md: "flex-start", xs: "center" }}
        >
          {filteredTechnologies.map((logo) => (
            <Grid item md={2} xs={4} key={logo.title} my="0.5vh">
              <Box
                sx={{
                  width: { md: "100%", xs: "90%" },
                  display: "flex",
                  justifyContent: "center",
                  height: "6vh",
                  alignItems: "center",
                  bgcolor: "#f8f8fb",
                  borderRadius: "2vw",
                  px: 1,
                }}
              >
           <Box
  sx={{
    width: { md: "60%", xs: "1.5rem" },
    height: "auto",
    ml: "0.5vw",
    position: "relative",
  }}
>
  <Image
    src={`${imgLink}${logo?.image}`}
    alt={logo?.title || "Logo"}
  style={{
    objectFit: "contain",
    width: "100%",
    height: "auto"
  }} 
    width={100}
    height={50} 
    priority
  />
</Box>
                <Typography variant="h5" className="smallText" sx={{ ml: "0.6vw" }}>
                  {logo.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default TechnologiesCSR;
