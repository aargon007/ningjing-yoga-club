import React from "react";
import { Parallax } from "react-parallax";

const Banner = ({ img, title }) => {
	return (
		<Parallax
			blur={{ min: -50, max: 50 }}
			bgImage={img}
			bgImageAlt="cover"
			bgClassName="object-cover"
			strength={-200}
            className="rounded-md object-cover"
		>
			<div className="h-[350px] flex flex-col justify-center items-center px-5">
				<h1 className="mb-5 lg:mb-10 text-5xl font-bold text-white">{title}</h1>
				<p className="mb-5 text-xl text-white">
					"True yoga is not about the shape of your body, but the shape of your
					life"
				</p>
			</div>
		</Parallax>
	);
};

export default Banner;
