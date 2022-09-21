/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				SourceSherif: "Source Serif Pro",
				Poppins: "Poppins",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
}
