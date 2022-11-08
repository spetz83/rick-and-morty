/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        outerSpace: {
          900: "#234251",
        },
        springGreen: {
          900: "#04ff7f",
        },
      },
    },
  },
  plugins: [],
};
