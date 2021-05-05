import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {  makeStyles } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';

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


export default function EduCardComponent({edu}){

    const classes = useStyles();


    return(
        <div>
            <Card className={classes.root}>
                
                <CardContent>
                <Typography ><SchoolIcon /></Typography>
                <Typography variant="h5" color="primary">{edu.degree}</Typography>
                <Typography variant="subtitle1" color="secondary">{edu.school} - {edu.location}</Typography>
                <Typography variant="subtitle2" color="textPrimary">Graduated: {edu.graduationDate}</Typography>
                <Typography variant="body2" color="textSecondary">GPA: {edu.gpa}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}