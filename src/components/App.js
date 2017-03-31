import React, { Component } from 'react';
import NavLink from './NavLink';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group'
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

/*----- disable pointer events on scroll-------*/
function disablepointeronscroll(){
    var scrolltimer;

    window.addEventListener('scroll', function(){
        clearTimeout(scrolltimer);

        if(document.body.className.indexOf('disable-hover') == -1) {
            document.body.className += ' disable-hover';
        }

        scrolltimer = setTimeout(function(){
            var classes = document.body.className.split(" ");
            for(var i = 0; i<classes.length; i++){
                if( classes[i] == 'disable-hover' )
                    classes.splice(i,1);
            }
            document.body.className = classes.join(" ");
        },200);
    }, false);
}

disablepointeronscroll();

class App extends Component {
  
  // lets us use keyword this inside app class
  constructor(props) {
    super(props);

    let locArray = props.location.pathname.split('/');
    let activePage = locArray[1];
    if(activePage == "") {activePage = "about";}
    
    let topLevel = true;
    if(locArray.length > 2) {
      topLevel = false;
      activePage = "single";
    }

    this.state = {
      projects:ProjectList,
      activePage:activePage,
      topLevelPage:topLevel,
      animating:false
    };
  }

  goToAbout() {
    setTimeout(()=>{
      window.scrollTo(0, window.innerHeight);
    }, 1000);
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
    this.state.animating = true;
  }

  componentWillUpdate(nextProps, nextState) {
    let locArray = nextProps.location.pathname.split('/');
    let activePage = locArray[1];

    if(locArray.length > 2) {
      this.state.topLevelPage = false;
    } else {
      this.state.topLevelPage = true;
    }  

    if(activePage == "") {activePage = "about";}
    this.state.activePage = activePage;

    if(activePage == "about") {
      this.goToAbout();
    }

    if(this.state.topLevelPage == false) {
      this.state.activePage = "single";
    }
  }

  toggleAnimationTrue() {
    console.log('Toggle Animation True called!');
    this.setState({
      animating:true
    });
  }

  toggleAnimationFalse() {
    console.log('Toggle Animation True called!');
    this.setState({
      animating:false
    });
  }

  toggleAnim() {
    console.log('THis is anim', this.state.animating);
    this.setState({
      animating: !this.state.animating
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('THis is from componentDidUpdate!');
    // console.log('prevState', prevState);
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

        <SvgAnimation activePage={this.state.activePage} topLevelPage={this.state.topLevelPage} animating={this.state.animating} toggleAnim={this.toggleAnim.bind(this)} />
        
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