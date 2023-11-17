/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// The background color in dark mode
				dark: '#0b1622',
				header: '#152232',
				footer: '#11161d',
				ash: '#a0b1c5', // text color used in anilist
			},
		},
	},
	plugins: [],
};
