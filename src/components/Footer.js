import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="mt-[6rem] mb-[2rem] sm:mt-[8rem] xl:mt-[9rem] 2xl:mt-[11rem] text-[1.2rem] sm:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem] flex flex-col justify-center w-full text-center bg-white text-gray-400">
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
