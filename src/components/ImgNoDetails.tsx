import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

const ImgNoDetails: React.FC<{imgSource: any}> = ({imgSource}) => {
    return (
        <Grid container justifyContent='center' spacing={1}>
            <Grid item md={5}>
                <Paper style={{  height: '80vh', verticalAlign: 'center', padding: '1vh'}}>
                    <img src={imgSource} alt="image" style={{width: '100%'}} />
                </Paper>
            </Grid>
            <Grid item md={5}>
                <Paper style={{  height: '80vh', verticalAlign: 'center', padding: '1vh'}}>
                    <Typography variant='h2'>Upload an other image</Typography>
                    <Typography variant='h2'>This image don't have a face</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ImgNoDetails;