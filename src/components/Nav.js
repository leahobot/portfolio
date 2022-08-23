import React, {useState} from "react";
import logo from "../images/logo.png";
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs";
// import * as Scroll from "react-scroll";
import {Link} from "react-scroll";

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
			<div className='nav-width'>
				<div>
					<Link to='home' spy={true} smooth={true} offset={0} duration={800}>
						<img src={logo} alt='logo' />
					</Link>
				</div>

				<div>
					<ul className='nav-items'>
						<li>
							<Link
								className='nav-link'
								to='home'
								spy={true}
								smooth={true}
								offset={0}
								duration={800}>
								Home
							</Link>
						</li>
						<li>
							<Link
								className='nav-link'
								to='about'
								spy={true}
								smooth={true}
								offset={0}
								duration={800}>
								About
							</Link>
						</li>
						<li>
							<Link
								className='nav-link'
								to='whatIDo'
								spy={true}
								smooth={true}
								offset={0}
								duration={800}>
								What I Do
							</Link>
						</li>
						<li>
							<Link
								className='nav-link'
								to='portfolio'
								spy={true}
								smooth={true}
								offset={0}
								duration={800}>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								className='nav-link'
								to='resume'
								spy={true}
								smooth={true}
								offset={0}
								duration={800}>
								Resume
							</Link>
						</li>
						<li>
							<Link
								className='nav-link'
								to='contact'
								spy={true}
								smooth={true}
								offset={0}
								duration={800}>
								Contact
							</Link>
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
			</div>
		</nav>
	);
}

export default Nav;
