import React from "react";
import NavBar from "../Pages/Shared/NavBar";
import SliderSection from "../Pages/Home/SliderSection";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import { motion, useScroll } from "framer-motion";

const Main = () => {
	const { scrollYProgress } = useScroll();
	return (
		<>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
			<div className=" space-y-5 overflow-hidden">
				<div className="md:px-28 px-5 space-y-5 lg:space-y-10">
					<NavBar />
					<Outlet />
				</div>
				<Footer></Footer>
				<ScrollRestoration></ScrollRestoration>
			</div>
		</>
	);
};

export default Main;
