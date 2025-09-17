import { Grid, Typography } from '@mui/material';
import React from 'react';

const CommonComponents = ({md, title, description, variant, textAlign,width,className,m }) => {
  return (
    <Grid item md={md?md:10} xs={11.5} mb={"2%"} textAlign={textAlign} sx={{ml:md=== 8?"4%":"0"}}>
      <Typography variant={variant} className={className} mb={"1%"} sx={{
          "& span": {
            color: "#0486ff", 
          },
        }} >
          {title}
      </Typography>
      {description && (
      <Typography variant="body1"  className={className}  sx={{width:width,margin:m?m:"auto",marginTop:"1%"}}>
        {description}
      </Typography>
      )}

    </Grid>
  );
};

export default CommonComponents;
