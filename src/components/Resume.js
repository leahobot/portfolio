import React, { useState, useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const experienceOne = [
	{
		title: "Daily maintenance of code, debugging issues and solving clients' problems to achieve maximum speed and scalability.",
	},
	{
		title: "Adapted front-end technologies to follow back end development using React TypeScript which contributed to the increase in the user experience.",
	},
	{
		title: "Established a continuous integration environment for automated build and deployment process",
	},
	{
		title: "Collaborated and built 70% reusable codes for future use.",
	},
];

const experienceTwo = [
	{
		title: "Translated over 20+ UI/UX design prototypes of responsive wedsites and web applications to actual codes using JavaScript, ReactJS, HTML and CSS.",
	},
	{
		title: "Increased daily visitors by 60% after developing clients websites using React TypeScript.",
	},
	{
		title: "Collaborated and built 70% reusable codes for future use.",
	},
	{
		title: "Developed highly responsive and scalable websites across different platforms",
	},
];

function Resume() {
	const [animatePage, setAnimatePage] = useState(false);
	const [animatePage2, setAnimatePage2] = useState(false);
	const { activeTheme, largeHeader, smallHeader } = useStateContext();
	const activeSection =  activeTheme === 'dark' ? 'bg-[rgba(9,14,22,0.95)] text-[#bdbdbd]' : 'bg-[#ffffff] text-[#3F4144]'
	const activeCard =  activeTheme === 'dark' ? 'bg-[rgba(9,14,22,0.95)] text-[#bdbdbd] border-gray-800' : 'bg-[var(--section-color)] text-[#3F4144] border-[var(--light-gray-color)]'

	useEffect(() => {
		const animation = () => {
			if (window.scrollY >= 3400) {
				setAnimatePage(true);
			} else {
				setAnimatePage(false);
			}
		};

		window.addEventListener("scroll", animation);

		const animation2 = () => {
			if (window.scrollY >= 3900) {
				setAnimatePage2(true);
			} else {
				setAnimatePage2(false);
			}
		};

		window.addEventListener("scroll", animation2);

		return () => {
			window.removeEventListener("scroll", animation)
			window.removeEventListener("scroll", animation2)
		}
	}, []);

	const resumeBoxStyle =
		"border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-l-[0.3rem] border-l-[var(--accent-color)] px-[2.5rem] py-[2rem] text-justify text-[1.5rem] leading-[2.6rem]";
	const spanStyle =
		"inline-block bg-[var(--accent-color)] font-medium text-[1.6rem] px-[1.5rem] py-[0.5rem] text-white rounded-[6px] mt-[0.5rem]";

	return (
		<section
			className={`${activeSection} pb-[14rem]`}
			name="resume">
			<div className="max-w-[80%] mx-auto my-0">
				<header className="relative flex flex-col items-center w-full">
					<h1 className={`${largeHeader} text-[11rem] font-bold`}>
						SUMMARY
					</h1>
					<p className={`${smallHeader} absolute top-[40%] text-[2.8rem] font-bold`}>
						Resume
					</p>
					<p className="absolute top-[67%] lg:top-[65%] 2xl:top-[68%] w-[13%] sm:w-[10%] lg:w-[7%] h-[2px] sm:h-[3px] lg:h-[2px] xl:h-[3px] 2xl:h-[4px] bg-[var(--accent-color)]" />
				</header>

				<main className="mt-[6rem]">
					<h1 className="text-[3rem] font-bold my-[1.5rem]">
						Experience
					</h1>
					<div className="flex flex-col lg:flex-row gap-[9rem] lg:justify-between">
						<div
							className={`${resumeBoxStyle} ${activeCard} ${
								animatePage
									? "animate__animated animate__bounce animate__slideInLeft"
									: ""
							}`}>
							<span className={spanStyle}>
								Jan 2022 - Till date
							</span>
							<h1 className="font-semibold my-[0.8rem] text-[1.7rem]">
								Frontend Web Developer
							</h1>
							<p className="text-[1.6rem] mb-[1.3rem]">
								Getmobile Technologies, Nigeria
							</p>
							<ul>
								{experienceOne.map((exp, index) => (
									<li
										className="mb-[1.4rem]"
										key={index}>
										{exp.title}
									</li>
								))}
							</ul>
						</div>

						<div
							className={`${resumeBoxStyle} ${activeCard} ${
								animatePage
									? "animate__animated animate__bounce animate__slideInRight"
									: ""
							}`}>
							<span className={spanStyle}>
								Apr 2019 - Dec 2021
							</span>
							<h1 className="font-semibold my-[0.8rem] text-[1.7rem]">
								Frontend Engineer
							</h1>
							<p className="text-[1.6rem] mb-[1.3rem]">
								LogBookie
							</p>
							<ul>
								{experienceTwo.map((exp, index) => (
									<li
										className="mb-[1.4rem]"
										key={index}>
										{exp.title}
									</li>
								))}
							</ul>
						</div>
					</div>
					<h1 className="text-[2.2rem] font-bold mt-[5rem]">
						Education
					</h1>
					<div
						className={`${resumeBoxStyle} ${activeCard} ${
							animatePage2
								? "animate__animated animate__bounce animate__slideInUp"
								: ""
						}`}>
						<span className={spanStyle}>Jan 2008 - Nov 2012</span>
						<h1 className="font-semibold my-[1rem] text-[1.6rem]">
							Bachelor of Science in Accountancy
						</h1>
						<p className="text-left text-[1.6rem]">
							Rivers State University of Science and Technology,
							Nigeria
						</p>
					</div>
				</main>
			</div>
		</section>
	);
}

export default Resume;
