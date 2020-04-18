import React, { FC } from 'react';
import NavWork from '../components/NavWork';
import Super_Admin from '../utils/Super_Admin.png';
import GithubSVG from '../components/GithubSVG';
import DemoSVG from '../components/DemoSVG';

const WorkDetail: FC = () => {
	return (
		<div className='container-fluid work'>
			<NavWork path='/work' />
			<div className='workdetail-sect'>
				<div className='detail-wrap'>
					<div className='row'>
						<div className='col-lg-6 col-sm-12 img-wrap'>
							<img src={Super_Admin} alt='' />
						</div>
						<div className='col-lg-6 col-sm-12 workdet-info'>
							<h6>MakeMe Frontend</h6>
							<p>
								A personnel and businness management system built with react,
								redux, and laravel powered backend. It includes authorization &
								authentication (role-base), form inputs and validation with
								regex.
							</p>
							<div className='CTA-btn'>
								<a href='#' className='github'>
									<GithubSVG /> <span>github</span>
								</a>
								<a href='#' className='demo'>
									<DemoSVG /> <span>demo</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkDetail;
