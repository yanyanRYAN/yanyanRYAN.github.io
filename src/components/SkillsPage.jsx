import { Chip, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0 15% 0",
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.7),
          },
    },
}));


export default function SkillsPage(props) {
    const classes = useStyles();

    const resumeData = props.resumeData;

    const progLang = resumeData.programmingLanguages;
    const progSkills = resumeData.programmingSkills;
    const frameworks = resumeData.frameworks;
    const databases = resumeData.databases;
    const ideOtherTools = resumeData.ideOtherTools;


    console.log("Skills resumeData");
    console.log(props.resumeData);

    return(<div>
                    
                    <Paper elevation="3">
                    <Grid>
                    <div className={classes.root}>
                    <Typography variant="h5" color="primary">PROGRAMMING LANGUAGES / SKILLS:</Typography>
                    {progLang.map((lang, i) => <Chip key={i} label={lang} size="small" color="secondary" variant="outlined" clickable></Chip>)}
                    {progSkills.map((skills, i) => <Chip key={i} label={skills} size="small"  color="secondary" variant="outlined" clickable></Chip>)}
                    
                    <Typography variant="h5" color="primary">FRAMEWORKS / RUNTIME ENVIRONMENTS:</Typography>
                    
                        {frameworks.map((framework, i) => <Chip key={i} label={framework} size="small" color="secondary" variant="outlined" clickable></Chip>)}
                    
                    <Typography variant="h5" color="primary">DATABASES / WEB ANALYSIS TOOLS:</Typography>
                    
                        {databases.map((database, i) => <Chip key={i} label={database} size="small" color="secondary" variant="outlined" clickable></Chip>)}
                    
                    <Typography variant="h5" color="primary">IDE / OTHER TOOLS:</Typography>
                    
                        {ideOtherTools.map((other, i) => <Chip key={i} label={other} size="small" color="secondary" variant="outlined" clickable></Chip>)}
                    
                    </div>
                    </Grid>
                    </Paper>
                    
    </div>)
}