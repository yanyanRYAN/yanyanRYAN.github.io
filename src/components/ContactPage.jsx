import { Grid, IconButton, makeStyles, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import ContactCard from './ContactCard';
import EmailIcon from '@material-ui/icons/Email';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function ContactPage(props) {
  const classes = useStyles();

  const resumeData = props.resumeData;
  console.log("Resume data");
  console.log(resumeData);

  

  return (<div>

    <Typography variant="h4">Contact Me</Typography>

    <Typography variant="body2">Email: ryanpecarma@gmail.com 
      <Tooltip title="Email">
        <IconButton href="mailto: ryanpecarma@gmail.com"><EmailIcon/></IconButton>
      </Tooltip>
      <Tooltip title="Copy To Clipboard">
        <IconButton value="ryanpecarma@gmail.com" onClick={()=> {navigator.clipboard.writeText('ryanpecarma@gmail.com'); alert("Copied to clipboard") }}><FileCopyIcon/></IconButton>
      </Tooltip>
    </Typography> 

    <Grid container spacing={1} direction="row" justify='center' alignItems='center'>
      {resumeData.map((contact, i) =>
        <div >
          <Grid className={classes.gridItem} key={i} container item >
            <ContactCard contactData={contact} />
          </Grid>

        </div>
      )}


    </Grid>

  </div>)
}