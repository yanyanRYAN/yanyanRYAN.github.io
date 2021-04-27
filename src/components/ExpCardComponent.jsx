import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

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

export default function ExpCardComponent({data}){
    
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h6" color="primary">{data.position} - {data.name}</Typography>
                    <Typography variant="subtitle2" color="secondary">{data.location}</Typography>
                    <Typography variant="body1" className={classes.content} color="textPrimary"  gutterBottom>{data.summary}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}