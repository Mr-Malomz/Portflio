import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const customFont = localFont({
	src: [
		{ path: 'fonts/circularstd-regular.ttf', weight: '400' },
		{ path: 'fonts/shellypalmer-circular-std-medium.ttf', weight: '500' },
	],
});

export const metadata: Metadata = {
	title: 'Demola Malomo',
	description:
		"I'm all about the perfect blend of Product, Design, and Engineering. With my love for innovation and an eye for detail, I've made quite a journey crafting user-focused solutions and crafting amazing digital experiences",
	keywords: 'Demola Malomo, Malomo, Product, Design, & Engineering',
	openGraph: {
		title: 'Demola Malomo | Product, Design, & Engineering',
		type: 'website',
		siteName: 'Demola Malomo',
		description:
			"I'm all about the perfect blend of Product, Design, and Engineering. With my love for innovation and an eye for detail, I've made quite a journey crafting user-focused solutions and crafting amazing digital experiences",
		images: [
			{
				url: 'https://res.cloudinary.com/dtgbzmpca/image/upload/v1697725985/DemolaMalomz.png',
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={customFont.className}>{children}</body>
		</html>
	);
}
