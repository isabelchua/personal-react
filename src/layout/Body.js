import React from "react";

function Body() {
	return (
		<>
			<div className="flexbox-container">
				<div className="wrapper">
					<div className="section">
						<h3>Web Development</h3>
						<p>
							Creating fast websites with loading speeds that will equal
							to better conversion ratios!
						</p>
					</div>
					<div className="image-frame">
						<img
							src="img/webdev.png"
							className="img"
							alt="web development"
							srcet="img/webdev.png 1x,
		img/web_dev_mob.png 3x"
						/>
					</div>
				</div>
			</div>
			<div className="flexbox-container">
				<div className="wrapper">
					<div className="image-frame">
						<img
							src="img/design.png"
							className="img"
							alt="web design"
							srcset="img/design.png 1x,
		img/design_mob.png 3x"
						/>
					</div>
					<div className="section text-left">
						<h3>Responsive Web Design</h3>
						<p>
							Responsive web design is about creating web pages that look
							good on all devices! Whether you're using a phone, tablet
							or a computer and will look good on all browsers.
						</p>
					</div>
				</div>
			</div>
			<div className="flexbox-container">
				<div className="wrapper">
					<div className="section">
						<h3>Graphic Design</h3>
						<p>
							Visual communication through the use of typography,
							photography, iconography, and illustration.{" "}
						</p>
					</div>
					<div className="image-frame">
						<img
							src="img/graphic.png"
							className="img"
							alt="graphic design"
							srcset="img/graphic.png 1x,
	    	img/graphic_mob.png 2x,
		img/graphic_mob.png 3x"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Body;
