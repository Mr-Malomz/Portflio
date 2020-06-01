import React, { FC, useRef, useEffect } from 'react';
import NavWork from '../components/NavWork';
import GithubSVG from '../components/GithubSVG';
import DemoSVG from '../components/DemoSVG';
import { Consumer } from '../utils/context/GlobalState';
import { RouteComponentProps } from 'react-router-dom';
import { gsap } from 'gsap';

interface Props extends RouteComponentProps<any> {
	id: string;
}

const WorkDetail: FC<Props> = (props) => {
	const tl = gsap.timeline({ repeatDelay: 1 });
	const imgContainer = useRef(null);
	const detailsCont = useRef(null);

	useEffect(() => {
		tl.fromTo(imgContainer.current, 1, { y: 50 }, { y: 0 });
		tl.fromTo(detailsCont.current, 1, { x: 50, opacity: 0 }, { x: 0, opacity: 1 });
		return () => {};
	}, []);

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
												<div
													className='col-lg-6 col-sm-12 img-wrap'
													ref={imgContainer}
												>
													<img
														src={menu.image}
														alt=''
													/>
												</div>
												<div
													className='col-lg-6 col-sm-12 workdet-info'
													ref={detailsCont}
												>
													<h6>{menu.details.name}</h6>
													<p>
														{
															menu.details
																.description
														}
													</p>
													<div className='CTA-btn'>
														<a
															href={
																menu.details
																	.github
															}
															target='_blank'
															className='github'
														>
															<GithubSVG />{' '}
															<span>github</span>
														</a>
														{menu.details.demo && (
															<a
																href={
																	menu.details
																		.demo
																}
																target='_blank'
																className='demo'
															>
																<DemoSVG />{' '}
																<span>
																	demo
																</span>
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
