import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 345,
    },
    media: {
        height: 140,
        width: 256
    },
});


export default function ContactCard({contactData}){

    const classes = useStyles();

    return(
    <div>
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media} image={contactData.img} title="GitHub" />
                <Typography gutterBottom variant="h5" component="h2">{contactData.method}</Typography>
                <Typography varient="body2" color="textSecondary" component="p">
                    {contactData.content}
                </Typography>
                
            </CardActionArea>
        </Card>
    </div>
    )
}