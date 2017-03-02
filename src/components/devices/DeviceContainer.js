import React from 'react';
import IPad from './Ipad';
import IPhone from './Iphone';
import MacBook from './MacBook';

const deviceContainerStyle = {
	display:'block',
	width:'100%',
	height:'100%'
};

const DeviceContainer = props => (
	<div className="clearfix tri-device-container">
        <MacBook images={props.images} projectId={props.projectId} />
        <IPhone images={props.images} projectId={props.projectId} />
        <IPad images={props.images} projectId={props.projectId} />
    </div>
);

export default DeviceContainer;