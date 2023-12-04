import React from "react";

const Food = () => {
	const foods = [
		{
			id: 1,
			title: "Vegetable Juice",
			price: "19.99",
			src: "https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/08/05.jpg",
		},
		{
			id: 2,
			title: "Fruit Smoothie",
			price: "15.99",
			src: "https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/08/01.jpg",
		},
		{
			id: 3,
			title: "Mixed Berries Smoothie",
			price: "30.00",
			src: "https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/08/09.jpg",
		},
		{
			id: 4,
			title: "Oriental Tea Collection",
			price: "15.50",
			src: "https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/08/06.jpg",
		},
		{
			id: 5,
			title: " Meat, Prato Comida",
			price: "50",
			src: "https://www.pngall.com/wp-content/uploads/2/Meal-PNG-Pic.png",
		},
		{
			id: 6,
			title: "Vegetable Salad",
			price: "55",
			src: "https://www.pngarts.com/files/3/Healthy-Food-PNG-Transparent-Image.png",
		},
		{
			id: 7,
			title: "Special Plate",
			price: "40",
			src: "https://www.pngall.com/wp-content/uploads/2/Healthy-Meal.png",
		},
	];

	return (
		<div>
			<h1 className="text-center text-3xl lg:text-4xl font-thin text-[#4283df]">
				You are What You Eat
			</h1>
			<p className="text-center text-gray-700 dark:text-gray-100 lg:text-xl leading-8 mt-3">
				Here at our Yoga club we serve best food for our students. Better
				refreshment, Good health what we believe
			</p>
			{/* food card */}
			<div className="grid lg:grid-cols-4 gap-5 mt-5">
				{foods?.map((food) => (
					<div key={food.id} className="shadow-md pb-4 hover:shadow-xl transition-all">
						<img
							src={`${food.src}`}
							className="w-[250px] h-[220px] py-2 mx-auto"
							alt=""
						/>
						<h3 className="text-center text-gray-600 text-lg font-medium mt-1 dark:text-gray-100">
							{food.title}
						</h3>
						<p className="text-center mt-2 text-gray-500 dark:text-gray-100">
							${food.price}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Food;
