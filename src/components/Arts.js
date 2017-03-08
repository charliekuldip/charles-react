import React, { Component } from 'react'; 
import NavLink from './NavLink';
import ArtList from '../data/art';

let arts = ArtList.map((art) => {

  const artStyle = {
    backgroundImage:'url("/src/img/art/'+art.src+'")',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundColor:art.bg_colors[0]
  }
  
  return (
    <li className="art" key={art.id} >
      <div className="project-img bg-img art-img" style={artStyle} />
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