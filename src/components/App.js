import React, { Component } from 'react';
import NavLink from './NavLink';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SvgAnimation from './SvgAnimation';
import ProjectList from '../data/projects';
import MainNav from './MainNav';


const toggleOutlines = ()=> {
  let body = document.getElementsByTagName('body')[0];
  if(body.classList.contains('outlines')) {
    body.removeAttribute('class', 'outlines');
  } else {
    body.setAttribute('class','outlines');
  }
}

class App extends Component {
  
  // lets us use keyword this inside app class
  constructor(props) {
    super(props);
    this.state = {
      projects:ProjectList,
      activePage:'home',
      topLevelPage:true,
      animating:false
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState) {
    let locArray = nextProps.location.pathname.split('/');
    let activePage = locArray[1];

    if(activePage == "") {activePage = "home";}
    this.state.activePage = activePage;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('THis is from componentDidUpdate!');
  }
  
  render() {
    const renderChildren = (props) => {
      return React.Children.map(props.children, child => {
        if (child.type.name === "Projects")
          return React.cloneElement(child, {
            projects: this.state.projects,
            key: child.type.name
          })
        else
          return React.cloneElement(child, {
            key: child.type.name
          })
      })
    }

    const classN = "container clearfix " + this.state.activePage;

    return (

      <div className={classN} ref="app-container">
        <SvgAnimation activePage={this.state.activePage} topLevelPage={this.state.topLevelPage} animating={this.state.animating} />
        
        <MainNav />       
        
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          { renderChildren(this.props) }
        </ReactCSSTransitionGroup>
        <button id="outline-button" className="outline-button" onClick={toggleOutlines}>Out</button>
      </div>
    );
  }
}

export default App;