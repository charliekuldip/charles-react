import React, { Component } from 'react'; 
import NavLink from './NavLink';
import VideoList from '../data/videos';
import BgImageLoader from './parts/BgImageLoader';
import { removeClass, findAncestor } from './helpers/helpers';

let videos = VideoList.map((video) => {

  const videoStyle = {
    backgroundColor:video.bg_colors[0]
  }

  const stopScale = (e)=> {
    let parentEl = findAncestor(e.target, 'video');
    let bgImg = parentEl.getElementsByClassName("bg-img")[0];
    let computedStyle = window.getComputedStyle(bgImg),
        transform = computedStyle.getPropertyValue('transform');
  
    bgImg.style.transform = transform;
    removeClass(bgImg, 'scale-bg');
  }
  
  return (
    <li className="video" key={video.id} onClick={stopScale} style={videoStyle}>
      <BgImageLoader className="project-img bg-img video-img scale-bg" src={"/src/img/videos/"+video.id+"/"+video.thumb} />
      <NavLink to={"/videos/"+ video.id}>        
        <h3 className="video-heading">{video.name}</h3>
      </NavLink>
    </li>
  );
}); 

class Videos extends Component {
  componentDidMount() {
    window.setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 1000);
  }

  render() {
    return (
      <div className="main-content">
        <h1>Videos</h1>
        <ul className="clearfix group videos-list">
          {videos}    
        </ul>
      </div>
    );
  }
}

export default Videos;