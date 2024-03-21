/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bwhite': '#ECEBF9',
				'bblack': '#333040',
				'bblue': '#28A70FF',
				'bpurple': '#CA6EEB',
				'bpink': '#FF7BAC',
			},
		},
	},
	plugins: [],
}
