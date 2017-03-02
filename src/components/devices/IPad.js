import React from 'react';

const imgStyle = {
  width:'100%',
  height:'100%'
};

const IPad = props => (
	<div className="device-container ipad" data-size-port="480px" data-size-land="600px">
		<div className="device-mockup" data-device="ipad_air_2" data-orientation="portrait" data-color="grey">
	        <div className="device">
	            <div className="screen">
					<img src={ '/src/img/projects/'+props.projectId +'/tablet/'+props.images[0]} style={imgStyle} />           
	            </div>
	        </div>
	    </div>
	</div>
);

export default IPad;