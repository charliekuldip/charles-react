import React, { Component } from 'react';
import NavLink from './NavLink'
import Scroll from 'react-scroll';

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

	// componentWillMount() {

	// }

	componentWillUpdate(nextProps) {
		let pTitle = nextProps.activePage.charAt(0).toUpperCase() + nextProps.activePage.slice(1);
		if(pTitle != "Single") {
			document.title = 'Charles Davis - ' + pTitle;	
		} 
		console.log('location:', location);
	}

    setMenuClass(e) {
    	e.target.className += ' active';
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

    	if(this.props.activePage == "about" && e.target.text == 'About') {
    		e.preventDefault();
    		Scroll.animateScroll.scrollTo(window.innerHeight, {
    			duration:350
    		});
    	}
    }

  	render() {
  		const navStyle={}

	    return (
	    	<header className="clearfix">
	    		<button id="main-nav-btn" className="main-nav-btn" onClick={this.setMenuClass.bind(this)} onTouchStart={this.setMenuClass.bind(this)}>
	    			<span className="bar"></span>
	    			<span className="bar"></span>
	    			<span className="bar"></span>
	    		</button>
	    		<div id="main-nav-container" className={this.state.menuClass}>
					<ul className="main-nav clearfix">
					    <li><NavLink to="/about" onClick={this.setMenuClass.bind(this)} style={navStyle}>About</NavLink></li>
					    <li><NavLink to="/projects" onClick={this.setMenuClass.bind(this)} style={navStyle}>Projects</NavLink></li>
					    <li><NavLink to="/art" onClick={this.setMenuClass.bind(this)} style={navStyle}>Art</NavLink></li>
					</ul>
				</div>
			</header>
	    );
	}
}

export default MainNav;