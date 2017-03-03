// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Projects from './components/Projects';
import ProjectContainer from './components/ProjectContainer';
import NotFound from './components/NotFound';
import CourseContainer from './components/courses/CourseContainer';
import CourseList from './data/courses';
import Featured from './components/Featured';

// import ProjectsList from './data/projects';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} title="About" />
      <Route path="projects" component={Projects} title="Projects" projects={[App.state]} />
      <Route path="projects/:id" component={ProjectContainer} title="Project" />
      <Route path="courses" component={Courses}>
        <IndexRedirect to="html" />
        <Route path="html" component={CourseContainer} data={CourseList.HTML} />
        <Route path="css" component={CourseContainer} data={CourseList.CSS} />
        <Route path="javascript" component={CourseContainer} data={CourseList.JS} />
      </Route>
      <Route path="featured/:topic/:name" component={Featured} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;





