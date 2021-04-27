import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ContactCard from './ContactCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


export default function ContactPage(props) {
    const classes = useStyles();


    return(<div>
    <h1 >Contact</h1>
    <div >
    <Grid container spacing={3} justify='center' alignItems='center'>
        <Grid item xs={4}><ContactCard /></Grid>
        <Grid item xs={4}><ContactCard /></Grid>
        <Grid item xs={4}><ContactCard /></Grid>
    </Grid>
    </div>
    </div>)
}