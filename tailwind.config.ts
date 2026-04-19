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
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.1)",
        soft: "0 1px 4px rgba(0, 0, 0, 0.04)",
        glow: "0 0 60px rgba(27, 67, 50, 0.15)",
        "glow-gold": "0 0 60px rgba(212, 168, 67, 0.2)",
        premium: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "premium-hover": "0 12px 40px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
