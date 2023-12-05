import React, { useState } from "react";
import { useEffect } from "react";

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const getDarkMode = localStorage.getItem("ningjin-dark");

	useEffect(() => {
		if (getDarkMode === "true") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
		  setIsDarkMode(false);
		  document.documentElement.classList.remove("dark");
		}
	  }, []);

	const toggleTheme = () => {
		const newDarkMode = !isDarkMode;
		setIsDarkMode(!isDarkMode);
		localStorage.setItem("ningjin-dark", newDarkMode)
		document.documentElement.classList.toggle("dark"); // Toggle the 'dark' class on the document element
	};

    return [isDarkMode, setIsDarkMode, toggleTheme]
};

export default useDarkMode;
