import React from "react";

function Body() {
	return (
		<>
			<div class="flexbox-container">
				<div class="wrapper">
					<div class="section">
						<h3>Web Development</h3>
						<p>
							Creating fast websites with loading speeds that will equal
							to better conversion ratios!
						</p>
					</div>
					<div class="image-frame">
						<img
							src="img/webdev.png"
							className="img"
							alt="web development image"
							srcet="img/webdev.png 1x,
		img/web_dev_mob.png 3x"
						/>
					</div>
				</div>
			</div>
			<div class="flexbox-container">
				<div class="wrapper">
					<div class="image-frame">
						<img
							src="img/design.png"
							class="img"
							alt="web design image"
							srcset="img/design.png 1x,
		img/design_mob.png 3x"
						/>
					</div>
					<div class="section text-left">
						<h3>Responsive Web Design</h3>
						<p>
							Responsive web design is about creating web pages that look
							good on all devices! Whether you're using a phone, tablet
							or a computer and will look good on all browsers.
						</p>
					</div>
				</div>
			</div>
			<div class="flexbox-container">
				<div class="wrapper">
					<div class="section">
						<h3>Graphic Design</h3>
						<p>
							Visual communication through the use of typography,
							photography, iconography, and illustration.{" "}
						</p>
					</div>
					<div class="image-frame">
						<img
							src="img/graphic.png"
							class="img"
							alt="graphic design image"
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
