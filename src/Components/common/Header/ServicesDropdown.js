import { Avatar, Box, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import 'animate.css';
const ServicesDropdown = ({ data, setMenuOpen, menuOpen }) => {
  return (
    <Grid
      container key={menuOpen}
      justifyContent="center"
      className="animate__animated animate__slideInDown"
      sx={{
        bgcolor: "white",
        position: 'fixed',
        zIndex: 4001,
        width: "100%",
        top: "6%",
      }}
    >
      <Grid item xs={12} md={4} bgcolor={"#F5F5F5"} pl={"10%"} sx={{
        py: "4%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          ScienceSoft USA Corporation Is a 3-Year Champion in the Financial Times Rating
        </Typography>
        <Typography variant='body1' my={"2%"}>
          For the third year in a row, ScienceSoft USA Corporation earns a place among The Americas’ Fastest-Growing Companies.
        </Typography>

<Box
  sx={{
    width: "50%",
    height: "50%",
    position: "relative", 
  }}
>
  <Image
    src="/Assets/global-outsourcing-100-logo.svg"
    alt="Outsourcing 100"
  fill 
  style={{ objectFit: "cover" }}
    priority
  />
</Box>
      </Grid>

      <Grid item xs={12} md={8} pr={"8%"} pt={"2%"}>
        <Box sx={{ p: "2% 0 2% 2%", }}>
          <Typography
            variant='h4'
            sx={{
              borderBottom: "2px solid orange",
              fontWeight: "bold",
              mb: "1%",
              display: 'inline-flex',
              alignItems: 'center',
              columnGap: "3%",
            }}
          >
            {data?.name}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1%" }}>
            {data?.submenu?.map((section, i) => (
              <Box key={i} mb={"1%"} width={"22%"}>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: 'bold', mb: "1%" }}
                >
                  {section.name}
                </Typography>

                {section?.submenu?.map((item, j) => (
                  <Box key={j} sx={{ my: "6%" }}>
                    <Link href={`/${item.link || "#"}`} passHref onClick={()=>setMenuOpen(false)}>
                      <Typography
                        variant='h6' className='greyColor'
                        sx={{
                          cursor: "pointer",
                          transition: "color 0.3s ease-in-out",
                          "&:hover": { color: "#0486ff !important" },
                        }}
                      >
                        {item.name || "Unnamed"}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Box sx={{ position: "absolute", right: "10%", top: "8%" }}>
        <CloseIcon
          onClick={() => setMenuOpen(false)}
          sx={{ cursor: 'pointer', color: 'red', fontSize: "1.5vw" }}
        />
      </Box>
    </Grid>
  );
};

export default ServicesDropdown;
