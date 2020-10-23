import React from "react";

function Portfolio() {
	return (
		<>
			<section id="bio" class="flexbox-container">
				<div class="wrapper-header">
					<h3 class="left-align">My Projects</h3>
				</div>
			</section>

			<div class="flexbox-container">
				<div class="wrapper portfolio">
					<div class="proj-wrap">
						<div class="row">
							<div class="projects">
								<div class="title-img">
									<h4>Wulver Weight Tracker</h4>
									<div class="proj-img">
										<a href="https://sheltered-island-46532.herokuapp.com/">
											<img
												src="img/websites/wulver.jpg"
												alt="wulver weight app"
											/>
										</a>
									</div>
								</div>
								<div class="proj-desc">
									<ul>
										<li>
											Track your weight with Graph implementation
										</li>
										<li>Full Stack App with full CRUD features</li>
										<li>Built with React, Express, Mongodb, Node</li>

										<li>JavaScript ES6</li>
										<li>HTML / CSS</li>
									</ul>
									<h3>Summary</h3>
									<p>
										A weight tracker app, that can show you your
										progress on weightloss. I wanted to build a weight
										tracker for myself on my weightloss journey.
									</p>
									<a href="https://sheltered-island-46532.herokuapp.com/">
										DEMO
									</a>
									<a
										href="https://github.com/isabelchua/wulver"
										class="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div class="projects">
								<div class="title-img">
									<h4>Wendigo Chat App</h4>
									<div class="proj-img">
										<a href="https://chat-service-ce6e8.web.app/">
											<img
												src="img/websites/wendigo.jpg"
												alt="chat app"
											/>
										</a>
									</div>
								</div>
								<div class="proj-desc">
									<ul>
										<li>Google & Facebook Authentication</li>
										<li>Realtime chat with logged in Users</li>

										<li>Built with React js</li>
										<li>JavaScript ES6</li>
										<li>HTML / CSS</li>
									</ul>
									<h3>Summary</h3>
									<p>
										Authenticated users can create channels and chat
										with other logged in users. Data is stored in the
										Firebase database.
									</p>
									<a href="https://chat-service-ce6e8.web.app/">
										DEMO
									</a>
									<a
										href="https://github.com/isabelchua/Wendigo"
										class="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div class="projects">
								<div class="proj-img">
									<div class="title-img">
										<h4>Twitter Clone</h4>
										<a href="https://twitter-clone-c94ff.web.app/">
											<img
												src="img/websites/twitter.jpg"
												alt="twitter clone"
											/>
										</a>
									</div>
								</div>
								<div class="proj-desc">
									<ul>
										<li>Built with React js</li>
										<li>JavaScript ES6</li>
										<li>HTML / CSS</li>
										<li>Firebase Cloud Firestore</li>
										<li>Responsive</li>
									</ul>
									<h3>Summary</h3>
									<p>
										A single page application using React js with
										realtime posting. This allows users to create
										posts and they are stored into the database.
									</p>
									<a href="https://twitter-clone-c94ff.web.app/">
										DEMO
									</a>
									<a
										href="https://github.com/isabelchua/twitter-clone"
										class="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div class="projects">
								<div class="proj-img">
									<div class="title-img">
										<h4>Paw Finder</h4>
										<a href="https://paw-finder.vercel.app/">
											<img
												src="img/websites/dog.jpg"
												alt="dog website"
											/>
										</a>
									</div>
								</div>
								<div class="proj-desc">
									<ul>
										<li>Built with React js</li>
										<li>JavaScript ES6</li>
										<li>HTML / SASS</li>
										<li>Fetching data from thedogapi.com</li>
										<li>Responsive</li>
									</ul>
									<h3>Summary</h3>
									<p>
										A single page application using React js. Choose a
										breed and data is fetched from thedogapi.com API
										and images from dog.ceo.
									</p>
									<a href="https://paw-finder.vercel.app/">DEMO</a>
									<a
										href="https://github.com/isabelchua/paw-finder-v2"
										class="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div class="projects">
								<div class="proj-img">
									<div class="title-img-design">
										<a href="https://isabelchua.github.io/thedogwalker/">
											<img
												src="img/websites/dog-walk.jpg"
												alt="dog walker website"
											/>
										</a>
									</div>
								</div>
								<div class="proj-desc side">
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
										class="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div class="projects">
								<div class="proj-img">
									<h3>Fruit Shop Mobile Design</h3>
									<div class="title-img-design">
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
							</div>

							<div class="projects-sub">
								<h4>
									<a href="https://isabelchua.github.io/hangman/">
										Hangman
									</a>
								</h4>
								<div class="proj-desc-sub">
									<ul>
										<li>
											This was made with HTML/CSS and plain
											Javascript.
										</li>

										<li>
											Made from scratch for practicing my Javascript
											skills and implementation.
										</li>
									</ul>
									<a href="https://isabelchua.github.io/hangman/">
										DEMO
									</a>
									<a
										href="https://github.com/isabelchua/isabelchua.github.io/tree/master/hangman"
										class="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div class="projects-sub">
								<h4>
									<a href="https://weatherapp2020.netlify.app/">
										Weather App
									</a>
								</h4>
								<div class="proj-desc-sub">
									<ul>
										<li>Weather App using React</li>

										<li>fetching data API</li>
									</ul>
									<a href="">DEMO</a>
									<a
										href="https://github.com/isabelchua/weather-app"
										class="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div class="projects-sub">
								<h4>
									<a href="https://money-log.netlify.app/">
										Money Tracker using React
									</a>
								</h4>
								<div class="proj-desc-sub">
									<ul>
										<li>Money Tracker app using React</li>

										<li>Using Context</li>
									</ul>
									<a href="https://money-log.netlify.app/">DEMO</a>
									<a
										href="https://github.com/isabelchua/money-tracker"
										class="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div class="projects-sub">
								<h4>
									<a href="https://isabelchua.github.io/rock-paper-scissors/">
										Rock, Paper, Scissors
									</a>
								</h4>
								<div class="proj-desc-sub">
									<ul>
										<li>Rock, Paper, Scissors Game</li>
										<li>
											This was made with HTML/CSS and plain
											Javascript.{" "}
										</li>

										<li>
											Made from scratch for practicing my Javascript
											skills and implementation.
										</li>
									</ul>
									<a href="https://isabelchua.github.io/rock-paper-scissors/">
										DEMO
									</a>
									<a
										href="https://github.com/isabelchua/isabelchua.github.io/tree/master/rock-paper-scissors"
										class="code"
									>
										CODE
									</a>
								</div>
							</div>

							<div class="projects-sub">
								<h4>
									<a href="https://isabelchua.github.io/guess-the-number/">
										Guess the number
									</a>
								</h4>
								<div class="proj-desc-sub">
									<ul>
										<li>Guess the number</li>
										<li>
											This was made with HTML/CSS and plain
											Javascript.{" "}
										</li>

										<li>
											Made from scratch for practicing my Javascript
											skills and implementation.
										</li>
									</ul>
									<a href="https://isabelchua.github.io/guess-the-number/">
										DEMO
									</a>
									<a
										href="https://github.com/isabelchua/isabelchua.github.io/tree/master/guess-the-number"
										class="code"
									>
										CODE
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
