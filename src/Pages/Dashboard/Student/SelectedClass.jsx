import React from "react";
import useSelectedClass from "../../../Hooks/Student/useSelectedClass";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAxiosGlobal from "../../../Hooks/useAxiosGlobal";
import Swal from "sweetalert2";

const SelectedClass = () => {
	const [selectedClasses, refetch, isSelectedClasses] = useSelectedClass();
	const [axiosSecure] = useAxiosGlobal();

	const handleDeleteClass = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/selectedClasses/${id}`).then((res) => {
					console.log("deleted res", res.data);
					if (res.data.deletedCount > 0) {
						refetch();
						Swal.fire("Deleted!", "Your selected class has been deleted.", "success");
					}
				});
			}
		});
	};

	return (
		<div>
			<h1 className="text-2xl font-semibold text-center mb-5">
				Your Selected Classes
			</h1>
			<div className="grid lg:grid-cols-2 gap-10">
				{selectedClasses?.map((selectCls) => (
					<div
						className="flex flex-col lg:flex-row lg:gap-5 rounded-md shadow-md border relative"
						key={selectCls?._id}
					>
						<span
							onClick={() => handleDeleteClass(selectCls?._id)}
							className="absolute top-0 right-0 rounded-full p-2 text-xl font-bold text-[#f80505ec] bg-gray-100"
						>
							<RiDeleteBin5Fill></RiDeleteBin5Fill>
						</span>
						<img src={selectCls?.image} className="lg:w-4/12 rounded-t-md lg:rounded-tr-none lg:rounded-s-md" alt="" />
						<div className="lg:w-8/12 py-4 lg:pr-5 px-5 space-y-3">
							<h1 className="text-xl text-gray-700 font-semibold">
								{selectCls?.name}
							</h1>
							<h3>Instructor : {selectCls?.instructor}</h3>
							<p>Selects on : {selectCls?.createdAt}</p>
							<div className="flex justify-between">
								<p></p>
								<div className="flex items-center gap-10">
									<p className="font-bold text-lg">${selectCls?.price}</p>
									<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
										Pay
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SelectedClass;
