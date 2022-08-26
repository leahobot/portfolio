import React, {useCallback} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {Link} from "react-scroll";
import Typewriter from "typewriter-effect";
import {BiChevronDown} from "react-icons/bi";

function Home() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback((container) => {}, []);

	return (
		<section className='hero-page' name='home'>
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
				<Link
					className='btn btn-outlined'
					to='contact'
					spy={true}
					smooth={true}
					offset={-10}
					duration={800}>
					Contact Me
				</Link>

				<Link
					className='arrow-down animate__animated animate__fadeInDown animate__slow animate__infinite'
					to='about'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}>
					<BiChevronDown size={45} />
				</Link>
			</main>

			<Particles
				id='tsparticles'
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
							value: {min: 0, max: 2.5},
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
