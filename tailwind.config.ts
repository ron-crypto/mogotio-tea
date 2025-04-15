
import type { Config } from "tailwindcss";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'tea': {
					DEFAULT: '#16a34a',
					dark: '#15803d',
					gold: '#f59e0b',
				},
				'green': {
					50: '#f0fdf4',
					600: '#16a34a',
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
			},
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Poppins', 'sans-serif']
			},
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")]
} satisfies Config;
