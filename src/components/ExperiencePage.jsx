import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container, Paper } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "8px 10%",
    },
    title: {
        fontSize: 20,
    },
    content: {
        padding: "3% 7% 0",
    },
    card: {
        margin: "3% 0"
    }
});





export default function ExperiencePage(props) {
    const classes = useStyles();
    const resumeData = props.resumeData


    console.log("Exp resumeData");
    console.log(resumeData);

    return (
        
        <Container>
            <div>
                

                <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
                    {resumeData.map((data, i) =>
                        <div key={i}>
                            <Grid item ex={2}>
                            <Card className={classes.root}>

                                <CardContent>
                                    <Typography variant="h6" color="primary">{data.position} - {data.name}</Typography>
                                    <Typography variant="subtitle2" color="secondary">{data.location}</Typography>
                                    <Typography variant="body1" className={classes.content}  gutterBottom>{data.summary}</Typography>
                                </CardContent>
                            </Card>
                            </Grid>
                        </div>

                    )}
                </Grid>

            </div>
        </Container>
        
    )
}