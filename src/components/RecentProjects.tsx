'use client';

import { FaLocationArrow } from 'react-icons/fa6';

import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';

const RecentProjects = () => {
	return (
		<div className="py-20" id="projects">
			<h1 className="heading">
				A small selection of{' '}
				<span className="text-purple">recent projects</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-y-8 gap-x-24 mt-10">
				{projects.map(
					({ id, title, des, img, iconLists, githubLink, liveSiteLink }) => (
						<div
							className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
							key={id}
						>
							<PinContainer
								title={githubLink} 
								imgLink={githubLink} 
								liveSiteLink={liveSiteLink} 
							>
								<div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
									<div
										className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"
										style={{ backgroundColor: '#13162D' }}
									>
										<img
											src="/bg.png"
											alt="bg-img"
											className="absolute inset-0 w-full h-full object-cover"
										/>
									</div>
									<img
										src={img}
										alt="cover"
										className="z-10 absolute bottom-0 cursor-pointer"
										onClick={() => window.open(githubLink, '_blank')} // Click handler for the image
									/>
								</div>
								<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
									{title}
								</h1>
								<p
									className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
									style={{ color: '#BEC1DD', margin: '1vh 0' }}
								>
									{des}
								</p>
								<div className="flex items-center justify-between mt-7 mb-3">
									<div className="flex items-center">
										{iconLists.map((icon, index) => (
											<div
												key={index}
												className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
												style={{
													transform: `translateX(-${5 * index + 2}px)`,
												}}
											>
												<img src={icon} alt="icon" className="p-2" />
											</div>
										))}
									</div>

									<a
										href={liveSiteLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex justify-center items-center"
									>
										<p className="flex lg:text-xl md:text-xs text-sm text-purple">
											Check Live Site
										</p>
										<FaLocationArrow className="ms-3" color="#CBACF9" />
									</a>
								</div>
							</PinContainer>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default RecentProjects;
