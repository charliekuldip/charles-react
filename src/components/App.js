import React, { Component } from 'react';
import NavLink from './NavLink';
import axios from 'axios';


const url = 'https://jsonplaceholder.typicode.com/posts';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  // componentDidMount() {

  //   axios.get(url)
  //     .then(res => {
  //       const data = res.data;
  //       var projects = [];
  //       for (var i = 0, len = data.length; i < len; i++) {
  //         var project = {};
  //         project.id = data[i].ID;
  //         project.title = data[i].title;
  //         project.terms = data[i].terms;
  //         project.content = data[i].content;
  //         if(data[i].featured_image) {
  //           project.image = data[i].featured_image.source;
  //         }
  //         projects.push(project);
  //       }
  //       this.setState({ projects });
  //       console.log('This state: ', this.state);
  //       console.table(projects);
  //     });
  // }


  render() {
    return (
      <div className="container">
        <header>
          <span className="icn-logo"><i className="material-icons">code</i></span>
          <ul className="main-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/teachers">Teachers</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
          </ul>       
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;