import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiOutlineSun, HiX } from "react-icons/hi";
import useAuth from "../../Hooks/useAuth";
import { MdDarkMode } from "react-icons/md";
import useDarkMode from "../../Hooks/DarkMode/useDarkMode";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { user, logOut, setUser } = useAuth();
	const [isDarkMode, setIsDarkMode, toggleTheme] = useDarkMode();

	const handleLogOut = () => {
		logOut()
			.then((result) => {
				setUser(null);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div>
			<nav className=" border-gray-200 py-2.5">
				<div className="flex flex-wrap items-center justify-between px-4 mx-auto">
					<div className="flex items-center">
						<img
							src="https://anahata.qodeinteractive.com/wp-content/uploads/2016/12/logo-default.png"
							alt="logo"
							className="h-8 w-8"
						/>
						<span className="self-center text-[#f7972f] text-xl ms-3 font-semibold whitespace-nowrap">
							Ningjing Yoga Club
						</span>
					</div>
					<div className="lg:hidden">
						<button
							onClick={toggleTheme}
							aria-hidden="true"
							className=" group p-2 transition-colors duration-200 rounded-full shadow bg-blue-200 hover:bg-blue-300 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
						>
							{/* <FaStar className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"></FaStar> */}
							{isDarkMode ? <HiOutlineSun /> : <MdDarkMode />}
						</button>
					</div>
					<div className="flex items-center gap-3 lg:order-2">
						<div className="hidden mt-2 mr-4 sm:inline-block">
							<span></span>
						</div>

						{user && (
							<Link
								to="/dashboard/profile"
								className="lg:flex hidden justify-center items-center gap-2 py-1 px-2 rounded-lg"
								title={user?.displayName}
							>
								{user?.photoURL ? (
									<img
										src={user?.photoURL}
										className="w-8 h-8 rounded-full"
										title={user?.displayName}
									/>
								) : (
									<img
										src="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
										className="w-8 h-8 rounded-full"
										title={user?.displayName}
									/>
								)}
							</Link>
						)}

						{user ? (
							<button
								onClick={handleLogOut}
								className="hidden lg:block text-white bg-purple-500 hover:bg-purple-600  font-medium rounded-lg text-sm px-4  py-2   dark:bg-purple-600 dark:hover:bg-purple-700 "
							>
								Log Out
							</button>
						) : (
							<Link
								to="/login"
								className="hidden lg:block text-white bg-purple-500 hover:bg-purple-600 font-medium rounded-lg text-sm px-4  py-2 dark:bg-purple-600 dark:hover:bg-purple-700"
							>
								Login
							</Link>
						)}

						<span className="sr-only">Open main menu</span>
						{open ? (
							<HiX
								onClick={() => setOpen(!open)}
								className="block lg:hidden h-8 w-8 dark:text-gray-100"
								aria-hidden="true"
							/>
						) : (
							<HiMenu
								onClick={() => setOpen(!open)}
								className="block lg:hidden h-8 w-8 dark:text-gray-100"
								aria-hidden="true"
							/>
						)}
					</div>
					<div className="mt-2 lg:mt-0 items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
						<ul
							className={`flex-col mt-4 font-medium ${
								open ? "" : "hidden lg:flex"
							} lg:flex-row lg:space-x-8 lg:mt-0 space-y-3 lg:space-y-0`}
						>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
									aria-current="home"
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/instructors"
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
									aria-current="instructors"
								>
									Instructors
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/classes"
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
									aria-current="classes"
								>
									Classes
								</NavLink>
							</li>
							{user && (
								<li>
									<NavLink
										to="/dashboard"
										className={({ isActive }) =>
											isActive ? "active" : "default"
										}
										aria-current="dashboard"
									>
										Dashboard
									</NavLink>
								</li>
							)}
							<li>
								{user ? (
									<button
										onClick={handleLogOut}
										className="lg:hidden block text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 "
									>
										Log Out
									</button>
								) : (
									<Link
										to="/login"
										className="lg:hidden block text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700"
									>
										Login
									</Link>
								)}
							</li>
							<li>
								<button
									onClick={toggleTheme}
									aria-hidden="true"
									className="group p-1.5 transition-colors duration-200 rounded-full shadow bg-blue-200 hover:bg-blue-300 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none hidden lg:block"
								>
									{/* <FaStar className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"></FaStar> */}
									{isDarkMode ? <HiOutlineSun /> : <MdDarkMode />}
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
