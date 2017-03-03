import React, { Component } from 'react';
import NavLink from './NavLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectList from '../data/projects';
import Project from './projects/Project';


class ProjectContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects:ProjectList,
      currentProject:this.props.params.id,
      animating:false
    };
  }

  
  render() {

  	let id = this.props.params.id,
  		currentProject,
  		index = -1,
  		nextLink,
  		previousLink;


  	// NEXT / PREVIOUS LINKS
  	for(var i = 0, len = ProjectList.length; i < len; i++) {
  	    if (ProjectList[i].id === id) {
  	        index = i;
  	        currentProject = ProjectList[index];
  	        nextLink = index + 1 < len ? ProjectList[index+1] : ProjectList[0];
  	        previousLink = index - 1 >= 0 ? ProjectList[index-1] : ProjectList[len-1];
  	        break;
  	    }
  	}

  	return (
      <div className="main-content single-project">
        
          <NavLink to={"/projects/"+ previousLink.id} className="previous previous-project">Previous</NavLink>
          <NavLink to={"/projects/"+ nextLink.id} className="next next-project">Next</NavLink>

          <Project currentProject={currentProject} />

      </div>
    );
  }
}


export default ProjectContainer;