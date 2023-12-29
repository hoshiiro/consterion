/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/**/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
