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

    // axios.get(url)
    //   .then(res => {
    //     const data = res.data;
    //     // var projects = [];
    //     for (var i = 0, len = data.length; i < len; i++) {
    //       var project = {};
    //       project.id = data[i].ID;
    //       project.title = data[i].title;
    //       project.terms = data[i].terms;
    //       project.content = data[i].content;
    //       if(data[i].featured_image) {
    //         project.image = data[i].featured_image.source;
    //       }
    //       projects.push(project);
    //     }
    //     this.setState({ projects });
    //     console.log('This state: ', this.state);
    //     // console.table(projects);
    //   });
    
    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //       .then(response => response.json())
    //       .then(responseData => {
    //         this.setState({ gifs:responseData.data });
    //       })
    //       .catch(error => {
    //       console.log('Error fetchig and parsing data', error);
    // });

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