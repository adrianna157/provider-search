/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "desert-purple": "#83789C",
        "desert-orange": "#E49B7F",
      },
      spacing: {
        "2/3": "66.666667%",
      },
      height: {
        large: "883.851px",
      },
      width: {
        large: "960px",
      },
      left: {
        large: "-224px",
      },
      fontSize: {
        large: "40px",
        welcome: "20px",
      },
      fontFamily: {
        georgia: ["Georgia"],
        welcome: ["Arial"],
      },
    },
  },
  plugins: [],
};
