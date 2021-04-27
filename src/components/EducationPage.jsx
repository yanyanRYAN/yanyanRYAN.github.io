import React from 'react';
import { Card, Container, Typography } from '@material-ui/core';
import EduCardComponent from './EduCardComponent';


export default function EducationPage(props) {

    const resumeData = props.resumeData;

    console.log("Edu resumeData");
    console.log(props.resumeData);

    return(
    <div>
    <Container>
    {resumeData.map((edu, i) => <div key={i}>
        <EduCardComponent edu={edu} />
    </div>)}
    </Container>               
    </div>)
}