import React from "react";

const Food = () => {
	return (
		<div>
			<h1 className="text-center text-3xl lg:text-4xl font-thin text-[#4283df]">
				You are What You Eat
			</h1>
			<p className="text-center text-gray-700 dark:text-gray-100 lg:text-xl leading-8 mt-3">
				Here at our Yoga club we serve best food for our students. Better
				refreshment, Good health what we believe
			</p>
			<div className="grid lg:grid-cols-4 gap-5 mt-5">
				<div className="shadow-md pb-4 hover:shadow-xl">
					<img
						src="https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/08/05.jpg"
						className="w-[250px] mx-auto"
						alt=""
					/>
					<h3 className="text-center text-gray-600 text-lg font-medium mt-1 dark:text-gray-100">
						Vegetable Juice
					</h3>
					<p className="text-center mt-2 text-gray-500 dark:text-gray-100">
						$9.99
					</p>
				</div>
				<div className="shadow-md pb-4 hover:shadow-xl">
					<img
						src="https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/08/01.jpg"
						className="w-[250px] mx-auto"
						alt=""
					/>
					<h3 className="text-center text-gray-600 text-lg font-medium dark:text-gray-100">
						Fruit Smoothie
					</h3>
					<p className="text-center mt-2 text-gray-500 dark:text-gray-100">
						$14.99
					</p>
				</div>
				<div className="shadow-md pb-4 hover:shadow-xl">
					<img
						src="https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/08/06.jpg"
						className="w-[250px] mx-auto"
						alt=""
					/>
					<h3 className="text-center text-gray-600 text-lg font-medium dark:text-gray-100">
						Mixed Berries Smoothie
					</h3>
					<p className="text-center mt-2 text-gray-500 dark:text-gray-100">
						$19.99
					</p>
				</div>
				<div className="shadow-md pb-4 hover:shadow-xl">
					<img
						src="https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/08/09.jpg"
						className="w-[250px] mx-auto"
						alt=""
					/>
					<h3 className="text-center text-gray-600 text-lg font-medium dark:text-gray-100">
						Oriental Tea Collection
					</h3>
					<p className="text-center mt-2 text-gray-500 dark:text-gray-100">
						$25.00
					</p>
				</div>
			</div>
		</div>
	);
};

export default Food;
