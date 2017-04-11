// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import ReactGA from 'react-ga';

// Components
import App from './components/App';
import Arts from './components/Arts';
import Videos from './components/Videos';
import About from './components/About';
import Projects from './components/Projects';
import ProjectContainer from './components/ProjectContainer';
import ArtContainer from './components/ArtContainer';
import VideoContainer from './components/VideoContainer';
import NotFound from './components/NotFound';

// import ProjectsList from './data/projects';

// GOOGLE ANALYTICS
ReactGA.initialize('UA-96618450-1');

function fireTracking() {
    // console.log('THis is window.location.href', window.location.href);
    ReactGA.pageview(window.location.href);
}


// Routes
const routes = (
  <Router history={browserHistory} onUpdate={fireTracking}>
    <Route component={App}>
      <Route path="/" component={About} title="About" />
      <Route path="about" component={About} title="About" scrollToAbout="true" />
      <Route path="projects" component={Projects} title="Projects" projects={[App.state]} />
      <Route path="projects/:id" component={ProjectContainer} title="Project" />
      <Route path="art" component={Arts} title="Art" />
      <Route path="art/:id" component={ArtContainer} title="Art" />
      <Route path="videos" component={Videos} title="Video" />
      <Route path="videos/:id" component={VideoContainer} title="Video" />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;





