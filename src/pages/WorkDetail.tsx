import React, { FC } from 'react';
import NavWork from '../components/NavWork';
import Super_Admin from '../utils/Super_Admin.png';
import GithubSVG from '../components/GithubSVG';
import DemoSVG from '../components/DemoSVG';
import { Consumer } from '../utils/context/GlobalState';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {
	id: string;
}

const WorkDetail: FC<Props> = (props) => {
	return (
		<div className='container-fluid work'>
			<NavWork path='/works' />
			<div className='workdetail-sect'>
				<div className='detail-wrap'>
					<div className='row'>
						<Consumer>
							{(menus) =>
								menus.map((menu) => {
									if (menu.id == props.match.params.id) {
										return (
											<>
												<div className='col-lg-6 col-sm-12 img-wrap'>
													<img src={menu.image} alt='' />
												</div>
												<div className='col-lg-6 col-sm-12 workdet-info'>
													<h6>{menu.details.name}</h6>
													<p>{menu.details.description}</p>
													<div className='CTA-btn'>
														<a href={menu.details.github} target='_blank' className='github'>
															<GithubSVG /> <span>github</span>
														</a>
														{menu.details.demo && (
															<a href={menu.details.demo} target='_blank' className='demo'>
																<DemoSVG /> <span>demo</span>
															</a>
														)}
													</div>
												</div>
											</>
										);
									}
								})
							}
						</Consumer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkDetail;
