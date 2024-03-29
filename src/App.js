import React, { useState, useEffect } from 'react';
import './App.css';
import github_logo from './images/GitHub-logo.png'
import projects from './projects';
import demo from './images/demo.png';
const images = require.context('../public/images', true);


function App() {
  const [skills, setSkills] = useState({});



  useEffect(() => {
    const allSkills = projects.reduce((acc, project) => {
      project.skills.forEach(skill => {
        acc[skill] = false;
      });
      return acc;
    }, {});
    setSkills(allSkills);
  }, []);

  const handleCheck = (event) => {
    setSkills({ ...skills, [event.target.name]: event.target.checked });
  };

  const checkedSkills = Object.keys(skills).filter(skill => skills[skill]);

  return (
    <div className="App">
      <div className="intro">
        <h1>Welcome to Ravi Ramadoss's Portfolio</h1>
        <p>This website showcases my skills and projects. You can filter the projects by skill by checking the boxes below. Each skill takes you to a github repo. Some of the apps may have a live demo version</p>
      </div>
      <div className="skills-panel container">
        <h2>Skills</h2>
        
        <div className="skills-container">
          {Object.keys(skills).map((skill, index) => (
            <div key={index} className="skill-item">
              <input type="checkbox" id={`skill-${index}`} name={skill} checked={skills[skill]} onChange={handleCheck} />
              <label htmlFor={`skill-${index}`}>{skill}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="projects-container container">
        <h2>Project Showcase</h2>
        <div className="project-boxes">
          {projects.filter(project =>
            checkedSkills.length === 0 || project.skills.some(skill => checkedSkills.includes(skill))
          ).map((project, index) => (
            <div key={index} className="project-box">
              <div className="project-image">

                <img src={images(`./${project.image_name}`)} alt={project.name} />
              </div>
              <div className="project-details">
                <h3>{project.name}</h3>
                <a href={project.github_url}> <div className="githubUrl"><img src={github_logo} alt={project.name} style={{ width: '50px' }} /> {project.github_url}</div></a>
                {project.live_demo && (
                  <div className="live-demo">
                    <a href={project.live_demo}>Live Demo</a>
                  </div>
                )}
                <div dangerouslySetInnerHTML={{ __html: project.description }} className="dangerousHTML" />
                <div className="skills-container">
                  {project.skills.map((skill, index) => (
                    <div key={index} className="skill-box">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;