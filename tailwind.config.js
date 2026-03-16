/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
        },
        secondary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          500: "#ec4899",
          600: "#db2777",
        },
        success: {
          500: "#10b981",
          600: "#059669",
        },
        danger: {
          500: "#ef4444",
          600: "#dc2626",
        },
      },
      fontFamily: {
        sans: [
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideIn: "slideIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
