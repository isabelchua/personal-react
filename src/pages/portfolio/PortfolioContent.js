import React from "react";

const PortfolioContent = ({ content: { name, demo, desc, code } }) => {
	console.log(name);
	return (
		<div class="projects">
			<div class="title-img">
				<h4>{name}</h4>
				<div class="proj-img">
					<a href={demo}>
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
				<p>{desc}</p>
				<a href={demo}>DEMO</a>
				<a href={code} class="code">
					CODE
				</a>
			</div>
		</div>
	);
};

export default PortfolioContent;
