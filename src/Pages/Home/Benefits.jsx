import React from "react";
import { FaAward, FaEye, FaFire, FaFireAlt, FaPeopleArrows, FaRegHeart } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";

const Benefits = () => {
	return (
		<div>
			<h1 className="text-center text-5xl font-thin text-[#c9638e]">
				Benefits Of Yoga
			</h1>
			<p className="text-center text-blue-600 text-4xl">~</p>
			<p className="text-center text-gray-700 dark:text-gray-100 text-xl leading-8">
				Yoga Fit is where you can find balance, harmony and energy renewal
				amidst the hectic bustle of everyday pressures and deadlines. Relax &
				enjoy a personalized day yoga experience in our comfortable sanctuary.
			</p>

			<div className="mt-5 flex flex-col lg:flex-row lg:gap-5 justify-center items-center">
				<div className="space-y-10 w-full">
					<div className="flex gap-4 items-center">
						<div>
							<h1 className="text-2xl text-right text-[#3a4259] dark:text-gray-100">
								Improves strength, balance
							</h1>
							<p className="text-right text-xs mt-1 text-gray-700 dark:text-gray-100 font-medium">
								Slow movements and deep breathing increase blood flow and warm
								up muscles, while holding a pose can build strength.
							</p>
						</div>
						<div className="">
							<div className="bg-[#6592d7] text-gray-200 w-14 h-14 hover:animate-pulse flex items-center justify-center rounded-full">
								<FaRegHeart className="text-2xl"></FaRegHeart>
							</div>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<div>
							<h1 className="text-2xl text-right text-gray-700 dark:text-gray-100">
								helps with back pain relief
							</h1>
							<p className="text-right text-xs mt-1 text-gray-700 dark:text-gray-100 font-medium">
								Yoga is as good as basic stretching for easing pain and
								improving mobility in people with lower back pain
							</p>
						</div>
						<div className="">
							<div className="bg-[#cd7399] text-gray-200 w-14 h-14 hover:animate-pulse flex items-center justify-center rounded-full">
								<IoIosWater className="text-2xl"></IoIosWater>
							</div>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<div>
							<h1 className="text-2xl text-right text-gray-700 dark:text-gray-100">
								ease arthritis symptoms
							</h1>
							<p className="text-right text-xs mt-1 text-gray-700 dark:text-gray-100 font-medium">
								Gentle yoga has been shown to ease some of the discomfort of
								tender, swollen joints for people with arthritis
							</p>
						</div>
						<div className="">
							<div className="bg-[#e4926e] text-gray-200 w-14 h-14 hover:animate-pulse flex items-center justify-center rounded-full">
								<FaFire className="text-2xl"></FaFire>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full">
					<img
						src="https://i.ibb.co/LrsPY9B/shiva-6-removebg-preview.png"
						className="h-[500px]"
						alt=""
					/>
				</div>

				<div className="space-y-10 w-full">
					<div className="flex flex-row-reverse items-center gap-4">
						<div>
							<h1 className="text-2xl text-left text-[#3a4259] dark:text-gray-100">
								Improves strength, balance and flexibility
							</h1>
							<p className="text-left text-xs mt-1 text-gray-700 dark:text-gray-100 font-medium">
								Slow movements and deep breathing increase blood flow and warm
								up muscles, while holding a pose can build strength.
							</p>
						</div>
						<div className="">
							<div className="bg-[#e3b26d] text-gray-200 w-14 h-14 hover:animate-pulse flex items-center justify-center rounded-full">
								<FaEye className="text-2xl"></FaEye>
							</div>
						</div>
					</div>
					<div className="flex gap-4 flex-row-reverse items-center">
						<div>
							<h1 className="text-2xl text-left text-gray-700 dark:text-gray-100">
								Balance Body & Mind
							</h1>
							<p className="text-left text-xs mt-1 text-gray-700 dark:text-gray-100 font-medium">
								Slow movements and deep breathing increase blood flow and warm
								up muscles, while holding a pose can build strength.
							</p>
						</div>
						<div className="">
							<div className="bg-[#73c6cd] text-gray-200 w-14 h-14 hover:animate-pulse flex items-center justify-center rounded-full">
								<FaAward className="text-2xl"></FaAward>
							</div>
						</div>
					</div>
					<div className="flex gap-4 flex-row-reverse items-center ">
						<div>
							<h1 className="text-2xl text-left text-gray-700 dark:text-gray-100">
								Balance Body & Mind
							</h1>
							<p className="text-left text-xs mt-1 text-gray-700 dark:text-gray-100 font-medium">
								Slow movements and deep breathing increase blood flow and warm
								up muscles, while holding a pose can build strength.
							</p>
						</div>
						<div className="">
							<div className="bg-[#62aed6] text-gray-200 w-14 h-14 hover:animate-pulse flex items-center justify-center rounded-full">
								<FaPeopleArrows className="text-2xl"></FaPeopleArrows>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
