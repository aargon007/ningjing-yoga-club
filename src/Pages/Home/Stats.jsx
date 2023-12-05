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
		<div className="py-[50px]">
			{/* heading */}
			<div className="text-[40px] font-semibold text-center leading-[120%]">
				Count the ways you can <br /> personalize your practice
			</div>

			{/* stats */}
			<div className="grid md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-5 mt-10">
				{statsData?.map((data) => (
					<div key={data?.num} className="bg-gray-50 p-5 rounded-md">
						<h2 className="text-[1.75em] text-center  leading-[130%]">
							<span className="inline-block px-2 py-3">{data?.num}+</span>
						</h2>
						<h4 className=" text-center mt-[10px] text-xl leading-relaxed">{data?.title}</h4>
						<p className="mt-[13px]  leading-[120%] font-light tracking-wider text-center">{data?.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Stats;
