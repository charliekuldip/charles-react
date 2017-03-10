import React, { Component } from 'react';
import NavLink from './../NavLink';
import ProjectList from '../../data/projects';
import DeviceContainer from './../devices/DeviceContainer';
import BgImageLoader from './../parts/BgImageLoader';


class Project extends Component {
  componentDidMount() {
    window.setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 1000);
  }
  
  render() {

    const marqStyle = {
      backgroundColor:this.props.currentProject.bg_colors[0]
    }

    const tagItems = this.props.currentProject.tags.map((tag) =>
      <li key={tag}>{tag}</li>
    );


  	return (
      <div className="clearfix inner">
        <div className="clearfix marquee-nav" style={marqStyle}>
          <BgImageLoader className="clearfix block-container marquee" src={'/src/img/projects/'+this.props.currentProject.id+'/'+this.props.currentProject.img_big} />
          <h1>{ this.props.currentProject.name }</h1>
          <ul className="case-study">
            <li><a href="#">View Case Study</a></li>
            <li><a href="#">View Website</a></li>
          </ul>
        </div>

        <DeviceContainer projectId={this.props.currentProject.id} images={this.props.currentProject.images} />

        <div className="clearfix block-container">
          <ul className="roles">
            <li><span>Role:&nbsp;</span><span>{this.props.currentProject.role}</span></li>
            <li><span>Client:&nbsp;</span><span>{this.props.currentProject.client}</span></li>
            <li><span>Agency:&nbsp;</span><span>{this.props.currentProject.agency}</span></li>
          </ul>
          <p className="bio">{ this.props.currentProject.bio }</p>
          <ul className="tags">{tagItems}</ul>
          <h5>{ this.props.currentProject.id }</h5>
        </div>
      </div>
    );
  }
}


export default Project;