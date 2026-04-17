import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1B4332",
          "green-light": "#2D6A4F",
          "green-dark": "#143325",
          cream: "#FFF8F0",
          "cream-dark": "#F5EDE3",
          gold: "#D4A843",
          "gold-light": "#E8C976",
          "gold-dark": "#B8922F",
        },
        surface: {
          white: "#FFFFFF",
          light: "#FFF8F0",
          muted: "#F5EDE3",
          border: "#E8DFD3",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#4A4A4A",
          muted: "#7A7A7A",
          inverse: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.1)",
        soft: "0 1px 4px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
