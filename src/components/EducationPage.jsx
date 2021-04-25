import React from 'react';

export default function EducationPage(props) {

    const resumeData = props.resumeData;

    console.log("Edu resumeData");
    console.log(props.resumeData);

    return(<div>
    
    {resumeData.map((edu, i) => <div key={i}>
        <h4>{edu.degree}</h4>
        <h5>{edu.school} - {edu.location}</h5>
        <h6>Graduation: {edu.graduationDate}</h6>
        <h6>GPA: {edu.gpa}</h6>
    </div>)}
                    
    </div>)
}