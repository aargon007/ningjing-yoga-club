import React from "react";
import useProfile from "../../../Hooks/useProfile";
import { useForm } from "react-hook-form";
import useAxiosGlobal from "../../../Hooks/useAxiosGlobal";
import Swal from "sweetalert2";

const AddClass = () => {
	const [userProfile] = useProfile();
	const [axiosSecure] = useAxiosGlobal();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		data.status = "pending";
		data.price = parseFloat(data.price);
		data.seats = parseFloat(data.seats);
		(data.enrolled = 0), (data.feedback = "");

		axiosSecure.post("/classes", data).then((res) => {
			reset();
			console.log(res);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Class added successfully.",
				showConfirmButton: false,
				timer: 1500,
			});
		});
	};

	return (
		<div>
			<h1 className="text-center text-2xl font-semibold">
				Welcome! Add a Class
			</h1>

			<div className="flex items-center justify-center lg:p-12 pt-5">
				<div className="mx-auto w-full bg-white dark:bg-gray-700">
					<form
						className="grid lg:grid-cols-2 gap-5"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="mb-3">
							<label
								htmlFor="name"
								className="mb-3 block text-base font-medium text-[#07074D] dark:text-gray-100"
							>
								Class Name
							</label>
							<input
								type="text"
								{...register("name", { required: true })}
								id="name"
								placeholder="Class Name"
								className="w-full rounded-md border transition-all border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="image"
								className="mb-3 block text-base font-medium text-[#07074D] dark:text-gray-100"
							>
								Class Image URL
							</label>
							<input
								type="text"
								{...register("image", { required: true })}
								id="image"
								placeholder="Enter Image URL"
								className="w-full rounded-md border border-[#e0e0e0] transition-all bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="instructor"
								className="mb-3 block text-base font-medium text-[#07074D] dark:text-gray-100"
							>
								Instructor Name
							</label>
							<input
								type="text"
								{...register("instructor", { required: true })}
								value={userProfile?.name}
								id="instructor"
								placeholder="Instructor Name"
								className="w-full rounded-md border border-[#e0e0e0] transition-all bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="email"
								className="mb-3 block text-base font-medium text-[#07074D] dark:text-gray-100"
							>
								Email Address
							</label>
							<input
								type="email"
								{...register("email", { required: true })}
								value={userProfile?.email}
								id="email"
								placeholder="example@domain.com"
								className="w-full rounded-md border border-[#e0e0e0] transition-all bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="seats"
								className="mb-3 block text-base font-medium text-[#07074D] dark:text-gray-100"
							>
								Available Seats
							</label>
							<input
								type="text"
								{...register("seats", { required: true })}
								id="seats"
								placeholder="Available seats"
								className="w-full rounded-md border border-[#e0e0e0] transition-all bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="price"
								className="mb-3 block text-base font-medium text-[#07074D] dark:text-gray-100"
							>
								Price
							</label>
							<input
								type="number"
								{...register("price", { required: true })}
								id="price"
								placeholder="Price"
								className="w-full rounded-md border border-[#e0e0e0] transition-all bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>

						<div className="lg:col-span-2">
							<button
								type="submit"
								className="w-full hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
							>
								Add Class
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddClass;
