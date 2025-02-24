/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./payment-page./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },

      fontFamily: {
        nico: ["Nico Moji", "sans-serif"],
        mulish: ["Mulish", "serif"],
        inria: ["Inria Serif", "serif"],
        mukta: ["Mukta", "serif"],
      },
    },
  },
  plugins: [],
};
