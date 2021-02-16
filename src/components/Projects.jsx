import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/img-5.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/Srinivas">Web App for Raise the Barr</a></h3>
											<span></span>
											<p className="icon">
												<span><a href="https://github.com/Srinivas"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/img-3.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/Srinivas">Fetch API in React Example</a></h3>
											<span>Dave Ceddia React Tutorial (Replaced Axios with Fetch)</span>
											<p className="icon">
												<span><a href="https://github.com/Srinivas"><i className="icon-share3" /></a></span>
												{/* 	<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(images/img-6.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/Srinivas">Coding Challenge: <br />DarkSky API</a></h3>
											<span>Gives weather forecast of upcoming 7 days for any location using google's geolocation API.
												<br />Weather data is fetched using Darksky API. It also gives a chart of  weather history for that particular location</span>
											<p className="icon">
												<span><a href="https://github.com/Srinivas"><i className="icon-share3" /></a></span>

											</p>
										</div>
									</div>
0								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}