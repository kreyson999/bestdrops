module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#323232',
        'light-blue':'#C1E9FF',
        'blue': '#0096EA',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}