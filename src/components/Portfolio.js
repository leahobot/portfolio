import React from "react";
import jaysBank from "../images/jaysBank.webp";
import jaysStore from "../images/jaysStore.webp";
import bricksBreaker from "../images/bricks.JPG";
import ghFinder from "../images/github finder.JPG";
import typing from "../images/typing master.JPG";

function Portfolio() {
	return (
		<section className='max-width portfolio-page' name='portfolio'>
			<header className='portfolio-header'>
				<p className='portfolio-title'>A Few of My Work</p>
				<span>portfolioooooooooooooooo</span>
			</header>
			<main className='my-work-container'>
				<a
					href='https://leahobot.github.io/Text-to-Speech-App/'
					alt='my-work'
					target='_blank'
					rel='noreferrer'
					className='my-work work-1'>
					<div className='work-image'>
						<img src={jaysStore} alt='my-work' />
					</div>
					<div className='work-text'>
						<p>Highly Responsive Ecommerce App</p>
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
					href='https://leahobot.github.io/typing-master/'
					alt='my-work'
					target='_blank'
					rel='noreferrer'
					className='my-work work-3'>
					<div className='work-image'>
						<img src={typing} alt='my-work' />
					</div>
					<div className='work-text'>
						<p>Typing Master Web Application</p>
						<div></div>
					</div>
				</a>
				<a
					href='https://leahobot.github.io/github-profile-finder/'
					alt='my-work'
					target='_blank'
					rel='noreferrer'
					className='my-work work-4'>
					<div className='work-image'>
						<img src={ghFinder} alt='my-work' />
					</div>
					<div className='work-text'>
						<p>Github Users Finder</p>
						<div></div>
					</div>
				</a>
				<a
					href='https://leahobot.github.io/brick-breaker/'
					alt='my-work'
					target='_blank'
					rel='noreferrer'
					className='my-work work-5'>
					<div className='work-image'>
						<img src={bricksBreaker} alt='my-work' />
					</div>
					<div className='work-text'>
						<p>Bricks Breaker Web Application</p>
						<div></div>
					</div>
				</a>
			</main>
		</section>
	);
}

export default Portfolio;