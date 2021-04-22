import React from 'react';

export default function SkillsPage(props) {

    const resumeData = props.resumeData;

    const progLang = resumeData.programmingLanguages;
    const progSkills = resumeData.programmingSkills;
    const frameworks = resumeData.frameworks;
    const databases = resumeData.databases;
    const ideOtherTools = resumeData.ideOtherTools;


    console.log("Skills resumeData");
    console.log(props.resumeData);

    return(<div>
    
                    
                    <h5>PROGRAMMING LANGUAGES / SKILLS:</h5>
                    <p>{progLang.map((lang, i) => <span key={i}>{i > 0 && ", "}{lang}</span>)}</p>
                    <p>{progSkills.map((skills, i) => <span key={i}>{i > 0 && ", "}{skills}</span>)}</p>
                    
                    <h5>FRAMEWORKS / RUNTIME ENVIRONMENTS:</h5>
                    <p>
                        {frameworks.map((framework, i) => <span key={i}>{i > 0 && ", "}{framework}</span>)}
                    </p>
                    <h5>DATABASES / WEB ANALYSIS TOOLS:</h5>
                    <p>
                        {databases.map((database, i) => <span key={i}>{i > 0 && ", "}{database}</span>)}
                    </p>
                    <h5>IDE / OTHER TOOLS:</h5>
                    <p>
                        {ideOtherTools.map((other, i) => <span key={i}>{i > 0 && ", "}{other}</span>)}
                    </p>
    </div>)
}