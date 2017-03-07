import React, { Component } from 'react';
import NavLink from './NavLink';
import ProjectList from '../data/projects';

let projects = ProjectList.map((project) => {

  const projectStyle = {
    backgroundImage:'url("'+project.img_src+'")',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundColor:project.bg_colors[0]
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
    window.setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 1000);
  }

  render() {
    
    return (
      <div className="main-content">
        <h1>Projects</h1>
        <ul className="clearfix group projects-list">
          {projects}    
        </ul>
      </div>
    );
  }
}

export default Projects;