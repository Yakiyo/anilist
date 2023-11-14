/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// The background color in dark mode
				secondary: '#a0b1c5',
				header: '#152232',
				footer: '#11161d',
			},
		},
	},
	plugins: [],
};
