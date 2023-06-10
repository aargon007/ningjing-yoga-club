import React from "react";
import useAxiosGlobal from "../../../Hooks/useAxiosGlobal";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ModalFeedback = ({ isOpen, onClose, modalClass }) => {
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
		axiosSecure
			.patch(`/classes/feedback/${modalClass?._id}`, data)
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
				}
			});
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-80">
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
						Feedback for : {modalClass?.name}
					</h2>
					<p className="mb-5 leading-relaxed text-gray-600">
						If you had any issues or you liked this class, please share with
						Instructor!
					</p>

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-4">
							<label
								htmlFor="message"
								className="text-sm leading-7 text-gray-600"
							>
								Message
							</label>
							<textarea
								id="message"
								{...register("feedback")}
								className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
							></textarea>
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

export default ModalFeedback;
