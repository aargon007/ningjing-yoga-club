import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper";

const SliderSection = () => {
	const swiperData = [
		{
			text: "Yoga for Beginners",
			information:
				"Learn the basics of yoga and start your journey towards a healthier body and mind.",
			message:
				"Discover the benefits of yoga and improve your flexibility and overall well-being.",
		},
		{
			text: "Meditation Techniques",
			information:
				"Explore different meditation techniques and find inner peace and tranquility.",
			message:
				"Learn how to calm your mind, reduce stress, and improve focus through meditation.",
		},
		{
			text: "Yoga Retreat",
			information:
				"Join us for a rejuvenating yoga retreat in a serene and picturesque location.",
			message:
				"Immerse yourself in yoga, meditation, and connect with like-minded individuals.",
			picture:
				"https://www.business-opportunities.biz/wp-content/uploads/2014/12/yoga.jpg",
		},
		{
			text: "Mindfulness Meditation",
			information:
				"Practice mindfulness meditation and cultivate a deep sense of awareness in the present moment.",
			message:
				"Experience greater clarity, emotional well-being, and enhanced self-awareness.",
		},
		{
			text: "Yoga for Stress Relief",
			information:
				"Relieve stress and anxiety with specialized yoga sequences designed to relax your body and mind.",
			message:
				"Find inner calmness, improve sleep, and restore balance in your daily life.",
		},
	];
	//https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/04/bg-trainers-1-600.jpg
	//https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/04/bg-testim.jpg
	return (
		<div className="">
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
				speed={600}
				parallax={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Parallax, Pagination, Navigation, Autoplay]}
				className="mySwiper"
			>
				<div
					slot="container-start"
					className="parallax-bg"
					style={{
						"backgroundImage":
							"url(https://anahata.qodeinteractive.com/wp-content/uploads/2017/01/blog-slide3-background-img-1.jpg)",
					}}
					data-swiper-parallax="-23%"
				></div>
				{swiperData.map((item) => (
					<SwiperSlide key={item.text}>
						<div className="lg:px-28 py-10 h-[400px] space-y-5 flex flex-col justify-center">
							<h1 className="text-4xl font-semibold text-gray-100 dark:text-gray-100">{item.text}</h1>
							<p className="border-l-4 border-yellow-300 ps-2">{item.information}</p>
							<blockquote>{item.message}</blockquote>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SliderSection;
