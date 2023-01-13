import React, { useState, useEffect } from "react";
import image from "../images/image.jpg";

function About() {
	const [animatePage, setAnimatePage] = useState(false);

	useEffect(() => {
		const animation = () => {
			if (window.scrollY >= 900) {
				setAnimatePage(true);
			} else {
				setAnimatePage(false);
			}
		};
		window.addEventListener("scroll", animation);
	}, []);

	const skills = [
		{ id: 1, skillName: "React JS", percentage: "90%", value: "90" },
		{ id: 2, skillName: "Python", percentage: "85%", value: "85" },
		{
			id: 3,
			skillName: "JavaScript (ES6)",
			percentage: "90%",
			value: "90",
		},
		{ id: 4, skillName: "Django", percentage: "90%", value: "90" },
		{ id: 5, skillName: "HTML5 & CSS3", percentage: "85%", value: "85" },
		{
			id: 6,
			skillName: "Django REST Framework",
			percentage: "85%",
			value: "85",
		},
		{
			id: 7,
			skillName: "Web Design with Figma",
			percentage: "70%",
			value: "70",
		},
		{
			id: 8,
			skillName: "Version Control (Git)",
			percentage: "80%",
			value: "80",
		},
		{
			id: 9,
			skillName: "CSS Frameworks (Bootstrap, Bulma, Tailwind)",
			percentage: "80%",
			value: "80",
		},
		{ id: 10, skillName: "AWS Cloud", percentage: "50%", value: "50" },
	];

	return (
		<section
			className="py-[6rem] sm:py-[8rem] xl:py-[9rem] 2xl:py-[11rem] bg-white"
			name="about">
			<div className="max-w-[80%] mx-auto my-0">
				<header className="relative flex flex-col items-center w-full">
					<h1 className="text-[5.5rem] sm:text-[8rem] lg:text-[10rem] xl:text-[11rem] 2xl:text-[15rem] text-gray-200 font-bold">
						ABOUT ME
					</h1>
					<p className="absolute top-[35%] lg:top-[40%] text-[1.8rem] sm:text-[2.7rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[4rem] font-bold">
						Know Me More
					</p>
					<p className="absolute top-[67%] lg:top-[65%] 2xl:top-[68%] w-[15%] sm:w-[13%] lg:w-[8%] h-[2px] sm:h-[3px] lg:h-[2px] xl:h-[3px] 2xl:h-[4px] bg-[var(--accent-color)]" />
				</header>
				<main className="flex flex-col gap-[3rem] sm:justify-between sm:gap-0 items-center sm:flex-row mt-[1rem] sm:mt-[3rem] 2xl:mt-[6rem]">
					<article className="w-full sm:w-[63%] lg:w-[70%]">
						<p className="text-[1.3rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.7rem] 2xl:text-[3.4rem] font-semibold mb-[1rem] lg:mb-[1.5rem] xl:mb-[1.8rem]">
							Hi, I'm{" "}
							<span className="text-[var(--accent-color)]">
								Leah,
							</span>{" "}
							a Full Stack Web Developer
						</p>
						<p className="text-justify sm:text-left text-[1.2rem] sm:text-[1.6rem] xl:text-[2rem] 2xl:text-[2.7rem]">
							based in Lagos, Nigeria. I am very passionate about
							developing innovative software solutions that
							expedite the efficiency and effectiveness of the
							success of an organization. I'm well-versed in web
							technology and writing software codes to create
							systems that are reliable and user-friendly.
							<br />
							<br />
							I'm a confident communicator, strategic thinker, and
							highly innovative in developing softwares that are
							customized to meet your company's organizational
							needs and further your success.
						</p>
					</article>
					<div className="photo w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] lg:w-[23rem] lg:h-[23rem] xl:h-[25rem] xl:w-[25rem] 2xl:w-[33rem] 2xl:h-[33rem]">
						<img
							src={image}
							alt="A Photograph"
							className="object-cover h-full w-full rounded-[5px] sm:rounded-[7x] xl:rounded-[8px]"
						/>
					</div>
				</main>
				<aside className=" w-full mt-[5rem] sm:mt-[7rem] xl:mt-[9rem] 2xl:mt-[11rem]">
					<header className="my-[1rem] sm:my-[1.5rem] lg:my-[2rem] 2xl:my-[3rem] text-[2rem] sm:text-[2.6rem] lg:text-[2.2rem] xl:text-[2.6rem] 2xl:text-[3.4rem] font-bold">
						My Skills
					</header>
					<div className="w-full flex flex-col sm:flex-row sm:justify-between sm:flex-wrap sm:items-end gap-[1rem] sm:gap-0">
						{skills.map((skill, id) => (
							<div
								key={id}
								className={`sm:w-[47%] sm:mb-[1.8rem] lg:mb-[2.5rem] xl:mb-[3rem] 2xl:mb-[4.2rem] ${
									animatePage
										? " animate__animated animate__slideInLeft  animate__slow"
										: ""
								}`}>
								<div className="text-[1.2rem] sm:text-[1.6rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.6rem] mb-[0.3rem] sm:mb-[0.5rem] 2xl:mb-[1rem] flex items-center justify-between">
									<p>{skill.skillName}</p>
									<span>{skill.percentage}</span>
								</div>

								<progress
									value={skill.value}
									max="100"
									className="progress"
								/>
							</div>
						))}
					</div>
				</aside>
			</div>
		</section>
	);
}

export default About;
