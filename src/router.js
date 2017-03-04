// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectContainer from './components/ProjectContainer';
import NotFound from './components/NotFound';

// import ProjectsList from './data/projects';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} title="About" />
      <Route path="projects" component={Projects} title="Projects" projects={[App.state]} />
      <Route path="projects/:id" component={ProjectContainer} title="Project" />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;





