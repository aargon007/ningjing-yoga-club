import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const PopularInstructor = () => {

	const { data: popInstructor = [] } = useQuery({
		queryKey: ["popInstructor"],
		queryFn: async () => {
			const res = await axios.get(
				"https://breakable-baseball-production.up.railway.app/allInstructors"
			);
			return res.data;
		},
	});

	return (
		<div>
			<img
				src="https://anahata.qodeinteractive.com/wp-content/uploads/2016/12/h1-icon-2.png"
				alt="popular instructor"
				className="mx-auto w-14"
			/>
			<h1 className="text-center text-4xl font-semibold my-5 dark:text-gray-100">
				Our Popular Instructor
			</h1>
			<p className="text-center text-gray-800 dark:text-gray-100 font-medium">
				Awaken to a healthier, happier you. Discover a world of in-person and
				virtual fitness, wellness, and beauty services.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
				{popInstructor?.slice(0,6).map((instructor, index) => (
					<div
						key={instructor?._id}
						className="flex justify-between flex-col rounded-md shadow-md bg-gray-100"
					>
						<img
							src={instructor?.photo}
							className="w-[100px] h-[100px] mx-auto mt-3 rounded-full object-right-top object-cover"
							alt=""
						/>
						<div className="w-full space-y-3 py-5 text-center">
							<h1 className="text-xl text-gray-700 font-medium tracking-wider">
								{instructor?.name}
							</h1>
							<h3 className="text-amber-600">Yoga Instructor</h3>
							<p>{instructor?.address}</p>
							<div className="flex gap-4 text-amber-600 text-xl justify-center">
								<FaFacebook></FaFacebook>
								<FaInstagram></FaInstagram>
								<FaTwitter></FaTwitter>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularInstructor;
