import React from "react";
import Typewriter from "typewriter-effect";
import { Waves } from '../components'
import { Link } from "react-scroll";
import { BiChevronDown } from "react-icons/bi";
import { useStateContext } from "../context/ContextProvider";

function Home() {
	const { activeColor, activeTheme } = useStateContext();
	const activeBg =  activeTheme === 'dark' ? 'text-white bg-[rgba(9,14,22,0.95)]' : 'bg-[#f3f3f3e2] text-[#141414]'
	const activeBtn =  activeTheme === 'light' ? 'bg-[var(--accent-hover-color)]' : ''

	return (
		<section
			className="hero-page h-[100vh] w-full relative"
			name="home">
			<main
				className={`${activeBg} h-full w-full pt-[20vh] lg:pt-[25vh] flex flex-col items-center blur-filter`}>
				<p className="text-[1.6rem] sm:text-[2rem] font-medium">Welcome</p>
				<div className="h-[20rem] mt-[6rem] px-[4rem] sm:px-[6rem] text-center font-bold text-[4rem] md:text-[7rem]">
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
							deleteSpeed: 2,
							cursorClassName: "text-[var(--accent-color)]",
						}}
						onInit={(typewriter) => {
							typewriter
								.typeString("I'm Leah Obot.")
								.pauseFor(2000)
								.deleteAll()
								.typeString("I'm a Software Engineer.")
								.pauseFor(1500)
								.deleteAll()
								.start();
						}}
					/>
				</div>

				<p className="text-[1.4rem] sm:text-[1.6rem] mt-[5vh] md:mt-[12vh] lg:mt-[5vh]">
					based in Alberta, Canada
				</p>
				<Link
					className={`${activeBtn} text-[1.4rem] sm:text-[1.6rem] mt-[3rem] decoration-none px-[3.5rem] py-[1rem] rounded-[2.2rem] font-medium border-[2px] border-[var(--accent-color)] transition text-[var(--accent-color)] hover:bg-[var(--accent-hover-color)] hover:text-white cursor-pointer`}
					to="contact"
					spy={true}
					smooth={true}
					offset={-10}
					duration={800}>
					Contact Me
				</Link>

				<Link
					className={`${activeColor} mt-[4rem] cursor-pointer animate__animated animate__fadeInDown animate__slow animate__infinite`}
					to="about"
					spy={true}
					smooth={true}
					offset={0}
					duration={800}>
					<BiChevronDown className="text-[3rem] sm:text-[4rem]" />
				</Link>
			</main>
				
			<div className="absolute bottom-0 w-full remove-pointer">
				<Waves />
			</div>
		</section>
	);
}

export default Home;
