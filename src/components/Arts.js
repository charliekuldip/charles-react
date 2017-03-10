import React, { Component } from 'react'; 
import NavLink from './NavLink';
import ArtList from '../data/art';

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


let arts = ArtList.map((art) => {

  const artStyle = {
    backgroundImage:'url("/src/img/art/'+art.src+'")',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
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
    <li className="art" key={art.id} onClick={stopScale}>
      <div className="project-img bg-img art-img scale-bg" style={artStyle} />
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