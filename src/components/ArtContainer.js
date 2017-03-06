import React, { Component } from 'react';
import NavLink from './NavLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ArtList from '../data/art';
import Art from './projects/Art';

class ArtContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arts:ArtList,
      currentProject:this.props.params.id,
      animating:false,
      key:'art-container'
    };
  }

  
  render() {

  	let id = this.props.params.id,
  		currentProject,
  		index = -1,
  		nextLink,
  		previousLink;


  	// NEXT / PREVIOUS LINKS
  	for(var i = 0, len = ArtList.length; i < len; i++) {
  	    if (ArtList[i].id === id) {
  	        index = i;
  	        currentProject = ArtList[index];
  	        nextLink = index + 1 < len ? ArtList[index+1] : ArtList[0];
  	        previousLink = index - 1 >= 0 ? ArtList[index-1] : ArtList[len-1];
  	        break;
  	    }
  	}

  	return (
      <div className="main-content single-project">
        <div className={currentProject.id}>
        
          <NavLink to={"/art/"+ previousLink.id} className="previous previous-project"></NavLink>
          <NavLink to={"/art/"+ nextLink.id} className="next next-project"></NavLink>

          <div className="clearfix">
            <ReactCSSTransitionGroup
              component="div"
              transitionName="single"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <Art key={index} currentProject={currentProject} />
            </ReactCSSTransitionGroup>
          </div>

        </div>
      </div>
    );
  }
}


export default ArtContainer;