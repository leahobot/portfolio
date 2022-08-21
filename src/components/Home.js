import {useCallback} from "react";
import React from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import Typewriter from "typewriter-effect";
import {BiChevronDown} from "react-icons/bi";

function Home() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	return (
		<section className='hero-page' id='home'>
			<main className='hero-content'>
				<p className='hero-heading'>Welcome</p>
				<div className='hero-typewriter'>
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
							deleteSpeed: 2,
							cursorClassName: "type_cursor",
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
				<p className='hero-body'>based in Lagos, Nigeria</p>
				<a href='/' className='btn btn-outlined'>
					Contact Me
				</a>
				<a href='/' className='arrow-down'>
					<BiChevronDown
						size={35}
						className='animate__animated animate__fadeInDown animate__slow animate__infinite'
					/>
				</a>
			</main>

			<Particles
				id='tsparticles'
				init={particlesInit}
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
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#DCE0E1",
						},
						links: {
							color: "#DCE0E1",
							distance: 200,
							enable: true,
							opacity: 0.65,
							width: 0.5,
						},
						collisions: {
							enable: true,
						},
						move: {
							directions: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: false,
							speed: 1.7,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 40,
						},
						opacity: {
							value: 0.6,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: {min: 0, max: 3},
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
