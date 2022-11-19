import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import {MdLocationOn, MdEmail} from "react-icons/md";
import {toast} from "react-toastify";

function Contact() {
	const form = useRef();

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
					// console.log(result.text);
					e.target.reset();
					toast.info(
						"Message sent successfully, you will be contacted shortly",
					);
				},
				(error) => {
					// console.log(error.text);
					toast.error("Failed to send message, Try Again");
				},
			);
	};

	return (
		<section className='contact' name='contact'>
			<div className='max-width'>
				<header className='contact-header'>
					<p className='contact-title'>Get in Touch</p>
					<span>get in touchhhhhh</span>
				</header>
				<main className='contact-container'>
					<div className='contact-info'>
						<div className=' contact-me'>
							<MdLocationOn className='contact-icon' size={30} />
							<p>Lagos, Nigeria</p>
						</div>
						<div className='contact-me'>
							<MdEmail size={30} className='contact-icon' />
							<a
								href='mailto:leahobot@gmail.com'
								target='_blank'
								rel='noreferrer'>
								leahobot@gmail.com
							</a>
						</div>
					</div>
					<form ref={form} onSubmit={handleForm} className='contact-details'>
						<div className='input-details'>
							<input
								typeof='text'
								placeholder='Name'
								name='user_name'
								required
							/>
							<input
								typeof='email'
								placeholder='Email'
								name='user_email'
								required
							/>
						</div>

						<input typeof='text' placeholder='Subject' name='subject' />
						<textarea
							placeholder='Type your message here...'
							name='message'
							required
						/>

						<button className='btn btn-send' type='submit'>
							Send Message
						</button>
					</form>
				</main>
			</div>
		</section>
	);
}

export default Contact;
