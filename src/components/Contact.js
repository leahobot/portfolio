import React, { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdLocationOn, MdEmail } from "react-icons/md";

function Contact() {
	const form = useRef();
	const [modal, setModal] = useState(false);
	const [message, setMessage] = useState("");

	const handleForm = (e) => {
		e.preventDefault();

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
					setModal(true);
				},
				(error) => {
					setMessage("Message Failed, Try Again");
					setModal(true);
				},
			);
	};

	const inputStyle =
		"h-[3rem] sm:h-[4.5rem] xl:h-[5rem] 2xl:h-[6.5rem] px-[1rem] xl:px-[1.5rem] 2xl:px-[2rem] w-full border-[var(--light-gray-color)] outline-0 border-solid border-[1px] hover:border-gray-400 focus:border-[2px] focus:border-[var(--accent-color)]";

	return (
		<Fragment>
			<section
				className="mt-[6rem] sm:mt-[8rem] py-[6rem] sm:py-[8rem] xl:py-[9rem] 2xl:py-[11rem] bg-[var(--section-color)]"
				name="contact">
				<div className="max-w-[80%] mx-auto my-0">
					<header className="relative flex flex-col items-center w-full">
						<h1 className="text-[5.5rem] sm:text-[8rem] lg:text-[10rem] xl:text-[11rem] 2xl:text-[15rem] text-gray-200 font-bold">
							CONTACT
						</h1>
						<p className="absolute top-[35%] lg:top-[40%] text-[1.8rem] sm:text-[2.7rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[4rem] font-bold">
							Get In Touch
						</p>
						<p className="absolute top-[67%] lg:top-[65%] 2xl:top-[68%] w-[15%] sm:w-[13%] lg:w-[8%] h-[2px] sm:h-[3px] lg:h-[2px] xl:h-[3px] 2xl:h-[4px] bg-[var(--accent-color)]" />
					</header>
					<main className="flex flex-col lg:flex-row gap-[3rem] lg:justify-between lg:gap-0 mt-[3rem] sm:mt-[4rem] lg:mt-[7rem] xl:mt-[8rem] 2xl:mt-[11rem]">
						<div className="flex flex-col lg:w-[50%] gap-[1rem] sm:gap-[2rem] xl:gap-[2.5rem] 2xl:gap-[3.5rem] text-[1.3rem] sm:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[2.5rem]">
							<div className="flex items-center gap-[1rem] sm:gap-[2rem] xl:gap-[2.5rem]">
								<MdLocationOn className="text-[var(--accent-hover-color)] text-[2.5rem] sm:text-[2.8rem] xl:text-[3rem] 2xl:text-[4rem]" />
								<p>Lagos, Nigeria</p>
							</div>
							<div className="flex items-center gap-[1rem] sm:gap-[2rem] xl:gap-[2.5rem]">
								<MdEmail className="text-[var(--accent-hover-color)] text-[2.5rem] sm:text-[2.8rem] xl:text-[3rem] 2xl:text-[4rem]" />
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
							className="lg:w-full flex flex-col gap-[2rem] sm:gap-[3rem] xl:gap-[3.5rem] 2xl:gap-[4.5rem] text-[1.2rem] sm:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem]">
							<div className="flex gap-[2rem] sm:gap-[3rem] xl:gap-[3.5rem] 2xl:gap-[5rem]">
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
								className="h-[10rem] sm:h-[15rem] xl:h-[18rem] 2xl:h-[23rem] resize-none p-[1rem] xl:p-[1.5rem] 2xl:p-[2rem] w-full border-[var(--light-gray-color)] border-solid border-[1px] outline-0 hover:border-gray-400 focus:border-[2px] focus:border-[var(--accent-color)]"
								required
							/>

							<button
								className="outline-0 text-white bg-[var(--accent-color)] font-medium py-[1rem] sm:py-[1.5rem] xl:py-[1.7rem] 2xl:py-[2.5rem] mt-[1rem] sm:mt-[2rem] xl:mt-[2.5rem] 2xl:mt-[3rem] hover:bg-[var(--accent-hover-color)] text-[1.3rem] sm:text-[1.8rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2.5rem] active:translate-y-[2px]"
								type="submit">
								Send Message
							</button>
						</form>
					</main>
				</div>
			</section>
			{modal && (
				<section className="fixed h-screen z-50 top-0 left-0 w-full bg-[rgba(0,0,0,0.8)] flex justify-center items-center">
					<div className="mb-[10vh] sm:mb-[20vh] bg-white rounded-[4px] flex flex-col gap-[2rem] sm:gap-[2.5rem] lg:gap-[2rem] 2xl:gap-[3rem] w-[70%] sm:w-[40%] lg:w-[25%] xl:w-[20%] p-[2rem] text-[1.2rem] sm:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem] font-medium">
						<p className="text-center">{message}</p>
						<button
							onClick={() => setModal(false)}
							className="text-[1.3rem] sm:text-[1.8rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-[2.2rem] outline-0 border-0 h-[4rem] xl:h-[4.5rem] 2xl:h-[5.5rem] rounded-[4px] bg-[var(--accent-color)] hover:bg-[var(--accent-hover-color)] text-white cursor-pointer active:translate-y-[2px]">
							Close
						</button>
					</div>
				</section>
			)}
		</Fragment>
	);
}

export default Contact;
