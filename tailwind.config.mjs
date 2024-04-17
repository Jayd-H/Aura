/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '5/6': '83.333333%',
        '7/8': '87.5%',
        '7xl': '80rem',
        '8xl': '88rem',
      },
			colors: {
				'bwhite': '#ECEBF9',
				'bblack': '#333040',
        'bgrey': '##CA6EEB',
        'bdarkgrey': '#555263',
				'bblue': '#8A70FF',
				'bpurple': '#CA6EEB',
				'bpink': '#FF7BAC',
        'borange': '#FC5454',
        'byellow': '#FFB88C',
			},
      spacing: {
        '1/2': '2px',
        '1/3': '1.5px',
        '1/4': '1px',
      },
     boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), inset 0 2px 6px 0 rgba(0, 0, 0, 0.1)', 
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
        'inner': 'inset 0 0 4px rgba(0, 0, 0, 0.25)',
        'even': '0 0 6px rgba(0, 0, 0, 0.25)',
     },
			 backgroundImage: theme => ({
        'aura-gradient': `radial-gradient(circle at top left, ${theme('colors.bpink')}, ${theme('colors.bpink')} 85%, ${theme('colors.bpurple')} 100%)`,
        'lr-gradient': `linear-gradient(to right, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
        'tb-gradient': `linear-gradient(to bottom, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
        'bt-gradient': `linear-gradient(to top, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
        'rl-gradient': `linear-gradient(to left, ${theme('colors.bpink')}, ${theme('colors.bpurple')})`,
        'lr-gradient-blue': `linear-gradient(to right, ${theme('colors.bblue')}, ${theme('colors.bpurple')})`,
        'tb-gradient-blue': `linear-gradient(to bottom, ${theme('colors.bblue')}, ${theme('colors.bpurple')})`,
        'bt-gradient-blue': `linear-gradient(to top, ${theme('colors.bblue')}, ${theme('colors.bpurple')})`,
        'rl-gradient-blue': `linear-gradient(to left, ${theme('colors.bblue')}, ${theme('colors.bpurple')})`,
        'tb-gradient-white': `linear-gradient(to bottom, ${theme('colors.bwhite')}, ${theme('colors.bblack')})`,
        'temp-gradient': `linear-gradient(to bottom, ${theme('colors.borange')}, ${theme('colors.byellow')})`,
      }),
      borderColor: theme => ({
        'gradient': theme('backgroundImage.lr-gradient'),
      }),
	  fontFamily: {
        'qahiri': ['Qahiri', 'sans-serif'],
        'concert': ['Concert One', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'cursive'],
        'concert': ['Concert One', 'sans-serif'],
      },
	  fontSize: {
		'xs': ['0.625rem', { lineHeight: '1rem' }], // 10px
        'sm': ['0.8125rem', { lineHeight: '1rem' }], // 13px
        'tiny': ['0.9375rem', { lineHeight: '1.25rem' }], // 15px
        'md': ['1rem', { lineHeight: '1.5rem' }], // 16px
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
