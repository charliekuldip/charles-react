import React from 'react';

const imgStyle = {
  width:'100%',
  height:'100%'
};

const IPhone = props => (
	<div className="device-container iphone" data-size-port="190px" data-size-land="600px">
		<div className="device-mockup" data-device="iphone6" data-orientation="portrait" data-color="black">
	        <div className="device">
	            <div className="screen">
	            	<img src={props.imgs.iphone6[0]} style={imgStyle} />
	            </div>
	        </div>
	    </div>
	</div>
);

export default IPhone;