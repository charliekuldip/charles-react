// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Arts from './components/Arts';
import About from './components/About';
import Projects from './components/Projects';
import ProjectContainer from './components/ProjectContainer';
import ArtContainer from './components/ArtContainer';
import NotFound from './components/NotFound';

// import ProjectsList from './data/projects';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={About} title="About" />
      <Route path="projects" component={Projects} title="Projects" projects={[App.state]} />
      <Route path="projects/:id" component={ProjectContainer} title="Project" />
      <Route path="art" component={Arts} title="Art" />
      <Route path="art/:id" component={ArtContainer} title="Art" />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;





