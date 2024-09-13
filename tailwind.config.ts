import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/bg-img.jpeg')",
      },
      fontFamily: {
        bodyFont: "Poppins, sans-serif",
      },
      colors: {
        bodyColor: "#fbfaf7",
        bgLight: "#1010100d",
        darkText: "#242424",
        lightTexts: "#a5a5a5",
        themeColor: "#0C55AA",
        bannerColor:"#115061",
        lightBg: "#f4f7f9",
        themeWhite: "#ffffff",
        lightYellow: "#FFD43A",
        borderColor: "#eaebed",
        skyColor: "#0989ff",
        lightText: "#55585b",
        lightOrange: "#ff6736",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;