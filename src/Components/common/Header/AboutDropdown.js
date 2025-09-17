import { Box, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import 'animate.css';
const AboutDropdown = ({ data, setMenuOpen, menuOpen }) => {
  return (
    <Grid container justifyContent={"center"} className="animate__animated animate__fadeInDown" sx={{ position: "relative", bgcolor: "white", position: 'fixed', zIndex: 350, width: "100%", columnGap: "2%", top: "6%", py: "2%", display: { md: menuOpen ? "flex" : "none", xs: "none" }, }}>
      <Grid item xs={12} md={2.8} >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          ScienceSoft USA Corporation Is a 3-Year Champion in the Financial Times Rating
        </Typography>
        <Typography variant='body1' mt={"1%"}>
          For the third year in a row, ScienceSoft USA Corporation earns a place among The Americas’ Fastest-Growing Companies.
        </Typography>

        <Box sx={{ mt: "2%", width: "60%", height: "auto", position: "relative" }}>
          <Image
            src="/Assets/global-outsourcing-100-logo.svg"
            alt="Outsourcing 100"
            fill
            style={{ objectFit: "contain" }} // or "cover", depending on your layout
            priority
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container >
          {data?.map((section) => (
            <Grid container sx={{ mt: "0.5%", }} key={section?.category}>
              {section?.subcategories?.map((subcategory) => (
                <Grid item xs={6} md={2.4} key={subcategory?.category}>
                  <Typography variant="h5" sx={{
                    borderBottom: "2px solid orange",
                    fontWeight: "bold", alignItems: "center", columnGap: "3%", display: 'inline-flex',
                    cursor: "pointer", transition: "all 0.3s ease-in-out",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "#0486ff !important", }
                  }}>
                    {subcategory?.category}
                  </Typography>
                  {subcategory?.items.map((item) => (
                    <Link href={item.route} passHref key={item.text} onClick={() => setMenuOpen(false)}>
                      <Typography variant="h6" sx={{
                        mt: "5%",
                        cursor: "pointer",
                        transition: "color 0.3s ease-in-out",
                        "&:hover": { color: "#0486ff !important" }
                      }}>
                        {item?.text}
                      </Typography>
                    </Link>
                  ))}
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Box sx={{ position: "absolute", right: "10%", top: "8%" }}>
        <CloseIcon sx={{ cursor: 'pointer', color: 'red', fontSize: "1.5vw" }} onClick={() => setMenuOpen(false)} />
      </Box>
    </Grid>
  );
};

export default AboutDropdown;