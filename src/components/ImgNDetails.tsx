import { Grid, Paper, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import React from 'react';
// import { data } from './data';
import Emotion from './Emotion';


const ImgNDetails: React.FC<{imgSource: any, data: any}> = ({imgSource, data}) => {
    return (
        <Grid container justifyContent='center' spacing={1}>
            <Grid item md={5}>
                <Paper style={{  height: '80vh', verticalAlign: 'center', padding: '1vh'}}>
                    <img src={imgSource} alt="image" style={{width: '100%'}} />
                </Paper>
            </Grid>
            <Grid item md={5}>
                <Paper  style={{ height: '80vh', overflow: 'scroll', padding: '1vh' }}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell align='left'><Typography variant="h6">Age Range:</Typography></TableCell>
                                <TableCell align='center'><Typography variant="h6">{data.AgeRange.Low} - {data.AgeRange.High}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left'><Typography variant="h6">Smile: </Typography></TableCell>
                                {data.Smile.Value && <TableCell align='center'><Typography variant="h6">True</Typography> <br/>{data.Smile.Confidence}</TableCell>}
                                {!data.Smile.Value && <TableCell align='center'><Typography variant="h6">False</Typography> <br/>{data.Smile.Confidence}</TableCell>}
                            </TableRow>
                            <TableRow>
                                <TableCell align='left'><Typography variant="h6">Eyeglasses: </Typography></TableCell>
                                {data.Eyeglasses.Value && <TableCell align='center'><Typography variant="h6">True</Typography> <br/>{data.Eyeglasses.Confidence}</TableCell>}
                                {!data.Eyeglasses.Value && <TableCell align='center'><Typography variant="h6">False</Typography> <br/>{data.Eyeglasses.Confidence}</TableCell>}
                            </TableRow>
                            <TableRow>
                                <TableCell align='left'><Typography variant="h6">Gender: </Typography></TableCell>
                                <TableCell align='center'><Typography variant="h6">{data.Gender.Value}</Typography> <br/>{data.Sunglasses.Confidence}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left'><Typography variant="h6">Beard: </Typography></TableCell>
                                {data.Beard.Value && <TableCell align='center'><Typography variant="h6">True</Typography> <br/>{data.Beard.Confidence}</TableCell>}
                                {!data.Beard.Value && <TableCell align='center'><Typography variant="h6">False</Typography> <br/>{data.Beard.Confidence}</TableCell>}
                            </TableRow>
                            <TableRow>
                                <TableCell align='left'><Typography variant="h6">Mustache: </Typography></TableCell>
                                {data.Mustache.Value && <TableCell align='center'><Typography variant="h6">True</Typography> <br/>{data.Mustache.Confidence}</TableCell>}
                                {!data.Mustache.Value && <TableCell align='center'><Typography variant="h6">False</Typography> <br/>{data.Mustache.Confidence}</TableCell>}
                            </TableRow>
                            <TableRow>
                                <TableCell align='left'><Typography variant="h6">EyesOpen: </Typography></TableCell>
                                {data.EyesOpen.Value && <TableCell align='center'><Typography variant="h6">True</Typography> <br/>{data.EyesOpen.Confidence}</TableCell>}
                                {!data.EyesOpen.Value && <TableCell align='center'><Typography variant="h6">False</Typography> <br/>{data.EyesOpen.Confidence}</TableCell>}
                            </TableRow>
                            <TableRow>
                                <TableCell align='left'><Typography variant="h6">MouthOpen: </Typography></TableCell>
                                {data.MouthOpen.Value && <TableCell align='center'><Typography variant="h6">True</Typography> <br/>{data.MouthOpen.Confidence}</TableCell>}
                                {!data.MouthOpen.Value && <TableCell align='center'><Typography variant="h6">False</Typography> <br/>{data.MouthOpen.Confidence}</TableCell>}
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ImgNDetails;