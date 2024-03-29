'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
	const pathname = usePathname();
	return (
		<header className='w-full flex justify-center mt-6'>
			<nav className='w-full lg:w-[690px] flex justify-between'>
				<Link
					href='/'
					className={`inline-block font-normal text-sm ${
						pathname === '/' ? 'text-black' : 'text-[#797B8E]'
					}`}
				>
					Demola Malomo
				</Link>
				<Link
					href='/work'
					className={`inline-block font-normal text-sm ${
						pathname === '/work' ? 'text-black' : 'text-[#797B8E]'
					}`}
				>
					Work
				</Link>
			</nav>
		</header>
	);
};
