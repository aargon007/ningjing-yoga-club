import React, { useState } from "react";
import "./Dashboard.css";
import {
	FaBook,
	FaCcAmazonPay,
	FaChalkboardTeacher,
	FaFolderPlus,
	FaHome,
	FaSearch,
	FaStar,
	FaUserAlt,
	FaUsers,
} from "react-icons/fa";
import { HiOutlineLogout, HiOutlineSun } from "react-icons/hi";
import { Link, Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import {
	MdDarkMode,
	MdOutlineCastForEducation,
	MdOutlineDuo,
	MdVideoSettings,
} from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useProfile from "../../Hooks/useProfile";
import useSelectedClass from "../../Hooks/Student/useSelectedClass";
import useEnrolledClass from "../../Hooks/Student/useEnrolledClass";
import useDarkMode from "../../Hooks/DarkMode/useDarkMode";

const Dashboard = () => {
	const { user, logOut } = useAuth();
	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();
	const [userProfile] = useProfile();
	const [selectedClasses] = useSelectedClass();
	const [enrolledClasses] = useEnrolledClass();
	const [isDarkMode, setIsDarkMode, toggleTheme] = useDarkMode();
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut()
			.then((result) => {
				setUser(null);
			})
			.catch((error) => {
				console.log(error.message);
			});
		navigate("/");
	};

	return (
		<div>
			<div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
				{/* header  */}
				<div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
					<div className="flex items-center justify-start pl-5 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
						<img
							className="w-8 h-8 md:w-10 md:h-10 mr-2 rounded-full overflow-hidden"
							src={
								userProfile?.photo
									? userProfile?.photo
									: "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
							}
						/>
						<span className="hidden md:block">
							{isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"}
						</span>
					</div>

					<div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
						<div className=" flex items-center w-full max-w-xl mr-4 p-2">
							{/* <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200"> */}
							{/* <button className="outline-none focus:outline-none">
								<FaSearch className="text-black"></FaSearch>
							</button>
							<input
								type="search"
								name=""
								id=""
								placeholder="Search"
								className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
							/> */}
						</div>

						<ul className="flex items-center">
							<li>
								<button
									onClick={toggleTheme}
									aria-hidden="true"
									className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-100 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
								>
									{/* <FaStar className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"></FaStar> */}
									{isDarkMode ? <HiOutlineSun /> : <MdDarkMode /> }
								</button>
							</li>

							<li>
								<div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
							</li>

							<li>
								<button
									onClick={handleLogOut}
									className="flex items-center mr-4 hover:text-blue-100"
								>
									<span className="inline-flex mr-1">
										<HiOutlineLogout></HiOutlineLogout>
									</span>
									Logout
								</button>
							</li>
						</ul>
					</div>
				</div>

				{/* sidebar  */}
				{/* <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar"> */}
				<div className="fixed flex flex-col top-14 left-0 w-14 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
					<div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
						<ul className="flex flex-col py-4 space-y-1">
							{/* for all user  */}
							<li className="px-5 hidden md:block">
								<div className="flex flex-row items-center h-8">
									<div className="text-sm font-light tracking-wide text-gray-400 uppercase">
										Main
									</div>
								</div>
							</li>
							<li>
								<Link
									to="/"
									className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
								>
									<span className="inline-flex justify-center items-center ml-4">
										<FaHome className="w-5 h-5"></FaHome>
									</span>
									<span className="ml-2 text-sm tracking-wide truncate">
										Home
									</span>
								</Link>
							</li>
							<li>
								<Link
									to="/dashboard"
									className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
								>
									<span className="inline-flex justify-center items-center ml-4">
										<RxDashboard className="w-5 h-5"></RxDashboard>
									</span>
									<span className="ml-2 text-sm tracking-wide truncate">
										Dashboard
									</span>
									{/* <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">
										New
									</span> */}
								</Link>
							</li>

							{/* students only  */}
							{isAdmin === false && isInstructor === false && (
								<>
									<li>
										<Link
											to="/dashboard/selected-classes"
											className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
										>
											<span className="inline-flex justify-center items-center ml-4">
												<MdOutlineCastForEducation className="w-5 h-5"></MdOutlineCastForEducation>
											</span>
											<span className="ml-2 text-sm tracking-wide truncate">
												My Selected Classes
											</span>
											<span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
												{selectedClasses ? selectedClasses?.length : "0"}
											</span>
										</Link>
									</li>
									<li>
										<Link
											to="/dashboard/enrolled-classes"
											className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
										>
											<span className="inline-flex justify-center items-center ml-4">
												<FaBook className="w-5 h-5"></FaBook>
											</span>
											<span className="ml-2 text-sm tracking-wide truncate">
												My Enrolled Classes
											</span>
											<span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
												{enrolledClasses ? enrolledClasses.length : "0"}
											</span>
										</Link>
									</li>
									<li>
										<Link
											to="/dashboard/payment-history"
											className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
										>
											<span className="inline-flex justify-center items-center ml-4">
												<FaCcAmazonPay className="w-5 h-5"></FaCcAmazonPay>
											</span>
											<span className="ml-2 text-sm tracking-wide truncate">
												Payment History
											</span>
										</Link>
									</li>
								</>
							)}

							{/* Instructor menu */}
							{isInstructor && (
								<>
									<li>
										<Link
											to="/dashboard/add-class"
											className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
										>
											<span className="inline-flex justify-center items-center ml-4">
												<FaFolderPlus className="w-5 h-5"></FaFolderPlus>
											</span>
											<span className="ml-2 text-sm tracking-wide truncate">
												Add a Class
											</span>
										</Link>
									</li>
									<li>
										<Link
											to="/dashboard/my-classes"
											className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
										>
											<span className="inline-flex justify-center items-center ml-4">
												<FaChalkboardTeacher className="w-5 h-5"></FaChalkboardTeacher>
											</span>
											<span className="ml-2 text-sm tracking-wide truncate">
												My Classes
											</span>
										</Link>
									</li>
								</>
							)}

							{/* admin menu */}
							{isAdmin && (
								<>
									<li>
										<Link
											to="/dashboard/manage-classes"
											className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
										>
											<span className="inline-flex justify-center items-center ml-4">
												<MdVideoSettings className="w-5 h-5"></MdVideoSettings>
											</span>
											<span className="ml-2 text-sm tracking-wide truncate">
												Manage Classes
											</span>
										</Link>
									</li>
									<li>
										<Link
											to="/dashboard/manage-users"
											className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
										>
											<span className="inline-flex justify-center items-center ml-4">
												<FaUsers className="w-5 h-5"></FaUsers>
											</span>
											<span className="ml-2 text-sm tracking-wide truncate">
												Manage Users
											</span>
										</Link>
									</li>
								</>
							)}

							{/* profile  */}
							<li className="px-5 hidden md:block">
								<div className="flex flex-row items-center mt-5 h-8">
									<div className="text-sm font-light tracking-wide text-gray-400 uppercase">
										Settings
									</div>
								</div>
							</li>
							<li>
								<Link
									to="/dashboard/profile"
									className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
								>
									<span className="inline-flex justify-center items-center ml-4">
										<FaUserAlt className="w-5 h-5"></FaUserAlt>
									</span>
									<span className="ml-2 text-sm tracking-wide truncate">
										Profile
									</span>
								</Link>
							</li>
						</ul>
						<p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
							Copyright @2023.{" "}
							<a target="_blank" href="https://muhaiminul101.vercel.app">
								Muhaiminul
							</a>
						</p>
					</div>
				</div>

				<div className="h-full ml-10 mt-10 mb-10 md:ml-64 px-10 py-10">
					<Outlet></Outlet>
					<ScrollRestoration></ScrollRestoration>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
