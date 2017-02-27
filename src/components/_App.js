import React, { Component } from 'react';
import NavLink from './NavLink';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SvgAnimation from './SvgAnimation';



const url = 'https://jsonplaceholder.typicode.com/posts';
const projects = [];

class App extends Component {
  
  // lets us use keyword this inside app class
  constructor(props) {
    super(props);
    this.state = {
      gifs:[],
      projects:[],
      toggleSvg:0
    };
  }

  toggleSvg() {
    this.setState({
      toggleSvg:this.prevState +1
    });
  }


  componentDidMount() {

    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
    console.log('THis componentDidMount baby! and this is from App.js!');
  }

  componentWillReceiveProps(nextProps) {
    console.log('This is from ComponentWillReceiveProps! nextProps:', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('THis is componentWillUpdate! nextProps', nextProps, nextState);
    // console.log('nextState: ', nextState);
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

    return (
      <div className="container">
        <SvgAnimation toggleSvg={this.state.toggleSvg} />

        <header>
          <span className="icn-logo"><i className="material-icons">code</i></span>
          <ul className="main-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
          </ul>       
        </header>

        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={window.innerWidth}
          transitionLeaveTimeout={window.innerWidth}
        >
          { renderChildren(this.props) }
        </ReactCSSTransitionGroup>
        
      </div>
    );
  }
}

export default App;