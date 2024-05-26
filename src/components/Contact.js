import React, { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdLocationOn, MdEmail } from "react-icons/md";
import Loader from "./Loader";
import { useStateContext } from "../context/ContextProvider";

function Contact() {
	const form = useRef();
	const [modal, setModal] = useState(false);
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const { activeTheme, largeHeader, smallHeader } = useStateContext();
	const activeSection =  activeTheme === 'dark' ? 'bg-[rgb(9,14,22)] text-[#bdbdbd]' : 'bg-[var(--section-color)] text-[#3F4144]'
	const activeModal =  activeTheme === 'dark' ? 'bg-black text-white' : 'bg-white text-[#3F4144]'
	
	const handleForm = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				`${process.env.REACT_APP_EMAIL_SERVICE_ID}`,
				`${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,
				form.current,
				`${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`,
			)
			.then(
				(result) => {
					e.target.reset();
					setMessage(
						"Message sent successfully, you will be contacted shortly",
					);
					setLoading(false);
					setModal(true);
				},
				(error) => {
					setMessage("Message Failed, Try Again");
					setLoading(false);
					setModal(true);
				},
			);
	};

	const inputStyle =
		"h-[4.5rem] sm:h-[5rem] px-[1rem] sm:px-[1.5rem] w-full border-[var(--light-gray-color)] outline-0 border-solid border-[1px] hover:border-gray-400 focus:border-[2px] focus:border-[var(--accent-color)]";

	return (
		<Fragment>
			{loading && <Loader />}
			<section
				className={`${activeSection} py-[9rem]`}
				name="contact">
				<div className="max-w-[85%] sm:max-w-[80%] mx-auto my-0">
					<header className="relative flex flex-col items-center w-full">
						<h1 className={`${largeHeader} text-[6rem] sm:text-[11rem] font-bold`}>
							CONTACT
						</h1>	
						<p className={`${smallHeader} absolute top-[40%] text-[1.8rem] sm:text-[2.8rem] font-bold`}>
							Get In Touch
						</p>
						<p className="absolute top-[67%] lg:top-[65%] 2xl:top-[68%] w-[15%] sm:w-[13%] lg:w-[8%] h-[2px] sm:h-[3px] lg:h-[2px] xl:h-[3px] 2xl:h-[4px] bg-[var(--accent-color)]" />
					</header>
					<main className="flex flex-col lg:flex-row gap-[5rem] lg:justify-between lg:gap-0 mt-[5rem] sm:mt-[8rem]">
						<div className="flex flex-col lg:w-[50%] gap-[1rem] sm:gap-[2.5rem] text-[1.4rem] sm::text-[1.6rem] 2xl:text-[2.5rem]">
							<div className="flex items-center gap-[1rem] sm:gap-[2rem]">
								<MdLocationOn className="text-[var(--accent-hover-color)] text-[2.7rem] sm:text-[3rem]" />
								<p>Alberta, Canada</p>
							</div>
							<div className="flex items-center gap-[1rem] sm:gap-[2.5rem]">
								<MdEmail className="text-[var(--accent-hover-color)] text-[2.7rem] sm:text-[3rem]" />
								<a
									href="mailto:leahobot@gmail.com"
									target="_blank"
									rel="noreferrer">
									leahobot@gmail.com
								</a>
							</div>
						</div>
						<form
							ref={form}
							onSubmit={handleForm}
							className="lg:w-full flex flex-col gap-[2.5rem] sm:gap-[3.5rem] text-[1.4rem] sm:text-[1.6rem]">
							<div className="flex gap-[2rem] sm:gap-[3.5rem]">
								<input
									type="text"
									placeholder="Name"
									name="user_name"
									required
									className={inputStyle}
								/>
								<input
									type="email"
									placeholder="Email"
									name="user_email"
									className={inputStyle}
									required
								/>
							</div>

							<input
								type="text"
								placeholder="Subject"
								name="subject"
								className={inputStyle}
								required
							/>
							<textarea
								placeholder="Type message..."
								name="message"
								className="h-[14rem] sm:h-[18rem] resize-none p-[1rem] sm:p-[1.5rem] w-full border-[var(--light-gray-color)] border-solid border-[1px] outline-0 hover:border-gray-400 focus:border-[2px] focus:border-[var(--accent-color)]"
								required
							/>

							<button
								className="outline-0 text-white bg-[var(--accent-color)] font-medium py-[1.5rem] sm:py-[1.7rem] mt-[1.5rem] sm:mt-[2.5rem] hover:bg-[var(--accent-hover-color)] text-[1.6rem] sm:text-[1.8rem] active:translate-y-[2px]"
								type="submit">
								Send Message
							</button>
						</form>
					</main>
				</div>
			</section>

			{modal && (
				<section className="fixed h-screen z-50 inset-0 w-full bg-[rgba(0,0,0,0.8)] flex justify-center items-center">
					<div className={`${activeModal} mb-[20vh] rounded-[4px] flex flex-col gap-[2rem] w-[20%] p-[2rem] text-[1.6rem] font-medium`}>
						<p className="text-center">{message}</p>
						<button
							onClick={() => setModal(false)}
							className="text-[1.7rem] outline-0 border-0 h-[4.5rem] rounded-[4px] bg-[var(--accent-color)] hover:bg-[var(--accent-hover-color)] text-white cursor-pointer active:translate-y-[2px]">
							Close
						</button>
					</div>
				</section>
			)}
		</Fragment>
	);
}

export default Contact;
