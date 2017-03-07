// import React from 'react';
import React, { Component } from 'react'; 
import ArtList from '../data/art';

// this page now relies on color thief

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