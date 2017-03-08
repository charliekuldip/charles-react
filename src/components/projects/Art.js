import React, { Component } from 'react';
import classNames from 'classnames';
import NavLink from './../NavLink';
import ArtList from '../../data/art';

class Art extends Component {

  constructor(props) {
    super(props);
    
    let src = "/src/img/art/"+this.props.currentProject.src;

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
      let pBottom = '';
      pBottom = (img.height/img.width) * 100;  
      pBottom +="%";

      this.setState({
        width:img.width,
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
      backgroundImage:'url("/src/img/art/'+this.props.currentProject.src+'")',
      backgroundColor:this.props.currentProject.bg_colors[0],
      paddingBottom:this.state.paddingBottom
    }

  	return (
      <div className="main-content single-art">
        <div className={rootClassName} ref="img" style={marqStyle} />
      </div>
    );
  }
}


export default Art;