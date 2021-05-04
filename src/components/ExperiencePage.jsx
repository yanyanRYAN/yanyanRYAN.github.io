import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ExpCardComponent from './ExpCardComponent';


// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//         margin: "8px 10%",
//     },
//     title: {
//         fontSize: 20,
//     },
//     content: {
//         padding: "3% 7% 0",
//     },
//     card: {
//         margin: "3% 0"
//     }
// });

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
    },
    gridItem: {
        padding: theme.spacing(10),
        textAlign: 'center',
        
    },
}));




export default function ExperiencePage(props) {
    const classes = useStyles();
    const resumeData = props.resumeData


    return (
        
        <Container>
            <div>
                <Grid container spacing={1} direction="row"  alignItems="center" justify='center'>
                    {resumeData.map((data, i) =>
                        
                            <Grid className={classes.gridItem} key={i} item container>
                            <ExpCardComponent data={data} />
                            </Grid>
                        
                    )}
                </Grid>
            </div>
        </Container>
        
    )
}