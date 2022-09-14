/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,svelte}'],
	theme: {
		extend: {},
		colors: {
			'first-color': '#D2C8AE',
			'second-color': '#CCCCCC',
			'black': '#000000',
			'error': '#7d0009'
		},
		fontSize: {
			'title-lg': ['50px', '55px'],
			'title-md': ['35px', '40px'],
			'title-sm': ['25px', '30px'],
			'title-xs': ['20px', '25px'],
			'subtitle-lg': ['45px', '48px'],
			'subtitle-md': ['25px', '28px'],
			'subtitle-sm': ['20px', '23px'],
			'subtitle-xs': ['18px', '21px'],
			'copy-lg': ['25px', '28px']
		},
		fontFamily: {
			'rajdhani': ['Rajdhani', 'sans-serif'],
			'old-fenris': ['Old Fenris', 'cursive']
		}
	},
	plugins: [
		require('@tailwindcss/forms')
	],
}
