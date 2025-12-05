/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        roso: "#ff0000",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        redglow: "0 0 25px rgba(255, 0, 0, 0.7)",
      }
    },
  },
  plugins: [],
};
