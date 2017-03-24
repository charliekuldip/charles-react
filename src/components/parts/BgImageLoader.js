import React, { Component } from 'react';
import classNames from 'classnames';

class BgImageLoader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
      bgImg:{}
		};
	}

  onImageLoad() {
    this.setState({ loaded: true, bgImg:this.props.src });
  }

  componentDidMount() {
    const imgTag = this.refs.img;
    const imgSrc = imgTag.getAttribute('src');
    const img = new window.Image();
    img.onload = this.onImageLoad.bind(this);
    img.src = imgSrc;
  }

  render() {
    const bgImgStyle={
      backgroundImage:'url("'+this.state.bgImg+'")'
    };
    const { className, props } = this.props;
    const imgClasses = 'image';
    const rootClassName = classNames(className, imgClasses, {
      'image-loaded': this.state.loaded,
    });
    return (
      <div ref="img" {...this.props} style={bgImgStyle} className={rootClassName} />
    );
  }
}

export default BgImageLoader;