import React, { useState, useEffect } from "react";
import { RiCodeSSlashLine, RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { useStateContext } from "../context/ContextProvider";

function WhatIDo() {
	const [animatePage, setAnimatePage] = useState(false);
	const { activeTheme, largeHeader, smallHeader } = useStateContext();
	const activeSection =  activeTheme === 'dark' ? 'bg-[rgb(9,14,22)] text-[#bdbdbd]' : 'bg-[var(--section-color)] text-[#3F4144]'
	const activeCard =  activeTheme === 'dark' ? 'bg-[#003559] shadow-[0_0_10px_0_rgba(0,0,0,1)]' : 'bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.13)]'

	useEffect(() => {
		const animation = () => {
			if (window.scrollY >= 1400) {
				setAnimatePage(true);
			} else {
				setAnimatePage(false);
			}
		};

		window.addEventListener("scroll", animation);
		
		return (() => {
			window.removeEventListener("scroll", animation);
		})
	}, []);

	const iconStyle ="text-[3rem] lg:text-[4rem] text-[var(--accent-color)]";
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
			className={`${activeSection} py-[9rem]`}
			name="whatIDo">
			<div className="max-w-[90%] sm:max-w-[80%] mx-auto my-0">
				<header className="relative flex flex-col items-center w-full">
					<h1 className={`${largeHeader} text-[6rem] sm:text-[11rem] font-bold`}>
						SERVICES
					</h1>	
					<p className={`${smallHeader} absolute top-[40%] text-[1.8rem] sm:text-[2.8rem] font-bold`}>
						What I Do
					</p>
					<p className="absolute top-[67%] lg:top-[65%] 2xl:top-[68%] w-[15%] sm:w-[12%] lg:w-[7%] h-[2px] sm:h-[3px] lg:h-[2px] xl:h-[3px] 2xl:h-[4px] bg-[var(--accent-color)]" />
				</header>

				<main className="flex flex-col lg:flex-row gap-[4.5rem] lg:gap-0 lg:flex-wrap lg:justify-between mt-[6rem]">
					{services.map((service, id) => (
						<div
							key={id}
							className={`flex gap-[2rem] lg:gap-[2.5rem] w-full lg:w-[48%] mb-[3rem] sm:mb-[5rem] lg:mb-[8rem] items-start ${
								animatePage
									? " animate__animated animate__fadeInUp"
									: ""
							}`}>
							<span className={`${activeCard} inline-block px-[1.5rem] lg:px-[2.5rem] py-[1rem] lg:py-[1.5rem] rounded-[8px]`}>
								{service.icon}
							</span>
							<div>
								<p className="text-[1.8rem] sm:text-[2rem] font-semibold mb-[0.6rem] sm:mb-[1rem]">
									{service.title}
								</p>
								<p className="text-left text-[1.5rem] sm:text-[1.7rem]">
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
