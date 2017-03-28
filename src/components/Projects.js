import React, { Component } from 'react';
import NavLink from './NavLink';
import ProjectList from '../data/projects';
import BgImageLoader from './parts/BgImageLoader';


function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
};

let projects = ProjectList.map((project) => {
  const projectStyle = {
    backgroundColor:project.bg_colors[0]
  }

  const stopScale = (e)=> {
    let parentEl = findAncestor(e.target, 'project');
    let bgImg = parentEl.getElementsByClassName("bg-img")[0];
    let computedStyle = window.getComputedStyle(bgImg),
        transform = computedStyle.getPropertyValue('transform');
  
    console.log('THis is transform', transform);
    bgImg.style.transform = transform;
    // removeClass(bgImg, 'scale-bg');
  }
  return (
    <li className="project" key={project.id} onClick={stopScale} style={projectStyle}>
      <BgImageLoader className="project-img bg-img scale-bg" src={"/src/img/projects/"+project.id+"/"+project.img_small} />
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