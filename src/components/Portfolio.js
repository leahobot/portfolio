import React from "react";
import { useStateContext } from "../context/ContextProvider";
import jaysBank from "../images/jaysBank.webp";
import cleanax from "../images/cleanax.png";
import jaysStore from "../images/jaysStore.webp";
import fitMe from "../images/fitMe.png";
import klasha from "../images/klasha.png";
import torus from "../images/torus.png";

function Portfolio() {
	const { activeTheme, largeHeader, smallHeader } = useStateContext();
	const activeSection =  activeTheme === 'dark' ? 'bg-[rgba(9,14,22,0.95)] text-[#bdbdbd]' : 'bg-[#ffffff] text-[#3F4144]'

	const imageBoxStyle =
		"relative mb-[5rem] sm:mb-[7rem] group rounded-[7px] overflow-hidden shadow-[0_0_10px_0_rgba(0,0,0,0.2)] h-[15rem] sm:h-[20rem] lg:h-[30rem] transition-all duration-[1s]";
	const image =
		"group-hover:scale-[1.05] group-hover:blur-[2px] object-cover h-full w-full transition-scale duration-[0.5s] object-cover";
	const wrapperStyle =
		"hidden absolute text-[1.4rem] sm:text-[1.8rem] text-white px-[2rem] sm:px-[3rem] font-semibold group-hover:flex items-center justify-center text-center inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-[0.7] transition-opacity duration-[0.7s]";

	return (
		<section
			className={`${activeSection} py-[9rem]`}
			name="portfolio">
			<div className="max-w-[80%] lg:max-w-[60%] mx-auto my-0">
				<header className="relative flex flex-col items-center w-full">
					<h1 className={`${largeHeader} text-[6rem] sm:text-[11rem] font-bold`}>
						PORTFOLIO
					</h1>
					<p className={`${smallHeader} absolute top-[40%] text-[1.8rem] sm:text-[2.8rem] font-bold`}>
						A Few of My work
					</p>
					<p className="absolute top-[67%] lg:top-[65%] 2xl:top-[68%] w-[25%] sm:w-[15%] lg:w-[10%] h-[2px] sm:h-[3px] lg:h-[2px] xl:h-[3px] 2xl:h-[4px] bg-[var(--accent-color)] opa" />
				</header>
				<main className="flex flex-wrap justify-between w-full mt-[5rem] sm:mt-[8rem]">
					<a
						href="https://www.klasha.com/"
						alt="my-work"
						target="_blank"
						rel="noreferrer"
						className={`${imageBoxStyle} w-[46%]`}>
						<img
							src={klasha}
							alt="my-work"
							className={image}
						/>
						<div className={wrapperStyle}>
							<p>Klasha - Website</p>
						</div>
					</a>
					<a
						href="https://jays-store.vercel.app/"
						alt="my-work"
						target="_blank"
						rel="noreferrer"
						className={`${imageBoxStyle} w-[46%]`}>
						<img
							src={jaysStore}
							alt="my-work"
							className={image}
						/>
						<div className={wrapperStyle}>
							<p>An E-commerce Store</p>
						</div>
					</a>
					<a
						href="https://app.torusmara.com/login"
						alt="my-work"
						target="_blank"
						rel="noreferrer"
						className={`${imageBoxStyle} w-[46%]`}>
						<img
							src={torus}
							alt="my-work"
							className={image}
						/>
						<div className={wrapperStyle}>
							<p>A Cross Border Payment Web Application</p>
						</div>
					</a>
					<a
						href="https://leahobot.github.io/jaysBank/"
						alt="my-work"
						target="_blank"
						rel="noreferrer"
						className={`${imageBoxStyle} w-[46%]`}>
						<img
							src={jaysBank}
							alt="my-work"
							className="object-cover transition-all duration-[0.5s]"
						/>
						<div className={wrapperStyle}>
							<p>A Modern Bank Website</p>
						</div>
					</a>
					<a
						href="https://fitme.pages.dev/"
						alt="my-work"
						target="_blank"
						rel="noreferrer"
						className={`${imageBoxStyle} w-[100%]`}>
						<img
							src={cleanax}
							alt="my-work"
							className={image}
						/>
						<div className={wrapperStyle}>
							<p>Cleanax - A Laundromat Web Application</p>
						</div>
					</a>
					<a
						href="https://fitme.pages.dev/"
						alt="my-work"
						target="_blank"
						rel="noreferrer"
						className={`${imageBoxStyle} w-[100%]`}>
						<img
							src={fitMe}
							alt="my-work"
							className={image}
						/>
						<div className={wrapperStyle}>
							<p>FitMe - Website</p>
						</div>
					</a>
				</main>
			</div>
		</section>
	);
}

export default Portfolio;
