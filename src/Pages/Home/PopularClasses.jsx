import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Spinner from '../Shared/Spinner';
import useAxiosGlobal from '../../Hooks/useAxiosGlobal';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const PopularClasses = () => {
    const [popLoader, setPopLoader] = useState(false)
	const { user } = useAuth();
	const [axiosSecure] = useAxiosGlobal();

    const { data: popularClasses = [], isLoading: isPopLoader } = useQuery({
        queryKey: ['allClasses'],
        enabled: !popLoader,
        queryFn: async () => {
            // const res = await axios.get("http://localhost:5000/popularClasses")
            const res = await axios.get("https://breakable-baseball-production.up.railway.app/popularClasses")
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
		if(userProfile?.role === "admin" || userProfile?.role === "instructor"){
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
            <img src="https://anahata.qodeinteractive.com/wp-content/uploads/2016/12/logo-default.png" alt="popular class" className='mx-auto' />
            <h1 className='text-center text-4xl font-semibold my-5 dark:text-gray-100'>Our Popular Classes</h1>
            <p className='text-center text-gray-800 dark:text-gray-100 font-medium'>Yoga Club is where you can find balance, harmony and energy renewal amidst the hectic bustle of everyday pressures and deadlines</p>
            {isPopLoader && <Spinner></Spinner>}
			
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 dark:text-gray-100">
				{popularClasses?.map((singleClass) => (
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

export default PopularClasses;