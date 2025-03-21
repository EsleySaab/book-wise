import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
      lineHeight: {
        shorter: "125%",
        short: "140%",
        base: "160%",
        tall: "180%",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        green: {
          100: "#50B2C0",
          200: "#255D6A",
          300: "#0A313C",
        },
        purple: {
          100: "#8381D9",
          200: "#2A2879",
        },
        gray: {
          100: "#F8F9FC",
          200: "#E6E8F2",
          300: "#D1D6E4",
          400: "#8D95AF",
          500: "#303F73",
          600: "#252D4A",
          700: "#181C2A",
          800: "#0E1116",
        },
        "gradient-vertical":
          "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
        "gradient-horizontal":
          "linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)",
      },
      spacing: {
        px: "1px",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};

export default config;
