import React, {Fragment, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {MdLocationOn, MdEmail} from "react-icons/md";

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

	return (
		<Fragment>
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
									type='text'
									placeholder='Name'
									name='user_name'
									required
								/>
								<input
									type='email'
									placeholder='Email'
									name='user_email'
									required
								/>
							</div>

							<input
								type='text'
								placeholder='Subject'
								name='subject'
								required
							/>
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
			{modal && (
				<section className='contact-modal'>
					<div className='contact-modal-box'>
						<p className='contact-message'>{message}</p>
						<button onClick={() => setModal(false)} className='modal-button'>
							Close
						</button>
					</div>
				</section>
			)}
		</Fragment>
	);
}

export default Contact;
