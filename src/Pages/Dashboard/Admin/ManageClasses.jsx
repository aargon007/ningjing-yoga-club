import React, { useState } from "react";
import UseClasses from "../../../Hooks/UseClasses";
import Spinner from "../../Shared/Spinner";
import { Link } from "react-router-dom";
import ModalFeedback from "./ModalFeedback";
import Swal from "sweetalert2";
import useAxiosGlobal from "../../../Hooks/useAxiosGlobal";

const ManageClasses = () => {
	const [classes, refetch] = UseClasses();
	const [isOpen, setIsOpen] = useState(false);
	const [modalClass, setModalClass] = useState({});
    const [axiosSecure] = useAxiosGlobal();

	const openModal = (feedbackClass) => {
		setModalClass(feedbackClass);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

    const handleChangeStatus = (status, id) => {
		axiosSecure.patch(`/classes/admin/${id}`, { status : status }).then((res) => {
			refetch();
			if (res.data.modifiedCount > 0) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `class status ${status}`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	return (
		<div>
			<h1 className="text-center text-2xl font-semibold mb-4">
				Manage Classes : {classes.length}
			</h1>

			<table className="border-collapse w-full">
				<thead>
					<tr>
						<th className="tableth">Class Name</th>
						<th className="tableth">Instructor Name</th>
						<th className="tableth">Instructor Email</th>
						<th className="tableth">Seats</th>
						<th className="tableth">Price</th>
						<th className="tableth">Status</th>
						<th className="tableth">Actions</th>
						<th className="tableth">Comments</th>
					</tr>
				</thead>
				<tbody>
					{classes?.map((yogaClass) => (
						<tr
							key={yogaClass?._id}
							className="bg-white dark:bg-gray-700 hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
						>
							<td className="tabletd border-b-0 lg:border-b">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Class Name :{" "}
								</span>
								<span className="inline-flex gap-3 items-center">
									<img
										src={yogaClass?.image}
										className="h-5 w-5 rounded-full"
										loading="lazy"
										alt=""
									/>
									{yogaClass?.name}
								</span>
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Instructor Name :{" "}
								</span>
								{yogaClass?.instructor}
							</td>

							<td className="tabletd border-t-0 lg:border-t border-b-0 lg:border-b">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Instructor Email :{" "}
								</span>
								{yogaClass?.email}
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t lg:text-center">
								<span className="lg:hidden px-2 py-1 font-bold ">Seats : </span>
								{yogaClass?.seats}
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t lg:text-center">
								<span className="lg:hidden px-2 py-1 font-bold ">Price : </span>
								${yogaClass?.price}
							</td>

							<td className="tabletd border-t-0 lg:border-t border-b-0 lg:border-b">
								<span className="lg:hidden  px-2 py-1  font-bold">
									Status :{" "}
								</span>
								<span className={`${yogaClass?.status === "approved" ? "text-green-600" : "text-red-600"}`}>{yogaClass?.status}</span>
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t">
								<span className="lg:hidden px-2 py-1  font-bold">
									Actions :{" "}
								</span>
								<button
                                    onClick={() => handleChangeStatus("approved", yogaClass?._id)}
									className={` lg:text-base rounded bg-blue-500 ${
										yogaClass?.status === "approved" || yogaClass?.status === "denied"
											? "bg-opacity-50"
											: "hover:bg-blue-700"
									} text-white py-1 px-3 me-3`}
									disabled={yogaClass?.status === "approved" || yogaClass?.status === "denied"}
								>
									approve
								</button>
								<button
                                    onClick={() => handleChangeStatus("denied", yogaClass?._id)}
									className={` lg:text-base rounded bg-red-500 ${
										yogaClass?.status === "denied" || yogaClass?.status === "approved"
											? "bg-opacity-50"
											: "hover:bg-red-700"
									} text-white py-1 px-3`}
									disabled={yogaClass?.status === "denied" || yogaClass?.status === "approved"}
								>
									deny
								</button>
							</td>
							<td className="tabletd border-b border-t-0 lg:border-t">
								<span className="lg:hidden px-2 py-1  font-bold">
									Actions :{" "}
								</span>
								<button
								id={yogaClass?._id}
									className="lg:text-base text-white px-3 py-1 bg-gray-700 rounded-md"
									onClick={() => {
										openModal(yogaClass);
									}}
								>
									Give feedback
								</button>

								<ModalFeedback
									isOpen={isOpen}
									onClose={closeModal}
									modalClass={modalClass}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ManageClasses;
