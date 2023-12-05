import React from "react";
import useAxiosGlobal from "../../../Hooks/useAxiosGlobal";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useState } from "react";

const UpdateClassInfo = ({ modalClass, refetch }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [axiosSecure] = useAxiosGlobal();

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

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
						title: "Info Updated successfully!",
						showConfirmButton: false,
						timer: 1500,
					});
					closeModal();
					refetch();
				}
			});
		// console.log(data);
	};

	return (
		<>
			<button
				onClick={() => openModal()}
				className=" lg:text-base rounded bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 me-3"
			>
				Update
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-[9999]" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black opacity-20" />
					</Transition.Child>

					<div
						className="fixed inset-0 overflow-y-auto"
						style={{
							boxShadow:
								"0px 0px 0px 1px rgba(15, 15, 15, 0.05), 0px 3px 6px rgba(15, 15, 15, 0.1), 0px 9px 24px rgba(15, 15, 15, 0.2)",
						}}
					>
						<div className="flex min-h-full items-center justify-center text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="bg-white min-w-[200px] max-w-[70vw] rounded-md w-full p-5 transform text-left align-middle transition-all">
									{/* modal content */}
									<div className="rounded-lg">
										<div className="flex w-full flex-col">
											<div className="flex justify-between">
												<h2 className="mb-1 text-lg font-semibold text-gray-700">
													Update Data for : {modalClass?.name}
												</h2>
												<button
													onClick={closeModal}
													className="bg-red-500 text-white px-3 py-2 rounded-full"
												>
													X
												</button>
											</div>

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
														className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium transition-all text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
														className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base transition-all font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
														className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium transition-all text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
														className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base transition-all font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
													/>
												</div>

												<button
													type="submit"
													className="rounded border-0 bg-blue-600 py-2 px-6 text-lg text-white hover:bg-blue-700 focus:outline-none transition-all"
												>
													Update
												</button>
											</form>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default UpdateClassInfo;
