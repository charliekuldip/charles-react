import React, { Component } from 'react';
import NavLink from './NavLink';
import TeacherList from '../data/teachers';


class Teacher extends Component {
  render() {

  	let id = this.props.params.id,
  		currentTeacher,
  		index = -1,
  		nextLink,
  		previousLink;

  	// get teacher from list
	for(var i = 0, len = TeacherList.length; i < len; i++) {
	    if (TeacherList[i].id === id) {
	        index = i;
	        currentTeacher = TeacherList[index];

	        nextLink = index + 1 < len ? TeacherList[index+1] : TeacherList[0];
	        previousLink = index - 1 >= 0 ? TeacherList[index-1] : TeacherList[len-1];

	        break;
	    }
	}

  	return (
      <div className="main-content single-teacher">
        <div className="clearfix">
          <NavLink to={"/teachers/"+ previousLink.id} className="previous previous-teacher">Previous</NavLink>
          <NavLink to={"/teachers/"+ nextLink.id} className="next next-teacher">Next</NavLink>
        </div>
        <h1>{ currentTeacher.name }</h1>
        <img src={currentTeacher.img_src} />
        <p>{ currentTeacher.bio }</p>
        <h5>{ currentTeacher.id }</h5>
      </div>
    );
  }
}


export default Teacher;