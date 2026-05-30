import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { prompt: ["var(--font-prompt)", "Prompt", "sans-serif"] },
      colors: {
        red: { DEFAULT: "#E8001D", dark: "#C0001A", light: "#FFF0F0" },
        brand: { black: "#111111", gray: "#666666", "gray-light": "#F7F7F7", "gray-mid": "#E5E5E5", line: "#06C755" },
      },
      maxWidth: { site: "960px" },
    },
  },
  plugins: [],
};
export default config;
