import React, { Component } from 'react';
import IPad from './Ipad';
import IPhone from './Iphone';
import MacBook from './MacBook';

const deviceContainerStyle = {
	display:'block',
	width:'100%',
	height:'100%'
};

// const changeSlide = props => {
// 	let x = 0;
// 	window.setInterval(function() {
// 		console.log('This is from changeSlide! and x',x);
// 		if(x < props.images.length - 1) {
// 			x++;
// 		} else {
// 			x = 0;
// 		}

// 	}, 5000);
// }

// const DeviceContainer = props => (
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
		this.interval = setInterval(this.onTick.bind(this), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onTick() {
	    // if(this.state.running) {
		    var now = Date.now();
		    this.setState({
		        previousTime: now,
		        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
				slideIndex:this.state.slideIndex+1
		    });
	    // }
	    console.log('onTick');
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
	  	return(
	  		<div>
				<div className="clearfix tri-device-container">
			        <MacBook images={this.props.images} projectId={this.props.projectId} />
			        <IPhone images={this.props.images} projectId={this.props.projectId} />
			        <IPad images={this.props.images} projectId={this.props.projectId} />
			    </div>
			</div>
	   	);
  	}
}

export default DeviceContainer;