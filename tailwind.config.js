/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				kalam: ["Kalam", "cursive"],
				lobster: ["Lobster", "cursive"],
			},
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
