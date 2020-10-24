import React from "react";

const PortfolioContent = props => {
	return (
		<div class="projects">
			<div class="title-img">
				<h4>{props.name}</h4>
				<div class="proj-img">
					<a href="https://sheltered-island-46532.herokuapp.com/">
						<img src="img/websites/wulver.jpg" alt="wulver weight app" />
					</a>
				</div>
			</div>
			<div class="proj-desc">
				<ul>
					<li>Track your weight with Graph implementation</li>
					<li>Full Stack App with full CRUD features</li>
					<li>Built with React, Express, Mongodb, Node</li>

					<li>JavaScript ES6</li>
					<li>HTML / CSS</li>
				</ul>
				<h3>Summary</h3>
				<p>{props.desc}</p>
				<a href="https://sheltered-island-46532.herokuapp.com/">DEMO</a>
				<a href="https://github.com/isabelchua/wulver" class="code">
					CODE
				</a>
			</div>
		</div>
	);
};

export default PortfolioContent;
