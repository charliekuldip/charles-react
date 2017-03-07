import React, { Component } from 'react';
import NavLink from './NavLink'

class MainNav extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	menuClass:'closed',
	      	animating:false,
	      	active: false,
	      	activePage:props.activePage
	    };
	}

    setMenuClass(e) {
    	if(!this.state.active) {
    		this.setState({
    			active: true,
    			menuClass:'open'
    		});	
    	} else {
    		let closeClass = 'closed';
    		if(e.target.className == "main-nav-btn") {
    			closeClass += ' from-btn';
    		} 
    		this.setState({
    			active: false,
    			menuClass:closeClass
    		});	
    	}
    }

    

  	render() {
  		const navStyle={}
	    if(this.props.activePage == "about") {
	    	navStyle.color = '#ffffff';
	    }

	    return (
	    	<header className="clearfix">
	    		<button id="main-nav-btn" className="main-nav-btn" onClick={this.setMenuClass.bind(this)}>
	    			<span className="bar"></span>
	    			<span className="bar"></span>
	    			<span className="bar"></span>
	    		</button>
	    		<div id="main-nav-container" className={this.state.menuClass}>
					<ul className="main-nav clearfix">
					    <li><NavLink to="/" onClick={this.setMenuClass.bind(this)} style={navStyle}>About</NavLink></li>
					    <li><NavLink to="/projects" onClick={this.setMenuClass.bind(this)} style={navStyle}>Projects</NavLink></li>
					    <li><NavLink to="/art" onClick={this.setMenuClass.bind(this)} style={navStyle}>Art</NavLink></li>
					</ul>
				</div>
			</header>
	    );
	}
}

export default MainNav;