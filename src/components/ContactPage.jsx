import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ContactCard from './ContactCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    gridItem: {
      padding: theme.spacing(10),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


export default function ContactPage(props) {
    const classes = useStyles();

    const resumeData = props.resumeData;
    console.log("Resume data");
    console.log(resumeData);

    return(<div>
    <h1 >Contact</h1>
    
    <Grid container spacing={1} direction="row" justify='center' alignItems='center'>
        {resumeData.map((contact,i) => 
        <div >
          <Grid className={classes.gridItem} key={i} container item lg={4}><ContactCard contactData={contact} /></Grid>

        </div>)}
        

    </Grid>
    
    </div>)
}