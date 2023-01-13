import React, { useState, useEffect } from "react";
import { RiCodeSSlashLine, RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";

function WhatIDo() {
	const [animatePage, setAnimatePage] = useState(false);

	useEffect(() => {
		const animation = () => {
			if (window.scrollY >= 1400) {
				setAnimatePage(true);
			} else {
				setAnimatePage(false);
			}
		};

		window.addEventListener("scroll", animation);
	}, []);

	const iconStyle =
		"text-[2.5rem] sm:text-[3.5rem] xl:text-[4rem] 2xl:text-[5.5rem] text-[var(--accent-color)]";

	const services = [
		{
			id: 1,
			icon: <RiCodeSSlashLine className={iconStyle} />,
			title: "Front-End Web Development",
			body: "I develop user friendly, interactive and highly-responsive websites and web applications with the latest web technology to achieve optimized speed and performance.",
		},
		{
			id: 2,
			icon: <FaServer className={iconStyle} />,
			title: "Back-End Web Development",
			body: "I develop the server-side logic for the interchange of data between the server and the front-end, this includes building APIs, data storage, security, and other server-side functions. And also ensuring high performance and responsiveness to requests from the front-end.",
		},
		{
			id: 3,
			icon: <RiComputerLine className={iconStyle} />,
			title: "Web Design",
			body: "I create the visual design and layout of a website or web pages focusing on aesthetically pleasing desgns so that users have a positive user experience when they visit the website.",
		},

		{
			id: 4,
			icon: <TbSpeakerphone className={iconStyle} />,
			title: "SEO Marketing",
			body: "I identify strategies, techniques and tactics to optimize the the search results of a website ranking on major search engines and create a positive user experience, growing site traffic and brand awareness.",
		},
	];

	return (
		<section
			className="py-[6rem] sm:py-[8rem] xl:py-[9rem] 2xl:py-[11rem] bg-[var(--section-color)]"
			name="whatIDo">
			<div className="max-w-[80%] mx-auto my-0">
				<header className="relative flex flex-col items-center w-full">
					<h1 className="text-[5.5rem] sm:text-[8rem] lg:text-[10rem] xl:text-[11rem] 2xl:text-[15rem] text-gray-200 font-bold">
						SERVICES
					</h1>
					<p className="absolute top-[35%] lg:top-[40%] text-[1.8rem] sm:text-[2.7rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[4rem] font-bold">
						What I Do
					</p>
					<p className="absolute top-[67%] lg:top-[65%] 2xl:top-[68%] w-[15%] sm:w-[12%] lg:w-[7%] h-[2px] sm:h-[3px] lg:h-[2px] xl:h-[3px] 2xl:h-[4px] bg-[var(--accent-color)]" />
				</header>

				<main className="flex flex-col lg:flex-row gap-[3rem] sm:gap-[4.5rem] lg:gap-0 lg:flex-wrap lg:justify-between mt-[3rem] sm:mt-[5rem] xl:mt-[6rem] 2xl:mt-[8.5rem]">
					{services.map((service, id) => (
						<div
							key={id}
							className={`flex gap-[1.5rem] lg:w-[48%] lg:mb-[8rem] 2xl:mb-[10rem] sm:gap-[3rem] lg:gap-[2rem] xl:gap-[2.5rem] 2xl:gap-[3.5rem] items-start ${
								animatePage
									? " animate__animated animate__fadeInUp"
									: ""
							}`}>
							<span className="inline-block bg-white p-[1rem] sm:px-[2.5rem] sm:py-[1.5rem] rounded-[8px] 2xl:rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.13)]">
								{service.icon}
							</span>
							<div className="">
								<p className="text-[1.5rem] sm:text-[2rem] lg:text-[1.9rem] xl:text-[2rem] 2xl:text-[2.8rem] font-semibold mb-[0.3rem] sm:mb-[0.5rem] lg:mb-[1rem] 2xl:mb-[1.5rem]">
									{service.title}
								</p>
								<p className="text-justify lg:text-left text-[1.25rem] sm:text-[1.7rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-[2.2rem]">
									{service.body}
								</p>
							</div>
						</div>
					))}
				</main>
			</div>
		</section>
	);
}

export default WhatIDo;
