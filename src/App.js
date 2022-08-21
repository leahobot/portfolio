import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
// import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import WhatIDo from "./components/WhatIDo";
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
		</div>
	);
}

export default App;

// <Routes>
// 	<Route index element={<Home />} />
// 	<Route path='/home' element={<Home />} />
// 	<Route path='/about' element={<About />} />
// 	<Route path='/contact' element={<Contact />} />
// 	<Route path='/portfolio' element={<Portfolio />} />
// 	<Route path='/resume' element={<Resume />} />
// 	<Route path='/whatIDo' element={<WhatIDo />} />
// 	<Route path='*' element={<NotFound />} />
// </Routes>;
