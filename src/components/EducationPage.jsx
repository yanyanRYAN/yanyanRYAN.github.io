import { Container, Typography } from '@material-ui/core';
import React from 'react';

export default function EducationPage(props) {

    const resumeData = props.resumeData;

    console.log("Edu resumeData");
    console.log(props.resumeData);

    return(
    <div>
    <Container>
    {resumeData.map((edu, i) => <div key={i}>
        <Typography variant="h5">{edu.degree}</Typography>
        <Typography variant="subtitle1">{edu.school} - {edu.location}</Typography>
        <Typography variant="subtitle2">Graduation: {edu.graduationDate}</Typography>
        <Typography variant="body2">GPA: {edu.gpa}</Typography>
    </div>)}
    </Container>               
    </div>)
}