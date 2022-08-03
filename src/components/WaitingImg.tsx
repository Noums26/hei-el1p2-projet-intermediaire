import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

const WaitingImg: React.FC<{}> = () => {
    return (
        <Grid item md={12} style={{height: '70vh', verticalAlign: 'center', padding: '2vh 0'}}>
            <Paper>
                <Typography variant='h2'>Upload an image...</Typography>
            </Paper>
        </Grid>
    );
};

export default WaitingImg;