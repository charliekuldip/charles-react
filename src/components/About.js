import React, { Component } from 'react';
import BgImageLoader from './parts/BgImageLoader';
import Scroll from 'react-scroll';

const aboutStyle = {
	paddingTop:0
}

class About extends Component {
	scrollToContact(e) {
		e.preventDefault();
		console.log('Scrolling to contact!');
		Scroll.animateScroll.scrollToBottom({
			duration:350
		});	
	}

  	render() {
	    return (
	    	<div className="clearfix" style={aboutStyle}>
			    <BgImageLoader className="c-davis-bg" src="/src/img/charles/cdavis-for-web-2-c.png" key="main-bg" />
			    <div className="main-content about">

			    	<div className="clearfix about-marquee table-full">
			    		<div className="clearfix outer">
			    			<div className ="clearfix inner">
					    		<h1>Charles Davis</h1>
					    		<h2>Creative Problem Solver in the Physical &amp; Digital realm</h2>
					    		<svg version="1.1" id="dogs-logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 116 500 272" enableBackground="new 0 116 500 272">
									<g id="dogs">
										<path id="dog2" d="M147.7,119.7c-6.1-3.6-19.4,21.2-18,23.4c1.4,2.2-14.4-2.2-18,0c-4,2.2-4.7,5-4.7,5s-24.8,1.1-27.3,3.6 c-2.5,2.2,0.7,17.2,14.7,18.7c21.9,1.8,4.3,8.6,4.3,8.6s-9.7,2.9-12.6,4c-2.9,1.1,1.4,6.8,6.1,6.8c4.7,0,19-3.6,20.5-1.1 c1.4,2.2,5,12.9,5,16.2c0,2.9,1.8,13.7,4.3,19.4c2.5,5.7-7.2,58.2,25.9,81.9c1.1,6.8,1.8,8.6,5,10.8c0.4,6.8,0,28.4,2.5,35.9 c-3.6,5-4.7,8.6-7.5,9.7c-2.9,1.1-10.1,8.6-10.4,8.6c-0.4,0,0.4,6.5,18,1.8c2.9-5,8.3-14.4,10.1-18.3c1.8-4,2.5,4,3.6,5.7 c1.4,1.8-6.1,8.6-7.2,10.8c-1.1,2.2-2.5,5,11.5,2.9c2.9-7.5,5-7.9,9-14.4c-1.4-9-2.9-20.5-1.4-26.6c6.1,4.7,14,7.9,23,10.8 c-1.8,9.7,0.4,16.5,8.3,19.4c-1.1,4-3.6,2.2-6.1,4c-2.5,1.8-5,7.9-2.9,7.9c2.5,0,19.4,12.9,71.5-1.8c0-0.7,2.5-2.2,3.2-2.9 c4-3.2,6.5-6.8,10.8-9.3c0-1.8-6.8-6.1-8.3-8.3c-3.6-6.5-7.5-51.7-62.5-105.6c-11.1-11.5-58.2-58.2-58.6-61.8s-9-16.5-15.1-23 c1.1-6.5,1.1-9.7,0.4-11.9c-0.4-2.2,2.9-14.4,0.7-21.2C147.4,124.7,145.2,125.1,147.7,119.7z"/>
										<path id="dog1" d="M290,119.7c-6.1-3.6-19.4,21.2-18,23.4c1.4,2.2-14.4-2.2-18,0c-4,2.2-4.7,5-4.7,5s-24.8,1.1-27.3,3.6 c-2.5,2.2,0.7,17.2,14.7,18.7c21.9,1.8,4.3,8.6,4.3,8.6s-9.7,2.9-12.2,4c-2.9,1.1,1.4,6.8,6.1,6.8c4.7,0,19-3.6,20.5-1.1 c1.4,2.2,5,12.9,5,16.2c0,2.9,1.8,13.7,4.3,19.4c2.5,5.7-7.2,58.2,25.9,81.9c1.1,6.8,1.8,8.6,5,10.8c0.4,6.8,0,28.4,2.5,35.9 c-3.6,5-4.7,8.6-7.5,9.7c-2.9,1.1-10.1,8.6-10.4,8.6c-0.4,0,0.4,6.5,18,1.8c2.9-5,8.3-14.4,10.1-18.3c1.8-4,2.5,4,3.6,5.7 c1.4,1.8-6.1,8.6-7.2,10.8c-1.1,2.2-2.5,5,11.5,2.9c2.9-7.5,5-7.9,9-14c-1.4-9-2.9-20.5-1.4-26.6c6.1,4.7,14,7.9,23,10.8 c-1.8,9.7,0.4,16.5,8.3,19.4c-1.1,4-3.6,2.2-6.1,4s-5,7.9-2.9,7.9c2.2,0,19.4,12.9,71.5-1.8c1.1-6.8,7.5,0,12.2,1.8 c4.7,1.8,43.1,4,53.9,0.4c11.1-3.6,13.7-13.7,11.9-14c-8.3-2.5,16.2,11.5-45.6,3.2c-11.5-3.6-23-5.7-26.6-11.9 c-3.6-6.5-7.5-51.7-62.5-105.6c-11.1-11.5-58.2-58.2-58.6-61.8c-0.4-3.6-9-16.5-15.1-23c1.1-6.5,1.1-9.7,0.4-11.9 c-0.4-2.2,2.9-14.4,0.7-21.2C289.6,124.7,287.8,125.1,290,119.7z"/>
									</g>
								</svg>
					    	</div>
				    	</div>
			    	</div>
			    	
			    	<div id="about-bio" className="clearfix block-container about-container">
			        	<h1>{ this.props.route.title }</h1>
			        	<div className="clearfix about-p div-p">
			        		<div className="clearfix">
				        		<span>Often described as a 'neo-renaissance' man, Charles Davis was originally a musician and artist before discovering a passion for programming and becoming an Interactive&nbsp;Developer.</span>
					        	<BgImageLoader className="about-bg c-art" src="/src/img/about/c-art.jpg" key="c-art" />
					        </div>
							<div className="clearfix">
								<span>A classically trained fine artist since childhood, Charles attended the School of the Art Institute of Chicago before dropping out to join a touring punk band.
								For the next decade he wrote and recorded original music featured in several TV productions including MTV's 'Jersey Shore', 'Viva La Bam', and 'Real&nbsp;World'.</span>
								<BgImageLoader className="about-bg c-guitar" src="/src/img/about/c-guitar.jpg" key="c-guitar" />
							</div>
							<div className="clearfix">
								<span>A decision to return to education yielded positive results as Charles discovered an untapped passion for programming for the web while earning his Bachelor's degree from Hunter College. Passion turned into obsession as he progressed from building simple websites to full-stack&nbsp;applications.</span>
								<BgImageLoader className="about-bg c-programmer" src="/src/img/about/c-programmer.jpg" key="c-programmer" />
							</div>
							<a href="/resume.html" id="resume-link" className="resume-link">Resume</a>
							<a href="#contact" id="contact-link" className="resume-link contact-link" onClick={this.scrollToContact}>Contact</a>
						</div>
			       	</div>

			       <div id="contact" className="clearfix about-marquee table-full">
			    		<div className="clearfix outer">
			    			<svg version="1.1" id="dogs-logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 116 500 272" enableBackground="new 0 116 500 272">
								<g id="dogs">
									<path id="dog2" d="M147.7,119.7c-6.1-3.6-19.4,21.2-18,23.4c1.4,2.2-14.4-2.2-18,0c-4,2.2-4.7,5-4.7,5s-24.8,1.1-27.3,3.6 c-2.5,2.2,0.7,17.2,14.7,18.7c21.9,1.8,4.3,8.6,4.3,8.6s-9.7,2.9-12.6,4c-2.9,1.1,1.4,6.8,6.1,6.8c4.7,0,19-3.6,20.5-1.1 c1.4,2.2,5,12.9,5,16.2c0,2.9,1.8,13.7,4.3,19.4c2.5,5.7-7.2,58.2,25.9,81.9c1.1,6.8,1.8,8.6,5,10.8c0.4,6.8,0,28.4,2.5,35.9 c-3.6,5-4.7,8.6-7.5,9.7c-2.9,1.1-10.1,8.6-10.4,8.6c-0.4,0,0.4,6.5,18,1.8c2.9-5,8.3-14.4,10.1-18.3c1.8-4,2.5,4,3.6,5.7 c1.4,1.8-6.1,8.6-7.2,10.8c-1.1,2.2-2.5,5,11.5,2.9c2.9-7.5,5-7.9,9-14.4c-1.4-9-2.9-20.5-1.4-26.6c6.1,4.7,14,7.9,23,10.8 c-1.8,9.7,0.4,16.5,8.3,19.4c-1.1,4-3.6,2.2-6.1,4c-2.5,1.8-5,7.9-2.9,7.9c2.5,0,19.4,12.9,71.5-1.8c0-0.7,2.5-2.2,3.2-2.9 c4-3.2,6.5-6.8,10.8-9.3c0-1.8-6.8-6.1-8.3-8.3c-3.6-6.5-7.5-51.7-62.5-105.6c-11.1-11.5-58.2-58.2-58.6-61.8s-9-16.5-15.1-23 c1.1-6.5,1.1-9.7,0.4-11.9c-0.4-2.2,2.9-14.4,0.7-21.2C147.4,124.7,145.2,125.1,147.7,119.7z"/>
									<path id="dog1" d="M290,119.7c-6.1-3.6-19.4,21.2-18,23.4c1.4,2.2-14.4-2.2-18,0c-4,2.2-4.7,5-4.7,5s-24.8,1.1-27.3,3.6 c-2.5,2.2,0.7,17.2,14.7,18.7c21.9,1.8,4.3,8.6,4.3,8.6s-9.7,2.9-12.2,4c-2.9,1.1,1.4,6.8,6.1,6.8c4.7,0,19-3.6,20.5-1.1 c1.4,2.2,5,12.9,5,16.2c0,2.9,1.8,13.7,4.3,19.4c2.5,5.7-7.2,58.2,25.9,81.9c1.1,6.8,1.8,8.6,5,10.8c0.4,6.8,0,28.4,2.5,35.9 c-3.6,5-4.7,8.6-7.5,9.7c-2.9,1.1-10.1,8.6-10.4,8.6c-0.4,0,0.4,6.5,18,1.8c2.9-5,8.3-14.4,10.1-18.3c1.8-4,2.5,4,3.6,5.7 c1.4,1.8-6.1,8.6-7.2,10.8c-1.1,2.2-2.5,5,11.5,2.9c2.9-7.5,5-7.9,9-14c-1.4-9-2.9-20.5-1.4-26.6c6.1,4.7,14,7.9,23,10.8 c-1.8,9.7,0.4,16.5,8.3,19.4c-1.1,4-3.6,2.2-6.1,4s-5,7.9-2.9,7.9c2.2,0,19.4,12.9,71.5-1.8c1.1-6.8,7.5,0,12.2,1.8 c4.7,1.8,43.1,4,53.9,0.4c11.1-3.6,13.7-13.7,11.9-14c-8.3-2.5,16.2,11.5-45.6,3.2c-11.5-3.6-23-5.7-26.6-11.9 c-3.6-6.5-7.5-51.7-62.5-105.6c-11.1-11.5-58.2-58.2-58.6-61.8c-0.4-3.6-9-16.5-15.1-23c1.1-6.5,1.1-9.7,0.4-11.9 c-0.4-2.2,2.9-14.4,0.7-21.2C289.6,124.7,287.8,125.1,290,119.7z"/>
								</g>
							</svg>
							<div className="clearfix links">
								<h3>Charles Davis</h3>
								<a href="mailto:chowarddavis@gmail.com">chowarddavis@gmail.com</a>
								<a href="tel:19024874053">901-487-4053</a>
							</div>
			    		</div>
			    	</div>

			    </div>
			</div>
	    );
	}
}

export default About;