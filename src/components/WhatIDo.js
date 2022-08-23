import React, {useState, useEffect} from "react";
import {RiCodeSSlashLine, RiComputerLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {TbSpeakerphone} from "react-icons/tb";

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

	const services = [
		{
			id: 1,
			icon: <RiCodeSSlashLine size={35} />,
			title: "Front-End Web Development",
			body: "I develop user friendly, interactive and highly-responsive websites and web applications with the latest web technology to achieve optimized speed and performance.",
		},
		{
			id: 2,
			icon: <FaServer size={35} />,
			title: "Back-End Web Development",
			body: "I develop the server-side logic for the interchange of data between the server and the front-end, this includes building APIs, data storage, security, and other server-side functions. And also ensuring high performance and responsiveness to requests from the front-end.",
		},
		{
			id: 3,
			icon: <RiComputerLine size={35} />,
			title: "Web Design",
			body: "I create the visual design and layout of a website or web pages focusing on aesthetically pleasing desgns so that users have a positive user experience when they visit the website.",
		},

		{
			id: 4,
			icon: <TbSpeakerphone size={35} />,
			title: "SEO Marketing",
			body: "I identify strategies, techniques and tactics to optimize the the search results of a website ranking on major search engines and create a positive user experience, growing site traffic and brand awareness.",
		},
	];

	return (
		<section className='whatIDo' id='whatIDo'>
			<div className='max-width'>
				<header className='what-header'>
					<p className='what-title'>What I Do</p>
					<span>What I do sooooo</span>
				</header>

				<main className='services'>
					{services.map((service, id) => (
						<div
							key={id}
							className={
								animatePage
									? "services-details animate__animated animate__fadeInUp"
									: "services-details"
							}>
							<span className='services-icon'>{service.icon}</span>
							<div className='services-content'>
								<p className='services-title'>{service.title}</p>
								<p>{service.body}</p>
							</div>
						</div>
					))}
				</main>
			</div>
		</section>
	);
}

export default WhatIDo;
