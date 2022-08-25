import React from "react";
import {MdLocationOn, MdEmail} from "react-icons/md";

function Contact() {
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
							<MdEmail className='contact-icon' size={30} />
							<p>leahobot@gmail.com</p>
						</div>
					</div>
					<form className='contact-details'>
						<div className='input-details'>
							<input typeof='text' placeholder='Name' />
							<input typeof='email' placeholder='Email' />
						</div>

						<input typeof='text' placeholder='Subject' />
						<textarea placeholder='Type message here...' />

						<button className='btn btn-send'>Send Message</button>
					</form>
				</main>
			</div>
		</section>
	);
}

export default Contact;
