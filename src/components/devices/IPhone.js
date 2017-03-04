import React from 'react';
import ImageLoader from '../parts/ImageLoader';

const IPhone = props => (
	<div className="device-container iphone" data-size-port="190px" data-size-land="600px">
		<div className="device-mockup" data-device="iphone6" data-orientation="portrait" data-color="black">
	        <div className="device">
	            <div className="screen">
	            	<ImageLoader src={ '/src/img/projects/'+props.projectId +'/iphone-6/'+props.curSlide} />
	            </div>
	        </div>
	    </div>
	</div>
);

export default IPhone;