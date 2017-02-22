import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
	    <div className="c-davis-bg">
		    <div className="main-content">
		        <h2>{ this.props.route.title }</h2>
		        <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
		    </div>
	    </div>
    );
  }
}

export default About;