import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import EduCardComponent from './EduCardComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridItem: {
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));




export default function EducationPage(props) {
    const classes = useStyles();
    const resumeData = props.resumeData;

    return (
            <div>
                <Grid container spacing={1} direction="row" alignItems="center" justify='center'>
                    {resumeData.map((edu, i) =>
                        <div key={i}>
                        <Grid className={classes.gridItem}  item container >
                            <EduCardComponent edu={edu} />
                        </Grid>
                        </div>
                    )}
                </Grid>
            </div>      
    )
}