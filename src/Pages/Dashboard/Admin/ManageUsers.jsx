import React, { useEffect, useState } from "react";
import useAxiosGlobal from "../../../Hooks/useAxiosGlobal";
import Swal from "sweetalert2";
import Spinner from "../../Shared/Spinner";
import useUsers from "../../../Hooks/useUsers";

const ManageUsers = () => {
	const [axiosSecure] = useAxiosGlobal();
	const [users, refetch] = useUsers();
	// console.log(users);

	const handleChangeRole = (userRole, id) => {
		axiosSecure.patch(`/users/admin/${id}`, { role: userRole }).then((res) => {
			refetch();
			if (res.data.modifiedCount > 0) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "User role updated",
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	return (
		<>
			<div>
				<h1 className="text-center text-3xl font-semibold text-blue-900 mb-3">
					Total Users : {users.length}
				</h1>
			</div>
			<table className="border-collapse w-full">
				<thead>
					<tr>
						<th className="tableth">Name</th>
						<th className="tableth">Email</th>
						<th className="tableth">Role</th>
						<th className="tableth">Actions</th>
					</tr>
				</thead>
				<tbody>
					{!users && <Spinner></Spinner>}

					{users.map((user) => (
						<tr
							key={user._id}
							className="bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
						>
							<td className="tabletd border-b-0 lg:border-b">
								<span className="lg:hidden px-2 py-1 font-bold text-sm">
									Name :{" "}
								</span>
								{user?.name}
							</td>
							<td className="tabletd border-t-0 lg:border-t border-b-0 lg:border-b">
								<span className="lg:hidden px-2 py-1 font-bold text-sm">
									Email :{" "}
								</span>
								{user?.email}
							</td>

							<td className="tabletd border-t-0 lg:border-t border-b-0 lg:border-b">
								<span className="lg:hidden  px-2 py-1 text-sm font-bold">
									Role :{" "}
								</span>
								{user?.role}
							</td>
							<td className="tabletd border-b border-t-0 lg:border-t">
								<span className="lg:hidden px-2 py-1 text-sm font-bold">
									Actions :{" "}
								</span>
								<button
									onClick={() => handleChangeRole("admin", user?._id)}
									className={`text-sm lg:text-base rounded bg-blue-500 ${
										user?.role === "admin"
											? "bg-opacity-50"
											: "hover:bg-blue-700"
									} text-white py-1 px-3 me-3`}
									disabled={user?.role === "admin"}
								>
									make admin
								</button>
								<button
									onClick={() => handleChangeRole("instructor", user?._id)}
									className={`text-sm lg:text-base rounded bg-gray-500 ${
										user?.role === "instructor"
											? "bg-opacity-50"
											: "hover:bg-gray-700"
									} text-white py-1 px-3`}
									disabled={user?.role === "instructor"}
								>
									make instructor
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ManageUsers;
