import React from 'react';

const imgStyle = {
	display:'block',
	width:'100%',
	height:'100%'
};


const MacBook = props => (
	<div className="device-mockup macbook">
    	<div className="device">
        	<div className="screen">
        		<img src={props.imgs.desktop[0]} style={imgStyle} />
        	</div>
    	</div>
    </div>
);

export default MacBook;