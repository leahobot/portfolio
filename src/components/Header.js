import React, { useState } from "react";
import logo from "../images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";
import { BsLinkedin, BsGithub, BsInstagram, BsMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-scroll";

const initialState = {
	linkedIn: false,
	gitHub: false,
	instagram: false,
};

function Nav() {
	const [modal, setModal] = useState(initialState);
	const [displayMenu, setDisplayMenu] = useState(false);
	const { activeTheme, setTheme, activeColor } = useStateContext();

	const linkStyle = ['text-[1.3rem] lg:text-[1.6rem]', 'cursor-pointer', 'transition', 'hover:text-[var(--accent-color)]', activeColor].join(' ');
	const modalSpan =
		"hidden sm:block absolute bg-white top-[200%] left-[-90%] text-[1.4rem] px-4 py-2 rounded-[4px]";
	const headerClasses = ['h-[8rem]','w-full','z-20','fixed','inset-0','animate__animated',
		activeTheme === 'dark' ? 'bg-black' : 'light-header',
	].join(' ');
		
	return (
		<header className={headerClasses} >
			<nav className="h-full flex items-center justify-between max-w-[90%] lg:max-w-[80%] mx-auto my-0">
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
						<AiOutlineMenu className={`${activeColor} text-[2.2rem]`} />
					</div>

					<ul
						className={`h-[100vh] z-20 fixed inset-0 bg-black sm:bg-transparent w-[50%] pt-[7rem] pl-[3rem] sm:pl-0 sm:pt-0 sm:static sm:h-full sm:w-full flex flex-col sm:flex-row sm:items-center gap-[2.5rem] md:gap-[4rem] lg:gap-[5rem]  sm:translate-x-0 transition-all sm:transition-none ${
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

				<ul className="h-full flex items-center gap-[1.8rem] md:gap-[2.6rem]">
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
							<BsLinkedin className={`${activeColor} text-[2rem] md:text-[2.4rem]`} />
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
							<BsGithub className={`${activeColor} text-[2rem] md:text-[2.4rem]`} />
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
							<BsInstagram className={`${activeColor} text-[2rem] md:text-[2.4rem]`} />
						</a>
						{modal.instagram && (
							<span className={modalSpan}>Instagram</span>
						)}
					</li>
					<li className="ml-4 lg:ml-8 cursor-pointer active:translate-y-1 transition">
						{activeTheme === 'dark' ?
							<BsMoonStarsFill onClick={() => setTheme('light')} className="text-[var(--accent-color)] text-[1.6rem] md:text-[2rem]" /> :
							<FiSun onClick={() => setTheme('dark')} className="text-[#141414] text-[1.6rem] md:text-[2rem]" />
						}
					</li>
				</ul>

			</nav>
			{displayMenu && (
				<div
					onClick={() => setDisplayMenu(false)}
					className={`fixed inset-0 w-full h-screen bg-[rgba(0,0,0,0.7)] z-10 ${
						displayMenu ? "opacity-1" : "opacity-0"
					} `}
				/>
			)}
		</header>
	);
}

export default Nav;

// <li>
// <Link
// 	onClick={() => setDisplayMenu(false)}
// 	className={linkStyle}
// 	to="resume"
// 	spy={true}
// 	smooth={true}
// 	offset={-80}
// 	duration={800}>
// 	Resume
// </Link>
// </li>