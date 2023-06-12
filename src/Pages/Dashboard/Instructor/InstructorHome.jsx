import React from "react";
import useProfile from "../../../Hooks/useProfile";
import { FaChalkboardTeacher, FaStar, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import useInstructorClass from "../../../Hooks/useInstructorClass";

const InstructorHome = () => {
	const [userProfile] = useProfile();
	const [instructorClasses] = useInstructorClass()

	return (
		<div>
			<div className="max-w-2xl sm:mx-auto bg-white dark:bg-gray-700 shadow-xl rounded-lg text-gray-900 dark:text-gray-100">
				<div className="rounded-t-lg h-28 overflow-hidden">
					<img
						className="object-cover object-top w-full"
						src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
						alt="Mountain"
					/>
				</div>
				<div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
					<img
						className="object-cover h-35"
						src={userProfile?.photo}
						alt="user"
					/>
				</div>
				<div className="text-center mt-2">
					<h2 className="font-semibold">{userProfile?.name}</h2>
					<p className="text-gray-500 dark:text-gray-100">{userProfile?.role}</p>
				</div>
				<ul className="py-4 mt-2 text-gray-700 dark:text-gray-100 flex items-center justify-around">
					<li className="flex flex-col items-center justify-around">
						<FaStar className="w-4 fill-current text-blue-900 dark:text-gray-100"></FaStar>
						<div>30</div>
					</li>
					<li className="flex flex-col items-center justify-between">
						<FaUserFriends className="w-4 fill-current text-blue-900 dark:text-gray-100"></FaUserFriends>
						<div>550</div>
					</li>
					<li className="flex flex-col items-center justify-around">
						<FaChalkboardTeacher className="w-4 fill-current text-blue-900 dark:text-gray-100"></FaChalkboardTeacher>
						<div>{instructorClasses ? instructorClasses.length : "0"}</div>
					</li>
				</ul>
			</div>

			<div className="container relative z-40 mx-auto mt-12 shadow-xl">
				<div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
					<Link to='/dashboard/profile'
						className="block w-1/2 py-10 text-center bg-white dark:bg-gray-700  border lg:w-1/3 border-gray  hover:bg-gradient-to-l from-green-200 to-green-300 dark:from-gray-500 dark:to-gray-700 relative overflow-hidden"
					>
						<div>
							<img
								src="https://redpixelthemes.com/assets/images/icon-portfolio-green.svg"
								alt="profile"
								className="block mx-auto"
							/>
							<div>
								<p className="pt-4 text-sm font-medium lg:text-lg md:text-base md:pt-6 text-gray-700 dark:text-gray-100">
									Profile
								</p>
							</div>
						</div>
					</Link>

					<Link to='/dashboard/add-class'
						className="block w-1/2 py-10 text-center bg-white dark:bg-gray-700 border lg:w-1/3 border-gray  hover:bg-gradient-to-l from-green-200 to-green-300 dark:from-gray-500 dark:to-gray-700 relative overflow-hidden"
					>
						<div>
							<img
								src="https://redpixelthemes.com/assets/images/icon-landing-page-green.svg"
								alt="add class"
								className="block mx-auto"
							/>
							<div>
								<p className="pt-4 text-sm font-medium lg:text-lg md:text-base md:pt-6 text-gray-700 dark:text-gray-100">
									Add Class
								</p>
							</div>
						</div>
					</Link>

					<Link to='/dashboard/my-classes'
						className="block w-full py-10 text-center bg-white dark:bg-gray-700 border lg:w-1/3 border-gray  hover:bg-gradient-to-l from-green-200 to-green-300 dark:from-gray-500 dark:to-gray-700 relative overflow-hidden"
					>
						<div>
							<img
								src="https://redpixelthemes.com/assets/images/icon-business-green.svg"
								alt="manage class"
								className="block mx-auto"
							/>
							<div>
								<p className="pt-4 text-sm font-medium lg:text-lg md:text-base md:pt-6 text-gray-800 dark:text-gray-100">
									My Classes
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default InstructorHome;
