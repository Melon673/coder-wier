const { Grid, Typography, Avatar, Card, CardContent, CardActions, Button } = require("@mui/material");

const ContactInformation = ({ data }) => {
    const imgLink= process.env.NEXT_PUBLIC_IMG_LINK;
    
    return (
        <Grid container
            p={{md : "10vh", xs : "1vh"}}
            justifyContent={"center"}
            sx={{
                bgcolor: "#111d29",
                backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/coders-wire.appspot.com/o/blogInner%2FGroup%20120740.webp?alt=media&token=b1920a73-82e1-4c9e-856a-5ec1c38726b3')", backgroundSize: { md: "105% 105%", xs: "100% 120%" }, backgroundRepeat: { md: "none", xs: "no-repeat" }, backgroundPosition: { md: "none", xs: "center" },
            }}
            id="ContactInformation"
        >
            {data?.detail?.map((item, index) =>
                <Card key={index} sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80vh",
                    height: "18.0625rem",
                    bgcolor: "transparent",
                    borderRadius: "0.93rem",
                    border: "2px solid #FFF",
                    mr : "2vw", m : "2vh"
                }}>
                    <CardContent sx={{ textAlign: "center" }}>
                        <Avatar variant="rounded" sx={{ width: "5rem", height: "5rem", margin: "auto" }} src={item?.image} />
                        <Typography variant="h2" color="white">
                            {item?.name}
                        </Typography>
                        <Typography variant="body1" className="whiteColor">
                            {item?.number}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        {item?.buttons?.map((subItem, subIndex) =>
                            <Button key={subIndex} sx={{ mb: "1vh", mt: "-3vh", marginRight: "-1.2rem" }}>
                            <Avatar
                              variant="rounded"
                              sx={{ width: "2.25rem", height: "2.25rem", marginLeft: subIndex !== 0 ? "-0.4rem" : 0 }}
                              src={subItem}
                            />
                          </Button>
                        )}
                    </CardActions>
                </Card>
            )}
        </Grid>
    )
}
export default ContactInformation;