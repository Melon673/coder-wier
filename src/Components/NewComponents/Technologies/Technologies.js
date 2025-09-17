import TechnologiesCSR from '@/utils/MainPage/TechnologiesCSR';
import stripHtml from '@/utils/stripHtml';
import { Grid, Typography } from '@mui/material';
const Technologies = ({ data }) => {
   

    return (
        <>
            <Grid container justifyContent={"center"} my={{md:"3%",xs:"2rem"}} id="Technologies">
                <Grid item md={5} xs={12} textAlign={{ md: 'left', xs: 'center' }}>
                    <Typography variant={data?.headingType?.title.toLowerCase()}>{data?.title}</Typography>
                </Grid>
                <Grid item md={5} xs={11.5}>
                    <Typography variant="body1">{stripHtml(data?.description)}</Typography>
                </Grid>

                <TechnologiesCSR data={data} />
            </Grid>
        </>
    );
};

export default Technologies;
