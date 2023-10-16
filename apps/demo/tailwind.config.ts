import type { Config } from 'tailwindcss';

export default {
	content: [
		// monorepo components
		'../../packages/components/**/src/*.{js,ts,jsx,tsx}',

		// remix
		'./app/components/**/*.{js,jsx,ts,tsx}',
		'./app/routes/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;
