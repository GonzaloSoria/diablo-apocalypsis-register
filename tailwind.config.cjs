/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,svelte}'],
	theme: {
		extend: {},
		colors: {
			'first-color': '#D2C8AE',
			'black': '#000000',
			'error': 'red'
		},
		fontSize: {
			'title-lg': ['50px', '55px'],
			'title-md': ['35px', '40px'],
			'title-sm': ['25px', '30px'],
			'subtitle-lg': ['45px', '48px'],
			'subtitle-md': ['30px', '35px'],
			'subtitle-sm': ['25px', '30px'],
			'copy-md': ['25px', '28px'],
			'copy-sm': ['20px', '25px'],
			'legals': ['12px', '16px']
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
