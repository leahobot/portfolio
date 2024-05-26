import React, { useState, useEffect } from "react";
import image from "../images/image.jpeg";
import { ReactComponent as Bulma} from "../icons/bulma.svg";
import { ReactComponent as JS} from "../icons/js.svg";
import { ReactComponent as TS} from "../icons/ts.svg";
import { ReactComponent as Html} from "../icons/html.svg";
import { ReactComponent as Css} from "../icons/css.svg";
import { ReactComponent as Jest} from "../icons/jest.svg";
import { ReactComponent as Cypress} from "../icons/cypress.svg";
import { ReactComponent as ReactIcon} from "../icons/react.svg";
import { ReactComponent as Vue} from "../icons/vue.svg";
import { ReactComponent as Three} from "../icons/threejs.svg";
import { ReactComponent as Redux} from "../icons/redux.svg";
import { ReactComponent as Next} from "../icons/next.svg";
import { ReactComponent as Nuxt} from "../icons/nuxtjs.svg";
import { ReactComponent as Webpack} from "../icons/webpack.svg";
import { ReactComponent as Sass} from "../icons/sass.svg";
import { ReactComponent as Less} from "../icons/less.svg";
import { ReactComponent as Bootstrap} from "../icons/bootstrap.svg";
import { ReactComponent as Tailwind} from "../icons/tailwind.svg";
import { ReactComponent as Vuetify} from "../icons/vuetify.svg";
import { ReactComponent as Python} from "../icons/python.svg";
import { useStateContext } from "../context/ContextProvider";

function About() {
	const [animatePage, setAnimatePage] = useState(false);
	const { activeTheme, largeHeader, smallHeader } = useStateContext();
	const activeSection =  activeTheme === 'dark' ? 'bg-[rgba(9,14,22,0.95)] text-[#bdbdbd]' : 'bg-[#ffffff] text-[#3F4144]'
	const card =  activeTheme === 'dark' ? 'text-white hover:bg-[rgba(9,14,22,0.95)]' : 'text-[#3F4144] hover:text-white hover:bg-[#18B1D1]'

	useEffect(() => {
		const animation = () => {
			if (window.scrollY >= 900) {
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

	const skills = [
		{ name: "TypeScript", icon: <TS className="h-full w-full"/> },
		{ name: "JavaScript", icon: <JS className="h-full w-full"/> },
		{ name: "React", icon: <ReactIcon className="h-full w-full"/> },
		{ name: "Vue JS", icon: <Vue className="h-full w-full" /> },
		{ name: "Three JS", icon: <Three className="h-full w-full" /> },
		{ name: "html", icon: <Html className="h-full w-full" /> },
		{ name: "css", icon: <Css className="h-full w-full" /> },
		{ name: "Redux", icon: <Redux className="h-full w-full" /> },
		{ name: "jest", icon: <Jest className="h-full w-full" /> },
		{ name: "cypress", icon: <Cypress className="h-full w-full" /> },
		{ name: "sass", icon: <Sass className="h-full w-full" /> },
		{ name: "less", icon: <Less className="h-full w-full" /> },
		{ name: "Next JS", icon: <Next className="h-full w-full" /> },
		{ name: "Nuxt", icon: <Nuxt className="h-full w-full" /> },
		{ name: "Webpack", icon: <Webpack className="h-full w-full" /> },
		{ name: "Tailwind CSS", icon: <Tailwind className="h-full w-full" /> },
		{ name: "BootStrap", icon: <Bootstrap className="h-full w-full" /> },
		{ name: "Bulma", icon: <Bulma className="h-full w-full" /> },
		{ name: "Vuetify", icon: <Vuetify className="h-full w-full" /> },
		{ name: "Python", icon: <Python className="h-full w-full" /> },
	];

	return (
		<section
			className={`${activeSection} py-[9rem]`}
			name="about">
			<div className="max-w-full sm:max-w-[80%] mx-auto my-0">
				<header className="relative flex flex-col items-center w-full">
					<h1 className={`${largeHeader} text-[6rem] sm:text-[11rem] font-bold`}>
						ABOUT ME
					</h1>
					<p className={`${smallHeader} absolute top-[40%] text-[1.8rem] sm:text-[2.8rem] font-bold`}>
						Know Me More
					</p>
					<p className="absolute top-[65%] w-[8%] h-[3px] bg-[var(--accent-color)]" />
				</header>
				<main className="flex flex-col lg:flex-row gap-[10rem] lg:gap-0 lg:justify-between items-center mt-[2rem] sm:mt-[3rem]">
					<article className="w-[90%] lg:w-[70%]">
						<p className="text-[2rem] sm:text-[2.7rem] font-semibold mb-[1.8rem]">
							Hi, I'm{" "}
							<span className="text-[var(--accent-color)]">
								Leah,
							</span>{" "}
							a Software Engineer
						</p>
						<div className="flex flex-col gap-8 text-justify text-[1.6rem] sm:text-[1.8rem]">
							<p>
								based in Alberta, Canada, with over 5 years of experience
								in <strong>front-end web development</strong>. 
								With expertise in JavaScript, TypeScript and Python. I
								excel at creating responsive and scalable web
								applications that are both reliable and
								user-friendly. 
							</p>
							<p>
								As a confident communicator and
								strategic thinker, I bring a highly innovative
								approach to software development. My proven track
								record includes optimizing front-end performance,
								improving user experience, and ensuring accessibility 
								compliance. I am dedicated to  with cross-functional 
								teams to deliver high-quality, customized software
								solutions that with your company's unique needs
								and help you achieve and surpass your objectives. 
							</p>
							<p>
								With a solid foundation in modern web technologies and a
								commitment to continuous improvement, I am excited
								to contribute to your organization's success. 
							</p>
						</div>
					</article>
					<div className="photo h-[20rem] sm:h-[25rem] w-[20rem] sm:w-[25rem]">
						<img
							src={image}
							alt="A Photograph"
							className="object-cover h-full w-full rounded-full"
						/>
					</div>
				</main>
				<aside className="max-w-[90%] sm:max-w-full mt-[9rem] mx-auto">
					<header className="my-[2rem] text-[2.2rem] sm:text-[2.6rem] font-bold">
						My Skills
					</header>
					<div className="w-full border border-[#7dd9ee5d] rounded-2xl flex justify-center flex-wrap gap-7 sm:gap-9 p-[2rem] sm:p-[3rem] skills-box">
						{skills.map((skill, index) => (
							<div
								key={index}
								className={`${card} p-[1rem] sm:p-[1.5rem] rounded-xl flex items-center gap-3 border border-[#7dd9eeb3] bg-[#7dd9ee14] hover:rounded-full cursor-pointer transition-all duration-700 shadow-md ${
									animatePage
										? " animate__animated animate__slideInLeft  animate__slow"
										: ""
								}`}>
								<div className="-[2.5rem] w-[2rem] sm:h-[3.5rem] sm:w-[3rem]">
									{ skill.icon }
								</div>
								<p className="uppercase font-extrabold text-[1.6rem] sm:text-[2rem]">{skill.name}</p>
							</div>
						))}
						</div>
				</aside>
			</div>
		</section>
	);
}

export default About;
