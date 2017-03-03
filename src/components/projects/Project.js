import React, { Component } from 'react';
import NavLink from './../NavLink';
import ProjectList from '../../data/projects';
import DeviceContainer from './../devices/DeviceContainer';


class Project extends Component {
  
  render() {

  	let id = this.props.currentProject.id;

    const marqStyle = {
      backgroundImage:'url("'+this.props.currentProject.img_src+'")',
    }


  	return (
      <div className="main-content single-project">
        <div className="clearfix marquee-nav">
          <div className="clearfix block-container marquee" style={marqStyle}>
            <h1>{ this.props.currentProject.name }</h1>
          </div>
        </div>

        <DeviceContainer projectId={this.props.currentProject.id} images={this.props.currentProject.images} />

        <div className="clearfix block-container">
          <p>{ this.props.currentProject.bio }</p>
          <h5>{ this.props.currentProject.id }</h5>
        </div>
      </div>
    );
  }
}


export default Project;