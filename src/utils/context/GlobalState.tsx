import React, { createContext } from 'react';
import Super_Admin from '../Super_Admin.png';
import raphael_github from '../raphael_github.png';
import netflix_clone from '../Netflix_clone.png';
import gallerypix from '../gallerypix.png';
import codepen from '../codepen.png';

export const menus = [
	{
		id: 1,
		name: 'MakeMe',
		description: 'MakeMe is a personnel and business management software',
		details: {
			name: 'MakeMe Frontend',
			description:
				'A personnel and businness management system built with react, redux, and laravel powered backend. It includes authorization & authentication (role-base), form inputs and validation with regex.',
			github: 'https://github.com/Mr-Malomz/MakeMe-Project',
			demo: null,
		},
		image: Super_Admin,
	},
	{
		id: 2,
		name: 'Netflix Clone',
		description:
			'Netflix Clone is a clone of netflix core functional UIs built with reactjs',
		details: {
			name: 'Netflix Clone',
			description:
				'Netflix clone is a clone of netflix UI built with react, react-loadables and styled-components to implement component based styling',
			github: 'https://github.com/Mr-Malomz/netflix-clone',
			demo: 'https://netflix-cloned.netlify.app/',
		},
		image: netflix_clone,
	},
	{
		id: 3,
		name: 'GalleryPix',
		description:
			'Gallerypix is a web application that let’s users search for the top 10 pictures',
		details: {
			name: 'GalleryPix',
			description:
				'GalleryPix is web application that let’s users search for the top 10 pictures using unsplash api. It integrates the use of both functional and class-based component management',
			github: 'https://github.com/Mr-Malomz/gallery',
			demo: 'https://gallerypix.netlify.app/',
		},
		image: gallerypix,
	},
	{
		id: 4,
		name: 'Acme Industry',
		description:
			'Acme is a basic crud web application built on Django framework',
		details: {
			name: 'Acme Industry',
			description:
				'A basic CRUD app built with django framewwork. It involves the use of django templating engine for code splitting and reuseability, django-orm for database operations and View methodology for handling forms',
			github: 'https://github.com/Mr-Malomz/acme',
			demo: null,
		},
		image: raphael_github,
	},
	{
		id: 5,
		name: 'Codepen Link',
		description: 'Collection of mini apps hosted on codepen',
		details: {
			name: 'Codepen Link',
			description:
				'Codepen Link highlights my journey into software develpment. It showcases collection of mini projects using html, css, svg, javascript,  jquery, react, redux e.t.c.',
			github:
				'https://github.com/Mr-Malomz?tab=repositories&q=&type=&language=',
			demo: 'https://codepen.io/malomz',
		},
		image: codepen,
	},
];

const MenuContext = createContext(menus);

export const Provider = MenuContext.Provider;

export const Consumer = MenuContext.Consumer;
