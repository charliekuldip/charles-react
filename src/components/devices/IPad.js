import React from 'react';
import ImageLoader from '../parts/ImageLoader';

const IPad = props => (
	<div className="device-container ipad" data-size-port="480px" data-size-land="600px">
		<div className="device-mockup" data-device="ipad_air_2" data-orientation="portrait" data-color="grey">
	        <div className="device">
	            <div className="screen">
					<ImageLoader src={ '/src/img/projects/'+props.projectId +'/tablet/'+props.curSlide} />
	            </div>
	        </div>
	    </div>
	</div>
);

export default IPad;