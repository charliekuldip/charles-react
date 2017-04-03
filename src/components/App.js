import React, { Component } from 'react';
import NavLink from './NavLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SvgAnimation from './SvgAnimation';
import MainNav from './MainNav';
import { disablepointeronscroll, toggleOutlines } from './helpers/helpers';

/*----- disable pointer events on scroll-------*/
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
      // projects:ProjectList,
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
    console.log('Toggle Animation False called!');
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

  // componentDidUpdate(prevProps, prevState) {}
  
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

    // console.log('__dirname ', __dirname );
    // console.log('__filename ', __filename );

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