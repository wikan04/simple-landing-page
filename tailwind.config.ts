import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "text-slide-2":
          "text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide-2": {
          "0%, 40%": { transform: "translateY(0%)" },
          "50%, 90%": { transform: "translateY(-33.33%)" },
          "100%": { transform: "translateY(-66.66%)" },
        },
      },
      colors: {
        Gunmetal: "#2D3138",
        GraniteGray: "#666668",
        AntiWhite: "#EEF1F1",
        PhilippineGray: "#8C9191",
        Gray: "#797B7C",
      },
    },
  },
  plugins: [],
} satisfies Config;
