/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bwhite': '#ECEBF9',
				'bblack': '#333040',
        'bgrey': '#F5F5F5',
				'bblue': '#8A70FF',
				'bpurple': '#CA6EEB',
				'bpink': '#FF7BAC',
			},
      spacing: {
        '1/2': '2px',
        '1/3': '1.5px',
        '1/4': '1px',
      },
			 backgroundImage: theme => ({
        'aura-gradient': `radial-gradient(circle at top left, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
        'lr-gradient': `linear-gradient(to right, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
        'tb-gradient': `linear-gradient(to bottom, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
        'bt-gradient': `linear-gradient(to top, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
        'rl-gradient': `linear-gradient(to left, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
        'lr-gradient-blue': `linear-gradient(to right, ${theme('colors.bblue')}, ${theme('colors.bpurple')})`,
        'tb-gradient-blue': `linear-gradient(to bottom, ${theme('colors.bblue')}, ${theme('colors.bpurple')})`,
        'bt-gradient-blue': `linear-gradient(to top, ${theme('colors.bblue')}, ${theme('colors.bpurple')})`,
        'rl-gradient-blue': `linear-gradient(to left, ${theme('colors.bblue')}, ${theme('colors.bpurple')})`,
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
