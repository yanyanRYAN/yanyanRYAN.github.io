
import linkedInPic from '../data/linkedin.jpg';
import githubPic from '../data/github.png';
import linkedInAvatarPic from '../data/RyanEcarma.jpg';
import githubAvatarPic from '../data/yanyanRYAN.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const resume = { resumeHeader: {name: "Ryan Ecarma", email: "ryanpecarma@gmail.com"},
skills: {programmingLanguages: ["JavaScript", "HTML5", "CSS3", "NodeJS", "C#", ".NetCore"],
        programmingSkills:["React", "Express", "MongoDB", "Mongoose ODM", "RESTful APIs (REST + JSON)", "API Endpoint Testing", "DOM Manipulation", "Full Stack Web Development", "JSON"],
        frameworks: ["ReactJS", "Express.js", "Bootstrap", "jQuery", "Angular", "SharePoint 2019 (PowerApps, PowerAutomate)"],
        databases: ["MongoDB", "Mongoose", "MongoDB Atlas", "Robo 3T (MongoDB)", "Postman"],
        ideOtherTools: ["Visual Studio Code", "Atom.IO", "Heroku", "Visual Studio 2017/2019", "Microsoft SQL Developer Tools", "Azure DevOps Server/TFS", "Eclipse", "GitHub", "CMDER(Bash)"]},
experience: [{name: "Comcast", position: "Application Developer 1", location: "Oakbrook Terrace, IL", length: "", 
                summary: "Deliver new implementations between iterations using .NetCore C#, Entity Framework, HTML, CSS, JavaScript, Typescript, and Angular, with Azure DevOps Server for documenting progress and version control. Assist with managing company SharePoint sites and SharePoint forms. Develop new electronic forms using Microsoft PowerApps and PowerAutomate. Update exiting forms from previous SharePoint releases to SharePoint 2019." },
             {name: "Lewis University Institutional Research & Planning", position: "Graduate Assistant", location: "Romeoville, IL", length: "", summary: "Assist Associate Vice President for Institutional Research and Planning with internal projects. Compile mySQL output data from data warehouse into Excel and creating reports. Create program review templates for departments. Compile Enrollment Headcounts and Credit Hour Production semester reports for IR Portal."},
             {name: "Lewis University Office of Technology", position: "IT Desktop Technician Intern", location: "Romeoville, IL", length: "", summary: "Supervise a team of desktop technician student workers. Consult with supervisor for problem solving and troubleshooting issues. Perform asset management of equipment through Solarwinds Web Helpdesk and Microsoft Excel. Document and resolve issues and requests submitted through Solarwinds Web Helpdesk. Image, configure, and deploy desktop PCs and laptops install required software."}
        ],
education: [{degree: "Master of Science in Computer Science", school: "Lewis University", location: "Romeoville,IL", concentration: "Software Engineering", graduationDate: "May 2019", gpa: "3.77"},
            {degree: "Bachelor of Science in Computer Science", school: "Lewis University", location: "Romeoville,IL", concentration: "Game and Simulation Programming", graduationDate: "May 2017", gpa: "3.37"}],
other: {},
contact: [{method: "LinkedIn",icon: LinkedInIcon , url: "https://www.linkedin.com/in/ryanecarma/", img: linkedInPic, avatarPic: linkedInAvatarPic, title: "Ryan Ecarma", subheader: "Web Applications Developer", content: "Link up with me through LinkedIn."},
{method:"Github",icon: GitHubIcon , url:"https://github.com/yanyanRYAN", img:githubPic, avatarPic: githubAvatarPic, title: "YanyanRYAN", subheader: "Github repository",  content: "Look through my Github repository."}]

    
}

export default resume;