/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontSize: {
				xss: "0.625rem",
			},
			colors: {
				primary: {
					50: "#B4DAD5",
					100: "#9BCDC7",
					200: "#82C1B9",
					300: "#69B5AB",
					400: "#50A89D",
					500: "#379C8F",
					600: "#1E8F81",
					700: "#058373",
					800: "#056C50",
					900: "#04674C",
				},
			},
		},
		fontFamily: {
			primary: ["IBM Plex Sans", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
};
