import React from "react";
import useEnrolledClass from "../../../Hooks/Student/useEnrolledClass";
import Spinner from "../../Shared/Spinner";

const EnrolledClass = () => {
	const [enrolledClasses, refetch, isEnrolledLoading] = useEnrolledClass();

	const pubDate = (givendate) => {
		const date = new Date(givendate);

		const day = date.getDate();
		const month = date.toLocaleString("default", { month: "long" });
		const year = date.getFullYear();

		const formattedTime = `${day} ${month} ${year}`;
		return formattedTime;
	};

	return (
		<div>
			<h1 className="text-2xl font-semibold text-center">
				Your Enrolled Classes
			</h1>
			{isEnrolledLoading && <Spinner></Spinner>}
			<div className="grid lg:grid-cols-2 gap-10 mt-5">
				{enrolledClasses?.map((enrollCls) => (
					<div
						className="flex flex-col lg:flex-row lg:gap-5 rounded-md shadow-md border relative"
						key={enrollCls?._id}
					>
						<img
							src={enrollCls?.classItem?.image}
							className="lg:w-4/12 rounded-t-md lg:rounded-tr-none lg:rounded-s-md"
							alt=""
						/>
						<div className="lg:w-8/12 py-4 lg:pr-5 px-5 space-y-3">
							<h1 className="text-xl text-gray-700 dark:text-gray-100 font-semibold">
								{enrollCls?.classItem?.name}
							</h1>
							<h3>Instructor : {enrollCls?.classItem?.instructor}</h3>
							<p>Enrolled on : {pubDate(enrollCls?.createdAt)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EnrolledClass;
