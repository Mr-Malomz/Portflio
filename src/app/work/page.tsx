import { Header } from '@/components/Header';
import Image from 'next/image';
import { gql, useQuery, useSuspenseQuery } from '@apollo/client';
import { getClient } from '@/lib/apolloClient';
import Link from 'next/link';

interface CoverImage {
	url: string;
}

interface IWork {
	id: string;
	name: string;
	description: string;
	timeline: string[];
	coverImage: CoverImage;
}

const SELECTED_WORK = gql`
	query MyQuery {
		works {
			workList {
				... on SelectedWork {
					id
					name
					description
					timeline
					coverImage {
						url
					}
				}
			}
		}
	}
`;

export default async function Work() {
	const { loading, error, data } = await getClient().query({
		query: SELECTED_WORK,
	});

	if (loading) return <p className='text-sm text-center'>Loading...</p>;
	if (error)
		return (
			<p className='text-sm text-center text-red-700'>
				Oopps!, Looks like something went wrong{' '}
				<Link
					href='mailto:demola.malomo@gmail.com,malomo.alaba@yahoo.com'
					className='underline hover:text-[#191A23] underline-offset-4'
				>
					Let's inform Demola about this 🤒
				</Link>
			</p>
		);

	return (
		<main className='p-4 min-h-screen bg-gradient bg-[#F4F4F4]'>
			<Header />
			<div className='w-full flex justify-center items-center mt-24 lg:mt-[120px]'>
				<section className='w-full lg:w-[690px]'>
					<h1 className='font-normal text-2xl text-black mb-[42px]'>
						Work
					</h1>
					{data?.works[0].workList.map((work: IWork) => (
						<div className='my-[42px]' key={work.id}>
							<Image
								src={work.coverImage.url}
								height={393}
								width={689}
								alt=''
								className='mb-6'
							/>
							<div className='flex items-center mb-3'>
								<p className='text-black mr-[32px]'>
									{work.name}
								</p>
								<p className='text-[#797B8E] text-sm mr-[8px]'>
									{work.timeline[0]}
								</p>
								<p className='text-[#797B8E] text-sm mr-[8px]'>
									To
								</p>
								<p className='text-[#797B8E] text-sm mr-[8px]'>
									{work.timeline[1]}
								</p>
							</div>
							<p className='mb-5 text-[#3F404D] leading-[23.09px] text-sm'>
								{work.description}
							</p>
						</div>
					))}
				</section>
			</div>
		</main>
	);
}
