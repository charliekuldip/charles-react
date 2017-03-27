import React, { Component } from 'react';
import classNames from 'classnames';


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
  }

  render() {
    const { className, props } = this.props;
    const rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded,
    });
    return (
      <img ref="img" {...this.props} className={rootClassName} />
    );
  }
}

export default ImageLoader;