import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

const Emotion: React.FC<{emotion: any}> = ({emotion}) => {
    return (
        <Grid item xs={6} sm={4}>
            <Paper style={{color: 'white', backgroundColor: 'rgb(29, 29, 29)'}}>
                <Typography variant="h6">{emotion.Type}</Typography>
                <Typography variant="subtitle1">{parseInt(emotion.Confidence)}</Typography>
            </Paper>
        </Grid>
    );
};

export default Emotion;