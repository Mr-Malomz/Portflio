import React from 'react';

const Nav = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light'>
			<a className='navbar-brand home-main' href='#'>
				demola malomo
			</a>
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
				<a className=' home-main-nav' href='#'>Work</a>
				<a className=' home-main-nav' href='#'>Blog</a>
				<a className=' home-main-nav' href='#'>Resume</a>
			</div>
		</nav>
	);
};

export default Nav;
