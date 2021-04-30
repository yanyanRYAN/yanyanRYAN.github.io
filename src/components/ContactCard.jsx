import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 320,
        textAlign: 'left',
        alignContent: 'left',
        
    },
    media: {
        height: 160,
        
    },
    avatar: {

    },
    button: {
        
    }
});


export default function ContactCard({contactData}){

    const classes = useStyles();

    return(
    <div>
        <Card className={classes.root}>
            
                <CardHeader style={{textAlign: 'left'}} avatar={
                    <Avatar alt={contactData.title + " " + contactData.subheader} src={contactData.avatarPic}/>
                } title={contactData.title} subheader={contactData.subheader} />
                <CardActionArea href={contactData.url} target="_blank">
                    <CardMedia className={classes.media} image={contactData.img} title="GitHub" />
                    <CardContent>
                    <Typography gutterBottom variant="textPrimary" component="h2">{contactData.method}</Typography>
                    <Typography varient="body2" color="textSecondary" component="p" gutterBottom>
                        {contactData.content}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button className={classes.button} size="large" href={contactData.url} alt={contactData.title + " " + contactData.subheader} target="_blank">Visit</Button>
                    </CardActions>
                </CardActionArea>
        </Card>
    </div>
    )
}