import React, { Component } from 'react';
import NavLink from './NavLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import VideoList from '../data/videos';
import Video from './projects/Video';

const videoStyle = {
  paddingTop:0
}

class VideoContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos:VideoList,
      currentProject:this.props.params.id,
      animating:false,
      key:'video-container'
    };
  }
  
  render() {  

    let id = this.props.params.id,
      currentProject,
      index = -1,
      nextLink,
      previousLink;

    // NEXT / PREVIOUS LINKS
    for(var i = 0, len = VideoList.length; i < len; i++) {
        if (VideoList[i].id === id) {
            index = i;
            currentProject = VideoList[index];
            nextLink = index + 1 < len ? VideoList[index+1] : VideoList[0];
            previousLink = index - 1 >= 0 ? VideoList[index-1] : VideoList[len-1];
            break;
        }
    }

    return (
      <div className="main-content single-project art-project" style={videoStyle}>
        <div className={currentProject.id}>
        
          <NavLink to={"/videos/"+ previousLink.id} className="previous previous-project"></NavLink>
          <NavLink to={"/videos/"+ nextLink.id} className="next next-project"></NavLink>

          <div className="clearfix">
            <ReactCSSTransitionGroup
              component="div"
              transitionName="example"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <Video key={index} currentProject={currentProject} />
            </ReactCSSTransitionGroup>
          </div>

        </div>
      </div>
    );
  }
}


export default VideoContainer;