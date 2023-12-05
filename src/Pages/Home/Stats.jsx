import React from "react";

const Stats = () => {
	const statsData = [
		{
			num: "25",
			title: "Styles",
			description: "Keep your mind and body guessing or deepen your practice.",
		},
		{
			num: "20",
			title: "Programs",
			description:
				"Created for beginner, intermediate, and advanced practices.",
		},
		{
			num: "35",
			title: "Challenges",
			description:
				"Carefully designed series of classes that help you get healthier, stronger, and more flexible.",
		},
		{
			num: "90",
			title: "Guided Meditations",
			description:
				"Sleep better, build mindfulness, enhance performance or let go of anxiety.",
		},
		{
			num: "2-90",
			title: "Minute Classes",
			description: "To get you on your mat with whatever time you have.",
		},
	];

	return (
		<div className="xl:py-[50px] md:py-[30px] py-5">
			{/* heading */}
			<div className="text-[30px] md:text-[40px] font-semibold text-center bg-clip-text bg-gradient-to-r from-[#f7972f] text-transparent to-blue-700 leading-[120%]">
				Count the ways you can <br /> personalize your practice
			</div>

			{/* stats */}
			<div className="grid md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-5 mt-10">
				{statsData?.map((data) => (
					<div key={data?.num} className="bg-gray-50 dark:bg-gray-700 p-5 rounded-md shadow">
						<h2 className="md:text-[1.75em] text-xl text-center  leading-[130%]">
							<span className="inline-block px-2 dark:text-white">{data?.num}+</span>
						</h2>
						<h4 className=" text-center mt-[10px] text-xl leading-relaxed text-[#c9638e]">{data?.title}</h4>
						<p className="mt-[13px] leading-[150%] font-light text-center dark:text-white">{data?.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Stats;
