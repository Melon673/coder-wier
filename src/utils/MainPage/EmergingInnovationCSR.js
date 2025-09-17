"use client";
import {
  Avatar,
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import stripHtml from '../stripHtml';
import useEmergingInnovationCSR from './MainPageCSRFunctions';
import { useStyles } from './MainPgstyles';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';

const CustomScrollButton = ({ direction, disabled, onClick }) => (
  <Button
    disabled={disabled}
    onClick={onClick}
    sx={{
      minWidth: 0,
      p: 0,
      opacity: disabled ? 0.3 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
    }}
  >
    {direction === "left" ? (
      <ArrowBackIosNewIcon sx={{ fontSize: { md: "1.5vw", xs: "2rem" }, color: "#0486ff" }} />
    ) : (
      <ArrowForwardIosIcon sx={{ fontSize: { md: "1.5vw", xs: "2rem" }, color: "#0486ff" }} />
    )}
  </Button>
);

export default function EmergingInnovationCSR({ data }) {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const styles = useStyles();
  const {  activeTab, handleTabClick } = useEmergingInnovationCSR(data.elements);

  const activeElement = data.elements.find(el => el.title === activeTab) || data.elements[0] || {};
  return (
    <>
      <Grid item xs={11.5} md={10} textAlign={"left"}>
        <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} mb={"1%"}>
          {data.title}
        </Typography>
        {data.description && (
          <Typography variant="body1" sx={{ width: { md: "60%", xs: "100%" }, }}>{stripHtml(data.description)}</Typography>
        )}
        {data.subTitle && (
          <Typography variant="body1">{data.subTitle}</Typography>
        )}
      </Grid>
      <Grid item xs={11.5} md={10} my={"2%"}>
        <Box sx={{ display: { xs: 'none', md: 'flex' },columnGap:"2%" }}>
          <Tabs
            value={activeTab}
            onChange={(e) => handleTabClick(e.target.value)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            ScrollButtonComponent={CustomScrollButton}
            TabIndicatorProps={{ sx: { backgroundColor: '#0486ff' } }}
          >
            {data.elements.map((tag, index) => (
              <Tab
                key={index}
                value={tag.title}
                onClick={() => handleTabClick(tag.title)}
                label={
                  <Typography variant={"h5"} sx={{ m: 0 }}>
                    {tag.title}
                  </Typography>
                }
                sx={{
                  // minWidth: "15%",
                  color: "black !important",
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Box display={{ xs: "flex", md: "none" }}>
          <FormControl fullWidth variant="standard" margin="dense">
            <Select
              className="m_port_dropdown"
              value={activeTab}
              onChange={e => handleTabClick(e.target.value)}
              IconComponent={ExpandMoreIcon}
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
                  className={activeTab === item.title ? "all_project_links_active" : "all_project_links"}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={11.5} md={4} sm={5}>
        <Avatar
          variant="square"
          src={activeElement.image ? `${imgLink}${activeElement.image}` : '/Assets/NOimg.webp'}
          alt={activeElement.imageAltText || 'Content Image'}
          sx={{
            width: { md: '60%', xs: '100%' ,sm:"90%"},
            height: 'auto',
            borderRadius: { md: '1vw', xs: '0.8rem' },
          }}
        />
      </Grid>
      <Grid item xs={11.5} md={5.3} sm={6} mt={"1rem"}>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"65%"}}>

        <Typography variant={activeElement?.headingType?.title?.toLowerCase()} mb="1%">
          {activeElement.title}
        </Typography>
        {activeElement.ctaLnik && 
        <Link href={activeElement.ctaLnik}>
         <EastIcon sx={{color:"#0486ff",fontSize:{md:"1.5vw",xs:"1.5rem"}}}/>
        </Link>
}
        </Box>
        <Typography
          variant="body1"
          sx={{ width: { md: '30vw', xs: '100%' } }}
          dangerouslySetInnerHTML={{
            __html: activeElement.shortDescription 
          }}
        />
      </Grid>
    </>
  );
}
