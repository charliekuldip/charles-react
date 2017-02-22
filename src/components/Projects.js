import React from 'react';
import NavLink from './NavLink';
import ProjectList from '../data/projects';

const Projects = () => {
  let projects = ProjectList.map((project) => {
    return (
      <li className="project" key={project.id} >
        <NavLink to={"projects/"+ project.id}>
          <img className="project-img" src={project.img_src} />
          <h3>{project.name}</h3>
        </NavLink>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Projects</h2>
      <ul className="group">
        {projects}    
      </ul>
    </div>
  );
}

export default Projects;