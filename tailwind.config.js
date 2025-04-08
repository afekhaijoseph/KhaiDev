/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ee852e",
        accentshade: "#f76a34",
        primary: "#3d3b3b",
        secondary: "#6f8695",
        pritext: "#d9d9d9",
        sectext: "#dfdfd9",
        background: "#1c1b2d",
        secondBg: "#2a2940",
        shadow: "#27253d",
      },
      fontFamily: {
        montserrat: ['"Montserrat", sans-serif'],
      },
    },
  },
  plugins: [],
};
