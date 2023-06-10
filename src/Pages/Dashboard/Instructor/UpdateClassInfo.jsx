import React from "react";
import useAxiosGlobal from "../../../Hooks/useAxiosGlobal";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateClassInfo = ({ isOpen, onClose, modalClass, refetch }) => {
	if (!isOpen) return null;

	const [axiosSecure] = useAxiosGlobal();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
        data.price = parseFloat(data.price);
		data.seats = parseFloat(data.seats);
		axiosSecure
			.patch(`/classes/instructor/${modalClass._id}`, data)
			.then((res) => {
				if (res.data.modifiedCount > 0) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Feedback Done!",
						showConfirmButton: false,
						timer: 1500,
					});
					onClose();
                    refetch()
				}
			});
		// console.log(data);
	};

	return (
		<div
			className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-80"
			id={`${modalClass?._id}`}
		>
			<div className="bg-white m-5 rounded-lg p-8 relative">
				<button
					onClick={onClose}
					className="absolute top-0 right-0 bg-red-500 text-white px-3 py-2 rounded-full"
				>
					X
				</button>
				{/* Modal content */}
				<div className="max-w-xl mx-auto flex w-full flex-col border rounded-lg bg-white p-5">
					<h2 className="title-font mb-1 text-lg font-medium text-gray-900">
						Update Data for : {modalClass?.name}
					</h2>

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<label
								htmlFor="name"
								className="mb-3 block text-base font-medium text-[#07074D]"
							>
								Class Name
							</label>
							<input
								type="text"
								{...register("name", { required: true })}
                                defaultValue={modalClass?.name}
								id="name"
								placeholder="Class Name"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="image"
								className="mb-3 block text-base font-medium text-[#07074D]"
							>
								Class Image URL
							</label>
							<input
								type="text"
								{...register("image", { required: true })}
                                defaultValue={modalClass?.image}
								id="image"
								placeholder="Enter Image URL"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="seats"
								className="mb-3 block text-base font-medium text-[#07074D]"
							>
								Available Seats
							</label>
							<input
								type="text"
								{...register("seats", { required: true })}
                                defaultValue={modalClass?.seats}
								id="seats"
								placeholder="Available seats"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>

						<div className="mb-3">
							<label
								htmlFor="price"
								className="mb-3 block text-base font-medium text-[#07074D]"
							>
								Price
							</label>
							<input
								type="number"
								{...register("price", { required: true })}
                                defaultValue={modalClass?.price}
								id="price"
								placeholder="Price"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
							/>
						</div>

						<button
							type="submit"
							className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateClassInfo;
