
"use client";

import React, { useState } from "react";
import {
  Avatar,
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "../MainPage/MainPgstyles";
import Link from "next/link";
import Image from "next/image";

const TechWeWorkCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK || "";
  const elements =
    data?.sectionTechnologyCategories?.map((entry) => ({
      category: entry.techStackCategory.title,
      technologies: entry.techStackCategory.technologies?.map((item) => ({
        technologyname: item.title,
        icon: item.image,
      })),
    })) || [];

  const styles = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  if (elements.length > 0 && activeTab >= elements.length) {
    setActiveTab(0);
  }

  const handleTabClick = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSelectChange = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item md={2} xs={3.5} sx={{ display: { md: "block", xs: "none" } }}>
        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={handleTabClick}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            mt: "2%",
          }}
        >
          {elements.map((entry, index) => (
            <Tab
              key={index}
              label={entry.category}
              value={index}
              sx={{
                minWidth: "8%",
                maxWidth: "100%",
                fontSize: "0.73vw",
                my: "2.5%",
                minHeight: "0",
                padding: "2%",
                textAlign: "left",
                py: { md: "5%", xs: "12%" },
                alignItems: "start",
                color: "#333",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  color: "#1976d2",
                },
                "&.Mui-selected": {
                  fontWeight: "bold",
                  borderLeft: "3px solid #1976d2",
                  backgroundColor: "#e3f2fd",
                  color: "#1976d2",
                },
              }}
            />
          ))}
        </Tabs>
      </Grid>
      <Box display={{ xs: "flex", md: "none" }} width="95%" mt="2%">
        <FormControl fullWidth variant="standard">
          <Select
            className="m_port_dropdown"
            value={activeTab}
            onChange={handleSelectChange}
            sx={{
              "& .MuiSelect-icon": styles.selectIcon,
              "& .MuiSelect-icon.Mui-expanded": styles.expandedIcon,
            }}
            IconComponent={ExpandMoreIcon}
            MenuProps={{
              PaperProps: { sx: styles.menuPaper },
            }}
          >
            {elements.map((entry, index) => (
              <MenuItem
                key={index}
                value={index}
                className={
                  activeTab === index
                    ? "all_project_links_active"
                    : "all_project_links"
                }
              >
                {entry.category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Grid
        item
        md={8}
        xs={11.5}
        mt={{ md: 0, xs: "8%" }}
        pl={{ md: "2%", xs: "4%" }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          height: "auto",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {elements[activeTab]?.technologies?.map((tech, techIndex) => (
          <Box
            key={techIndex}
            sx={{
              width: { md: "10%", xs: "auto" },
              display: "flex",
              borderRadius: { md: "0.45vw", xs: "0.45rem" },
              alignItems: "center",
              justifyContent: { md: "center", xs: "left" },
              textAlign: "center",
              flexDirection: "column",
              mt: "1%",
              height: { md: "25%", xs: "auto" },
              p: { md: "2%", xs: "1rem" },
              transition: "transform 0.3s ease-in-out",
              backgroundColor: "#e6f7fa",
              "&:hover": {
                backgroundColor: "#e3f3fd",
                transform: "scale(1.1)",
              },
            }}
          >
            <Link href={tech.route || "#"} passHref>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                    width: { md: "5vw", xs: "5rem" },
                    height: { md: "5vw", xs: "5rem" },
                  }}
                >
                  <Image
                    src={tech?.icon ? `${imgLink}${tech.icon}` : "/assets/noimg.webp"}
                    alt={tech?.technologyname}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>

              <Typography
                variant="h6"
                sx={{ mb: "2%", fontWeight: "bold" }}
              >
                {tech.technologyname}
              </Typography>
            </Link>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default TechWeWorkCSR;