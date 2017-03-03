// import React from 'react';
import React, { Component } from 'react';
import NavLink from './NavLink';
import ProjectList from '../data/projects';
import ProjectItem from '../components/ProjectItem';

// this page now relies on color thief

let projects = ProjectList.map((project) => {

  const projectStyle = {
    backgroundImage:'url('+project.img_src+')',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
  }
  return (
    <li className="project" key={project.id} >
      <div className="project-img bg-img" style={projectStyle} />
      <NavLink to={"/projects/"+ project.id}>        
        <h3>{project.name}</h3>
      </NavLink>
    </li>
  );
}); 

class Projects extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="main-content">
        <ul className="group">
          {projects}    
        </ul>
      </div>
    );
  }
}

export default Projects;