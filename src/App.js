import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import WhatIDo from "./components/WhatIDo";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "animate.css";

function App() {
	return (
		<div>
			<Nav />
			<Home />
			<About />
			<WhatIDo />
			<Portfolio />
			<Resume />
			<Contact />
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
