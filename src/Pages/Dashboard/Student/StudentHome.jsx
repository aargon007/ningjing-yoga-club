import React from 'react';
import useProfile from "../../../Hooks/useProfile";
import { FaChalkboardTeacher, FaStar, FaUserFriends } from "react-icons/fa";

const StudentHome = () => {
	
	const [userProfile] = useProfile();

    return (
        <div>
			<div className="max-w-2xl sm:mx-auto bg-white shadow-md rounded-lg text-gray-900">
				<div className="rounded-t-lg h-28 overflow-hidden">
					<img
						className="object-cover object-top w-full"
						src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
						alt="Mountain"
					/>
				</div>
				<div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
					<img
						className="object-cover  h-32"
						src={userProfile?.photo}
						alt="user"
					/>
				</div>
				<div className="text-center mt-2">
					<h2 className="font-semibold">{userProfile?.name}</h2>
					<p className="text-gray-500">{userProfile?.role}</p>
				</div>
				<ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
					<li className="flex flex-col items-center justify-around">
						<p className='font-bold'>Address</p>
						<div>{userProfile?.address}</div>
					</li>
					<li className="flex flex-col items-center justify-between">
						<p className='font-bold'>Contact</p>
						<div>{userProfile?.phone}</div>
					</li>
					<li className="flex flex-col items-center justify-around">
						<p className='font-bold'>Gender</p>
						<div>{userProfile?.gender?.label}</div>
					</li>
				</ul>
			</div>

			<h1 className='text-center font-semibold text-2xl my-10'>Card Information</h1>

            <div className="mx-auto max-w-2xl mt-10">
				<div className="bg-white rounded-lg overflow-hidden shadow-lg">
					<div className="px-6 py-4">
						<div className="flex justify-between items-center">
							<img
								className="h-8"
								src="https://www.svgrepo.com/show/499847/company.svg"
								alt="Workflow logo"
							/>
							<span className="font-medium text-gray-600">05/24</span>
						</div>
						<div className="mt-4">
							<div className="font-bold text-gray-800 text-xl">
								4242 4242 4242 4242
							</div>
							<div className="flex justify-between items-center mt-2">
								<div className="text-sm text-gray-600">CARDHOLDER NAME</div>
								<img
									className="h-10 w-10"
									src="https://www.svgrepo.com/show/362011/mastercard.svg"
									alt="Mastercard logo"
								/>
							</div>
						</div>
					</div>
					<div className="bg-gray-100 px-6 py-4">
						<div className="font-medium text-gray-600">
							CARD VERIFICATION VALUE
						</div>
						<div className="text-lg font-bold text-gray-800 mt-2">367</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default StudentHome;