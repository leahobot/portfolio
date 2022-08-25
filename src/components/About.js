import React, {useState, useEffect} from "react";
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
		{id: 1, skillName: "React JS", percentage: "90%", value: "90"},
		{id: 2, skillName: "Python", percentage: "85%", value: "85"},
		{id: 3, skillName: "JavaScript (ES6)", percentage: "90%", value: "90"},
		{id: 4, skillName: "Django", percentage: "90%", value: "90"},
		{id: 5, skillName: "HTML5 & CSS3", percentage: "85%", value: "85"},
		{id: 6, skillName: "Django REST Framework", percentage: "85%", value: "85"},
		{id: 7, skillName: "Web Design with Figma", percentage: "70%", value: "70"},
		{id: 8, skillName: "Version Control (Git)", percentage: "80%", value: "80"},
		{
			id: 9,
			skillName: "CSS Frameworks (Bootstrap, Bulma, Tailwind)",
			percentage: "80%",
			value: "80",
		},
		{id: 10, skillName: "AWS Cloud", percentage: "50%", value: "50"},
	];

	return (
		<section className='about-page' name='about'>
			<div className='max-width'>
				<header className='about-header'>
					<p className='about-title'>Know Me More</p>
					<span>Know Me More so</span>
				</header>
				<main>
					<article className='about-info'>
						<p className='about-info-heading'>
							Hi, I'm <span className='active'>Leah,</span> a Full Stack Web
							Developer
						</p>
						<p className='about-info-body'>
							based in Lagos, Nigeria. I am very passionate about developing
							innovative software solutions that expedite the efficiency and
							effectiveness of the success of an organization. I'm well-versed
							in web technology and writing software codes to create systems
							that are reliable and user-friendly.
							<br />
							<br />
							I'm a confident communicator, strategic thinker, and highly
							innovative in developing softwares that are customized to meet
							your company's organizational needs and further your success.
						</p>
					</article>
					<div className='about-photo'>
						<img src={image} alt='A Photograph' />
					</div>
				</main>
				<aside className='about-skills'>
					<header>My Skills</header>
					<div className='skills'>
						{skills.map((skill, id) => (
							<div
								key={id}
								className={
									animatePage
										? "skills-details animate__animated animate__slideInLeft  animate__slow"
										: "skills-details"
								}>
								<div className='skills-desc'>
									<p>{skill.skillName}</p>
									<span>{skill.percentage}</span>
								</div>
								<div>
									<progress value={skill.value} max='100' />
								</div>
							</div>
						))}
					</div>
				</aside>
			</div>
		</section>
	);
}

export default About;
