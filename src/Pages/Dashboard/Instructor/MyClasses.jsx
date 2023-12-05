import useInstructorClass from "../../../Hooks/useInstructorClass";
import UpdateClassInfo from "./UpdateClassInfo";

const MyClasses = () => {
	const [instructorClasses, refetch, isInstructorClass] = useInstructorClass();

	return (
		<div>
			<h1 className="text-center text-2xl font-semibold mb-3">
				Manage My Classes
			</h1>

			<table className="border-collapse w-full">
				<thead>
					<tr>
						<th className="tableth">Class Name</th>
						<th className="tableth">Status</th>
						<th className="tableth">Total Enrolled Students</th>
						<th className="tableth">Available Seats</th>
						<th className="tableth">Price</th>
						<th className="tableth">Feedback</th>
						<th className="tableth">Actions</th>
					</tr>
				</thead>

				<tbody>
					{instructorClasses?.map((yogaClass) => (
						<tr
							key={yogaClass?._id}
							className="bg-white dark:bg-gray-700 hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
						>
							<td className="tabletd border-b-0 lg:border-b ">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Class Name :{" "}
								</span>
								<span className="inline-flex gap-3 items-center">
									<img
										src={yogaClass.image}
										className="h-5 w-5 rounded-full"
										loading="lazy"
										alt=""
									/>
									{yogaClass?.name}
								</span>
							</td>

							<td className="tabletd border-t-0 lg:border-t border-b-0 lg:border-b font-bold">
								<span className="lg:hidden  px-2 py-1">Status : </span>
								<span
									className={`${
										yogaClass?.status === "approved"
											? "text-green-600"
											: "text-red-600"
									}`}
								>
									{yogaClass?.status}
								</span>
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t lg:text-center">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Total Enrolled Students :{" "}
								</span>
								{yogaClass?.enrolled}
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t lg:text-center">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Available Seats :{" "}
								</span>
								{yogaClass?.seats}
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t lg:text-center">
								<span className="lg:hidden px-2 py-1 font-bold ">Price : </span>
								${yogaClass?.price}
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Feedback :{" "}
								</span>
								{yogaClass?.feedback}
							</td>

							<td className="tabletd border-t-0 lg:border-t">
								<span className="lg:hidden px-2 py-1  font-bold">
									Actions :{" "}
								</span>
								<UpdateClassInfo refetch={refetch} modalClass={yogaClass} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyClasses;
