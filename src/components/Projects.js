import React, { Component } from 'react';
import NavLink from './NavLink';
import ProjectList from '../data/projects';


function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

let projects = ProjectList.map((project) => {

  const projectStyle = {
    backgroundImage:'url("/src/img/projects/'+project.id+'/'+project.img_small+'")',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundColor:project.bg_colors[0]
  }
  const stopScale = (e)=> {
    console.log('This is e.targert: ', e.target);
    let parentEl = findAncestor(e.target, 'project');
    let bgImg = parentEl.getElementsByClassName("bg-img")[0];
    // console.log('THis is parentEl', parentEl);
    console.log('THis is bgImg', bgImg);
  }
  return (
    <li className="project" key={project.id} onClick={stopScale}>
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