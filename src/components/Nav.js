import React, {useState} from "react";
import logo from "../images/logo.png";
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs";

function Nav() {
	const [LinkedIn, setLinkedIn] = useState("");
	const [Github, setGithub] = useState("");
	const [Instagram, setInstagram] = useState("");

	const [bgColor, setBgColor] = useState(false);
	const changeNavColor = () => {
		if (window.scrollY >= 80) {
			setBgColor(true);
		} else {
			setBgColor(false);
		}
	};
	window.addEventListener("scroll", changeNavColor);

	return (
		<nav
			className={
				bgColor
					? "nav-bar bg-color animate__animated animate__slideInDown "
					: "nav-bar"
			}>
			<div>
				<a href='/'>
					<img src={logo} alt='logo' />
				</a>
			</div>

			<div>
				<ul className='nav-items'>
					<li>
						<a href='/' className='nav-link'>
							Home
						</a>
					</li>
					<li>
						<a href='/' className='nav-link'>
							About
						</a>
					</li>
					<li>
						<a href='/' className='nav-link'>
							What I Do
						</a>
					</li>
					<li>
						<a href='/' className='nav-link'>
							Portfolio
						</a>
					</li>
					<li>
						<a href='/' className='nav-link'>
							Resume
						</a>
					</li>
					<li>
						<a href='/' className='nav-link'>
							Contact
						</a>
					</li>
				</ul>
			</div>

			<div>
				<ul className='nav-socials'>
					<li
						onMouseOver={() => setLinkedIn("LinkedIn")}
						onMouseOut={() => setLinkedIn("")}>
						<a
							href='https://linkedin.com/in/leahobot'
							target='_blank'
							className='nav-link'
							rel='noreferrer'>
							<BsLinkedin size={22} />
						</a>
						<span>{LinkedIn}</span>
					</li>

					<li
						onMouseOver={() => setGithub("Github")}
						onMouseOut={() => setGithub("")}>
						<a
							href='https://github.com/leahobot'
							target='_blank'
							rel='noreferrer'
							className='nav-link'>
							<BsGithub size={22} />
						</a>
						<span>{Github}</span>
					</li>

					<li
						onMouseOver={() => setInstagram("Instagram")}
						onMouseOut={() => setInstagram("")}>
						<a
							href='https://www.instagram.com/leahobot/'
							target='_blank'
							className='nav-link'
							rel='noreferrer'>
							<BsInstagram size={22} />
						</a>
						<span>{Instagram}</span>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
