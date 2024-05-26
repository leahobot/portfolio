import React, { useEffect } from "react";
import { useStateContext } from "./context/ContextProvider";
import {
	About,
	Contact,
	Footer,
	Home,
	Header,
	WhatIDo,
	Portfolio,
	ScrollToTop,
} from "./components";
import "./App.css";
import "animate.css";

function App() {
	const { setActiveTheme } = useStateContext();

	useEffect(() => {
		const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
		setActiveTheme(currentTheme);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Header />
			<Home />
			<About />
			<WhatIDo />
			<Portfolio />
			<Contact />
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
