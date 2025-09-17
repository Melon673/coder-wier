"use client";
import React from 'react';
import { Box, Grid, Typography, FormControl, Select, MenuItem, CircularProgress, Button, Avatar } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import TodayIcon from "@mui/icons-material/Today";
import Image from 'next/image';
import { useStyles } from '../MainPage/MainPgstyles';
import { MediaQuery } from '../MainPage/MediaQuerry';
import stripHtml from '../stripHtml';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AllArticlesCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const [selectedChips, setSelectedChips] = React.useState("all");
  const [cardsToShow, setCardsToShow] = React.useState(6);
  const styles = useStyles();
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const pathname = usePathname();
  const industries = data?.industries || [];

  const uniqueTypes = Array.from(new Set(
  industries.map(industry => industry?.title || "General")
));
const PageData = industries.flatMap(industry => {
  const items = pathname === "/case-studies" ? industry?.caseStudies : industry?.blogs;
  return items?.filter(subitem => subitem?.status)?.map(subitem => ({
    type: industry?.title || "General",
    labelHeading: subitem?.title || "",
      describe: subitem?.thumbnailDescription||null,
      Date:subitem?.date? new Date(subitem?.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }) :null,
      id: subitem?.id || "",
      Name: subitem?.team?.fullName || null,
      imageSrc: subitem?.thumbnailImage || null,
      teamImg: subitem?.team?.image ||null,
      route: pathname === "/case-studies" ? `/case-studies/${subitem?.slug}` : `/blog/${subitem?.slug}`,
  })) || [];
});

// ✅ filteredData: yahan Latest ko remove karo agar ALL selected hai
const filteredData =
  selectedChips === "all"
    ? PageData.filter(item => item.type !== "Latest")
    : PageData.filter(item => item.type === selectedChips);


  const handleLoadMore = () => {
    setCardsToShow(prev => prev + 6);
  };

  const handleButtonClick = (route) => () => {
    if (typeof window !== 'undefined') {
      window.location.href = route;
    }
  };

  return (
    <>
      <Grid item xs={11.5} display={{ xs: "flex", md: "none" }}>
        <FormControl fullWidth variant="standard" margin="dense">
          <Select
            className="m_port_dropdown"
            value={selectedChips} onChange={e => setSelectedChips(e.target.value)}

            sx={{
              "& .MuiSelect-icon": styles.selectIcon,
              "& .MuiSelect-icon.Mui-expanded": styles.expandedIcon,
            }}
            IconComponent={ExpandMoreIcon}
            MenuProps={{
              PaperProps: { sx: styles.menuPaper },
            }}
          >
            <MenuItem value="all" className={
              selectedChips === "all" ? "all_project_links_active" : "all_project_links"
            }>All Topics</MenuItem>
            {uniqueTypes.map((type) => (
              <MenuItem
                key={type} value={type}
                onClick={() => setSelectedChips(type)}
                className={
                  selectedChips === type ? "all_project_links_active" : "all_project_links"
                }
              >
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        md={10} sx={{ columnGap: "0.5%" }} justifyContent={"center"}
        display={{ xs: "none", md: "flex" }}
      >
        <Box
          onClick={() => setSelectedChips("all")}
          sx={{
            width: "auto", px: "1%", py: "0.5%", cursor: "pointer",
            backgroundColor: selectedChips === "all" ? "#0486FF" : "#DAEDFD",
            borderRadius: "0.5vw",
            transition: "all 0.3ease-in-out",
            color: selectedChips === "all" ? "#FFFFFF" : "#0486FF", "&:hover": {
              backgroundColor: "#0486FF",
              "& .chipText": {
                color: "#FFFFFF !important",
              },
            },
          }}

        ><Typography variant='h6' className={selectedChips === "all" ? "whiteColor" : 'chipText blackColor'}>All Topics</Typography></Box>
        {uniqueTypes.map((type, index) => (
          <Box key={index}
            onClick={() => setSelectedChips(type)}
            sx={{
              width: "auto", px: "1%", py: "0.5%", cursor: "pointer",
              backgroundColor: selectedChips === type ? "#0486FF" : "#DAEDFD",
              borderRadius: "0.5vw",
              color: selectedChips === type ? "#FFFFFF" : "#0486FF",
              "&:hover": {
                backgroundColor: "#0486FF",
                color: "#FFFFFF",
                "& .chipText": {
                  color: "#FFFFFF !important",
                },
              },

            }}

          ><Typography variant='h6' className={selectedChips === type ? "whiteColor" : 'chipText blackColor'}>{type}</Typography></Box>
        ))}
      </Grid>
      {!filteredData?.length ? (
        <Box margin="auto">
          <CircularProgress />
        </Box>
      ) : (
        filteredData.slice(0, cardsToShow).map((item, index) => (
          <Grid item md={3.25} xs={11.5} mt={"2%"} key={index} sx={{ cursor: "pointer", boxShadow: { md: 0, xs: "rgba(0, 0, 0, 0.35) 0px 5px 15px" } }}
            onClick={isBigMobile || isSmallMobile ? undefined : handleButtonClick(item.route)}
          >
            <Avatar 
              src={`${imgLink}${item?.imageSrc || "/assets/noimg.webp"}`}
              alt={item?.labelHeading} variant='square'
              sx={{ width: "100%", height: {md:"15vw",xs:"15rem"}, borderRadius: "0.45rem" }}
            />
            <Box sx={{ p: { md: "2%", xs: "1rem" } }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", }} my={"1%"}                >
             {item?.Date && 
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", columnGap: "2%", width: "100%" }}
                >
                  <TodayIcon sx={{ fontSize: { md: "1vw", xs: "1rem" }, color: "#0486FF", }} />
                  {item?.Date}

                </Typography>
                }
                { item.teamImg && item?.Name &&  (
 <Box sx={{ display: "flex", alignItems: "center", columnGap: "2%", width: "100%", justifyContent: "flex-end" }} >
                  <Avatar
                    src={item?.teamImg ? `${imgLink}${item.teamImg}` : "/assets/noimg.webp"}
                    alt="Author" sx={{ width: { md: "1.5vw", xs: "1.5rem" }, height: { md: "1.5vw", xs: "1.5rem" } }}
                  />
                  <Typography variant='body1'>
                    {item?.Name}
                  </Typography>
                </Box>
                )}
               
              </Box>
              <Typography variant="h5" fontWeight={"600"}>
                {item?.labelHeading}
              </Typography>
                   { item?.describe &&
              <Typography variant="body1" mt={"1%"}>
                {stripHtml(item?.describe)}
              </Typography>}
              {isBigMobile || isSmallMobile || isTablet && 
              <Link href={item.route} style={{ display: "inline-flex" }}>
                <Button variant='blueBorderButton' sx={{ mt: "1rem", }} >Read More</Button>
              </Link>
              }
            </Box>
          </Grid>
        ))
      )}
      {filteredData?.length > cardsToShow && (
        <Grid item xs={11} mt={"2%"} md={12} display={"flex"} justifyContent={"center"}>
          <Button variant="blueBorderButton" onClick={handleLoadMore} >
            Load More
          </Button>
        </Grid>
      )}
    </>
  );
};

export default AllArticlesCSR;
