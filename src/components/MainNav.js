import React, { Component } from 'react';
import NavLink from './NavLink'
import Scroll from 'react-scroll';
import classNames from 'classnames';

class MainNav extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	menuClass:'closed',
	      	animating:false,
	      	active: false,
	      	activePage:props.activePage,
	      	windowWidth: window.innerWidth,
    		mobileNavVisible: false,
    		anchorClick:false
	    };
	}

	handleResize() {
	  	this.setState({windowWidth: window.innerWidth});
	}

	// componentWillMount() {}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize.bind(this));
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.handleResize.bind(this));
	}

	componentWillUpdate(nextProps) {
		let pTitle = nextProps.activePage.charAt(0).toUpperCase() + nextProps.activePage.slice(1);
		if(pTitle != "Single") {
			document.title = 'Charles Davis - ' + pTitle;	
		} 
		console.log('MainNav is updating!');	
		// console.log('location:', location);
	}

	renderMobileNav() {
	  if(this.state.mobileNavVisible) {
	    // return this.navigationLinks();
	    console.log('MOBILE NAV IS VISIBLE');
	  }
	}

	handleNavClick() {
	  if(!this.state.mobileNavVisible) {
	    this.setState({mobileNavVisible: true});
	  } else {
	    this.setState({mobileNavVisible: false});
	  }
	}

    setMenuClass(e) {
    	e.target.className += ' active';
    	if(!this.state.active) {
    		this.setState({
    			active: true,
    			menuClass:'open',
    			anchorClick:false
    		});	
    	} else {
    		let closeClass = 'closed';
    		if(e.target.nodeName === "A") {
    			closeClass += ' no-trans';
    			this.setState({
    				anchorClick:true
    			});
    		} else {
    			this.setState({
    				anchorClick:false
    			});
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
  		const { className, props } = this.props;
  		const navBtnClasses = "main-nav-btn menu-icon";
	    const rootClassName = classNames(className, navBtnClasses, {
	      'open': this.state.active,
	      'no-trans':this.state.anchorClick
	    });

	    return (
	    	<header id="fix-menu" className="clearfix fix-menu fixed-menu">
	    		<div id="main-nav-btn" className={rootClassName} onClick={this.setMenuClass.bind(this)} onTouchStart={this.setMenuClass.bind(this)}>
	    			<span className="bar"></span>
	    		</div>
	    		<div id="main-nav-container" className={this.state.menuClass}>
					<ul className="main-nav clearfix">
					    <li><NavLink to="/about" style={navStyle} onClick={this.setMenuClass.bind(this)}>About</NavLink></li>
					    <li><NavLink to="/projects" style={navStyle} onClick={this.setMenuClass.bind(this)}>Projects</NavLink></li>
					    <li><NavLink to="/art" style={navStyle} onClick={this.setMenuClass.bind(this)}>Art</NavLink></li>
					</ul>
				</div>
			</header>
	    );
	}
}

export default MainNav;