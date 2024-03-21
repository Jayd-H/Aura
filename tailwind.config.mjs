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
			 backgroundImage: theme => ({
        'aura-gradient': `radial-gradient(circle at top left, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
      }),
	  fontFamily: {
        'qahiri': ['Qahiri', 'sans-serif'],
        'concert': ['Concert One', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
	  fontSize: {
		'xs': ['0.625rem', { lineHeight: '1rem' }], // 10px
        'sm': ['0.8125rem', { lineHeight: '1rem' }], // 13px
        'base': ['1rem', { lineHeight: '1.5rem' }], // 16px
        'lg': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        'xl': ['1.5625rem', { lineHeight: '2rem' }], // 25px
        '2xl': ['1.9375rem', { lineHeight: '2.25rem' }], // 31px
        '3xl': ['2.4375rem', { lineHeight: '2.5rem' }], // 39px
        '4xl': ['3.0625rem', { lineHeight: '1' }], // 49px
        '5xl': ['3.8125rem', { lineHeight: '1' }], // 61px
	  },
		},
	},
	plugins: [
    function ({ addBase, theme }) {
      addBase({
        'body': { backgroundColor: theme('colors.bwhite'), color: theme('colors.bblack') },
      });
    },
	  ],
}
