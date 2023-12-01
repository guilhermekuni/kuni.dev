/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#aaf683',
				secondary: '#7768ae',
				content: '#f8f7ff',
				'content-accent': '#fff',
				background: '#051014',
				'background-accent': '#6a706e',
				'background-content': '#2e2f2f',
			},
		},
	},
	plugins: [],
};
