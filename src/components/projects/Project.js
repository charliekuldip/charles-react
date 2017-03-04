import React, { Component } from 'react';
import NavLink from './../NavLink';
import ProjectList from '../../data/projects';
import DeviceContainer from './../devices/DeviceContainer';
import ImageLoader from './../parts/ImageLoader';


class Project extends Component {
  componentDidMount() {
    window.setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 1000);
  }
  
  render() {

    const marqStyle = {
      backgroundImage:'url("'+this.props.currentProject.img_src+'")',
    }

    const tagItems = this.props.currentProject.tags.map((tag) =>
      <li key={tag}>{tag}</li>
    );


  	return (
      <div className="main-content single-project">
        <div className="clearfix marquee-nav">
          <ImageLoader className="clearfix block-container marquee" src={this.props.currentProject.img_src} >
            <h1>{ this.props.currentProject.name }</h1>
          </ImageLoader>
        </div>

        <DeviceContainer projectId={this.props.currentProject.id} images={this.props.currentProject.images} />

        <div className="clearfix block-container">
          <p className="bio">{ this.props.currentProject.bio }</p>
          <ul className="tags">{tagItems}</ul>
          <h5>{ this.props.currentProject.id }</h5>
        </div>
      </div>
    );
  }
}


export default Project;