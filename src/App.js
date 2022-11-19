import React from "react";
import {
	About,
	Contact,
	Footer,
	Home,
	Nav,
	WhatIDo,
	Portfolio,
	Resume,
	ScrollToTop,
} from "./components";
import "./App.css";
import "animate.css";
import {ToastContainer} from "react-toastify";

function App() {
	return (
		<div>
			<ToastContainer />
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
