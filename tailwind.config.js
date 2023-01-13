/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"bg-image": "url('./images/hero.jpg')",
			},
		},
	},
	plugins: [],
};
