import {
  Button,
  Grid,
  Typography,
  Box,
  TextField,
  Avatar,
} from "@mui/material";
import BlogAccordion from "../Blog Accordion/BlogAccordion";
import BlogDetailButton from "./BlogDetailButton/BlogDetailButton";
import Image from "next/image";
import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";
import BlogDetailTableOfContent from "./BlogDetailTableOfContent";
import Link from "next/link";

const BlogsInnerDetail = ({ data, author }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  return (
    <Grid
      container
      justifyContent={"center"}
      py={{ md: "3%", xs: "2rem" }}
      id={data?.idForfrontendUse || "content-section"}
      columnGap={"2%"}
    >
      <Grid item md={2.5} xs={11.5} display={{ md: "block", xs: "none" }} sx={{ alignItems: "flex-start" }}>
        <Box sx={{ position: "sticky", top: "10%" }}>
          <BlogDetailTableOfContent data={data}/>
          <Box
            sx={{
              mt: "2%",
              bgcolor: "#F4FAFF",
              p: "4%",
              border: "1px solid #0486ff",
            }}
            textAlign={"center"}
          >
            <Typography variant="h3" mb={"2%"}>
              Share This Article
            </Typography>
            <Button>
              <Box sx={{ width: "2vw", height: "2vw", position: "relative" }}>
                <Image
                  src="/Assets/Images/NewCompoents/Home/NewFooter/Facebook.svg"
                  alt="facebook"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Button>

            <Button>
              <Box sx={{ width: "2vw", height: "2vw", position: "relative" }}>
                <Image
                  src="/Assets/Images/blogInner/twitter.webp"
                  alt="twitter"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Button>

            <Button>
              <Box sx={{ width: "2vw", height: "2vw", position: "relative" }}>
                <Image
                  src="/Assets/Images/NewCompoents/Home/NewFooter/Instagram.svg"
                  alt="instagram"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Button>

            <Button>
              <Box sx={{ width: "2vw", height: "2vw", position: "relative" }}>
                <Image
                  src="/Assets/Images/NewCompoents/Home/NewFooter/Linkedin.svg"
                  alt="linkedin"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6.5} xs={10} mt={"-1.4%"} className="blog"> 
        {author && (
          <Box sx={{ mb: "2%" }}>

            <BlogAccordion data={author} />
          </Box>
        )}


        {data?.map((section, index) => (
          <Box id={section.title} key={index}>
            <Typography
              variant={section?.headingType?.title?.toLowerCase() || "h2"}
            >
              {section?.title}
            </Typography>



            <Box
              dangerouslySetInnerHTML={{ __html: section?.description }}
            />
            {section?.image && (
                   <Avatar              variant="square"               src={`${imgLink}${section?.image}`}
                  alt="section image" sx={{width:"100%",height:"auto",
                      my: "2%",borderRadius:"8px"
                      }}/>
            )}
            {section?.elements?.map((item, subindex) => (
              <Box key={subindex} >
                <Typography
                  variant={item?.headingType?.title?.toLowerCase() || "h2"}
                >
                  {item?.title}
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{ __html: item?.shortDescription }}
                />
                {item?.image &&
                <Avatar              variant="square"  src={`${imgLink}${item?.image}`}
                      alt={item?.title || "image"} sx={{width:"100%",height:"auto",
                      my: "2%",borderRadius:"8px"
                      }}/>}
              </Box>

            ))}
          </Box>
        ))}
      </Grid>
      <Grid item xs={1} display={{ md: "none", xs: "block" }}
        sx={{ alignItems: "flex-start" }}>
        <Box sx={{ position: "sticky", top: "10%", }}>
          <BlogDetailButton  data={data} />
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        xs={11.5}
        sx={{ background: "white", alignItems: "flex-start", mt: { md: 0, xs: "1rem" } }}
      >
        <Box
          sx={{
            position: "sticky",
            top: "10%",
            border: "1px solid grey",
            p: "6%",
            // borderRadius: { md: "0.45vw", xs: "0.45rem" },
            boxShadow: "0 4px 19px rgba(0,0,0,.04)",
          }}
        >
          <Typography variant="h4" fontWeight={"bold"}>Subscribe to our newsletter</Typography>
          <Typography variant="body1" mt={"1%"}>
            Subscribe now to get latest blog updates.
          </Typography>
          <TextField
            type="email"
            placeholder="Type your email here"
            fullWidth
            variant="outlined"
            sx={{
              my: "6%",
              background: "#f9f9f9",
            }}
          />
             {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonBlue label={data.ctaText} />
                    </Link>
                    }

        </Box>
      </Grid>

    </Grid>
  );
};

export default BlogsInnerDetail;
