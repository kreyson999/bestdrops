/* eslint-disable global-require */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#001F31",
        "dark-gray": "#323232",
        "light-blue": "#C1E9FF",
        "blue-opacity": "#00446A",
        blue: "#0096EA",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
