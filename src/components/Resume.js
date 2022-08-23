import React, {useState, useEffect} from "react";

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

	return (
		<section className='resume-page max-width' id='resume'>
			<header className='resume-header'>
				<p className='resume-title'>Resume</p>
				<span>resumeeeee</span>
			</header>

			<main className='resume-container'>
				<header>Experience</header>
				<div className='resume-flex'>
					<div
						className={
							animatePage
								? "animate__animated animate__bounce animate__slideInLeft resume-content"
								: "resume-content"
						}>
						<span>Jan 2022 - Till date</span>
						<h1>Software Developer</h1>
						<p className='resume-work'> Univelcity, Nigeria</p>
						<ul>
							<li>
								Daily maintenance of code, debugging issues and solving clients'
								problems to achieve maximum speed and scalability.
							</li>
							<li>
								Adapted front-end technologies to follow back end development
								using ReactJS which contributed to the increase in the user
								experience.
							</li>
							<li>
								Established a continuous integration environment for automated
								build and deployment process
							</li>

							<li>
								Collaborates with UX/UI design team to improve 10+ websites
								which increased its performance rate.
							</li>
						</ul>
					</div>

					<div
						className={
							animatePage
								? "animate__animated animate__bounce animate__slideInRight resume-content"
								: "resume-content"
						}>
						<span>April 2019 - Dec 2021</span>
						<h1>Web Developer</h1>
						<p className='resume-work'> Heart and Soul Consult, Nigeria</p>
						<ul>
							<li>
								Developed highly responsive and scalable websites across
								different platforms.
							</li>
							<li>
								Increased daily visitors by 60% after developing clients
								websites using ReactJS.
							</li>
							<li>
								Translated over 30+ UI/UX design prototypes of responsive
								landing pages to actual codes using JavaScript, HTML and CSS.
							</li>

							<li>Collaborated and built 70% reusable codes for future use.</li>
						</ul>
					</div>
				</div>
				<header>Education</header>
				<div
					className={
						animatePage2
							? "animate__animated animate__bounce animate__slideInUp resume-content"
							: "resume-content"
					}>
					<span>Jan 2008 - Nov 2012</span>
					<h1>Bachelor of Science in Accountancy</h1>
					<p className='resume-work'>
						Rivers State University of Science and Technology, Nigeria
					</p>
				</div>
			</main>
		</section>
	);
}

export default Resume;
