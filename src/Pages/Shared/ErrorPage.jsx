import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="min-h-screen dark:bg-white px-5">
			<div className="offset-sm-2 text-gray-50 text-center">
				<img
					src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7879.jpg"
					alt=""
					className="mx-auto h-80"
				/>

				<h5 className="text-gray-700 font-semibold text-3xl font-mono">
					Page not found
				</h5>
				<p className="text-gray-700 mt-2 mb-6">
					we are sorry, but the page you requested was not found
				</p>
				<Link to='/' className="bg-blue-600  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg">
					Got to Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
