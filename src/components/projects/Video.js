import React, { Component } from 'react';
import classNames from 'classnames';
import NavLink from './../NavLink';
import VideoList from '../../data/videos';

class Video extends Component {

  constructor(props) {
    super(props);
    
    let src = "/src/img/videos/"+this.props.currentProject.id+"/"+this.props.currentProject.img;

    this.state = {
      src:src,
      loaded: false
    };
  }

  componentDidMount() {
    // window.setTimeout(()=>{
    //   window.scrollTo(0, 0);
    // }, 1000);

    const img = new window.Image();
    
    img.onload = ()=> {
      let pBottom = '',
        pWidth = '',
        units = '';

      if(window.innerWidth > window.innerHeight) {
        units = 'vh';
      } else {
        units = 'vw';
      }

      // VERT
      if(img.height > img.width) {
        pBottom = '100'+units;    
        pWidth = ( (img.width/img.height) * 100 );
        pWidth +=units;

      } else {
        //HORIZ
        pBottom = (img.height/img.width) * 100;    
        pWidth = '100'+units;
        pBottom += units; 
      }

      this.setState({
        width:pWidth,
        height:img.height,
        paddingBottom:pBottom,
        loaded: true 
      });
    }
    img.src = this.state.src;
  }
  
  render() {
    const { className, props } = this.props;
    const imgClasses = 'clearfix marquee-nav art-img image';
    const rootClassName = classNames(className, imgClasses, {
      'image-loaded': this.state.loaded,
    });

    const marqStyle = {
      backgroundImage:'url("/src/img/videos/'+this.props.currentProject.id+"/"+this.props.currentProject.img+'")',
      backgroundColor:this.props.currentProject.bg_colors[0],
      paddingBottom:this.state.paddingBottom,
      width:this.state.width
    }

  	return (
      <div className="main-content single-art">
        <a href={this.props.currentProject.src} target="_blank">
          <div className={rootClassName} ref="img" style={marqStyle} />
        </a>
      </div>
    );
  }
}


export default Video;