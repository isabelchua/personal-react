import React from "react";

const PortfolioContent = ({ content: { name, demo, desc, code, list } }) => {
	return (
		<div className="projects">
			<div className="title-img">
				<h4>{name}</h4>
				<div className="proj-img">
					<a href={demo}>
						<img
							src={"img/websites/wulver.jpg"}
							alt="wulver weight app"
						/>
					</a>
				</div>
			</div>
			<div className="proj-desc">
				<ul>
					{list}
					<li>Track your weight with Graph implementation</li>
					<li>Full Stack App with full CRUD features</li>
					<li>Built with React, Express, Mongodb, Node</li>

					<li>JavaScript ES6</li>
					<li>HTML / CSS</li>
				</ul>
				<h3>Summary</h3>
				<p>{desc}</p>
				<a href={demo}>DEMO</a>
				<a href={code} className="code">
					CODE
				</a>
			</div>
		</div>
	);
};

export default PortfolioContent;
