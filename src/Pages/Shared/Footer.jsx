import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Footer = () => {

    const { user } = useAuth();

	return (
		<div className='bg-[url("https://anahata.qodeinteractive.com/wp-content/uploads/2016/12/footer-background-img.jpg")] lg:px-28 md:px-16'>
			<footer>
				<div className="py-4 text-gray-400">
					<div className="px-4">
						<div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
							<div className="px-4 my-4 w-full">
								<h1 className="block w-56 mb-5 text-2xl font-bold">
									Ningjing Yoga Club
								</h1>
								<p className="leading-7">
									The Ningjing Yoga Club is a community-centered holistic
									wellness and education sanctuary located in the heart of
									Downtown Cleveland in the East Bank of the Flats.
								</p>
							</div>

                            <div className="px-4 my-4 w-full">
								<div>
									<h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
										OUR MISSION
									</h2>
								</div>
								<p className="leading-7">
									Our mission is to create a space for spiritual growth by
									offering a suite of wellness services and training courses in
									a calm atmosphere that will enhance personal and spiritual
									growth for everyone.
								</p>
							</div>

							<div className="px-4 my-4 w-full lg:text-center">
								<div>
									<h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
										Services
									</h2>
								</div>
								<ul className="leading-8">
									<li>
										<Link to="/" className="hover:text-blue-400 font-semibold">
											Home
										</Link>
									</li>
									<li>
										<Link to="/instructors" className="hover:text-blue-400 font-semibold">
											Instructors
										</Link>
									</li>
									<li>
										<Link to="/classes" className="hover:text-blue-400 font-semibold">
											Classes
										</Link>
									</li>
									{user &&  <li>
										<Link to="/dashboard" className="hover:text-blue-400 font-semibold">
											Dashboard
										</Link>
									</li>}
								</ul>
							</div>
							
							<div className="px-4 my-4 w-full">
								<div>
									<h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
										Connect With Us
									</h2>
								</div>
								<Link className="inline-flex items-center justify-center h-8 w-8  mr-1 hover:text-blue-400 hover:border-blue-400">
									<FaFacebook className="text-2xl"></FaFacebook>
								</Link>
								<Link className="inline-flex items-center justify-center h-8 w-8  mr-1 hover:text-blue-400 hover:border-blue-400">
									<FaInstagram className="text-2xl"></FaInstagram>
								</Link>
								<Link className="inline-flex items-center justify-center h-8 w-8  mr-1 hover:text-blue-400 hover:border-blue-400">
									<FaTwitter className="text-2xl"></FaTwitter>
								</Link>
								<Link className="inline-flex items-center justify-center h-8 w-8  mr-1 hover:text-blue-400 hover:border-blue-400">
									<FaYoutube className="text-2xl"></FaYoutube>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="py-4 text-gray-100 border-t border-t-gray-700">
					<div className="container mx-auto px-4">
						<div className="-mx-4 flex flex-wrap justify-between">
							<div className="px-4 w-full text-center sm:w-auto sm:text-left">
								Copyright © 2023 Ningjing Yoga Club. All Rights Reserved.
							</div>
							<div className="px-4 w-full text-center sm:w-auto sm:text-left ">
								Develop by <a target="_blank" className="text-blue-600" href="https://muhaiminul101.vercel.app">
								Muhaiminul
							</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
