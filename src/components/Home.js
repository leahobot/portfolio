import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { BiChevronDown } from "react-icons/bi";

function Home() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback((container) => {}, []);

	return (
		<section
			className="hero-page relative bg-[rgba(0,0,0,0.8)] h-[100vh] w-full"
			name="home">
			<main className="flex flex-col gap-[3rem] sm:gap-[4rem] lg:gap-[2rem] xl:gap-[3rem] 2xl:gap-[4rem] w-full h-full items-center text-white pt-[40%] sm:pt-[30%] lg:pt-[10%] xl:pt-[15%] 2xl:pt-[10%]">
				<p className="text-[1.6rem] sm:text-[2.2rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2.5rem] font-medium">
					Welcome
				</p>
				<div className="w-[90%] sm:w-[70%] mt-[2rem] sm:mt-[6rem] lg:mt-[3rem] lg:w-[80%] xl:w-[60%] 2xl:w-[40%] h-[20rem] sm:h-[25rem] lg:h-[20rem] 2xl:h-[35rem] text-center font-bold text-[4rem] sm:text-[6.5rem] lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[8rem]">
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
								.pauseFor(1000)
								.deleteAll()
								.typeString("I'm a Full-Stack Web Developer.")
								.pauseFor(1000)
								.deleteChars(25)
								.typeString("Front-End Web Developer.")
								.pauseFor(1000)
								.deleteChars(24)
								.typeString("Back-End Web Developer.")
								.pauseFor(1000)
								.deleteAll()
								.start();
						}}
					/>
				</div>

				<p className="text-[1.4rem] sm:text-[1.8rem] mt-[8rem] sm:mt-[14rem] lg:mt-0 xl:mt-[7rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2.2rem]">
					based in Lagos, Nigeria
				</p>
				<Link
					className="text-[1.4rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2.2rem] sm:text-[1.6rem] decoration-none px-[3rem] xl:px-[3.5rem] 2xl:px-[4.5rem] py-[1rem] xl:py-[1.3rem] 2xl:py-[1.8rem] rounded-[2.2rem] xl:rounded-[2.5rem] 2xl:rounded-[3rem] font-medium border-[2px] border-solid border-[var(--accent-color)] transition-all text-[var(--accent-color)] hover:bg-[var(--accent-hover-color)] hover:text-white z-[2] cursor-pointer"
					to="contact"
					spy={true}
					smooth={true}
					offset={-10}
					duration={800}>
					Contact Me
				</Link>

				<Link
					className="z-[1] cursor-pointer text-white animate__animated animate__fadeInDown animate__slow animate__infinite"
					to="about"
					spy={true}
					smooth={true}
					offset={0}
					duration={800}>
					<BiChevronDown className="text-[4rem] sm:text-[5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[6rem]" />
				</Link>
			</main>

			<Particles
				className="absolute w-full h-full top-0"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: "transparent",
						},
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 2,
							},
							repulse: {
								distance: 70,
								duration: 0.5,
							},
						},
					},
					particles: {
						color: {
							value: "#DCE0E1",
						},
						links: {
							color: "#DCE0E1",
							distance: 100,
							enable: true,
							opacity: 0.65,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							directions: "none",
							enable: true,
							outModes: {
								default: "default",
							},
							random: true,
							speed: 1.2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 500,
							},
							value: 30,
						},
						opacity: {
							value: 0.6,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 0, max: 2.5 },
						},
					},
					detectRetina: true,
					fullScreen: false,
				}}
			/>
		</section>
	);
}

export default Home;
