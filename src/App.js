import React from "react";

import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
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
			<Footer />
		</Router>
	);
}

export default App;
