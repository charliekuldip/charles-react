import React, { Component } from 'react';
import NavLink from './NavLink';
import ProjectList from '../data/projects';
import DeviceContainer from './devices/DeviceContainer';


class Project extends Component {
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
        <div className="clearfix block-container">
          <NavLink to={"/projects/"+ previousLink.id} className="previous previous-project">Previous</NavLink>
          <NavLink to={"/projects/"+ nextLink.id} className="next next-project">Next</NavLink>
        </div>
        <div className="clearfix block-container">
          <h1>{ currentProject.name }</h1>
        </div>

        <DeviceContainer imgs={currentProject.imgs} />

        <img src={currentProject.img_src} />
        <div className="clearfix block-container">
          <p>{ currentProject.bio }</p>
          <h5>{ currentProject.id }</h5>
        </div>

      </div>
    );
  }
}


export default Project;