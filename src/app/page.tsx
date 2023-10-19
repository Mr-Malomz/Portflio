import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex p-4 min-h-screen flex-col items-center justify-center bg-gradient bg-[#F4F4F4]'>
			<section className='w-full lg:w-[470px]'>
				<section className='h-[45px] w-[45px]'>
					<Image
						src='https://res.cloudinary.com/dtgbzmpca/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1675525846/passport.jpg'
						height={45}
						width={45}
						alt='profile picture of Demola'
						className='rounded-full w-[45px] h-[45px]'
					/>
				</section>
				<p className='mt-[42px] text-[#3F404D] leading-[23.09px] text-sm'>
					Hey there, I'm <span className='font-medium'>Demola</span>!
					I'm all about the perfect blend of Product, Design, and
					Engineering. With my love for innovation and an eye for
					detail, I've made quite a journey crafting user-focused
					solutions and crafting amazing digital experiences.
				</p>
				<p className='my-[42px] text-[#3F404D] leading-[23.09px] text-sm'>
					I'm open to collaborating with early-stage startups and
					companies, bridging the worlds of design and engineering.
					So, if you're all about innovation and growth,{' '}
					<Link
						href='mailto:demola.malomo@gmail.com,malomo.alaba@yahoo.com'
						className='underline hover:text-[#191A23]'
					>
						let's connect and make magic together! 🔗💡
					</Link>
				</p>

				<footer className='flex justify-between w-5/6 items-center'>
					<Link
						href='https://www.behance.net/ademolamalomo'
						target='_blank'
						className='text-[#3F404D] leading-[23.09px] text-sm hover:text-[#191A23] hover:underline'
					>
						Behance
					</Link>
					<Link
						href='https://www.linkedin.com/in/malomoademola/'
						target='_blank'
						className='text-[#3F404D] leading-[23.09px] text-sm hover:text-[#191A23] hover:underline'
					>
						LinkedIn
					</Link>
					<Link
						href='https://github.com/Mr-Malomz'
						target='_blank'
						className='text-[#3F404D] leading-[23.09px] text-sm hover:text-[#191A23] hover:underline'
					>
						GitHub
					</Link>
					<Link
						href='https://dev.to/malomz'
						target='_blank'
						className='text-[#3F404D] leading-[23.09px] text-sm hover:text-[#191A23] hover:underline'
					>
						Blog
					</Link>
				</footer>
			</section>
		</main>
	);
}
