import React from "react";
import PortfolioContent from "./portfolio/PortfolioContent";
import portfolioContent from "../data/portfolioContent";
import portfolioBasic from "../data/portfolioBasic";
import PortfolioBasic from "./portfolio/PortfolioBasic";

function Portfolio(content) {
	return (
		<>
			<section id="bio" className="flexbox-container">
				<div className="wrapper-header">
					<h3 className="left-align">My Projects</h3>
				</div>
			</section>

			<div className="flexbox-container">
				<div className="wrapper portfolio">
					<div className="proj-wrap">
						<div className="row">
							{portfolioContent.map(content => (
								<PortfolioContent key={content.id} content={content} />
							))}

							<div className="projects">
								<div className="proj-img">
									<div className="title-img-design">
										<a href="https://isabelchua.github.io/thedogwalker/">
											<img
												src="img/websites/dog-walk.jpg"
												alt="dog walker website"
											/>
										</a>
									</div>
								</div>
								<div className="proj-desc no-top">
									<h4>The Dog Walker</h4>
									<ul>
										<li>Basic HTML with CSS</li>

										<li>Responsive</li>
									</ul>
									<h3>Summary</h3>
									<p>
										I made this site for HTML/CSS practice when
										starting out. Practiced on doing it for being
										responsive. I made the logos, icons, everthing is
										made from scratch.
									</p>
									<a href="https://isabelchua.github.io/thedogwalker/">
										DEMO
									</a>
									<a
										href="https://github.com/isabelchua/isabelchua.github.io/tree/master/thedogwalker"
										className="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div className="projects">
								<div className="proj-img">
									<div className="title-img-design">
										<img
											src="img/websites/store-app-front.jpg"
											alt="shop app"
										/>

										<img
											src="img/websites/store-app.jpg"
											alt="shop app"
										/>
									</div>
								</div>
								<div className="proj-desc-design">
									<h4>Fruit Shop Mobile Design</h4>

									<p>A sample Grocery shop I design for mobile.</p>
								</div>
							</div>
						</div>

						{portfolioBasic.map(content => (
							<PortfolioBasic key={content.id} content={content} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
