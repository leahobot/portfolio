import React from "react";
import jaysBank from "../images/jaysBank.webp";
import dashboard from "../images/admin-darkMode.JPG";
import jaysStore from "../images/jaysStore.webp";
import textSpeech from "../images/text2speech.webp";
import fruitHub from "../images/fruitHub.webp";

function Portfolio() {
	return (
		<section className='max-width portfolio-page' name='portfolio'>
			<header className='portfolio-header'>
				<p className='portfolio-title'>A Few of My Work</p>
				<span>portfolioooooooooooooooo</span>
			</header>
			<main className='my-work-container'>
				<a
					href='https://leahobot.github.io/jaysStore/'
					alt='my-work'
					target='_blank'
					rel='noreferrer'
					className='my-work work-1'>
					<div className='work-image'>
						<img src={jaysStore} alt='my-work' />
					</div>
					<div className='work-text'>
						<p>Highly Responsive Ecommerce Website</p>
						<div></div>
					</div>
				</a>
				<a
					href='https://leahobot.github.io/jaysBank/'
					alt='my-work'
					target='_blank'
					rel='noreferrer'
					className='my-work work-2'>
					<div className='work-image-2'>
						<img src={jaysBank} alt='my-work' />
					</div>
					<div className='work-text'>
						<p>A Modern Bank Website</p>
						<div></div>
					</div>
				</a>
				<a
					href='https://leahobot.github.io/fruitHub/'
					alt='my-work'
					target='_blank'
					rel='noreferrer'
					className='my-work work-3'>
					<div className='work-image'>
						<img src={fruitHub} alt='my-work' />
					</div>
					<div className='work-text'>
						<p>A Full-Stack Ecommerce Website</p>
						<div></div>
					</div>
				</a>
				<a
					href='https://jaysadmin.netlify.app/'
					alt='my-work'
					target='_blank'
					rel='noreferrer'
					className='my-work work-4'>
					<div className='work-image'>
						<img src={dashboard} alt='my-work' />
					</div>
					<div className='work-text'>
						<p>A Modern Admin-Dashboard</p>
						<div></div>
					</div>
				</a>
				<a
					href='https://leahobot.github.io/Text-to-Speech-App/'
					alt='my-work'
					target='_blank'
					rel='noreferrer'
					className='my-work work-5'>
					<div className='work-image'>
						<img src={textSpeech} alt='my-work' />
					</div>
					<div className='work-text'>
						<p>A Text-to-Speech Web Application</p>
						<div></div>
					</div>
				</a>
			</main>
		</section>
	);
}

export default Portfolio;
