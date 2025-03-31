/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        shadow: "#27253d",
      },
      fontFamily: {
        montserrat: ['"Montserrat", sans-serif'],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
