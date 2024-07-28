const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['"Roboto"', "sans-serif"],
				archivo: ['"Archivo Black"', "sans-serif"],
			},
			fontWeight: {
				thin: 100,
				light: 300,
				regular: 400,
				medium: 500,
				bold: 700,
				black: 900,
			},
			fontStyle: {
				normal: "normal",
				italic: "italic",
			},
			colors: {
				"secondary-bg": "#0C121C",
				"primary-btn": "#BFFA2E",
			},
		},
	},
	plugins: [
		require("daisyui"),
		function ({ addUtilities, theme }) {
			const newUtilities = {
				".roboto-thin": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.thin"),
					fontStyle: theme("fontStyle.normal"),
				},
				".roboto-light": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.light"),
					fontStyle: theme("fontStyle.normal"),
				},
				".roboto-regular": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.regular"),
					fontStyle: theme("fontStyle.normal"),
				},
				".roboto-medium": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.medium"),
					fontStyle: theme("fontStyle.normal"),
				},
				".roboto-bold": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.bold"),
					fontStyle: theme("fontStyle.normal"),
				},
				".roboto-black": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.black"),
					fontStyle: theme("fontStyle.normal"),
				},
				".roboto-thin-italic": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.thin"),
					fontStyle: theme("fontStyle.italic"),
				},
				".roboto-light-italic": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.light"),
					fontStyle: theme("fontStyle.italic"),
				},
				".roboto-regular-italic": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.regular"),
					fontStyle: theme("fontStyle.italic"),
				},
				".roboto-medium-italic": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.medium"),
					fontStyle: theme("fontStyle.italic"),
				},
				".roboto-bold-italic": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.bold"),
					fontStyle: theme("fontStyle.italic"),
				},
				".roboto-black-italic": {
					fontFamily: theme("fontFamily.roboto"),
					fontWeight: theme("fontWeight.black"),
					fontStyle: theme("fontStyle.italic"),
				},
				".archivo-black-regular": {
					fontFamily: theme("fontFamily.archivo"),
					fontWeight: theme("fontWeight.regular"),
					fontStyle: theme("fontStyle.normal"),
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
	daisyui: {
		themes: [
			{
				hustle: {
					primary: "#FFF",
					secondary: "#0C121C",
					accent: "#BFFA2E",
					neutral: "#111827",
					"base-100": "#f3f4f6",
					info: "#38bdf8",
					success: "#34d399",
					warning: "#f59e0b",
					error: "#ef4444",
					"font-family": {
						roboto: "Roboto, sans-serif",
						"archivo-black": "Archivo Black, sans-serif",
					},
				},
			},
		],
	},
};

export default config;
