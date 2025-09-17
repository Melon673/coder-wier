import React from 'react';
import { Grid, Box, Typography, Avatar } from '@mui/material';
import stripHtml from '@/utils/stripHtml';
import CommonComponents from '@/Components/CommonComponents/CommonComponents';
import Image from 'next/image';

const TechLibraries = ({ data,index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "TechLibraries"}-${index}`;

  return (
    <Grid
      container
      justifyContent="center"
      py={{ md: "4.2%", xs: "3.63rem" }}
      id={id}
    >
      <CommonComponents
        textAlign={{ md: 'left', xs: 'center' }}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title}
        description={stripHtml(data?.description)}
      />

      {data?.sectionTechnologyCategories?.map((category, index) => (
        <Grid item md={5} xs={11.5} key={index} mt={{ md: "2%", xs: "1rem" }}>
          <Typography variant="h3" mb={{ md: "1vw", xs: "1rem" }}>
            {category.techStackCategory.title}
          </Typography>

          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            columnGap={{ md: "0.4vw", xs: "0.5rem" }}
            rowGap={{ md: "1vw", xs: "0.7rem" }}
          >
            {category.techStackCategory.technologies?.map((tech, techIndex) => (
              <Box
                key={techIndex}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  bgcolor: '#f4f5f5',
                  py: '0.5rem',
                  px: { md: "1.2vw", xs: "1rem" },
                  borderRadius: { md: "2vw", xs: "2rem" },
                  gap: "0.5rem",
                  maxWidth: '100%',
                  whiteSpace: 'nowrap',
                }}
              >
        <Box
  sx={{
    width: { md: '2.5vw', xs: '2rem' },
    height: { md: '2.5vw', xs: '2rem' },
    flexShrink: 0,
    position: 'relative',
  }}
>
  <Image
    src={`${imgLink}${tech.image}`}
    alt={tech?.title || 'Tech Logo'}
  fill 
  style={{ objectFit: "cover" }}
    priority
  />
</Box>
                <Typography variant="h6" sx={{ fontSize: { md: "0.8vw", xs: "0.85rem" } }}>
                  {tech?.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TechLibraries;
