import React, { Component } from "react";
import blogData from "./data/blog-data.json";

export default class Blog extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-blog" data-section="blog">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">Read</span>
								<h2 className="colorlib-heading">Recent Blog</h2>
							</div>
						</div>
						<div className="row">
							<div
								className="col-md-4 col-sm-6 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<div className="blog-entry">
									<a
										href="https://srinivas.medium.com/aws-azure-serverless-desi-c29ca676102c"
										className="blog-img"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="images/blog-1.jpg"
											className="img-responsive"
											alt="HTML5 Bootstrap Template by colorlib.com"
										/>
									</a>
									<div className="desc">
										<span>
											<small>{blogData.blogs[0].date}</small> |{" "}
											<small>{blogData.blogs[0].title}</small>
										</span>
										<h3>
											<a
												href="https://srinivas.medium.com/aws-azure-serverless-desi-c29ca676102c"
												target="_blank"
												rel="noopener noreferrer"
											>
												{blogData.blogs[0].desc}
                      </a>
										</h3>
									</div>
								</div>
							</div>
							<div
								className="col-md-4 col-sm-6 animate-box"
								data-animate-effect="fadeInRight"
							>
								<div className="blog-entry">
									<a
										href="https://srinivas.medium.com/aws-azure-serverless-desi-c29ca676102c"
										target="_blank"
										rel="noopener noreferrer"
										className="blog-img"
									>
										<img
											src="images/blog-2.jpg"
											className="img-responsive"
											alt="HTML5 Bootstrap Template by colorlib.com"
										/>
									</a>
									<div className="desc">
										<span>
											<small>{blogData.blogs[1].date}</small> |{" "}
											<small>{blogData.blogs[1].title}</small>
											{/*  | <small> <i className="icon-bubble3" /> 4</small> */}
										</span>
										<h3>
											<a
												href="https://srinivas.medium.com/aws-azure-serverless-desi-c29ca676102c"
												target="_blank"
												rel="noopener noreferrer"
											>
												{blogData.blogs[1].desc}
                      </a>
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
