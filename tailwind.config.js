/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "*.css", "*.js"],
  theme: {
    fontFamily: {
      sans: "Overpass, Arial, sans-serif",
    },
    extend: {
      // that is animation class
      animation: {
        fade: "fadeIn 1s ease-in-out",
      },

      // that is actual animation
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },

  plugins: [],
};
