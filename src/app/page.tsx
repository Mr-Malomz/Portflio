import { Header } from '@/components/Header';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='p-4 min-h-screen bg-gradient bg-[#F4F4F4]'>
			<Header />
			<div className='w-full flex justify-center items-center mt-24 lg:mt-[120px]'>
				<section className='w-full lg:w-[690px]'>
					<h1 className='font-normal text-2xl text-black mb-[42px]'>
						About Demola
					</h1>
					<p className='mb-5 text-[#3F404D] leading-[23.09px] text-sm'>
						Hey there, I'm{' '}
						<span className='font-medium'>Demola</span>! I'm all
						about the perfect blend of Product, Design, and
						Engineering. With my love for innovation and an eye for
						detail, I've made quite a journey crafting user-focused
						solutions and crafting amazing digital experiences.
					</p>
					<p className='my-5 text-[#3F404D] leading-[23.09px] text-sm'>
						I'm open to collaborating with early-stage startups and
						companies, bridging the worlds of design and
						engineering. So, if you're all about innovation and
						growth,{' '}
						<Link
							href='mailto:demola.malomo@gmail.com,malomo.alaba@yahoo.com'
							className='underline hover:text-[#191A23] underline-offset-4'
						>
							let's connect and make magic together! 🔗💡
						</Link>
					</p>
					<p className='my-5 text-[#3F404D] leading-[23.09px] text-sm'>
						Find me elsewhere on:
					</p>
					<footer className='flex justify-between w-5/6 lg:w-[319px] items-center'>
						<Link
							href='https://www.behance.net/ademolamalomo'
							target='_blank'
							className='text-[#3F404D] leading-[23.09px] text-sm hover:text-[#191A23] hover:underline underline-offset-4'
						>
							Behance
						</Link>
						<Link
							href='https://www.linkedin.com/in/malomoademola/'
							target='_blank'
							className='text-[#3F404D] leading-[23.09px] text-sm hover:text-[#191A23] hover:underline underline-offset-4'
						>
							LinkedIn
						</Link>
						<Link
							href='https://github.com/Mr-Malomz'
							target='_blank'
							className='text-[#3F404D] leading-[23.09px] text-sm hover:text-[#191A23] hover:underline underline-offset-4'
						>
							GitHub
						</Link>
						<Link
							href='https://dev.to/malomz'
							target='_blank'
							className='text-[#3F404D] leading-[23.09px] text-sm hover:text-[#191A23] hover:underline underline-offset-4'
						>
							Blog
						</Link>
					</footer>
				</section>
			</div>
		</main>
	);
}
