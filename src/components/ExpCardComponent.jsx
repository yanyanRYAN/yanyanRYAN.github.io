import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        
        minWidth: 275,
        margin: "2% 10% 0 ",
    },
    title: {
        
        marginTop: "1%"
    },
    content: {
        padding: "2% 7% 2%",
    },
    card: {
        margin: "3% 3% 0"
    }
});

export default function ExpCardComponent({data}){
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={null} >
                <CardContent>
                    <Typography className={classes.title} variant="h6" color="primary">{data.position} - {data.name}</Typography>
                    <Typography variant="subtitle1" color="secondary">{data.location}</Typography>
                    <Typography variant="subtitle2">{data.length}</Typography>
                    <Typography variant="body1" className={classes.content} color="textPrimary"  gutterBottom>{data.summary}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}