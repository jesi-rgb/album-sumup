import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Bricolage Grotesque', ...fontFamily.sans]
		}
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#226E48',
					'primary-focus': '#042B24',
					'primary-content': '#F6FFFB',
					secondary: '#a78bfa',
					accent: '#D1BC03',
					neutral: '#677471',
					'base-100': '#F6FFFB',
					'base-200': '#FAFFFD',
					'base-300': '#E5FDF2',
					'base-content': '#042B24',
					info: '#3abff8',
					success: '#4ade80',
					warning: '#fbbd23',
					error: '#f87272'
				}
			},
			{
				dark: {
					primary: '#a7f3d0',
					'primary-focus': '#73E0B4',
					'primary-content': '#021714',
					secondary: '#a78bfa',
					accent: '#fef9c3',
					neutral: '#677471',
					'base-100': '#021713',
					'base-200': '#001410',
					'base-300': '#010D0B',
					'base-content': '#fff',
					info: '#3abff8',
					success: '#4ade80',
					warning: '#fbbd23',
					error: '#f87272'
				}
			},
			'cupcake'
		]
	}
};

export default config;
