/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
