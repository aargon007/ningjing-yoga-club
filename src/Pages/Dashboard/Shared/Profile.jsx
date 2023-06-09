import React, { useEffect, useState } from "react";
import useProfile from "../../../Hooks/useProfile";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosGlobal from "../../../Hooks/useAxiosGlobal";
import Spinner from "../../Shared/Spinner"

const Profile = () => {
	const [selectedOption, setSelectedOption] = useState("");
	const [userProfile, refetch, isProfile] = useProfile();
	const [axiosSecure] = useAxiosGlobal();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm();

	useEffect( () => {
		reset();
	}, [isProfile])

	const gender = [
		{ value: "Male", label: "Male" },
		{ value: "Female", label: "Female" },
		{ value: "Other", label: "Other" },
	];

	const onSubmit = (data) => {
		data.gender = selectedOption;
		console.log(data);
		axiosSecure.patch(`/users/${userProfile._id}`, data).then( res => {
			console.log(res);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "User info updated successfully.",
				showConfirmButton: false,
				timer: 1500,
			});
			refetch()
		})
	};

	return (
		<>
			<div className="bg-white overflow-hidden shadow rounded-lg border">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						User Info
					</h3>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
					<dl className="sm:divide-y sm:divide-gray-200">
						<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Full name</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{userProfile?.name ? userProfile.name : <Spinner></Spinner>}
							</dd>
						</div>
						<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Email address
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{userProfile?.email}
							</dd>
						</div>
						<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Gender</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{userProfile?.gender?.label}
							</dd>
						</div>
						<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Phone number
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{userProfile?.phone}
							</dd>
						</div>
						<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Address</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{userProfile?.address}
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div className="bg-white overflow-hidden shadow rounded-lg border mt-5">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						Update User Profile
					</h3>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
					<form onSubmit={handleSubmit(onSubmit)} className="sm:divide-y sm:divide-gray-200">
						
							<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Full name</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<input
										id="name"
										type="text"
										{...register("name")}
										defaultValue={userProfile?.name}
										className="inputField"
										placeholder="Enter your name"
									/>
								</dd>
							</div>
							<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Photo URL</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<input
										id="photo"
										type="url"
										{...register("photo")}
										defaultValue={userProfile?.photo}
										className="inputField"
										placeholder="Enter your photo url"
									/>
								</dd>
							</div>
							<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Gender</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<CreatableSelect
										isClearable
										options={gender}
										onChange={setSelectedOption}
									/>
								</dd>
							</div>
							<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Phone number
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<input
										id="phone"
										type="number"
										{...register("phone")}
										defaultValue={userProfile?.phone}
										className="inputField"
										placeholder="Enter your phone number"
									/>
								</dd>
							</div>
							<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Address</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<input
										id="address"
										type="text"
										{...register("address")}
										defaultValue={userProfile?.address}
										
										className="inputField"
										placeholder="Enter your address"
									/>
								</dd>
							</div>
							<div className="py-3 sm:py-5 sm:grid  sm:gap-4 sm:px-6">
								<button
									type="submit"
									className="flex w-full justify-center rounded-md border border-transparent bg-blue-700 hover:bg-blue-900 py-2 px-4 font-medium text-white shadow-sm"
								>
									Update
								</button>
							</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Profile;
