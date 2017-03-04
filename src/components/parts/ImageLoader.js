import React, { Component } from 'react';
import classNames from 'classnames';

const bgImgStyle={};

class ImageLoader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

  onImageLoad() {
      this.setState({ loaded: true });
  }

  componentDidMount() {
    const imgTag = this.refs.img;
    const imgSrc = imgTag.getAttribute('src');
    const img = new window.Image();
    img.onload = this.onImageLoad.bind(this);
    img.src = imgSrc;
    bgImgStyle.backgroundImage = 'url("'+imgSrc+'")';
  }

  render() {
    const { className, props } = this.props;
    const imgClasses = 'image';
    const rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded,
    });
    return (
      <div ref="img" {...this.props} style={bgImgStyle} className={rootClassName} />
    );
  }
}

export default ImageLoader;