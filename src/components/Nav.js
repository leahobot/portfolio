import React, {useState} from "react";
import logo from "../images/logo.png";
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs";
import {Link} from "react-scroll";

function Nav() {
	const [modal1, setModal1] = useState(false);
	const [modal2, setModal2] = useState(false);
	const [modal3, setModal3] = useState(false);
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
					<div className='nav-menu'></div>
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
							onMouseOver={() => setModal1(true)}
							onMouseOut={() => setModal1(false)}>
							<a
								href='https://linkedin.com/in/leahobot'
								target='_blank'
								className='nav-link'
								rel='noreferrer'>
								<BsLinkedin size={22} />
							</a>
							{modal1 && <span>Linkedin</span>}
						</li>

						<li
							onMouseOver={() => setModal2(true)}
							onMouseOut={() => setModal2(false)}>
							<a
								href='https://github.com/leahobot'
								target='_blank'
								rel='noreferrer'
								className='nav-link'>
								<BsGithub size={22} />
							</a>
							{modal2 && <span>Github</span>}
						</li>

						<li
							onMouseOver={() => setModal3(true)}
							onMouseOut={() => setModal3(false)}>
							<a
								href='https://www.instagram.com/leahobot/'
								target='_blank'
								className='nav-link'
								rel='noreferrer'>
								<BsInstagram size={22} />
							</a>
							{modal3 && <span>Instagram</span>}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
