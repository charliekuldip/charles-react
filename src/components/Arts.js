import React, { Component } from 'react'; 
import NavLink from './NavLink';
import ArtList from '../data/art';
import BgImageLoader from './parts/BgImageLoader';
import { removeClass, findAncestor } from './helpers/helpers';

let arts = ArtList.map((art) => {

  const artStyle = {
    backgroundColor:art.bg_colors[0]
  }

  const stopScale = (e)=> {
    let parentEl = findAncestor(e.target, 'art');
    let bgImg = parentEl.getElementsByClassName("bg-img")[0];
    let computedStyle = window.getComputedStyle(bgImg),
        transform = computedStyle.getPropertyValue('transform');
  
    bgImg.style.transform = transform;
    removeClass(bgImg, 'scale-bg');
  }
  
  return (
    <li className="art" key={art.id} onClick={stopScale} style={artStyle}>
      <BgImageLoader className="project-img bg-img art-img scale-bg" src={"/src/img/art/"+art.src} />
      <NavLink to={"/art/"+ art.id}>        
        <h3 className="art-heading">{art.name}</h3>
      </NavLink>
    </li>
  );
}); 

class Arts extends Component {
  componentDidMount() {
    window.setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 1000);
  }

  render() {
    return (
      <div className="main-content">
        <h1>Art</h1>
        <ul className="clearfix group arts-list">
          {arts}    
        </ul>
      </div>
    );
  }
}

export default Arts;