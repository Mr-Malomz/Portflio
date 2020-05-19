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

			<div className='collapse navbar-collapse' id='navbarTogglerDemo02' style={{justifyContent: 'flex-end'}}>
				<Link className=' home-main-nav' to='/works'>Works</Link>
				<Link className=' home-main-nav' to='#'>Blog</Link>
				<Link className=' home-main-nav' to='#'>Resume</Link>
			</div>
		</nav>
	);
};

export default Nav;
