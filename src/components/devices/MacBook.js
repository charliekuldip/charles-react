import React from 'react';

const imgStyle = {
	display:'block',
	width:'100%',
	height:'100%'
};

const containerStyle = {
    width:'100%',
    maxWidth:'1300px',
    margin:'0 auto 10%'
};

const MacBook = props => (
    <div className="device-container macbookcontainer" style={containerStyle} data-size-port="1010px" data-size-land="600px">
    	<div className="device-mockup macbook">
        	<div className="device">
            	<div className="screen">
                    <img src={ '/src/img/projects/'+props.projectId +'/desktop/'+props.curSlide} style={imgStyle} />
            	</div>
        	</div>
        </div>
    </div>
);

export default MacBook;