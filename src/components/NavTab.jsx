import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SkillsPage from './SkillsPage';
import ExperiencePage from './ExperiencePage';
import EducationPage from './EducationPage';
import ContactPage from './ContactPage';
import resume from '../data/resume';

import Grid from '@material-ui/core/Grid';
import {  ThemeProvider } from '@material-ui/core';
import { blueGrey, orange } from '@material-ui/core/colors';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const backgroundStyle = {
  backgroundColor: "#fff7de",
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: blueGrey[500]
    },
  }
})

// const darkTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// });

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    
    <div className={classes.root} style={backgroundStyle}>
      <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Tabs

          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"

          centered
        >
        
          <LinkTab label="Skills" href="/skills" {...a11yProps(0)} />
          <LinkTab label="Experience" href="/experience" {...a11yProps(1)} />
          <LinkTab label="Education" href="/education" {...a11yProps(2)} />
          <LinkTab label="Contact" href="/contact" {...a11yProps(3)} />
        
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
      <TabPanel value={value} index={0} {...console.log(value)}>
        <Grid container justify='center'>
          <SkillsPage resumeData={resume.skills} />
        </Grid>

      </TabPanel>
      <TabPanel value={value} index={1} {...console.log(value)}>
        <Grid container justify='center'>
          <ExperiencePage resumeData={resume.experience} />
        </Grid>


      </TabPanel>
      <TabPanel value={value} index={2} {...console.log(value)}>
        <Grid container justify='center'>
          <EducationPage resumeData={resume.education} />
        </Grid>

      </TabPanel>
      <TabPanel value={value} index={3} {...console.log(value)}>
        <Grid container justify='center'>
          <ContactPage resumeData={resume.contact} />
        </Grid>

      </TabPanel>
      </ThemeProvider>

    </div>
    
  );
}
