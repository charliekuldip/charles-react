import React, { Component } from 'react';
import NavLink from './NavLink'

class Courses extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Courses</h2> 
          <ul className="course-nav">
            <li><NavLink to="/courses/html">HTML</NavLink></li>
            <li><NavLink to="/courses/css">CSS</NavLink></li>
            <li><NavLink to="/courses/javascript">JavaScript</NavLink></li>
          </ul>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default Courses;