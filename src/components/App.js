import React, { Component } from 'react';
import NavLink from './NavLink';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import ReactTransitionGroup from 'react-addons-transition-group'
import SvgAnimation from './SvgAnimation';



const url = 'https://jsonplaceholder.typicode.com/posts';
const projects = [];

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
      gifs:[],
      projects:[],
      activePage:'home',
      topLevelPage:true,
      animating:false
    };
  }

  componentDidMount() {
    // axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then(response => {
    //     this.setState({
    //       gifs: response.data.data
    //     });
    //   })
    //   .catch(error => {
    //     console.log('Error fetching and parsing data', error);
    // });
    // console.log('THis componentDidMount baby! and this is from App.js!');
  }

  componentWillReceiveProps(nextProps) {
    // console.log('This is from ComponentWillReceiveProps! nextProps:', nextProps);
    // this.setAnimation();
  }

  componentWillUpdate(nextProps, nextState) {
    let locArray = nextProps.location.pathname.split('/');
    let activePage = locArray[1];

    if(activePage == "") {activePage = "home";}
    // this.state.topLevelPage = locArray.length > 2 ? false : true;
  
    // console.log('This is locArray', locArray);
    // console.log('This is activePage', activePage);
    this.state.activePage = activePage;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('THis is from componentDidUpdate!');
  }
  
  render() {
    // SET PROJECTS ON PROJECTS PAGE
    const renderChildren = (props) => {
      return React.Children.map(props.children, child => {
        if (child.type.name === "Projects")
          return React.cloneElement(child, {
            data: this.state.gifs,
            key: child.type.name
          })
        else
          return React.cloneElement(child, {
            key: child.type.name
          })
      })
    }

    // <img src="/src/img/Blurry.jpg" />
    return (
      <div className="container clearfix">
        <SvgAnimation activePage={this.state.activePage} topLevelPage={this.state.topLevelPage} animating={this.state.animating} />
        <header>
          <ul className="main-nav clearfix">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
          </ul>       
        </header>
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