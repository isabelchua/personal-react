import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div class="nav-container">
			<div id="nav-bar">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="mailto:isabelchua86@gmail.com">Contact</Link>
				</li>
			</div>
		</div>
	);
}

export default Header;
