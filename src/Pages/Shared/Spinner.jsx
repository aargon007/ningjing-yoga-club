import React from "react";

const Spinner = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="relative">
				<div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-gray-200"></div>
				<div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
			</div>
		</div>
	);
};

export default Spinner;
