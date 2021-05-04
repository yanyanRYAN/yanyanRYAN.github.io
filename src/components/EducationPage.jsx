import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import EduCardComponent from './EduCardComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridItem: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid: {
        marginTop: "3%",
        padding: "0 0 0 "
    },

}));




export default function EducationPage(props) {
    const classes = useStyles();
    const resumeData = props.resumeData;

    return (
            <div className={classes.root}>
                <Grid className={classes.grid} container spacing={1} direction="row" alignItems="center" justify='center'>
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