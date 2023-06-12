import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Banner from "../Shared/Parallax/Banner";

const Instructors = () => {
	const [allInstructor, setAllInstructor] = useState([]);

	useEffect(() => {
		axios.get("https://breakable-baseball-production.up.railway.app/allInstructors").then((res) => {
			console.log(res.data);
			setAllInstructor(res.data);
		});
	}, []);

	return (
		<>
			<Banner
				img={
					"https://anahata.qodeinteractive.com/wp-content/uploads/2016/11/blog-single-link1-img.jpg"
				}
				title={"Meet Our Instructor"}
			></Banner>

			<div className="grid md:grid-cols-2 gap-10">
				{allInstructor?.map((instructor, index) => (
					<div
						key={instructor?._id}
						className="flex justify-between lg:flex-row flex-col gap-10 rounded-md shadow-md bg-gray-100"
					>
						<img
							src={instructor?.photo}
							className="w-full h-[250px] rounded-t-md lg:rounded-tr-none lg:rounded-s-md"
							alt=""
						/>
						<div className="w-full space-y-3 p-5">
							<h1 className="text-2xl text-gray-700 font-medium tracking-wider">
								{instructor?.name}
							</h1>
							<h3 className="text-amber-600">Yoga Instructor</h3>
							<p>Email : {instructor?.email}</p>
							<p>Number of Classes : N/A</p>
							<p>Address : {instructor?.address}</p>
							<div className="flex gap-4 text-amber-600 text-xl">
								<FaFacebook></FaFacebook>
								<FaInstagram></FaInstagram>
								<FaTwitter></FaTwitter>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Instructors;
