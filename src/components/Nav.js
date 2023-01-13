import React, { useState } from "react";
import logo from "../images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

const initialState = {
	linkedIn: false,
	gitHub: false,
	instagram: false,
};

function Nav() {
	const [modal, setModal] = useState(initialState);
	const [bgColor, setBgColor] = useState(false);
	const [displayMenu, setDisplayMenu] = useState(false);

	const changeNavColor = () => {
		if (window.scrollY >= 80) {
			setBgColor(true);
		} else {
			setBgColor(false);
		}
	};
	window.addEventListener("scroll", changeNavColor);

	const linkStyle =
		"text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem] px-[3rem] sm:px-0 cursor-pointer text-white transition-all hover:text-[var(--accent-color)]";
	const modalSpan =
		"hidden sm:block absolute bg-white top-[200%] left-[-90%] text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.9rem] px-4 py-2 rounded-[4px]";
	return (
		<nav
			className={`h-[7rem] sm:h-[8rem] lg:h-[6.5rem] xl:h-[8rem] 2xl:h-[10rem] z-20 fixed top-0 w-full ${
				bgColor
					? "bg-black animate__animated animate__slideInDown "
					: ""
			}`}>
			<div className="h-full flex items-center justify-between max-w-[90%] lg:max-w-[80%] mx-auto my-0">
				<Link
					to="home"
					spy={true}
					smooth={true}
					offset={0}
					duration={800}>
					<img
						src={logo}
						alt="logo"
						className="cursor-pointer h-[4rem] sm:h-[5rem] lg:h-[4rem] xl:h-[5rem] 2xl:h-[6.5rem] active:translate-y-[2px]"
					/>
				</Link>

				<div>
					<div
						className="sm:hidden ml-[10rem] mt-[0.4rem]"
						onClick={() => setDisplayMenu(true)}>
						<AiOutlineMenu className="text-[3rem] cursor-pointer text-white" />
					</div>

					<ul
						className={`h-[100vh] z-20 fixed left-0 top-0 bg-black sm:bg-transparent w-[40%] pt-[5rem] sm:pt-[0rem] sm:static sm:h-full sm:w-full flex flex-col sm:flex-row sm:items-center gap-[3rem] sm:gap-[2.5rem] lg:gap-[4.5rem] xl:gap-[5rem] 2xl:gap-[8rem] sm:translate-x-0 transition-all sm:transition-none ${
							displayMenu
								? "translate-x-0"
								: "translate-x-[-100%]"
						}`}>
						<li>
							<Link
								onClick={() => setDisplayMenu(false)}
								className={linkStyle}
								to="home"
								spy={true}
								smooth={true}
								offset={0}
								duration={800}>
								Home
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setDisplayMenu(false)}
								className={linkStyle}
								to="about"
								spy={true}
								smooth={true}
								offset={-30}
								duration={800}>
								About
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setDisplayMenu(false)}
								className={linkStyle}
								to="whatIDo"
								spy={true}
								smooth={true}
								offset={-30}
								duration={800}>
								What I Do
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setDisplayMenu(false)}
								className={linkStyle}
								to="portfolio"
								spy={true}
								smooth={true}
								offset={-30}
								duration={800}>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setDisplayMenu(false)}
								className={linkStyle}
								to="resume"
								spy={true}
								smooth={true}
								offset={-80}
								duration={800}>
								Resume
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setDisplayMenu(false)}
								className={linkStyle}
								to="contact"
								spy={true}
								smooth={true}
								offset={-30}
								duration={800}>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				<ul className="h-full flex items-center gap-[1.8rem] sm:gap-[2.3rem] xl:gap-[2.6rem] 2xl:gap-[3.5rem]">
					<li
						className="relative"
						onMouseEnter={() =>
							setModal({ ...modal, linkedIn: true })
						}
						onMouseLeave={() =>
							setModal({ ...modal, linkedIn: false })
						}>
						<a
							href="https://linkedin.com/in/leahobot"
							target="_blank"
							rel="noreferrer">
							<BsLinkedin className="text-white text-[2.4rem] sm:text-[2.2rem] xl:text-[2.5rem] 2xl:text-[3rem]" />
						</a>
						{modal.linkedIn && (
							<span className={modalSpan}>Linkedin</span>
						)}
					</li>

					<li
						className="relative"
						onMouseEnter={() =>
							setModal({ ...modal, gitHub: true })
						}
						onMouseLeave={() =>
							setModal({ ...modal, gitHub: false })
						}>
						<a
							href="https://github.com/leahobot"
							target="_blank"
							rel="noreferrer">
							<BsGithub className="text-white text-[2.4rem] sm:text-[2.2rem] xl:text-[2.5rem] 2xl:text-[3rem]" />
						</a>
						{modal.gitHub && (
							<span className={modalSpan}>Github</span>
						)}
					</li>

					<li
						className="relative"
						onMouseEnter={() =>
							setModal({ ...modal, instagram: true })
						}
						onMouseLeave={() =>
							setModal({ ...modal, instagram: false })
						}>
						<a
							href="https://www.instagram.com/leahobot/"
							target="_blank"
							rel="noreferrer">
							<BsInstagram className="text-white text-[2.4rem] sm:text-[2.2rem] xl:text-[2.5rem] 2xl:text-[3rem]" />
						</a>
						{modal.instagram && (
							<span className={modalSpan}>Instagram</span>
						)}
					</li>
				</ul>
			</div>
			{displayMenu && (
				<div
					onClick={() => setDisplayMenu(false)}
					className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] z-10 ${
						displayMenu ? "opacity-1" : "opacity-0"
					} `}
				/>
			)}
		</nav>
	);
}

export default Nav;
