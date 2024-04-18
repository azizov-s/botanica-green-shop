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
	plugins: [nextui(
		{
			themes: {
			  light: {
				// ...
				colors: {
					green:'#46A358',
					gray96:'f5f5f5',
					gray24:'3D3D3D',
				},
			  },
			  dark: {
				// ...
				colors: {
					green: '#fdfdfd'
				},
			  },
			  // ... custom themes
			},
		  }
	)],

}
