/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      boxShadow: {
        solid: "0.0rem 0.1rem 0.15rem rgba(0, 0, 0, 0.2)",
      },

      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        appear: "appear 1.5s forwards",
      },
      backgroundImage: {
        disks: "url('/images/Repeating_Tile_Lighter.png')",
        stripes: "url('/images/stripes.png')",
      },
      backgroundSize: {
        disks: "16rem",
        stripes: "8rem",
      },
    },
  },
  plugins: [],
};
