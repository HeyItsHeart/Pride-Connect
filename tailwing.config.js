/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pridePink: "#FF61A6",
        prideBlue: "#61A6FF",
        prideYellow: "#FFE761",
        pridePurple: "#A661FF",
        prideGreen: "#61FFA6"
      }
    }
  },
  plugins: [],
};
