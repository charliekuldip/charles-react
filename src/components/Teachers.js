import React from 'react';
import NavLink from './NavLink';
import TeacherList from '../data/teachers';

const Teachers = () => {
  let teachers = TeacherList.map((teacher) => {
    return (
      <li className="teacher" key={teacher.id} >
        <NavLink to={"teachers/"+ teacher.id}>
          <img className="teacher-img" src={teacher.img_src} />
          <h3>{teacher.name}</h3>
        </NavLink>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Projects</h2>
      <ul className="group">
        {teachers}    
      </ul>
    </div>
  );
}

export default Teachers;