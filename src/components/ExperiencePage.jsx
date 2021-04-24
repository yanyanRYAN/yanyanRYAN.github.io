import React from 'react';

export default function ExperiencePage(props) {

    const resumeData = props.resumeData
    

    console.log("Exp resumeData");
    console.log(resumeData);

    return(
    <div>
        <h4>Experience</h4>

        {resumeData.map((data, i) => 
        <div key={i}>{console.log(data)}
            <h5>{data.position} - {data.name} </h5>
            <h6>{data.location}</h6>
            <p>{data.summary}</p>
        </div>)}

    </div>
    )
}