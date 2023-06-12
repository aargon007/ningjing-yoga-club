import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Banner from "../Shared/Parallax/Banner";
import Swal from "sweetalert2";
import useAxiosGlobal from "../../Hooks/useAxiosGlobal";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Pages/Shared/Spinner"

const PublicClassNclassNamees = () => {
	const [clsLoading, setClsLoading] = useState(false);
	const [isAdOrisIns, setisAdOrisIns] = useState({})
	const { user } = useAuth();
	const [axiosSecure] = useAxiosGlobal();
	
	useEffect( () => {
		if(user) {
			axiosSecure(`/users/${user?.email}`).then(res => {
				setisAdOrisIns(res.data)
				// console.log(res.data);
			})
		}
	}, [user])

	const { data: allClasses = [], isLoading: isclsLoading } = useQuery({
        queryKey: ['allClasses'],
        enabled: !clsLoading,
        queryFn: async () => {
            const res = await axios.get("https://breakable-baseball-production.up.railway.app/publicClasses")
            return res.data;
        },
    })

	const handleSelect = (data) => {
		if (!user) {
			Swal.fire({
				position: "top-end",
				icon: "warning",
				title: "Please login for selecting this class!",
				showConfirmButton: false,
				timer: 1500,
			});
			return;
		}
		if(isAdOrisIns?.role === "admin" || isAdOrisIns?.role === "instructor"){
			return
		}
		if (user) {
			const sendingData = {
				classId: data?._id,
				name: data?.name,
				instructor: data?.instructor,
				price: data?.price,
				isPaid: false,
				studentEmail: user?.email,
				image : data?.image
			};
			// console.log(sendingData);
			axiosSecure.post("/selectedClasses", sendingData).then((res) => {
				// console.log(res);
				if (res.data.insertedId) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Class selected successfully.",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
		}
	};

	return (
		<div>
			<Banner
				img={
					"https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/08/heading-2.jpg"
				}
				title={"Choose The Class For You"}
			></Banner>

			{isclsLoading && <Spinner></Spinner>}
			
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 dark:text-gray-100">
				{allClasses.map((singleClass) => (
					<div
						className={`rounded-md overflow-hidden shadow-md hover:shadow-lg dark:shadow-gray-50/50 ${
							singleClass?.seats === 0 ? "bg-red-400" : ""
						}`}
						key={singleClass?._id}
					>
						<div className="relative">
							<img
								className="w-full h-[200px] object-fill"
								loading="lazy"
								src={singleClass?.image}
								alt="class Image"
							/>
						</div>
						<div className="p-4">
							<h3 className="text-lg font-medium mb-2">{singleClass?.name}</h3>

							<h1 className="text-base font-medium mb-2">
								Instructor :{" "}
								<span className="lowercase font-normal">
									{singleClass?.instructor}
								</span>
							</h1>
							<p className="text-base font-medium mb-2">
								Avaiable seats :{" "}
								<span className="font-normal">{singleClass?.seats}</span>
							</p>

							<div className="flex items-center justify-between">
								<span className="font-bold text-lg">${singleClass?.price}</span>
								
									<button
										onClick={() => handleSelect(singleClass)}
										disabled={singleClass?.seats === 0}
										className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
									>
										Select
									</button>
								
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PublicClassNclassNamees;
