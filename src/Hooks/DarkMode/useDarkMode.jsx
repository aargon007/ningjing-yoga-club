import React, { useState } from "react";

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
		document.documentElement.classList.toggle("dark"); // Toggle the 'dark' class on the document element
	};

    return [isDarkMode, setIsDarkMode, toggleTheme]
};

export default useDarkMode;
