import React from "react";
import { useStateContext } from "../context/ContextProvider";

function Footer() {
	const year = new Date().getFullYear();
	const { activeTheme } = useStateContext();
	const activeSection =  activeTheme === 'dark' ? 'bg-[rgb(9,14,22)] text-[#bdbdbd]' : 'bg-white text-gray-400'
	
	return (
		<footer className={`${activeSection} pb-[2rem] pt-[9rem] text-[1.4rem] lg:text-[1.6rem] flex flex-col justify-center w-full text-center`}>
			<a
				className="hover:text-[var(--accent-hover-color)]"
				href="https://github.com/leahobot"
				alt="my github page"
				target="_blank"
				rel="noreferrer">
				Designed and Built by Leah Obot
			</a>
			<p>Copyright © {year}</p>
		</footer>
	);
}

export default Footer;
