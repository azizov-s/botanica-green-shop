const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

],
	darkMode: 'class',
	theme: {
		extend: {},
		screens: {
			sm: '340px',
			md: '768px',
			lg: '1024px',
		},
	},
	plugins: [nextui()],

}
