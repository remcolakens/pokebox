import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: [
		// monorepo components
		'../../packages/components/**/src/*.{js,ts,jsx,tsx}',

		// remix
		'./app/components/**/*.{js,jsx,ts,tsx}',
		'./app/routes/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Play"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
} satisfies Config;
