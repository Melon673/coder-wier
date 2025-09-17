import { Avatar, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";


const Hire = ({ data }) => {
  return (
    <Grid py={{md:"2%",xs:"6%"}}
      container columnGap={"1.5%"}
      justifyContent={"center"}
      id={data?.heading}
    >
      <Grid item xs={11} md={12} textAlign={"center"} mb={{md:"3%",xs:"6%"}}>
        <Typography
          variant="h2">
          {data?.heading}
        </Typography>
        <Typography mt={"0.5%"}
       variant="body1"
        >
          {data?.SubHeading}
        </Typography>
      </Grid>
        {data?.card.map((item, index) => (
          <Grid item md={3.2} xs={11} key={index} my={{md:0,xs:'6%'}}
          sx={{bgcolor:"#F4FAFF",borderRadius:"0.7vw",p:"2%",
            "&:hover": {
              backgroundColor: "#0486FF",
              "& .Avatar": {
                border: "3px dotted #FFF",
                backgroundColor: "#0486FF",
                color:"white !important"
              },
              ".whitetext,h3,h2,": {
                color: "#FFF !important",
              },
            },
          }}  >
              <Avatar variant="circular"
                className="Avatar"
                alt="hero"
                sx={{color:"#0486FF",
                  width: "17%", height: "auto", borderRadius: "50%", top:{md:"-32%",xs:'-20%'}, p:"5%",
                border: "3px dotted #0486FF",
                backgroundColor: "white",

                }}
              >
                0{index + 1}
              </Avatar>
              <Typography
                  variant="h3" textTransform={"capitalize"} mt={{md:"-10%",xs:"-6%"}}> 
                  {item?.cardheading}
                </Typography>
                {item?.cardpara?.map((subitem, subIndex) =>
        <Typography        variant="body1" className="greyColor " key={subIndex}sx={{display:'flex',alignItems:"flex-start"}} my={"2%"} >
        <FiberManualRecordIcon
          sx={{ fontSize: {md:"0.5vw",xs:"0.5rem"},mt:"2%",mr:'2%'  }}
        />
        {subitem}
      </Typography>
                )}
          </Grid>
        ))}
    </Grid >
  );
};
export default Hire;
