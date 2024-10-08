import type { Config } from "tailwindcss"

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
		screens: {
			sm: "450px",
			md: "580px",
			lg: "760px",
			xl: "1024px",
			"2xl": "1250px",
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
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

			colors: {
				jet: "#383838",
				onyx: "#2b2b2c",
				"eerie-black-1": "hsl(240, 2%, 12%)",
				"eerie-black-2": "hsl(240, 2%, 13%)",
				"smoky-black": "hsl(0, 0%, 7%)",
				"white-1": "hsl(0, 0%, 100%)",
				"white-2": "hsl(0, 0%, 98%)",
				"orange-yellow-crayola": "#ffdb70",
				"vegas-gold": "hsl(45, 54%, 58%)",
				"light-gray": "hsl(0, 0%, 84%)",
				"light-gray-70": "hsl(0, 0%, 84%, 0.7)",
				"bittersweet-shimmer": "hsl(0, 43%, 51%)",
				overlay: "rgb(2, 1, 5)",
			},
			fontSize: {
				"fs-1": "24px",
				"fs-2": "18px",
				"fs-3": "17px",
				"fs-4": "16px",
				"fs-5": "15px",
				"fs-6": "14px",
				"fs-7": "13px",
				"fs-8": "11px",
			},
			fontWeight: {
				"fw-300": "300",
				"fw-400": "400",
				"fw-500": "500",
				"fw-600": "600",
			},
			boxShadow: {
				1: "-4px 8px 24px hsla(0, 0%, 0%, 0.25)",
				2: "0 16px 30px hsla(0, 0%, 0%, 0.25)",
				3: "0 16px 40px hsla(0, 0%, 0%, 0.25)",
				4: "0 25px 50px hsla(0, 0%, 0%, 0.15)",
				5: "0 24px 80px hsla(0, 0%, 0%, 0.25)",
				timeline: "0 0 0 4px #383838",
			},
			transitionProperty: {
				1: "0.25s ease",
				2: "0.5s ease-in-out",
			},
			backgroundColor: {
				navbar: "hsla(240, 1%, 17%, 0.75)",
			},
			backdropBlur: {
				navbar: "10px",
			},
			backgroundImage: (theme) => ({
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
			}),
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config