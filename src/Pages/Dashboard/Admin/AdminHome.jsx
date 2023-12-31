import React from "react";
import {
    FaArrowRight,
	FaBook,
	FaBookOpen,
	FaCcAmazonPay,
	FaDollarSign,
	FaFolderPlus,
	FaHome,
	FaSearch,
	FaStar,
	FaUserAlt,
	FaUsers,
} from "react-icons/fa";
import useUsers from "../../../Hooks/useUsers";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import UseClasses from "../../../Hooks/UseClasses";

const AdminHome = () => {

	const  [classes, refetch, loading] = UseClasses()
    const [users] = useUsers();

	return (
		<div>
			<h1 className="text-center text-2xl font-semibold">Welcome to Admin Dashboard</h1>
			<div className="mt-5 lg:mt-10">
				<div className="flex flex-wrap -mx-6">
					<div className="w-full px-6 sm:w-1/2 xl:w-1/3">
						<div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
							<div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
								<FaUsers className="h-8 w-8 text-white"></FaUsers>
							</div>

							<div className="mx-5">
								<h4 className="text-2xl font-semibold text-gray-700">{users.length}</h4>
								<div className="text-gray-500">New Users</div>
							</div>
						</div>
					</div>

					<div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
						<div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
							<div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                                <FaBookOpen className="h-8 w-8 text-white"></FaBookOpen>
							</div>

							<div className="mx-5">
								<h4 className="text-2xl font-semibold text-gray-700">{classes?.length}</h4>
								<div className="text-gray-500">Total Classes</div>
							</div>
						</div>
					</div>

					<div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
						<div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
							<div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
								<FaDollarSign className="h-8 w-8 text-white"></FaDollarSign>
							</div>

							<div className="mx-5">
								<h4 className="text-2xl font-semibold text-gray-700">$678</h4>
								<div className="text-gray-500">Payments Earned</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid gap-8 md:grid-cols-2 lg:gap-12 mt-12">
				<Link to='/dashboard/manage-classes'
					className="flex flex-col p-6 space-y-2 transition-all duration-500 bg-white dark:bg-slate-700 border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
				>
					<div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-gray-500 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                        <HiOutlineLightBulb className="w-10 h-10 text-green-500 dark:text-white"></HiOutlineLightBulb>
					</div>
					<div className="flex-1">
						<h5 className="mb-3 text-xl font-bold lg:text-2xl text-gray-700 dark:text-gray-100">Manage Classes</h5>
						<p className="mb-6 text-lg text-gray-600 dark:text-gray-200">
							Find out what classes is posted
						</p>
						<span className="flex items-baseline text-lg font-bold text-indigo-600 dark:text-indigo-400">
							View class comparison
							
                            <FaArrowRight className="w-4 h-4 ml-2"></FaArrowRight>
						</span>
					</div>
				</Link>
				<Link to='/dashboard/manage-users'
					className="flex flex-col p-6 space-y-2 transition-all duration-500 bg-white border dark:bg-slate-700 border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
				>
					<div className="flex items-center justify-center dark:bg-gray-500 w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
						<FaUsers className="w-10 h-10 text-green-500 dark:text-white"></FaUsers>
					</div>
					<div className="flex-1">
						<h5 className="mb-3 text-xl font-bold lg:text-2xl text-gray-700 dark:text-gray-100">Manage Users</h5>
						<p className="mb-6 text-lg text-gray-600 dark:text-gray-200">
							Find out what user role is currently on
						</p>
						<span className="flex items-center text-lg font-bold text-indigo-600 dark:text-indigo-400">
							Check users details
							<FaArrowRight className="w-4 h-4 ml-2"></FaArrowRight>
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AdminHome;
