import React, { useState, useEffect } from "react";

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
	}, []);

	const resumeBoxStyle =
		"border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-l-[0.2rem] sm:border-l-[0.3rem] lg:border-l-[0.2rem] xl:border-l-[0.3rem] border-solid border-[var(--light-gray-color)] border-l-[var(--accent-color)] bg-[var(--section-color)] px-[2rem] xl:px-[2.5rem] 2xl:px-[3.5rem] py-[1rem] sm:py-[1.5rem] xl:py-[2rem] 2xl:py-[3rem] text-justify text-[1.2rem] sm:text-[1.5rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[2rem] leading-[2rem] sm:leading-[2.5rem] lg:leading-[2.3rem] xl:leading-[2.6rem] 2xl:leading-[3.2rem]";
	const spanStyle =
		"inline-block bg-[var(--accent-color)] font-medium text-[1.3rem] sm:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2.2rem] px-[1rem] xl:px-[1.5rem] 2xl:px-[2rem] py-[0.3rem] xl:py-[0.5rem] 2xl:py-[1rem] text-white rounded-[2px] sm:rounded-[4px] xl:rounded-[6px] 2xl:rounded-[8px] mt-[1rem] lg:mt-[0.5rem]";

	return (
		<section
			className="py-0 bg-white"
			name="resume">
			<div className="max-w-[80%] mx-auto my-0">
				<header className="relative flex flex-col items-center w-full">
					<h1 className="text-[5.5rem] sm:text-[8rem] lg:text-[10rem] xl:text-[11rem] 2xl:text-[15rem] text-gray-200 font-bold">
						SUMMARY
					</h1>
					<p className="absolute top-[35%] lg:top-[40%] text-[1.8rem] sm:text-[2.7rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[4rem] font-bold">
						Resume
					</p>
					<p className="absolute top-[67%] lg:top-[65%] 2xl:top-[68%] w-[13%] sm:w-[10%] lg:w-[7%] h-[2px] sm:h-[3px] lg:h-[2px] xl:h-[3px] 2xl:h-[4px] bg-[var(--accent-color)]" />
				</header>

				<main className="mt-[3rem] sm:mt-[5rem] xl:mt-[6rem] 2xl:mt-[9rem]">
					<h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.2rem] xl:text-[3rem] font-bold my-[1rem] xl:my-[1.5rem]">
						Experience
					</h1>
					<div className="flex flex-col lg:flex-row gap-[3rem] sm:gap-[4rem] lg:gap-[7rem] xl:gap-[9rem] 2xl:gap-[12rem] lg:justify-between">
						<div
							className={`${resumeBoxStyle} ${
								animatePage
									? "animate__animated animate__bounce animate__slideInLeft"
									: ""
							}`}>
							<span className={spanStyle}>
								Jan 2022 - Till date
							</span>
							<h1 className="font-semibold my-[0.3rem] sm:my-[0.5rem] lg:my-[0.7rem] xl:my-[0.8rem] 2xl:my-[1.2rem] text-[1.4rem] sm:text-[1.7rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-[2.3rem]">
								Frontend Web Developer
							</h1>
							<p className="text-[1.3rem] sm:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2.2rem] mb-[1rem] sm:mb-[1.3rem] 2xl:mb-[1.5rem]">
								Getmobile Technologies, Nigeria
							</p>
							<ul>
								{experienceOne.map((exp, index) => (
									<li
										className="mb-[0.8rem] sm:mb-[1.2rem] lg:mb-[1rem] xl:mb-[1.4rem] 2xl:mb-[2rem]"
										key={index}>
										{exp.title}
									</li>
								))}
							</ul>
						</div>

						<div
							className={`${resumeBoxStyle} ${
								animatePage
									? "animate__animated animate__bounce animate__slideInRight"
									: ""
							}`}>
							<span className={spanStyle}>
								Apr 2019 - Dec 2021
							</span>
							<h1 className="font-semibold my-[0.3rem] sm:my-[0.5rem] lg:my-[0.7rem] xl:my-[0.8rem] 2xl:my-[1.2rem] text-[1.4rem] sm:text-[1.7rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-[2.3rem]">
								Frontend Engineer
							</h1>
							<p className="text-[1.3rem] sm:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2.2rem] mb-[1rem] sm:mb-[1.3rem] 2xl:mb-[1.5rem]">
								LogBookie
							</p>
							<ul>
								{experienceTwo.map((exp, index) => (
									<li
										className="mb-[0.8rem] sm:mb-[1.2rem] lg:mb-[1rem] xl:mb-[1.4rem] 2xl:mb-[2rem]"
										key={index}>
										{exp.title}
									</li>
								))}
							</ul>
						</div>
					</div>
					<h1 className="text-[1.8rem] sm:text-[2rem] xl:text-[2.2rem] 2xl:text-[2.7rem] font-bold mt-[3rem] sm:mt-[4rem] xl:mt-[5rem] 2xl:mt-[8rem] mb-[1rem] 2xl:mb-[1.5rem]">
						Education
					</h1>
					<div
						className={`${resumeBoxStyle} ${
							animatePage2
								? "animate__animated animate__bounce animate__slideInUp"
								: ""
						}`}>
						<span className={spanStyle}>Jan 2008 - Nov 2012</span>
						<h1 className="font-semibold my-[0.3rem] sm:my-[0.5rem] lg:my-[0.8rem] xl:my-[1rem] 2xl:my-[1.2rem] text-[1.3rem] sm:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2.2rem]">
							Bachelor of Science in Accountancy
						</h1>
						<p className="text-left text-[1.3rem] sm:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem] mb-[1rem]">
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
