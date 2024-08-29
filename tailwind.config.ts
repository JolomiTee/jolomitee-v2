import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			backgroundImage: {
				"gradient-onyx": `linear-gradient(
                    to bottom right,
                    hsl(240, 1%, 25%) 3%,
                    hsl(0, 0%, 19%) 97%)`,
				"gradient-jet": `linear-gradient(
                    to bottom right,
                    hsla(240, 1%, 18%, 0.251) 0%,
                    hsla(240, 2%, 11%, 0) 100%,
                ),  hsl(240, 2%, 13%)`,
				"gradient-yellow-1": `linear-gradient(
                    to bottom right,
                    hsl(45, 100%, 71%) 0%,
                    hsla(36, 100%, 69%, 0) 50%)`,
				"gradient-yellow-2": `linear-gradient(
                    to bottom right,
                    hsla(45, 100%, 71%, 0.251) 0%,
                    hsla(35, 100%, 68%, 0) 59.86%
                ), hsl(240, 2%, 13%)`,
				"border-onyx": `linear-gradient(
                    to bottom right,
                    hsl(0, 0%, 25%) 0%,
                    hsla(0, 0%, 25%, 0) 50%)`,
				"gradient-yellow": `linear-gradient(
                        to right,
                        hsl(45, 100%, 72%),
                        hsla(35, 100%, 68%)
                )`,
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
