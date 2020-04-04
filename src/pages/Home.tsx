import React from 'react';
import HomeSVG from '../components/HomeSVG';
import Nav from '../components/Nav';
import GithubSVG from '../components/GithubSVG';
import LinkedinSVG from '../components/LinkedinSVG';
import BehanceSVG from '../components/BehanceSVG';
import TwitterSVG from '../components/TwitterSVG';

const Home = () => {
	return (
		<div className='container-fluid home'>
			<Nav />
			<div className='row'>
				<div className='col-lg-6 col-md-6 col-sm-12 pl-0 hero-sect'>
					<div className='svg-container'>
						<HomeSVG />
					</div>
					<div className='title-cont'>
						<h1>
							Frontend Developer & <br /> UI Designer
						</h1>
						<p>
							<span>Hello World!!!</span> My name is Demola Malomo. I’m a
							frontend and user interface designer from Lagos, Nigeria. I like
							to design and build scalable frontend applications.
						</p>
						<a href='mailto:malomo.alaba@yahoo.com, demlabz@gmail.com'>
							say hello{' '}
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M2 11V9H14L10 5L11 3L18 10L11 17L10 15L14 11H2Z'
									fill='white'
								/>
							</svg>
						</a>
					</div>
				</div>
				<div className='col-lg-6 col-md-6 col-sm-12 p-5 sect-socials'>
					<div className='row h-100 justify-content-center align-items-center'>
						<div className='col-lg-3 sm-grid'>
							<a
								href='https://github.com/Mr-Malomz'
								target='_blank'
								rel='noopener noreferrer'
								className='soc-icon'
							>
								<GithubSVG />
							</a>
						</div>
						<div className='col-lg-3 sm-grid'>
							<a
								href='https://www.linkedin.com/in/malomoademola/'
								target='_blank'
								rel='noopener noreferrer'
								className='soc-icon'
							>
								<LinkedinSVG />
							</a>
						</div>
						<div className='col-lg-3 sm-grid'>
							<a
								href='https://www.behance.net/ademolamalomo'
								target='_blank'
								rel='noopener noreferrer'
								className='soc-icon'
							>
								<BehanceSVG />
							</a>
						</div>
						<div className='col-lg-3 sm-grid'>
							<a
								href='https://twitter.com/Malomz'
								target='_blank'
								rel='noopener noreferrer'
								className='soc-icon'
							>
								<TwitterSVG />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
