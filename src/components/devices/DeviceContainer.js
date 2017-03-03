import React, { Component } from 'react';
import IPad from './Ipad';
import IPhone from './Iphone';
import MacBook from './MacBook';

const deviceContainerStyle = {
	display:'block',
	width:'100%',
	height:'100%'
};

class DeviceContainer extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
			running: false,
	      	elapsedTime: 0,
	      	previousTime: 0,
	      	slideIndex:0
	    };
	}

	componentDidMount() {
		this.interval = setInterval(this.onTick.bind(this), 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onTick() {
	    // if(this.state.running) {
	   	if(this.props.images !== undefined) {
		    var now = Date.now();
		    console.log("This props images length", this.props.images.length);
		    console.log("This this.state.slideIndex", this.state.slideIndex);
		    let curSlide;

		    if(this.state.slideIndex >= this.props.images.length-1) {
		    	curSlide = 0;
		    } else {
		    	curSlide = this.state.slideIndex+1;
		    }

		    this.setState({
		        previousTime: now,
		        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
				slideIndex: curSlide
		    });
	    // }
	    console.log('onTick');
	    }
	}

	onStart() {
    	this.setState({ 
	      running: true,
	      previousTime: Date.now(),
	    });
	}
	  
	onStop() {
	    this.setState({ running: false });
	}
	  
	onReset() {
	    this.setState({
	     	elapsedTime: 0,
	      	previousTime: Date.now(),
	    });
	}
  

  	render() {
  		// const seconds = Math.floor(this.state.elapsedTime / 1000);
  		console.log('THis.props: ', this.props);
  		if(this.props.images !== undefined) {
		  	return(
		  		<div>
					<div className="clearfix tri-device-container">
				        <MacBook projectId={this.props.projectId} curSlide={this.props.images[this.state.slideIndex]} />
				        <IPhone projectId={this.props.projectId} curSlide={this.props.images[this.state.slideIndex]} />
				        <IPad projectId={this.props.projectId} curSlide={this.props.images[this.state.slideIndex]} />
				    </div>
				</div>
		   	);
		} else {
			return (<div />);
		}
  	}
}

export default DeviceContainer;