import React, { FC } from 'react';
import NavWork from '../components/NavWork';
import { Consumer } from '../utils/context/GlobalState';

const Work: FC = () => {
	return (
		<div className='container-fluid work'>
			<NavWork path='/' />
			<div className='work-sect'>
				<h1 className='text-center'>Work</h1>
				<div className='work-wrap'>
					<div className='row'>
						<Consumer>
							{(menus) =>
								menus.map((menu) => (
									<div
										key={menu.id}
										className='col-lg-6 col-md-6 col-sm-12 mb-3 p-5 row  justify-content-center align-items-center img-med'
									>
										<a
											href={`/workdetails/${menu.id}`}
											className='image-wrap'
										>
											<img
												src={menu.image}
												alt={menu.name}
											/>
											<div className='text-container'>
												<div>
													<h6>{menu.name}</h6>
													<p>{menu.description}</p>
												</div>
											</div>
										</a>
									</div>
								))
							}
						</Consumer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
