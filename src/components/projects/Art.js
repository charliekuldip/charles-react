import React, { Component } from 'react';
import NavLink from './../NavLink';
import ArtList from '../../data/art';
import BgImageLoader from './../parts/BgImageLoader';


class Art extends Component {
  componentDidMount() {
    window.setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 1000);
  }
  
  render() {

    const marqStyle = {
      backgroundImage:'url("/src/img/art/'+this.props.currentProject.src+'")',
      backgroundColor:this.props.currentProject.bg_colors[0]
    }

  	return (
      <div className="main-content single-art">
        <div className="clearfix marquee-nav art-img" style={marqStyle} />
      </div>
    );
  }
}


export default Art;