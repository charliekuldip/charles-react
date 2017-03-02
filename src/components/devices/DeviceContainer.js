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
        <MacBook imgs={props.imgs} />
        <IPhone imgs={props.imgs} />
        <IPad imgs={props.imgs} />
    </div>
);

export default DeviceContainer;