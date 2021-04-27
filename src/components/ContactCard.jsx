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
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


export default function ContactCard(){

    const classes = useStyles();

    return(
    <div>
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media} image="https://yanyanryan.github.io/content/images/github.png" title="GitHub" />
                <Typography gutterBottom variant="h5" component="h2">GitHub</Typography>
                <Typography varient="body2" color="textSecondary" component="p">
                    This is my github repository which houses some of my work from my freetime.
                </Typography>
                
            </CardActionArea>
        </Card>
    </div>
    )
}