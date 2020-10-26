import React from "react";

function Main() {
	return (
		<section id="bio" className="flexbox-container">
			<div id="header"></div>
			<div className="wrapper-head">
				<div className="image-frame-front">
					<img
						src="img/front_web.png"
						className="img-front"
						alt="website"
						srcset="img/front_web.png 1x,
						img/front_web_mob.png 3x"
					/>
				</div>
				<div className="info">
					<h1>Isabel</h1>
					<h4>Designer & Web Developer based in California</h4>
					<p>
						I have a passion for creating things. I am a curious person by
						nature, love learning, and being productive!
						<br />
						<br />
						I’m a graduate in Computer Science with 6 years of experience
						in Web development. I have won various competitions in coding
						and in art.{" "}
					</p>
				</div>
			</div>
		</section>
	);
}

export default Main;
