import React from "react";

import "./App.css";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Header />
			<Main />
			<Body />
			<Footer />
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/portfolio">
					<Portfolio />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
