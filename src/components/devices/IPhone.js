import React from 'react';

const iframeStyle = {
  width:'100%',
  height:'100%'
};

const containerStyle = {
	width:'50%',
	maxWidth:'400px',
	margin:'0 auto 1em'
};

const IPhone = props => (
	<div className="device-container" style={containerStyle} data-size-port="300px" data-size-land="600px">
		<div className="device-mockup" data-device="iphone6" data-orientation="portrait" data-color="black">
	        <div className="device">
	            <div className="screen">
	            </div>
	            <div className="button">
	            </div>
	        </div>
	    </div>
	</div>
);

export default IPhone;