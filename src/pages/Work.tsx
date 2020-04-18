import React, { FC } from 'react';
import NavWork from '../components/NavWork';
import Super_Admin from '../utils/Super_Admin.png';

const Work: FC = () => {
	return (
		<div className='container-fluid work'>
			<NavWork path='/' />
			<div className='work-sect'>
				<h1 className='text-center'>Work</h1>
				<div className='work-wrap'>
					<div className='row'>
						<div className='col-lg-6 col-md-6 col-sm-12 p-5 row  justify-content-center align-items-center img-med'>
							<a href='#' className='image-wrap'>
								<img src={Super_Admin} alt='' />
								<div className='text-container'>
									<div>
										<h6>Make Me</h6>
										<p>
											MakeMe is a personnel and business <br /> management
											software
										</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
