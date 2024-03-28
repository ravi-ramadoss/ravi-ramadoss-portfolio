import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/openain_rag.jpeg';

function App() {
  const [skills, setSkills] = useState({});

  const projects = [
    { name: 'Project 1', image: 'images/openain_rag.jpeg', link: 'https://github.com/user/project1', skills: ['python', 'airflow'] },
    { name: 'Project 2', link: 'https://github.com/user2', skills: ['AWS', 'python'] },
    { name: 'Project 3', link: 'https://github.com/user/project3', skills: ['airflow', 'AWS'] },
    { name: 'Project 4', link: 'https://github.com/user/project4', skills: ['React', 'JavaScript'] },
    { name: 'Project 5', link: 'https://github.com/user/project5', skills: ['Node.js', 'Express'] },
    { name: 'Project 6', link: 'https://github.com/user/project6', skills: ['MongoDB', 'Mongoose'] },
    { name: 'Project 7', link: 'https://github.com/user/project7', skills: ['HTML', 'CSS'] },
    { name: 'Project 8', link: 'https://github.com/user/project8', skills: ['Java', 'Spring Boot'] },
    { name: 'Project 9', link: 'https://github.com/user/project9', skills: ['C#', '.NET'] },
    { name: 'Project 10', link: 'https://github.com/user/project10', skills: ['Ruby', 'Rails'] },
    { name: 'Project 11', link: 'https://github.com/user/project11', skills: ['PHP', 'Laravel'] },
    { name: 'Project 12', link: 'https://github.com/user/project12', skills: ['Go', 'Gin'] },
    { name: 'Project 13', link: 'https://github.com/user/project13', skills: ['Rust', 'Rocket'] },
  ];

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
          <img src={logo} alt={project.name} />
        </div>
        <div className="project-details">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Go to project</a>
          <ul>
            {project.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default App;