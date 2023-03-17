import React from "react";
import jaysBank from "../images/jaysBank.webp";
import cleanax from "../images/cleanax.png";
import jaysStore from "../images/jaysStore.webp";
import fitMe from "../images/fitMe.png";
import fruitHub from "../images/fruitHub.webp";

function Portfolio() {
	const imageBoxStyle =
		"relative mb-[3rem] sm:mb-[6rem] xl:mb-[7rem] 2xl:mb-[10rem] group rounded-[7px] overflow-hidden shadow-[0_0_10px_0_rgba(0,0,0,0.2)] h-[15rem] sm:h-[25rem] lg:h-[27rem] xl:h-[30rem] 2xl:h-[35rem] transition-all duration-[1s]";
	const image =
		"group-hover:scale-[1.05] group-hover:blur-[1px] lg:group-hover:blur-[2px] object-cover h-full w-full transition-scale duration-[0.5s]";
	const wrapperStyle =
		"hidden absolute text-[1rem] sm:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.3rem] text-white px-[1rem] sm:px-[2.5rem] xl:px-[3rem] 2xl:px-[6rem] font-semibold group-hover:flex items-center justify-center text-center top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-[0.7] transition-opacity duration-[0.7s]";

	return (
		<section
			className="py-[6rem] sm:py-[8rem] xl:py-[9rem] 2xl:py-[11rem] bg-white"
			name="portfolio">
			<div className="max-w-[70%] lg:max-w-[60%] mx-auto my-0">
				<header className="relative flex flex-col items-center w-full">
					<h1 className="text-[5.5rem] sm:text-[8rem] lg:text-[10rem] xl:text-[11rem] 2xl:text-[15rem] text-gray-200 font-bold">
						PORTFOLIO
					</h1>
					<p className="absolute top-[35%] lg:top-[40%] text-[1.8rem] sm:text-[2.7rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[4rem] font-bold">
						A Few of My work
					</p>
					<p className="absolute top-[67%] lg:top-[65%] 2xl:top-[68%] w-[25%] sm:w-[15%] lg:w-[10%] h-[2px] sm:h-[3px] lg:h-[2px] xl:h-[3px] 2xl:h-[4px] bg-[var(--accent-color)] opa" />
				</header>
				<main className="flex flex-wrap justify-between w-full mt-[5rem] sm:mt-[7rem] xl:mt-[8rem] 2xl:mt-[11rem]">
					<a
						href="https://cleanax.vercel.app/"
						alt="my-work"
						target="_blank"
						rel="noreferrer"
						className={`${imageBoxStyle} w-[46%]`}>
						<img
							src={cleanax}
							alt="my-work"
							className={image}
						/>
						<div className={wrapperStyle}>
							<p>A lundromat website for booking services</p>
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
							<p>An Online Store</p>
						</div>
					</a>
					<a
						href="https://leahobot.github.io/fruitHub/"
						alt="my-work"
						target="_blank"
						rel="noreferrer"
						className={`${imageBoxStyle} w-[46%]`}>
						<img
							src={fruitHub}
							alt="my-work"
							className={image}
						/>
						<div className={wrapperStyle}>
							<p>A Full-Stack Ecommerce Website</p>
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
							src={fitMe}
							alt="my-work"
							className={image}
						/>
						<div className={wrapperStyle}>
							<p>A Fitness Gym Website</p>
						</div>
					</a>
				</main>
			</div>
		</section>
	);
}

export default Portfolio;
