import React, { Component } from 'react';
import NavLink from './NavLink';
import axios from 'axios';


const url = 'https://jsonplaceholder.typicode.com/posts';
const projects = [];

class App extends Component {
  
  // lets us use keyword this inside app class
  constructor(props) {
    super(props);
    this.state = {
      gifs:[],
      projects:[]
    };
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
  }
  
  render() {
    // SET PROJECTS ON PROJECTS PAGE
    const renderChildren = (props) => {
      return React.Children.map(props.children, child => {
        if (child.type.name === "Projects")
          return React.cloneElement(child, {
            data: this.state.gifs
          })
        else
          return child
      })
    }

    return (
      <div className="container">
        <header>
          <span className="icn-logo"><i className="material-icons">code</i></span>
          <ul className="main-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
          </ul>       
        </header>
        { renderChildren(this.props) }
      </div>
    );
  }
}

export default App;