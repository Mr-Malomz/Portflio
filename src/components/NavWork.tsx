import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IPath {
	path: string;
}

const NavWork: FC<IPath> = ({ path }) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light'>
			<Link to={path}>
				<svg
					width='40'
					height='40'
					viewBox='0 0 60 60'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M28.5938 46.875L11.7188 30L28.5938 13.125'
						stroke='#4831D4'
						strokeWidth='5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M14.0625 30H48.2812'
						stroke='#4831D4'
						strokeWidth='5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<rect x='0.5' y='0.5' width='59' height='59' stroke='white' />
				</svg>
			</Link>
			<div className='link-container'>
				<Link className='navbar-brand work-main' to='/'>
					demola malomo
				</Link>
			</div>
		</nav>
	);
};

export default NavWork;
