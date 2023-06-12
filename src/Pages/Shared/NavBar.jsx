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
			<nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
				<div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
					<div className="flex items-center">
						<svg
							className="h-6 w-6"
							viewBox="0 0 45 45"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8217 30.785C10.1966 30.5609 9.59107 30.2824 8.99182 29.9754C8.39336 29.6674 7.80508 29.3243 7.22933 28.9462C6.0794 28.1901 4.97725 27.291 3.9785 26.2065C2.98289 25.1221 2.08989 23.8403 1.42719 22.3501C1.26191 21.9785 1.10916 21.5949 0.975996 21.2002C0.906279 21.0038 0.848313 20.8028 0.785646 20.6017C0.73003 20.3988 0.67128 20.196 0.62428 19.9894C0.421397 19.165 0.299981 18.3093 0.242798 17.4461V15.9393L1.46558 15.8573L1.50788 15.8545L1.53529 15.8536L1.58308 15.8527L1.67003 15.8536C1.72564 15.8554 1.77813 15.8582 1.83061 15.861C1.93401 15.8674 2.03349 15.8785 2.13219 15.8895C2.32802 15.9135 2.51837 15.9467 2.70559 15.9855C3.08002 16.0638 3.44192 16.169 3.7952 16.2944C4.50177 16.547 5.1723 16.8864 5.8021 17.2912C7.06326 18.1027 8.15209 19.1788 9.0631 20.3878C9.97412 21.5995 10.712 22.9412 11.3167 24.3355C11.923 25.7307 12.3954 27.1822 12.7761 28.653L12.6609 28.7065C12.0821 27.3352 11.4225 26.0193 10.6611 24.8113C9.90205 23.6033 9.04039 22.5032 8.08002 21.5893C7.12044 20.6773 6.05981 19.9562 4.95062 19.5053C4.3968 19.2803 3.83124 19.1208 3.27037 19.0368C2.98994 18.9953 2.71029 18.9714 2.43847 18.9704C2.30296 18.9695 2.16823 18.9741 2.03976 18.9843C1.97553 18.9898 1.91286 18.9963 1.85411 19.0046C1.82513 19.0092 1.79693 19.0138 1.77108 19.0184C1.75933 19.0212 1.74601 19.0239 1.73661 19.0267C1.73113 19.0276 1.72643 19.0295 1.72408 19.0304C1.72251 19.0313 1.72016 19.0313 1.72094 19.0322C1.72251 19.0322 1.71703 19.0341 1.73269 19.0322L2.95547 17.4443C2.84972 18.7491 2.96801 20.0853 3.32912 21.3809C3.6871 22.6766 4.28087 23.9215 5.03052 25.0612C5.78173 26.201 6.68256 27.2412 7.67034 28.1707C8.16462 28.6355 8.68084 29.0744 9.21585 29.4848C9.75087 29.8933 10.3039 30.2815 10.8757 30.6162L10.8217 30.785Z"
								fill="#375B26"
							/>
							<path
								d="M33.9605 30.6181C34.5324 30.2833 35.0854 29.8951 35.6204 29.4866C36.1554 29.0762 36.6716 28.6373 37.1659 28.1725C38.1537 27.243 39.0545 26.2038 39.8058 25.0631C40.5554 23.9233 41.1492 22.6784 41.5071 21.3828C41.8683 20.0881 41.9865 18.751 41.8808 17.4461L43.1036 19.0341C43.1185 19.035 43.1138 19.0341 43.1153 19.0341C43.1169 19.0341 43.1138 19.0331 43.1122 19.0322C43.1098 19.0313 43.1051 19.0294 43.0997 19.0285C43.0903 19.0258 43.0769 19.023 43.0652 19.0202C43.0393 19.0156 43.0111 19.011 42.9822 19.0064C42.9234 18.9981 42.86 18.9916 42.7965 18.9861C42.668 18.976 42.5341 18.9714 42.3978 18.9723C42.126 18.9741 41.8463 18.9972 41.5659 19.0387C41.0043 19.1226 40.4395 19.2821 39.8857 19.5071C38.7765 19.958 37.7166 20.6792 36.7562 21.5912C35.7959 22.505 34.9342 23.6051 34.1752 24.8132C33.4138 26.0212 32.7534 27.3371 32.1753 28.7083L32.0602 28.6548C32.4409 27.1831 32.914 25.7325 33.5195 24.3373C34.1243 22.943 34.8622 21.6013 35.7732 20.3896C36.6842 19.1816 37.773 18.1045 39.0342 17.293C39.664 16.8882 40.3345 16.5489 41.0411 16.2962C41.3943 16.1708 41.757 16.0647 42.1307 15.9873C42.3179 15.9486 42.5082 15.9154 42.7041 15.8914C42.8028 15.8794 42.9023 15.8692 43.0057 15.8628C43.0574 15.8591 43.1106 15.8563 43.1662 15.8554L43.2532 15.8545L43.3018 15.8554L43.3292 15.8563L43.3715 15.8591L44.5943 15.9412V17.448C44.5371 18.3102 44.4157 19.1668 44.2128 19.9912C44.1658 20.1978 44.1062 20.4007 44.0514 20.6036C43.9895 20.8046 43.9316 21.0056 43.8611 21.202C43.7287 21.5967 43.5759 21.9803 43.4099 22.3519C42.7472 23.8421 41.8542 25.1239 40.8585 26.2084C39.8598 27.2928 38.7584 28.1919 37.6077 28.9481C37.032 29.3261 36.4445 29.6692 35.8452 29.9772C35.246 30.2843 34.6405 30.5627 34.0154 30.7868L33.9605 30.6181Z"
								fill="#375B26"
							/>
							<path
								d="M10.7402 38.8242C10.7402 38.8242 15.6384 37.8855 19.3577 42.1947C19.3577 42.1947 7.65314 48.8775 0 38.7698C0 38.7698 2.05389 33.8188 9.97337 33.2443C17.9837 32.6634 21.8165 37.0002 25.1998 38.8952C27.386 40.1199 33.373 44.6402 41.8134 38.8952C41.8134 38.8952 38.3198 34.8138 30.6133 36.4156C30.6133 36.4156 31.7069 37.7979 34.2135 38.661C34.2135 38.661 29.36 39.9317 25.5468 35.3487C25.5468 35.3487 30.4802 31.8795 36.7601 33.4804C43.0401 35.0812 45 38.6601 45 38.6601C45 38.6601 42.9602 43.7144 35.4003 44.3414C29.5778 44.8247 26.3183 42.8974 25.1269 41.9854C24.5386 41.5353 23.9339 41.1167 23.3104 40.7377C21.0943 39.3895 17.0954 37.0878 15.6 36.6812C14.2363 36.3105 9.28012 34.1213 3.23986 38.6979C3.23986 38.6979 5.91963 42.5672 14.5997 41.2495C14.5997 41.2495 12.3602 39.1774 10.7402 38.8242Z"
								fill="#375B26"
							/>
							<path
								d="M27.2537 7.40853C24.747 4.04915 22.4801 0 22.4801 0L16.88 8.61747C16.88 8.61747 12.56 15.4451 14.7604 23.6854C16.9599 31.9257 20.6455 34.137 22.4801 34.1859C24.3201 34.2356 29.2802 29.6655 30.3204 23.2925C31.3599 16.9205 29.7603 10.767 27.2537 7.40853ZM27.0532 19.7957C26.4476 24.5282 23.5297 28.2011 22.4934 27.8857C21.5792 27.6082 19.3812 26.6621 18.102 20.5418C16.8229 14.4215 19.2363 8.89596 19.2363 8.89596L22.4934 2.49533C22.4934 2.49533 23.8117 5.50338 25.2695 7.99779C26.7273 10.4931 27.6579 15.0624 27.0532 19.7957Z"
								fill="#375B26"
							/>
							<path
								d="M22.4698 23.4732C23.8451 23.4732 24.96 22.1608 24.96 20.5417C24.96 18.9227 23.8451 17.6102 22.4698 17.6102C21.0945 17.6102 19.9796 18.9227 19.9796 20.5417C19.9796 22.1608 21.0945 23.4732 22.4698 23.4732Z"
								fill="#375B26"
							/>
						</svg>
						<span className="self-center text-xl ms-2 font-semibold whitespace-nowrap dark:text-white">
							Ningjing Yoga Club
						</span>
					</div>
					<div className="flex items-center gap-3 lg:order-2">
						<div className="hidden mt-2 mr-4 sm:inline-block">
							<span></span>
						</div>

						{user && (
							<div
								className="lg:flex hidden justify-center items-center gap-2 bg-blue-50 py-1 px-2 rounded-lg"
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
								{user?.displayName ? (
									<p className="">{user?.displayName}</p>
								) : (
									<p>user</p>
								)}
							</div>
						)}

						{user ? (
							<button
								onClick={handleLogOut}
								className="hidden lg:block text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 "
							>
								Log Out
							</button>
						) : (
							<Link
								to="/login"
								className="hidden lg:block text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700"
							>
								Login
							</Link>
						)}

						<span className="sr-only">Open main menu</span>
						{open ? (
							<HiX
								onClick={() => setOpen(!open)}
								className="block lg:hidden h-6 w-6"
								aria-hidden="true"
							/>
						) : (
							<HiMenu
								onClick={() => setOpen(!open)}
								className="block lg:hidden h-6 w-6"
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
									className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-100 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
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
