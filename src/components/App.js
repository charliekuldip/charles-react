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

    let locArray = props.location.pathname.split('/');
    let activePage = locArray[1];
    let topLevel = true;
    if(locArray.length > 2) {
      topLevel = false;
    }

    this.state = {
      projects:ProjectList,
      activePage:activePage,
      topLevelPage:topLevel,
      animating:false
    };
  }

  componentDidMount() {
    // const loadingContainer = document.getElementById('loading-container');
    // loadingContainer.setAttribute('class', 'hide');
    // setTimeout(()=>{
    //   loadingContainer.parentNode.removeChild(loadingContainer);
    //   document.body.removeAttribute('class', 'unloaded');
    //   // debugger();
    //   console.log('Just removed the Container!');
    // }, 1000);
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState) {
    let locArray = nextProps.location.pathname.split('/');
    let activePage = locArray[1];
    console.log('This is locArray.length: ', locArray.length);

    if(activePage == "") {activePage = "about";}
    this.state.activePage = activePage;

    if(locArray.length > 2) {
      this.state.topLevelPage = false;
    } else {
      this.state.topLevelPage = true;
    }
    
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

    return (

      <div className="container clearfix" ref="app-container">
        <SvgAnimation activePage={this.state.activePage} topLevelPage={this.state.topLevelPage} animating={this.state.animating} />
        
        <MainNav activePage={this.state.activePage} topLevelPage={this.state.topLevelPage} />       
        
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