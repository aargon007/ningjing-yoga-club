import React from "react";
import NavBar from "../Pages/Shared/NavBar";
import SliderSection from "../Pages/Home/SliderSection";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
	return (
		<div className=" space-y-10">
			<div className="md:px-28 px-5 space-y-10">
				<NavBar />
				<Outlet />
			</div>
			<Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
		</div>
	);
};

export default Main;
