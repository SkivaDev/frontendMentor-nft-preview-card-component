/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'soft-blue': 'hsl(215, 51%, 70%)',
				'cyan': 'hsl(178, 100%, 50%)',
				'very-dark-blue-main': 'hsl(217, 54%, 11%)',
				'very-dark-blue-card': 'hsl(216, 50%, 16%)',
				'very-dark-blue-line': 'hsl(215, 32%, 27%)',
			},
			backgroundColor: {
				'soft-blue': 'hsl(215, 51%, 70%)',
				'cyan': 'hsl(178, 100%, 50%)',
				'very-dark-blue-main': 'hsl(217, 54%, 11%)',
				'very-dark-blue-card': 'hsl(216, 50%, 16%)',
				'very-dark-blue-line': 'hsl(215, 32%, 27%)',
			}
		},
	},
	plugins: [],
}
