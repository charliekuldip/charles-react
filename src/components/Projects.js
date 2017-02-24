// import React from 'react';
import React, { Component } from 'react';
import NavLink from './NavLink';
import ProjectList from '../data/projects';
import ProjectItem from '../components/ProjectItem';


const Projects = props => {
  // debugger;

  const results = props.data;

  let projects = results.map((project) => {
      return (
        <ProjectItem url = {project.images.fixed_height.url} key={project.id} />
      );
  }); 


  // let projects = ProjectList.map((project) => {
  //   return (
  //     <li className="project" key={project.id} >
  //       <NavLink to={"projects/"+ project.id}>
  //         <img className="project-img" src={project.img_src} />
  //         <h3>{project.name}</h3>
  //       </NavLink>
  //     </li>
  //   );
  // }); 
  
  return (
    <div className="main-content">
      <h2>Projects</h2>
      <ul className="group">
        {projects}    
      </ul>
    </div>
  );
}

Projects.propTypes = {
  data:React.PropTypes.array
};

export default Projects;


// let projects = ProjectList.map((project) => {
//     return (
//       <li className="project" key={project.id} >
//         <NavLink to={"projects/"+ project.id}>
//           <img className="project-img" src={project.img_src} />
//           <h3>{project.name}</h3>
//         </NavLink>
//       </li>
//     );
// }); 

// class Projects extends Component {
//   componentDidMount() {

//   }

//   render() {
//     return (
//       <div className="main-content">
//         <h2></h2>
//         <ul className="group">
//           {projects}    
//         </ul>
//       </div>
//     );
//   }
// }

// export default Projects;