import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Nav: FC = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light'>
			<Link className='navbar-brand home-main' to='#'>
				demola malomo
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarTogglerDemo02'
				aria-controls='navbarTogglerDemo02'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div
				className='collapse navbar-collapse'
				id='navbarTogglerDemo02'
				style={{ justifyContent: 'flex-end' }}
			>
				<Link className=' home-main-nav' to='/works'>
					Works
				</Link>
				<a
					className=' home-main-nav'
					href='https://medium.com/@demlabz'
					target='_blank'
					rel='noopener noreferrer'
				>
					Blog
				</a>
				<a
					className=' home-main-nav'
					href='https://drive.google.com/file/d/1SNXx9LXmOAsTgN1waXM0I2_76vXdMaj4/view?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'
				>
					Resume
				</a>
			</div>
		</nav>
	);
};

export default Nav;
