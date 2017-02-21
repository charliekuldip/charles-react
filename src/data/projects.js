import React, { Component } from 'react';
import axios from 'axios';

const Projects= {
  "projects":[
    
  ]
};

class ProjectsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }


  componentDidMount() {
    axios.get('http://charles.dev/wp-json/posts?type=project')
      .then(res => {
        const data = res.data;
        // this.setState({ posts });
        var projects = [];
        for (var i = 0, len = data.length; i < len; i++) {
          var project = {};
          project.id = data[i].ID;
          project.title = data[i].title;
          project.terms = data[i].terms;
          project.content = data[i].content;

          if(data[i].featured_image) {
            project.image = data[i].featured_image.source;
          }

          // this.state.projects.push(project);
          projects.push(project);
          Projects.projects.push(project);
        }
        this.setState({ projects });
        // console.log('This state: ', this.state);
        // console.dir(this.state.toString);
        console.table(JSON.stringify(projects));
      });
    }
}

// const ProjectsList = {
//   "projects":[
    
//   ]
// };

export default ProjectsList;
// export default Projects;