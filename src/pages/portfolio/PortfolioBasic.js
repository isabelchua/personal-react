import React from "react";

const PortfolioBasic = ({ content: { name, demo, desc, code, list, src } }) => {
	return (
		<div className="projects-sub">
			<h4>
				<a href={demo}>{name}</a>
			</h4>
			<div className="proj-desc-sub">
				<ul>{list && list.map(li => <li>{li}</li>)}</ul>
				<a href={demo}>DEMO</a>
				<a href={code} className="code">
					CODE
				</a>
			</div>
		</div>
	);
};

export default PortfolioBasic;
