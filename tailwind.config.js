/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["heading"],
      },
      animation: {
        pulse: "pulse 5s infinite",
      },
      keyframes: {
        pulse: {
          "0%": { backgroundColor: "black" },
          "100%": { backgroundColor: "red" },
        },
      },
    },
  },
  plugins: [],
};
