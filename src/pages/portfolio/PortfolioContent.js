import React from "react";

const PortfolioContent = ({
	content: { name, demo, desc, code, list, src }
}) => {
	return (
		<div className="projects">
			<div className="title-img">
				<h4>{name}</h4>
				<div className="proj-img">
					<a href={demo}>
						<img src={src} alt="wulver weight app" />
					</a>
				</div>
			</div>
			<div className="proj-desc">
				<ul>{list && list.map(li => <li>{li}</li>)}</ul>
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
